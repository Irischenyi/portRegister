<template>
  <TemplateFrame>
    <template #header>
      <div class="head-box">
        <img class="header" src="@/assets/images/zczxbjt.png" />
        <div class="header-center">
          <div>政策咨询</div>
          <div>
            全面盘点数据安全圈最新资讯信息，包括行业动态、政策法规、通知公告、优秀表彰等栏目；为用户提供便捷且聚焦的信息获取平台
          </div>
        </div>
      </div>
    </template>
    <template #tabs>
      <q-tabs
        @update:model-value="btns"
        v-model="tabsValue"
        class="text-primary"
      >
        <q-tab
          v-for="(item, index) in tabsChange"
          :name="(item as any).value"
          :label="(item as any).name"
        />
      </q-tabs>
    </template>

    <template #body>
      <q-tab-panels
        style="width: 100%; margin-top: 10px"
        v-model="tabsValue"
        animated
      >
        <q-tab-panel :name="tabsValue">
          <!-- 列表 -->

          <div>
            <div
              v-for="(item, index) in tabsLists"
              :key="index"
              style="padding: 10px 10px"
              @click="goToDetail((item as any).id)"
            >
              <div style="display: flex; position: relative;">
                <div style="width: 30%; margin-right: 20px">
                  <div class="img-box">
                    <imgIn
                      :src="setBaseInf.baseUrl + (item as any).attach.storagePath"
                    />
                  </div>
                </div>
                <div  style="width: 100%;">
                  <div>
                    <div class="title">
                      {{ (item as any).title }}
                    </div>
                    <div class="sub-title">
                      {{ (item as any).summary }}
                    </div>
                    
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: end;
                      margin-top: auto;
                      position: absolute;
                      bottom: 0px;
                      width: 70%;
                      color: grey;
                      font-size: 13px;
                    "
                  >
                    <div>{{ (item as any).sourceFrom }}</div>
                    <div style="margin-left: auto; color: #696969">
                      {{ (item as any).publishDate }}</div
                    >
                  </div>
                </div>
              </div>
              <q-separator style="margin-top: 20px;"/>  
              <!-- <div style="margin-top: 5px">
              
              </div> -->
            </div>
            
          </div>
        </q-tab-panel>
      </q-tab-panels>
      <div
        style="
          display: flex;
          justify-content: end;
          background-color: #fff;
          height: 80px;
          width: 100%;
          padding-right: 20px;
        "
      >
        <el-pagination
          background
          :current-page="page.pageNum"
          :page-size="page.pageSize"
          layout="prev, pager, next"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          class="paginations"
        />
      </div>
    </template>
  </TemplateFrame>
  <LoadingIn :show="loadingShow"/>
  <Bottom />
</template>
<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import Bottom from "@/components/Bottom.vue";
import { setBaseInf, setHttp } from "@/http/httpContentMain";
import TemplateFrame from "@/components/TemplateFrame.vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const loadingShow = ref(true)
onMounted(async () => {
  getCategoryTabs(); //获取政策资讯类别
  await getArticlePaged();
  
});
const page = reactive({
  //配置对应的查询参数
  pageNum: 1,
  pageSize: 10,
});
const handleSizeChange = () => {};
const handleCurrentChange = () => {};
//  获取 Banner 图

//获取政策资讯类别
const tabsChange = ref([]);
const getCategoryTabs = () => {
  const http = setHttp()
  const res = http.get(
    "/k2401-article/article-category-list"
  ).then((data) => {
    tabsChange.value = data as unknown as [];

  })
};

const query = route.query as {
  tab: string
};

const tabsLists = ref([]);
const tabsValue = ref(query.tab||'1');
const imgTabs = ref("");
const total = ref(0);

const getArticlePaged = async () => {
  loadingShow.value = true;
  const http = setHttp()
  const res = (await http.get(
    `/k2401-article/article/paged?current=1&size=10&category=${
      tabsValue.value
    }`
  )) as any;
  loadingShow.value = false;
  tabsLists.value = res.items;
  total.value = parseInt(res.total);
  imgTabs.value = `${setBaseInf.baseUrl}` + res.items?.[0]?.attach.storagePath;
};



const btns = (value: any) => {
  tabsValue.value = value;
  getArticlePaged();
};

const current = ref(1);

const goToDetail = (id: string) => {
  router.push({
    path: "/index/policyconSultationDetail",
    query: {
      id: id,
      tab: tabsValue.value
    },
  });
};
</script>
<style lang="scss" scoped>
.paginations {
  margin-left: auto;
}
.contain {
  padding: 10px;
  width: 1300px;
  margin: 0 auto;
}
.head-box {
  position: relative;
}

.header {
  width: 100%;
}

.header-center {
  width: calc(100% - 500px);
  position: absolute;
  left: 250px;
  top: 50%;
  height: 100px;
  color: white;
  transform: translateY(-50%);
  div:nth-child(1) {
    font-size: 18px;
    margin-bottom: 20px;
  }
  div:nth-child(2) {
    font-size: 13px;
    // width: 400px;
  }
}
.topImg {
  position: relative;
}

.topImgText {
  position: absolute;
  top: 100px;
  left: 320px;
  width: 530px;
}

.img-box{
  width: 100%;
  padding-top: 72%;
  position: relative;
}

.title{
  font-size: 15px;
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sub-title{
  color: grey;
  font-size: 13px;
  padding: 10px 0px;
}
</style>

<template>
  <TemplateFrame>
    <template #header>
      <div class="head-box">
        <img class="header" src="@/assets/images/zczxbjt.png" />
        <div class="header-center">
          <div>政策咨询</div>
          <div>
            提供工业互联网安全相关最新行业动态,包括新闻资讯、政策法规、通知告栏等项目；<br />
            基于行业内最新动态的梳理与汇聚
          </div>
        </div>
      </div>
    </template>
    <template #tabs>
      <q-tabs
        @update:model-value="btns"
        v-model="tab"
        class="text-primary"
      >
        <q-tab
          v-for="(item, index) in tabsChange"
          :name="(item as any).category"
          :label="(item as any).categoryName"
        />
      </q-tabs>
    </template>

    <template #body>
      <q-tab-panels
        style="width: 100%; margin-top: 10px"
        v-model="tab"
        animated
      >
        <q-tab-panel :name="tabsValue">
          <!-- 列表 -->

          <div>
            <div
              v-for="(item, index) in tabsLists"
              :key="index"
              style="padding: 20px 10px"
              @click="goToDetail((item as any).id)"
            >
              <div style="display: flex">
                <div style="width: 20%; margin-right: 20px">
                  <div class="img-box">
                    <imgIn
                      :src="setBaseInf.baseUrl + (item as any).attach.storagePath"
                    />
                  </div>
                  
                </div>
                <div style="width: 60%">
                  <div style="font-size: 20px; font-weight: 500">
                    {{ (item as any).title }}
                  </div>
                  <div style="margin-top: 10px; color: #696969">
                    {{ (item as any).summary }}
                  </div>
                  <div style="margin-top: 80px; color: #696969">
                    {{ (item as any).sourceFrom }}
                  </div>
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: end;
                    align-items: end;
                    width: 20%;
                    margin-top: auto;
                  "
                >
                  <span style="margin-left: auto; color: #696969">
                    {{ (item as any).publishDate }}</span
                  >
                </div>
              </div>
              <div style="margin-top: 20px">
                <q-separator />
              </div>
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
import http, { setBaseInf } from "@/http/httpContentMain";
import TemplateFrame from "@/components/TemplateFrame.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const loadingShow = ref(true)
onMounted(async () => {
  console.log(setBaseInf.baseUrl, "setBaseInf.baseUrl");

  // await getBanner() //获取 Banner 图
  await getCategoryTabs(); //获取政策资讯类别
  //指定政策资讯下的分页列表
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
const bannerSy = ref("");
const getBanner = async () => {
  const res = (await http.get("/k2401-banner/list", {
    params: { category: 1 },
  })) as any;
  bannerSy.value = `${setBaseInf.baseUrl}` + res[0].storagePath;
  console.log(res, "res+++11111111+++++");
};

//获取政策资讯类别
const tabsChange = ref([]);
const tabsChange1 = ref("");
const tabsChange2 = ref("");
const tabsChange3 = ref("");
const tabsChange4 = ref("");
const getCategoryTabs = async () => {
  const res = (await http.get(
    "/k2401-service-hall/service-hall/hot-list"
  )) as any;
  console.log(res, "res+++222222222+++++");
  tabsChange.value = res;
};

const tabsLists = ref([]);

const imgTabs = ref("");
const total = ref(0);

const getArticlePaged = async () => {
  loadingShow.value = true;
  const res = (await http.get(
    `/k2401-article/article/paged?current=1&size=10&category=${
      tabsValue.value || 1
    }`
  )) as any;
  console.log(res, "res");
  loadingShow.value = false;
  tabsLists.value = res.items;
  total.value = parseInt(res.total);
  imgTabs.value = `${setBaseInf.baseUrl}` + res.items[0].attach.storagePath;
};

const tab = ref(1);
getArticlePaged();

const tabsValue = ref(1);
const btns = (value: any) => {
  console.log(value, "val++++++");
  tabsValue.value = value;
  getArticlePaged();
};

const current = ref(1);

const goToDetail = (id: string) => {
  router.push({
    path: "/index/policyconSultationDetail",
    query: {
      id: JSON.stringify(id),
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
  padding-top: 65%;
  position: relative;
}
</style>

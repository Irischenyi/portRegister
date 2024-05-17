<template>
  <TemplateFrame>
    <template #header>
      <div class="topImg" style="width: 100%">
        <img style="width: 100%; height: 300px" :src="bannerSy" alt="" />
        <!-- <div class="topImgText">
          <div style="color: #fff; font-size: 23px; font-weight: 500">
            政策咨询
          </div>
          <div style="color: #fff">
            提供工业互联网安全相关最新行业动态,包括新闻资讯、政策法规、通知告栏等项目；
            基于行业内最新动态的梳理与汇聚
          </div>
        </div> -->
      </div>
    </template>
    <template #tabs>
      <q-tabs
        @update:model-value="btns"
        v-model="tab"
        dense
        active-color="primary"
        indicator-color="primary"
        narrow-indicator
        align="left"
      >
        <q-tab name="1" :label="tabsChange1" />
        <q-tab name="2" :label="tabsChange2" />
        <q-tab name="3" :label="tabsChange3" />
        <q-tab name="4" :label="tabsChange4" />
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
            >
              <div style="display: flex">
                <div style="width: 20%; margin-right: 20px">
                  <img
                    style="width: 100%"
                    :src="setBaseInf.baseUrl + (item as any).attach.storagePath"
                  />
                </div>
                <div style="width: 60%">
                  <div style="font-size: 20px; font-weight: 500">
                    {{ (item as any).title }}
                  </div>
                  <div style="margin-top: 10px">
                    {{ (item as any).summary }}
                  </div>
                  <div style="margin-top: 80px">{{ (item as any).sourceFrom }}</div>
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: end;
                    align-items: end;
                    width: 20%;
                  "
                >
                  {{ (item as any).publishDate }}
                </div>
              </div>
              <div style="margin-top: 20px">
                <q-separator />
              </div>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </template>
  </TemplateFrame>
  <div></div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import http, { setBaseInf } from '@/http/httpContentMain'
import TemplateFrame from '@/components/TemplateFrame.vue'
onMounted(async () => {
  console.log(setBaseInf.baseUrl, 'setBaseInf.baseUrl')

  await getBanner() //获取 Banner 图
  await getCategoryTabs() //获取政策资讯类别
  //指定政策资讯下的分页列表
  await getArticlePaged()
})

//  获取 Banner 图
const bannerSy = ref('')
const getBanner = async () => {
  const res = await http.get('/k2401-banner/list', { params: { category: 1 } }) as any
  bannerSy.value = `${setBaseInf.baseUrl}` + res[0].storagePath
  console.log(res, 'res+++11111111+++++')
}

//获取政策资讯类别
const tabsChange = ref([])
const tabsChange1 = ref('')
const tabsChange2 = ref('')
const tabsChange3 = ref('')
const tabsChange4 = ref('')
const getCategoryTabs = async () => {
  const res = await http.get('/k2401-article/article-category-list') as any
  console.log(res, 'res+++222222222+++++')
  tabsChange.value = res
  // console.log(tabsChange.value[0].name, 'tabsChange.value[0].name')
  tabsChange1.value = res[0].name
  tabsChange2.value = res[1].name
  tabsChange3.value = res[2].name
  tabsChange4.value = res[3].name
}

const tabsLists = ref([])

const imgTabs = ref('')

const getArticlePaged = async () => {
  const res = await http.get('/k2401-article/article/paged', {
    params: {
      category: tabsValue.value || 1,
      current: 1, //当前页码
      size: 10 //每页多少条数据
    }
  }) as any
  console.log(res, '66666++++')

  tabsLists.value = res.items

  imgTabs.value = `${setBaseInf.baseUrl}` + res.items[0].attach.storagePath

  console.log(res, 'res+++333333333+++++')
  console.log(tabsLists.value, 'tabsLists.value')
}

const tab = ref('1')
const tabsValue = ref('1')
const btns = (value:any) => {
  console.log(value, 'val++++++')
  tabsValue.value = value
  getArticlePaged()
}

const current = ref(1)
</script>
<style lang="scss" scoped>
.contain {
  padding: 10px;
  width: 1300px;
  margin: 0 auto;
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
</style>

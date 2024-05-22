<template>
   <TemplateFrame>
      <template #header>
        <div class="head-box">
          <img class="header" src="@/assets/images/aqpx.png"/>
          <div class="header-center">
              <div>安全培训</div>
              <div>提供工业互联网安全相关最新行业动态,包括新闻资讯、政策法规、通知告栏等项目； 基于行业内最新动态的梳理与汇聚 </div>
          </div>
        </div>
      </template>
      <template #tabs>
        <q-tabs
          v-model="tab"
          @update:model-value="changeTab"
          class="text-primary"
        >
          <q-tab v-for="(item, key) in trainTabs" :key="key" :name="item.value" :label="item.name" />
        </q-tabs>
      </template>
      <template #body>
          <div class="card" v-for="item in list">
            <div class="bg">
              <img :src="picUrl+item.coverImage.previewUrl"/>
            </div>
            <div class="bottom">{{ item.title }}</div>
          </div>
      </template>
      <template #end>
        <div  class="bottom-card">
              <q-pagination
                v-model="current"
                :max="totalPage"
                direction-links
                flat
                color="grey"
                active-color="primary"
              />
            </div>
      </template>
  </TemplateFrame>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import TemplateFrame from '@/components/TemplateFrame.vue'
import http , {picUrl} from '@/http/httpContentMain'
const current = ref(1)
const trainTabs = ref()
const tab = ref('')
const list = ref([] as itemInf[])
const totalPage = ref(1)
interface itemInf {categoryName: string , previewUrl: string, title: string, id: string, coverImage: { storagePath : string, previewUrl: string} }


const changeTab = ()=>{
  getFirstList(tab.value)
}

http.get('k2401-safety/category-list').then((data) => {
  const backValue = data as unknown as {value: string}[]
  trainTabs.value = backValue 
  tab.value = backValue[0]?.value as string
  totalPage.value = 1
  getFirstList(tab.value)
})

const getFirstList = (tabNumber: string) => {
  http.get(`k2401-safety/safety/paged?current=1&size=8&category=${tabNumber}`).then((data) => {
    const backList = data as unknown as { items: itemInf[], pages: string }
    list.value = backList.items
    totalPage.value = Number(backList.pages)
  })
}


</script>
<style lang="scss" scoped>
.card{
  width: calc(25% - 20px);
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 29%;
  background-color: white;
  margin-top: 20px;
  position: relative;
}

.bg{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  img{
    width: 100%;
    height: 100%;
  }
}

.bottom{
  position: absolute;
  bottom: 0px;
  height: 50px;
  width: 100%;
  background-color: rgba(0,102,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.head-box{
  position: relative;
}

.header{
  width: 100%;
}

.header-center{
  width: calc(100% - 500px);
  position: absolute;
  left: 250px;
  top: 50%;
  height: 100px;
  color: white;
  transform: translateY(-50%);
  div:nth-child(1){
    font-size: 18px;
    margin-bottom: 20px;
  }
  div:nth-child(2){
    font-size: 13px;
    width: 400px;
  }
}

.bottom-card{
  width: calc(100% - 480px);
  margin: 30px 0px;
  margin-left: 240px;
  display: flex;
  justify-content: end;
}
</style>

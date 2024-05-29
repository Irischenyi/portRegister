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
          <div :class="{ 'card': true, 'tool': tab == '2' }" v-for="item in list" @click="goToDetail(item.id)" >
            <div class="bg">
              <img :src="picUrl+item.coverImage.previewUrl"/>
            </div>
            <div class="bottom">
              {{ item.title }}
            </div>
            <div class="bottom-tool" v-if="tab == '2'">
                <div class="title">{{ item.title }}</div>
                <div class="mid-title">{{ item?.summary }}</div>
                <div class="bt-box">
                  <div class="size">{{ item?.fileSizeKb }}kb</div>
                  <q-btn color="primary" class="glossy login" rounded @click="download(item.id)">直接下载</q-btn>
                </div>
            </div>
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
import { useRouter } from 'vue-router'
const current = ref(1)
const trainTabs = ref()
const tab = ref('')
const router = useRouter()
const token = localStorage.getItem('token');
const list = ref([] as itemInf[])
const totalPage = ref(1)
interface itemInf {categoryName: string , previewUrl: string, title: string, fileSizeKb?: string,  id: string, summary?: string, coverImage: { storagePath : string, previewUrl: string} }


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

const getDetail = (id: string) => {
  http.get('k2401-safety/safety/1789583984900997122?id='+id).then((data) => {
    console.log(data)
  })
}


const download = (id: string) => { // 下载这块还没做完
  http.get('k2401-safety/safety/'+id).then((data) => {
    const backData = data as unknown as {
      contentFile: {
        id: string
      }
    }
    http.get('file/download-file/'+ backData.contentFile.id, {
      Authorization: 'Bearer '+  token
    }).then((dataDt) => {
      console.log(dataDt)
      const back = dataDt as unknown as {
        data: BlobPart
      }
      const link = document.createElement('a')
      let blob = new Blob([back.data], {type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8"})
      let downloadElement = document.createElement('a')
      let href = window.URL.createObjectURL(blob);
      downloadElement.href = href;
      downloadElement.download = id+'.pdf';
      document.body.appendChild(downloadElement)
      downloadElement.click();
      document.body.removeChild(downloadElement);
      window.URL.revokeObjectURL(href);
    })
  })
}

const goToDetail = (id: string) => {
  if(tab.value == '1'){
    router.push({
      path: '/index/dataDetail',
      query: {
        type: 1,
        id: id
      }
    })
  }
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

.tool{
  width: calc(33% - 20px);
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 30%;
  .bg{
    width: 30%;
    height: 31%;
    left: 35%;
    top: 10%;
  }
  .bottom{
    background: none;
    display: none;
  }
  .bottom-tool{
    width: 100%;
    height: 50%;
    // background-color: grey;
    position: absolute;
    bottom: 0px;
    left: 0px;
 
    .title{
      text-align: center;
      font-size: 13px;
      width: 100%;
      overflow: hidden;
    }
    .mid-title{
      text-align: center;
      font-size: 12px;
      color: #696969;
      overflow-wrap: break-word;
      white-space: nowrap;
      text-overflow:ellipsis; 
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
      padding: 2px 15px;
    }
    .bt-box{
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0px 15px;
      position: absolute;
      width: 100%;
      bottom: 15px;
      .size{
        font-size: 12px;
        color: grey;
        display: inline-block;
      }
      button{
        font-size: 12px;
      }
    }
  }
}
</style>

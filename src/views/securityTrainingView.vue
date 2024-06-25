<template>
   <TemplateFrame>
      <template #header>
        <div class="head-box">
          <img class="header" src="@/assets/images/aqpx.png"/>
          <div class="header-center">
              <div>安全培训</div>
              <div>数据安全，人才当先，助力用户获取进行数据安全保护实践所需的基础知识与技能，提升数据安全管理与应急能力</div>
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
              <imgIn :src="picUrl+item.coverImage.previewUrl"/>
            </div>
            <div class="bottom-in">
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
  <Bottom/>
  <LoadingIn :show="loadingShow"/>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import TemplateFrame from '@/components/TemplateFrame.vue'
import http , {picUrl } from '@/http/httpContentMain'
import { useRouter } from 'vue-router'
import Bottom from '@/components/Bottom.vue'

const current = ref(1)
const trainTabs = ref()
const tab = ref('')
const router = useRouter()
const token = localStorage.getItem('token');
const list = ref([] as itemInf[])
const totalPage = ref(1)
interface itemInf {categoryName: string , previewUrl: string, title: string, fileSizeKb?: string,  id: string, summary?: string, coverImage: { storagePath : string, previewUrl: string} }
const loadingShow = ref(true)

const service = axios.create({
  baseURL: 'http://47.100.234.98:18766/data-exit-mobileapi/',
  timeout: 60000
});

service.interceptors.request.use(
  config => {
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
})

const changeTab = ()=>{
  getFirstList(tab.value)
}

onMounted(() => {
  getList()
})

const getList = () => {
  loadingShow.value = true;
  http.get('k2401-safety/category-list').then((data) => {
    const backValue = data as unknown as {value: string}[]
    trainTabs.value = backValue 
    tab.value = backValue[0]?.value as string
    totalPage.value = 1
    getFirstList(tab.value)
  })
}


const getFirstList = (tabNumber: string) => {
  list.value = []
  loadingShow.value = true;
  http.get(`k2401-safety/safety/paged?current=1&size=8&category=${tabNumber||1}`).then((data) => {
    loadingShow.value = false;
    const backList = data as unknown as { items: itemInf[], pages: string }
    list.value = backList.items
    totalPage.value = Number(backList.pages)
  })
}


const download = (id: string) => { // 下载这块还没做完
  http.get('k2401-safety/safety/'+id).then((data) => {
    const backData = data as unknown as {
      contentFile: {
        id: string
      }
    }
    service
    .get('file/download-file/'+backData.contentFile.id, { responseType: 'blob' })
    .then(res => {
      const link = document.createElement('a');
      const blob = new Blob([res.data], { type: res.data.type });
      // const fileName = res.headers['content-disposition'].split(';')[1].split('=')[1]; // 这个是取真实的名字，如果是跨域的话会取不到相应头中的信息，下面那句代码用一个时间戳还代替真实的文件名，后面最好代码优化下
      const fileName = new Date().getTime() + "";
      link.style.display = 'none';
      const url = window.URL || window.webkitURL 
      link.href = url.createObjectURL(blob);
      const fileDownloadName = fileName
      link.setAttribute('download', fileDownloadName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      url.revokeObjectURL(link.href);
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

.bottom-in{
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

<template>
  <TemplateFrame>
    <template #header>
        <div class="head-box">
          <img class="header" src="@/assets/images/serviceBanner.png"/>
          <div class="header-center">
              <div>服务大厅</div>
              <div>围绕工业互联网安全管理、安全技术、安全运营体系建设；通过线上线下联动、自动化与专家支撑结合，为客户提供一站式服务体验</div>
          </div>
        </div>
      </template>
      <template #tabs>
        <q-tabs
          v-model="tab"
          @update:model-value="changeTab"
          class="text-primary"
        >
          <q-tab v-for="(item, key) in trainTabs" :key="key" :name="item.value" :label="item.name"/>
        </q-tabs>
      </template>
      <template #body>
          <div :class="{'card': true, 'hiddens': tab == '3'}" v-for="item in list" @click="goToDetail(item.id)">
              <div class="card-box">
                  <div class="pic">
                    <img :src="picUrl+item.serviceHallAttach.previewUrl"/>
                  </div>
                  <div class="title">{{ item.title }}</div>
                  <div class="content">{{ item.summary }}</div>
                  <div class="end">
                    <div class="icon">
                      <img :src="picUrl+item.serviceProviderAttach.previewUrl"/>
                    </div>
                    <div>{{ item.serviceProvider }}</div>
                  </div>
              </div>
          </div>
          <div :class="{'page-list': true, 'hidden': tab == '3'}">
            <q-pagination
                v-model="current"
                :max="totalPage"
                @update:model-value="getFirstList(tab)"
                direction-links
                flat
                color="grey"
                active-color="primary"
              />
          </div>
      </template>
      
      <template #end>
        <div class="bottom-card">
          <div class="bottom-body">
            <div class="card" v-for="(item, key) in serviceList" :key="key">
              <div class="card-box">
                <div class="pic">
                  <img :src="picUrl+item.serviceHallAttach.previewUrl"/>
                </div>
                <div class="end">
                    <div class="icon">
                      <img :src="picUrl+item.serviceProviderAttach.previewUrl"/>
                    </div>
                    <div>{{ item.serviceProvider }}</div>
                </div>
                <div class="content">{{ item.summary }}</div>
                <div>
                  <q-btn unelevated rounded color="primary" label="查看详情" @click="goToDetail(item.id)"/>
                </div>
              </div>
            </div>
            <div class="page-list">
              <q-pagination
                  v-model="current2"
                  :max="totalPage2"
                  direction-links
                  flat
                  @update:model-value="getFirstList('3')"
                  color="grey"
                  active-color="primary"
                />
            </div>
          </div>
        </div>
      </template>
  </TemplateFrame>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import  http ,{ picUrl } from '@/http/httpContentMain'
import { useRouter } from 'vue-router'
import TemplateFrame from '@/components/TemplateFrame.vue'
interface itemInf {
  title: string, 
  serviceProvider: string, 
  id: string, 
  summary: string,
  serviceHallAttach: {
    previewUrl: string
  },
  serviceProviderAttach: {
    previewUrl: string
  }
}
const tab = ref('assess')
const current = ref(1)
const current2 = ref(1)
const totalPage = ref(1)
const totalPage2 = ref(1)
const trainTabs = ref()
const router = useRouter()
const list = ref([] as itemInf[])
const serviceList = ref([] as itemInf[])
const changeTab = () => {
  getFirstList(tab.value)
  
}

http.get('k2401-service-hall/category-list').then((data) => {
  const backValue = data as unknown as {value: string}[]
  trainTabs.value = backValue 
  tab.value = backValue[0]?.value as string
  void getFirstList(tab.value);
  setTimeout(() => {
    getFirstList('3')
  },600)
})

const getFirstList = (tabNumber: string) => {
  const currentPage = tabNumber == '3'?current2.value:current.value
  http.get(`k2401-service-hall/service-hall/paged?current=${currentPage}&size=9&category=${tabNumber}`).then((data) => {
      const backList = data as unknown as { items: itemInf[], pages: string }
      if(tabNumber == '1' || tabNumber == '2'){
        totalPage.value = Number(backList.pages)
        list.value = backList.items
      }else{
        totalPage2.value = Number(backList.pages)
        serviceList.value = backList.items
      }
  })
}

const goToDetail = (id: string) => {
  let type = 0;
  switch(tab.value){
        case '1':
          type = 2
          break;
        case '2':
          type = 3
          break;
        case '3':
          type = 4
          break;
  }
  router.push({
      path: '/index/dataDetail',
      query: {
        type: type,
        id: id
      }
  })
}

</script>
<style lang="scss" scoped>
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
.card{
    width: calc(33% - 30px);
    padding-top: 27%;
    background-color: white;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 30px;
    position: relative;
    transition: all 0.25s ease-out;
    .card-box{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      padding: 15px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .pic{
        width: 100%;
        padding-top: 49%;
        position: relative;
        overflow: hidden;
        img{
          position: absolute;
          width: 100%;
          left: 0px;
          top: 0px;
        }
      }
      .title{
        width: 100%;
        font-size: 17px;
        font-weight: bold;
      }
      .content{
        width: 100%;
        height: 4vw;
        text-overflow:ellipsis;
        overflow: hidden;
        font-size: 13px;
        -webkit-line-clamp:3;
        -webkit-box-orient: vertical;
        color: #b8b3b3;
      }
      .end{
        display: flex;
        justify-content: left;
        border-top: 1px solid #dedcdc;
        padding-top: 15px;
        color: #7e7e7e;
        .icon{
          width: 40px;
          height: 20px;
          margin-right: 10px;
          img{
            width: 100%;
          }
        }
        font-size: 13px;
      }
    }
}

.bottom-card{
  width: 100%;
  background-color: white;
  padding-bottom: 80px;
  padding-top: 10px;
  .bottom-body{
    width: calc(100% - 480px);
    margin-left: 240px;
    display: flex;
    flex-wrap: wrap;
    .card-box{
      background-color: #f8f8f8;
      box-shadow: 0 0 14px rgba(0,0,0,0.13);
    }
    .end{
      padding: 0px;
      border: none;
      color: black;
      font-size: 13px;
    }
  }
}
.bottom-body .card{
  ::v-deep  button{
    width: 130px;
  }
}


.page-list{
  width: 100%;
  .q-pagination{
    justify-content: flex-end;
  }
}

.hiddens{
  padding-top:0px;
  overflow: hidden;
}
</style>
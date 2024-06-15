<template>
    <div class="center-box">
      <div class="text-h6">
        消息中心
      </div>
      <div class="tabs">
        <q-tabs
            v-model="tab"
            @update:model-value="handleCurrentChange(1)"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="all" label="全部" />
            <q-tab name="unread" label="未读" />
            <q-tab name="readed" label="已读" />
          </q-tabs>
          <q-separator />
      </div>
      <q-select
        v-model="tab"
        :options="options"
        rounded 
        outline
        map-options
        emit-value
        style="width: 200px"
      />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="all">
            <Table v-if="tableData.length>0&&tab=='all'" :tableData = "tableData" :titles="titles" button="详情" @detailMethod="detailMethod"></Table>
        </q-tab-panel>

        <q-tab-panel name="unread">
          <Table v-if="tableData.length>0&&tab=='unread'" :tableData = "tableData" :titles="titles" button="详情" @detailMethod="detailMethod"></Table>
        </q-tab-panel>

        <q-tab-panel name="readed">
          <Table v-if="tableData.length>0&&tab=='readed'" :tableData = "tableData" :titles="titles" button="详情" @detailMethod="detailMethod"></Table>
        </q-tab-panel>
      </q-tab-panels>
      
      <div>
        <el-pagination
          layout="prev, pager, next"
          :hide-on-single-page="true"
          @current-change="handleCurrentChange"
          :total="page.total*10">
        </el-pagination>
      </div>
      <q-dialog v-model="detailFlag" transition-show="fade">
        <q-card>
          <q-card-section>
            <div class="text-h6">详情</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="card">
              <div class="line">
                <div>消息编号:</div>
                <div>0{{ detailItem.id }}</div>
              </div>
              <div class="line">
                <div>信息类型:</div>
                <div>{{ detailItem.type }}</div>
              </div>
              <div class="line">
                <div>信息内容:</div>
                <div>{{ detailItem.sendContent }}</div>
              </div>
              <div class="line">
                <div>发送时间:</div>
                <div>{{ detailItem.createDate }}</div>
              </div>
            </div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="确认关闭" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </template>
  <script setup lang="ts">
  import { ref, watch, onMounted } from 'vue';
  import http, { setBaseInf, setHttp } from '@/http/httpContentMain'
  import Table from '@/components/Table.vue'
  interface itemInt {
      sendContent: string;
      sendDate: string;
      createDate: string;
      type: string;
      acceptReadFlag: boolean;
      id: string;
  }

  interface backTp {
    pages: string;
    total: string;
    items: itemInt[]
  }


  const tab = ref('all')
  const detailFlag = ref(false)
  const detailItem = ref({} as itemInt)
  const options = ref([
    {
      label: '全部',
      value: 'all',
    },
    {
      label: '未读',
      value: 'unread',
    },
    {
      label: '已读',
      value: 'readed',
    },
  ])

  onMounted(async () => {
    getBasicData()
  })

  const page = ref({
    total: 5,
    current: 1
  })



  const tableData = ref([] as itemInt[])

    const titles = [
    {
      name: '状态',
      key:'type',
      width: '150',
    },{
      name:'发送者',
      key: 'sendUserName',
      width: '120'
    },{
      name:'消息内容',
      key: 'sendContent',
      width: ''
    },{
      name:'创建时间',
      key: 'createDate',
      width: '160'
    },
    {
      name:'发送时间',
      key: 'sendDate',
      width: '160'
    }]
    const token = localStorage.getItem('token');
    const getBasicData = (pageIn?: number) => {
      tableData.value = [];
      const pageNum = pageIn?pageIn:1
      const acceptReadFlag = tab.value == 'all'?'':(tab.value=='readed'?true:false);
      http.get(`k2401-message-center/message-center/paged?current=${pageNum}&size=7&acceptReadFlag=${acceptReadFlag}`, {
          'Authorization':  'Bearer ' + token
      }).then((data) => {
        const back = data as unknown as backTp
        page.value.total = Number(back.pages)
        tableData.value = (back.items).map(item => { item.type = item.acceptReadFlag?'已读':'未读'; return item}) as unknown as itemInt[] 
      });
  } 

  const handleCurrentChange = (value: number) => {
    page.value.current = value
    getBasicData(value)
  }

  const detailMethod = (item: itemInt) => {
    detailFlag.value = true;
    detailItem.value = item;
  }


  </script>
  <style lang="scss" scoped>
  .el-pagination{
    display: flex;
    justify-content: flex-end;
  }

  .tabs{
    width: 50%;
  }

  .center-box{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 30px;
    position: relative;
  }

  .text-h6{
    margin-bottom: 20px;
  }

  .q-select{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .footer{
    display: flex;
    justify-content: end;
    position: absolute;
    bottom: 15px;
    right: 15px;
    button{
      margin-left: 10px;
    }
  }
  
  .card{
    width: 400px;
    .line{
      padding: 10px;
      display: flex;
      div:nth-child(1){
        width: 100px;
        padding: 7px;
      }
      div:nth-child(2){
        width: 300px;
        border: 1px solid #d8d7d7;
        padding: 10px;
        font-size: 13px;
        color: #3e3e3e;
      }
    }
  }
  </style>
  
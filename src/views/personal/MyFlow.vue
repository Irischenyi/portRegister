<template>
  <div class="center-box">
    <div class="text-h6">
      我的流程
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
          <q-tab name="self" label="个人信息出境" />
          <q-tab name="data" label="数据出境" />
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
      <q-tab-panel name="self">
          <Table v-if="tableData.length>0&&tab=='self'" button="继续填报" @detailMethod="detailMethod" :tableData = "tableData" :titles="titles"></Table>
      </q-tab-panel>

      <q-tab-panel name="data">
        <Table v-if="tableData.length>0&&tab=='data'"  button="继续填报" @detailMethod="detailMethod" :tableData = "tableData" :titles="titles"></Table>
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
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import http, { setBaseInf, setHttp } from '@/http/httpContentMain'
import Table from '@/components/Table.vue'
const tab = ref('self')
interface itemInt {
    sendContent: string;
    sendDate: string;
    createDate: string;
}

interface backTp {
  pages: string;
  total: string;
  items: itemInt[]
}
const options = ref([
  {
    label: '个人信息出境',
    value: 'self',
  },
  {
    label: '数据出境',
    value: 'data',
  }
])

const detailMethod = (item:itemInt) => {
  console.log('跳转路由到出入境填报')
}

onMounted(async () => {
  getBasicData()
})

const page = ref({
  total: 1,
  current: 1
})



  const tableData = ref([] as itemInt[])

  const titles = [{
    name:'需求名称',
    key: 'unitName',
    width: ''
  },{
    name:'状态',
    key: 'statusName',
    width: '250'
  },{
    name:'更新时间',
    key: 'createDate',
    width: '200'
  }]
  const token = localStorage.getItem('token');
  const getBasicData = (pageIn?: number) => {
    tableData.value = [];
    const pageNum = pageIn?pageIn:1
    const href = tab.value == 'self'? 'k2401-personal-exit/exit/paged':'k2401-data-exit/exit/paged'
    
    http.get(href+`?current=${pageNum}&size=8&status=`, {
        'Authorization':  'Bearer ' + token
    }).then((data) => {
      const back = data as unknown as backTp
      page.value.total = Number(back.pages)
      tableData.value = back.items;
    })
} 

const handleCurrentChange = (value: number) => {
  page.value.current = value
  getBasicData(value)
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
</style>

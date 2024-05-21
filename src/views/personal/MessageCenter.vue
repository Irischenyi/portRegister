<template>
    <div class="center-box">
      <div class="text-h6">
        消息中心
      </div>
      <div class="tabs">
        <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="all" label="全部 (10)" />
            <q-tab name="unread" label="未读 (06)" />
            <q-tab name="readed" label="已读 (04)" />
          </q-tabs>
          <q-separator />
      </div>
      
      <q-select
        v-model="model"
        :options="options"
        rounded 
        outline
        style="width: 250px"
      />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="all">
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column label="消息编号" width="120">
              <template #default="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="消息标题" width="120"> </el-table-column>
            <el-table-column prop="address" label="消息内容" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="address" label="消息分类" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="address" label="消息状态" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="address" label="发送时间" show-overflow-tooltip>
            </el-table-column>
            <el-table-column  label="操作" show-overflow-tooltip>
              详情
            </el-table-column>
          </el-table>
        </q-tab-panel>

        <q-tab-panel name="unread">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="readed">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
      
      <div>
        <el-pagination layout="prev, pager, next" :total="20"> </el-pagination>
      </div>
      <div class="footer">
        <q-btn unelevated color="grey-5" label="返回" />
        <q-btn unelevated color="primary" label="提交更新" />
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  const tableData = ref([{
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    }])
  const handleSelectionChange = () =>{}
  const tab = ref('all')
  const model = ref('')
  const options = ref(['全部','未读','已读'])

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
  
<template>
  <div>
    <div class="topImg" style="width: 100%">
      <img style="width: 100%" src="../assets/images/hgztbjt.png" alt="" />
      <div class="topImgText">
        <div style="color: #fff; font-size: 23px; font-weight: 500">
          合规专题
        </div>
        <div style="color: #fff">
          提供工业互联网安全相关最新行业动态,包括新闻资讯、政策法规、通知告栏等项目；
          基于行业内最新动态的梳理与汇聚
        </div>
      </div>

      <!-- 页面 -->
      <div class="contain">
        <div>
          <div style="font-size: 20px; margin-bottom: 20px">
            个人信息出境标准合同备案
          </div>
          <el-form label-width="100px">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="备案号">
                  <el-input v-model="form.xmbh"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="流水号">
                  <el-input v-model="form.lsh"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="备案省份">
                  <el-input v-model="form.sf"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row style="margin-top: 15px" :gutter="20">
              <el-col :span="8">
                <el-form-item label="状态">
                  <el-input v-model="form.xmbh2"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="起止时间">
                  <el-input v-model="form.qzsj"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-button
                  style="margin-left: 60px"
                  type="primary"
                  :icon="Refresh"
                  color="#c0c0c0"
                  circle
                />
                <el-button type="primary" :icon="Search" circle />
              </el-col>
            </el-row>

            <el-row style="margin: 30px 0 10px 0">
              <el-button
                @click="informationAdd"
                style="
                  border-radius: 30px;
                  background-color: #fff;
                  color: #4984ff;
                "
                type="primary"
                :icon="DocumentAdd"
                >新增申报</el-button
              >
              <el-button
                style="
                  border-radius: 50px;
                  background-color: #fff;
                  color: #4984ff;
                "
                type="primary"
                :icon="Download"
                >批量模板下载</el-button
              >
              <el-button
                style="
                  border-radius: 50px;
                  background-color: #fff;
                  color: #4984ff;
                "
                type="primary"
                :icon="Upload"
                >批量上传</el-button
              >
            </el-row>
          </el-form>

          <div style="margin-top: 20px">
            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="date" label="Date" width="180" />
              <el-table-column prop="name" label="Name" width="180" />
              <el-table-column prop="address" label="Address" />
              <el-table-column prop="date" label="Date" width="180" />
              <el-table-column prop="name" label="Name" width="180" />
              <el-table-column prop="address" label="Address" />
              <el-table-column prop="address" label="Address">
                <template #default>
                  <el-button type="text">编辑</el-button>
                  <el-button type="text" style="color: red">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div style="display: flex; justify-content: end; margin-top: 20px">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import {
  Search,
  Refresh,
  DocumentAdd,
  Upload,
  Download
} from '@element-plus/icons-vue'

import { useRouter } from 'vue-router'
const router = useRouter()
const form = ref({
  xmbh: '',
  lsh: '',
  sf: '',
  xmbh2: '',
  qzsj: ''
})

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

const informationAdd = () => {
  router.push({
    path: '/index/personalInformationAdd'
  })
}
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

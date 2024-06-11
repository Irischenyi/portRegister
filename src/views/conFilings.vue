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
                  <!-- <el-input v-model="form.qzsj"></el-input> -->
                  <el-date-picker
                    v-model="form.qzsj"
                    type="daterange"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                  />
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
                @click="peADD"
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
              <el-table-column prop="date" label="序号" />
              <el-table-column prop="date" label="备案号" />
              <el-table-column prop="createUserId" label="流水号" />
              <el-table-column prop="unitName" label="备案省份" />
              <el-table-column prop="unitName" label="备案单位" />
              <el-table-column prop="createDate" label="创建时间" />
              <el-table-column prop="createDate" label="提交时间" />
              <el-table-column prop="status" label="状态">
                <template #default="{ row }">
                  <div v-if="row.status == 0" class="status">填报中</div>
                  <div v-if="row.status == 1" class="status status1">
                    预检查审核中
                  </div>
                  <div v-if="row.status == 2" class="status status2">
                    预检查通过
                  </div>
                  <div v-if="row.status == 3" class="status status3">
                    预检查未通过
                  </div>
                  <!-- <div class="status status4">检测未过</div> -->
                  <!-- <el-button type="text">编辑</el-button>
                <el-button type="text" style="color: red">删除</el-button> -->
                </template>
              </el-table-column>

              <el-table-column prop="address" label="操作">
                <template #default="{ row }">
                  <el-button link @click="toDetail(row.id)">详情</el-button>
                  <el-button link @click="toEdit(row.id)">编辑</el-button>
                  <el-button link style="color: red">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div style="display: flex; justify-content: end; margin-top: 20px">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import http, { setBaseInf } from "@/http/httpContentMain";

import {
  Search,
  Refresh,
  DocumentAdd,
  Upload,
  Download,
} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const token = localStorage.getItem("token");

const router = useRouter();

const form = ref({
  xmbh: "",
  lsh: "",
  sf: "",
  xmbh2: "",
  qzsj: "",
});
const page = reactive({
  //配置对应的查询参数
  pageNum: 1,
  pageSize: 10,
});
const total = ref(0);

const handleSizeChange = () => {};
const handleCurrentChange = () => {};
const tableData = ref([]);

// 列表
const getList = (tabNumber: any) => {
  const currentPage = 1;
  http
    .get(
      `k2401-personal-exit/exit/paged?current=${currentPage}&size=9&status=${tabNumber}`,
      {
        Authorization: "Bearer " + token,
      }
    )
    .then((data: any) => {
      console.log(data, "datadata");
      tableData.value = data.items;
      total.value = parseInt(data.total);
    });
};
getList(2);

// const tableData = [
//   {
//     date: "2016-05-03",
//     name: "Tom",
//     address: "No. 189, Grove St, Los Angeles",
//   },
//   {
//     date: "2016-05-02",
//     name: "Tom",
//     address: "No. 189, Grove St, Los Angeles",
//   },
//   {
//     date: "2016-05-04",
//     name: "Tom",
//     address: "No. 189, Grove St, Los Angeles",
//   },
//   {
//     date: "2016-05-01",
//     name: "Tom",
//     address: "No. 189, Grove St, Los Angeles",
//   },
// ];

const peADD = () => {
  router.push({
    path: "/index/personalInformationAdd",
  });
};
const toEdit = (id: any) => {
  router.push({
    path: "/index/personalInformationAdd",
    query: {
      id: JSON.stringify(id),
    },
  });
};
// 详情
const toDetail = (id: any) => {
  router.push({
    path: "/index/personalInformationDetail",
    query: {
      id: JSON.stringify(id),
    },
  });
};
</script>
<style lang="scss" scoped>
.contain {
  padding: 10px;
  width: 1300px;
  margin: 0 auto;
  .paginations {
    margin-left: auto;
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
.status {
  width: 70px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  background: url(".././assets/images/status/pass.png") no-repeat;
  background-size: 100% 100%;
}
.status1 {
  background: url(".././assets/images/status/audit.png") no-repeat;
}
.status2 {
  background: url(".././assets/images/status/write.png") no-repeat;
}
.status3 {
  background: url(".././assets/images/status/not.png") no-repeat;
}
.status4 {
  background: url(".././assets/images/status/not2.png") no-repeat;
}
</style>

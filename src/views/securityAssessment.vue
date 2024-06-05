<template>
  <div>
    <!-- <div class="topImg" style="width: 100%">
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
    </div> -->
    <div class="head-box">
      <img class="header" src="@/assets/images/hgztbjt.png" />
      <div class="header-center">
        <div>合规专题</div>
        <div>
          提供工业互联网安全相关最新行业动态,包括新闻资讯、政策法规、通知告栏等项目；<br />
          基于行业内最新动态的梳理与汇聚
        </div>
      </div>
    </div>
    <!-- 页面 -->
    <div class="contain">
      <div>
        <div style="font-size: 20px; margin-bottom: 20px">数据出境安全评估</div>
        <el-form label-width="100px">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="项目编号">
                <el-input v-model="form.xmbh"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="流水号">
                <el-input v-model="form.lsh"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="省份">
                <el-input v-model="form.sf"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row style="margin-top: 15px" :gutter="20">
            <el-col :span="8">
              <el-form-item label="项目编号">
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
                @click="reset"
              />
              <el-button type="primary" :icon="Search" circle @click="search" />
            </el-col>
          </el-row>

          <el-row style="margin: 30px 0 10px 0">
            <el-button
              @click="securityAdd"
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
            <el-table-column prop="name" label="备案编号" />
            <el-table-column prop="address" label="流水号" />
            <el-table-column prop="date" label="省份" />
            <el-table-column prop="name" label="单位" />
            <el-table-column prop="address" label="创建时间" />
            <el-table-column prop="address" label="申报时间" />
            <el-table-column prop="address" label="状态">
              <template #default="{ row }">
                <!-- <div class="status">正式通过</div> -->
                <!-- <div class="status status1">审核中</div> -->
                <!-- <div class="status status2" >填报中</div> -->
                <!-- <div class="status status3" >未通过</div> -->
                <div class="status status4">检测未过</div>
                <!-- <el-button type="text">编辑</el-button>
                <el-button type="text" style="color: red">删除</el-button> -->
              </template>
            </el-table-column>

            <el-table-column prop="address" label="操作">
              <template #default="{ row }">
                <el-button type="text">编辑</el-button>
                <el-button type="text" style="color: red">删除</el-button>
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
    <Bottom />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import {
  Search,
  Refresh,
  DocumentAdd,
  Upload,
  Download,
} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import Bottom from "@/components/Bottom.vue";

const router = useRouter();
const form = reactive({
  xmbh: "",
  lsh: "",
  sf: "",
  xmbh2: "",
  qzsj: "",
});
const search = () => {};
const reset = () => {
  let form2 = {
    xmbh: "",
    lsh: "",
    sf: "",
    xmbh2: "",
    qzsj: "",
  };
  // form = form2;
  Object.assign(form, form2);
};
const page = reactive({
  //配置对应的查询参数
  pageNum: 1,
  pageSize: 10,
});
const total = ref(0);

const handleSizeChange = () => {};
const handleCurrentChange = () => {};
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
const securityAdd = () => {
  router.push({
    path: "/index/securityAssessmentAdd",
  });
};
</script>
<style lang="scss" scoped>
.contain {
  padding: 10px;
  // width: 1300px;
  width: calc(100% - 480px);
  margin: 0 auto;
  .paginations {
    margin-left: auto;
  }
}
.head-box {
  position: relative;
}

.header {
  width: 100%;
}

.header-center {
  width: calc(100% - 500px);
  position: absolute;
  left: 250px;
  top: 50%;
  height: 100px;
  color: white;
  transform: translateY(-50%);
  div:nth-child(1) {
    font-size: 18px;
    margin-bottom: 20px;
  }
  div:nth-child(2) {
    font-size: 13px;
    // width: 400px;
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

<template>
  <div>
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
        <div style="font-size: 20px; margin-bottom: 20px">
          个人信息出境标准合同备案
        </div>
        <el-form label-width="100px">
          <!-- <el-row :gutter="20">
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
          </el-row> -->

          <el-row style="margin-top: 15px" :gutter="20">
            <el-col :span="8">
              <el-form-item label="状态">
                <el-select v-model="form.status" clearable placeholder="">
                  <el-option
                    :label="(item as any).name"
                    :value="(item as any).value"
                    v-for="(item, index) in statusList"
                    :key="index"
                  />
                </el-select>
              </el-form-item>
            </el-col>

            <!-- <el-col :span="8">
              <el-form-item label="起止时间">
                <el-date-picker
                  v-model="form.qzsj"
                  type="daterange"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </el-form-item>
            </el-col> -->

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
            <!-- <el-button
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
              > -->
          </el-row>
        </el-form>

        <div style="margin-top: 20px">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column type="index" label="序号" width="80" />
            <!-- <el-table-column prop="createUserId" label="备案号" />
            <el-table-column prop="createUserId" label="流水号" />
            <el-table-column prop="createUserName" label="备案省份" /> -->
            <el-table-column prop="createUserName" label="备案单位" />
            <el-table-column prop="createDate" label="创建时间" />
            <el-table-column prop="submitDate" label="提交时间" />
            <el-table-column prop="statusName" label="状态">
              <!-- <template #default="{ row }">
                <div v-if="row.status == 0" class="">填报中</div>
                <div v-if="row.status == 1" class="">预检查审核中</div>
                <div v-if="row.status == 2" class="">预检查通过</div>
                <div v-if="row.status == 3" class="">预检查未通过</div>
              </template> -->
            </el-table-column>

            <el-table-column prop="address" label="操作">
              <template #default="{ row }">
                <!-- <el-button link @click="toDetail(row.id)">详情</el-button> -->
                <el-button link type="primary" @click="toEdit(row.id)"
                  >编辑</el-button
                >
                <!-- <el-button link style="color: red">删除</el-button> -->
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
  <Bottom />
  <LoadingIn :show="loadingShow" />
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, watch } from "vue";
import { setBaseInf, setHttp } from "@/http/httpContentMain";
import Bottom from "@/components/Bottom.vue";
import { ElMessage } from "element-plus";
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

const form = reactive({
  xmbh: "",
  lsh: "",
  sf: "",
  status: "",
  qzsj: "",
});
const page = reactive({
  //配置对应的查询参数
  pageNum: 1,
  pageSize: 10,
});
const total = ref(0);

const handleSizeChange = (val: number) => {
  page.pageSize = val;
  if (form.status == undefined) {
    form.status = "";
  }
  getList();
};
const handleCurrentChange = (val: number) => {
  page.pageNum = val;
  if (form.status == undefined) {
    form.status = "";
  }
  getList();
};
const tableData = ref([]);
// 状态   statusList
const statusList = ref([]);
const getStatus = () => {
  const http = setHttp();

  http
    .get("k2401-personal-exit/status-list", {
      Authorization: "Bearer " + token,
    })
    .then((data: any) => {
      statusList.value = data;
    })
    .fail((data: any) => {
      mag.value = data;
    });
};
getStatus();

const mag = ref();
// 列表
const getList = () => {
  const http = setHttp();
  http
    .get(
      `k2401-personal-exit/exit/paged?current=${page.pageNum}&size=${page.pageSize}&status=${form.status}`,
      {
        Authorization: "Bearer " + token,
      }
    )
    .then((data: any) => {
      console.log(data, "00000");
      tableData.value = data.items;
      total.value = parseInt(data.total);
    })
    .fail((data: any) => {
      mag.value = data;
    });
};

getList();

const reset = () => {
  form.status = "";
  page.pageNum = 1;
  page.pageSize = 10;
  getList();
};
const search = () => {
  page.pageNum = 1;
  page.pageSize = 10;
  if (form.status == undefined) {
    form.status = "";
  }
  getList();
};

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

const loginOut = () => {
  localStorage.setItem("token", "");
  // // location.reload();
  router.push({
    path: "/login",
  });
};
const loadingShow = ref(false);

watch(mag, (newValue, oldValue) => {
  if (newValue == "认证失败，请重新登录") {
    ElMessage({
      message: newValue,
      type: "error",
    });
    loadingShow.value = true;

    setTimeout(() => {
      loadingShow.value = false;

      loginOut();
    }, 2000);
  }
});
</script>
<style lang="scss" scoped>
.contain {
  padding: 10px;
  width: 1300px;
  // width: calc(100% - 480px);
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
  // background: url(".././assets/images/status/pass.png") no-repeat;
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

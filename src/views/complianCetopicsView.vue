<template>
  <TemplateFrame>
    <template #header>
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
    </template>
    <!-- <template #tabs>
      <q-tabs
        v-model="tab"
        dense
        active-color="primary"
        indicator-color="primary"
        narrow-indicator
        align="left"
      >
        <q-tab name="hydt1" label="合规专题评估" />
        <q-tab name="zcfg1" label="申报材料评估" />
      </q-tabs>
    </template> -->
    <template #body>
      <div class="contain">
        <!-- <q-tab-panels style="margin-top: 10px" v-model="tab" animated>
          <q-tab-panel name="hydt1"> -->
        <!-- 合规专题 -->
        <div class="hgzt">
          <div
            style="display: flex; justify-content: space-between; width: 100%"
          >
            <div class="item-dom">
              <div>
                <div>
                  <img style="width: 100%" src="../assets/images/hgzt1.png" />
                </div>
                <div class="title">数据出境合规自评估</div>
                <div class="content">
                  数据出境合规自评估数据出境合规自评估数据出境合规自评估
                </div>
                <div style="display: flex; justify-content: end">
                  <q-btn
                    @click="btnStep"
                    rounded
                    color="primary"
                    label="去评估"
                    class="btns"
                  />
                </div>
              </div>
            </div>

            <div class="item-dom">
              <div>
                <div>
                  <img style="width: 100%" src="../assets/images/hgzt2.png" />
                </div>
                <div class="title">数据出境合规自评估</div>
                <div class="content">
                  数据出境合规自评估数据出境合规自评估数据出境合规自评估
                </div>
                <div style="display: flex; justify-content: end">
                  <q-btn
                    @click="goCheck"
                    rounded
                    color="primary"
                    label="进入检查"
                    class="btns"
                  />
                </div>
              </div>
            </div>

            <div class="item-dom">
              <div>
                <div>
                  <img style="width: 100%" src="../assets/images/hgzt3.png" />
                </div>
                <div class="title">数据出境合规自评估</div>
                <div class="content">
                  数据出境合规自评估数据出境合规自评估数据出境合规自评估
                </div>
                <div style="display: flex; justify-content: end">
                  <q-btn
                    @click="goChecks"
                    rounded
                    color="primary"
                    label="进入检查"
                    class="btns"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- </q-tab-panel>

          <q-tab-panel name="zcfg1">
            <div>
              <div style="display: flex; justify-content: space-between">
                <div style="position: relative">
                  <img src="../assets//images/sbckpg1.png" alt="" />
                  <div class="imgs">
                    <div style="margin-bottom: 30px">
                      数据出境安全评估材料 完备性预检查
                    </div>
                    <el-button
                      @click="goCheck"
                      style="color: #4984ff; border-radius: 50px"
                      >进入检查</el-button
                    >
                  </div>
                </div>
                <div style="position: relative">
                  <img src="../assets//images/sbclpg2.png" alt="" />
                  <div class="imgs">
                    <div style="margin-bottom: 30px">
                      个人信息出境标准合同 备案材料完备性预检查
                    </div>
                    <el-button
                      @click="goChecks"
                      style="color: #4984ff; border-radius: 50px"
                      >进入检查</el-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels> -->
      </div>
    </template>
  </TemplateFrame>
  <div></div>
  <Bottom />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import Bottom from "@/components/Bottom.vue";
import TemplateFrame from "@/components/TemplateFrame.vue";

const router = useRouter();
const tab = ref("hydt1");
const current = ref(1);
// 评估
const btnStep = () => {
  router.push({
    path: "/index/dataProcessing",
  });
};
// 数据出境安全评估
const goCheck = () => {
  router.push({
    path: "/index/securityAssessment",
  });
};
// 个人信息出境标准合同备案
const goChecks = () => {
  router.push({
    path: "/index/conFilings",
  });
};
</script>
<style lang="scss" scoped>
::v-deep.contain {
  padding: 10px;
  width: 1300px;
  margin: 0 auto;
  .q-tab-panel {
    padding: 0;
  }
  .q-tab-panels {
    background: none;
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

.imgs {
  position: absolute;
  width: 200px;
  font-size: 20px;
  top: 120px;
  left: 50px;
}
.btns {
  margin-left: auto;
  background-color: #4984ff !important;
}

.item-dom{
  width: calc(33% - 10px);
  background: white;
  box-sizing: border-box;
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
  .title{
    font-size: 17px;
    font-weight: bold;
    margin: 10px 0px;
  }

  .content{
    font-size: 14px;
    color: grey;
    margin-bottom: 10px;
  }
}
</style>

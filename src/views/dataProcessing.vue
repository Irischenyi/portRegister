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
    </div>
    <!-- 分步数 -->
    <div class="contain">
      <q-stepper
        v-model="step"
        ref="stepper"
        alternative-labels
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="数据处理者基本情况"
          icon="settings"
          :done="step > 1"
          prefix="1"
        >
          <div style="padding: 20px 50px">
            <div style="margin: 0 0 20px -20px">
              第一部分 数据处理者基本情况
            </div>
            <!-- 表单 -->
            
            <div></div>
          </div>
        </q-step>

        <q-step :name="2" title="数据处境情况" :done="step > 2" prefix="2">
          数据处境情况
        </q-step>

        <q-step :name="3" prefix="3" title="其他情况"> 其他情况 </q-step>

        <template v-slot:navigation>
          <div
            style="display: flex; justify-content: end; padding: 0 20px 20px 0"
          >
            <q-stepper-navigation>
              <q-btn
                style="margin-right: 20px; background-color: #c0c0c0"
                v-if="step > 1"
                rounded
                @click="$refs.stepper.previous()"
                label="上一步"
                color="#c0c0c0"
              />
              <q-btn
                @click="$refs.stepper.next()"
                rounded
                color="primary"
                :label="step === 3 ? '提交' : '下一步'"
              />
            </q-stepper-navigation>
          </div>
        </template>
      </q-stepper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const step = ref(1)
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

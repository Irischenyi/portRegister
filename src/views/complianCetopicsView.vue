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
    <div class="contain">
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

      <q-tab-panels style="margin-top: 10px" v-model="tab" animated>
        <q-tab-panel name="hydt1">
          <!-- 合规专题 -->
          <div class="hgzt">
            <div
              style="display: flex; justify-content: space-between; width: 100%"
            >
              <div style="width: 33%; padding: 10px; background-color: #fafafa">
                <div>
                  <div>
                    <img style="width: 100%" src="../assets/images/hgzt1.png" />
                  </div>
                  <div style="font-size: 20px">数据出境合规自评估</div>
                  <div>
                    数据出境合规自评估数据出境合规自评估数据出境合规自评估
                  </div>
                  <div style="display: flex; justify-content: end">
                    <q-btn
                      @click="btnStep"
                      rounded
                      color="primary"
                      label="查看详情"
                    />
                  </div>
                </div>
              </div>

              <div style="width: 33%; padding: 10px; background-color: #fafafa">
                <div>
                  <div>
                    <img style="width: 100%" src="../assets/images/hgzt2.png" />
                  </div>
                  <div style="font-size: 20px">数据出境合规自评估</div>
                  <div>
                    数据出境合规自评估数据出境合规自评估数据出境合规自评估
                  </div>
                  <div style="display: flex; justify-content: end">
                    <q-btn rounded color="primary" label="查看详情" />
                  </div>
                </div>
              </div>

              <div style="width: 33%; padding: 10px; background-color: #fafafa">
                <div>
                  <div>
                    <img style="width: 100%" src="../assets/images/hgzt3.png" />
                  </div>
                  <div style="font-size: 20px">数据出境合规自评估</div>
                  <div>
                    数据出境合规自评估数据出境合规自评估数据出境合规自评估
                  </div>
                  <div style="display: flex; justify-content: end">
                    <q-btn rounded color="primary" label="查看详情" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="zcfg1">
          <div class="text-h6">申报材料</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const tab = ref('hydt1')
const current = ref(1)

const btnStep = () => {
  router.push({
    path: '/index/dataProcessing'
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

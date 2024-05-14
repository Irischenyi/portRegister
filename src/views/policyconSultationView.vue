<template>
  <TemplateFrame>
    <template #header>
      <div class="topImg" style="width: 100%">
        <img style="width: 100%" src="../assets/images/zczxbjt.png" alt="" />
        <div class="topImgText">
          <div style="color: #fff; font-size: 23px; font-weight: 500">
            政策咨询
          </div>
          <div style="color: #fff">
            提供工业互联网安全相关最新行业动态,包括新闻资讯、政策法规、通知告栏等项目；
            基于行业内最新动态的梳理与汇聚
          </div>
        </div>
      </div>
    </template>
    <template #tabs>
        <q-tab name="hydt1" label="行业动态" />
        <q-tab name="zcfg1" label="政策法规" />
        <q-tab name="hydt2" label="优秀表彰" />
        <q-tab name="zcfg2" label="通知公告" />
    </template>
  
    <template #body>
        <q-tab-panels style="margin-top: 10px" v-model="tab" animated>
          <q-tab-panel name="hydt1">
            <!-- 列表 -->
            <div>
              <!-- 第一行列表 -->
              <div style="padding: 20px 10px">
                <div style="display: flex">
                  <div style="width: 20%; margin-right: 20px">
                    <img
                      style="width: 100%"
                      src="../assets/images/zczx.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div style="width: 60%">
                    <div style="font-size: 20px; font-weight: 500">
                      建设新能源之都 新能源行业网络安全培训会成功举办
                    </div>
                    <div style="margin-top: 10px">
                      近日，常州市新能源行业网络安全培训会成功举办
                    </div>
                    <div style="margin-top: 30px">来源：常州工业信息安全联盟</div>
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: end;
                      align-items: end;
                      width: 20%;
                    "
                  >
                    2023-09-27 15:10:21
                  </div>
                </div>
                <div style="margin-top: 20px">
                  <q-separator />
                </div>
              </div>
              <!-- 第二行列表 -->
              <div style="padding: 20px 10px">
                <div style="display: flex">
                  <div style="width: 20%; margin-right: 20px">
                    <img
                      style="width: 100%"
                      src="../assets/images/zczx.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div style="width: 60%">
                    <div style="font-size: 20px; font-weight: 500">
                      建设新能源之都 新能源行业网络安全培训会成功举办
                    </div>
                    <div style="margin-top: 10px">
                      近日，常州市新能源行业网络安全培训会成功举办
                    </div>
                    <div style="margin-top: 30px">来源：常州工业信息安全联盟</div>
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: end;
                      align-items: end;
                      width: 20%;
                    "
                  >
                    2023-09-27 15:10:21
                  </div>
                </div>
                <div style="margin-top: 20px">
                  <q-separator />
                </div>
              </div>
              <!-- 第三行列表 -->
              <div style="padding: 20px 10px">
                <div style="display: flex">
                  <div style="width: 20%; margin-right: 20px">
                    <img
                      style="width: 100%"
                      src="../assets/images/zczx.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div style="width: 60%">
                    <div style="font-size: 20px; font-weight: 500">
                      建设新能源之都 新能源行业网络安全培训会成功举办
                    </div>
                    <div style="margin-top: 10px">
                      近日，常州市新能源行业网络安全培训会成功举办
                    </div>
                    <div style="margin-top: 30px">来源：常州工业信息安全联盟</div>
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: end;
                      align-items: end;
                      width: 20%;
                    "
                  >
                    2023-09-27 15:10:21
                  </div>
                </div>
                <div style="margin-top: 20px">
                  <q-separator />
                </div>
              </div>
              <!-- 第四行列表 -->
              <div style="padding: 20px 10px">
                <div style="display: flex">
                  <div style="width: 20%; margin-right: 20px">
                    <img
                      style="width: 100%"
                      src="../assets/images/zczx.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div style="width: 60%">
                    <div style="font-size: 20px; font-weight: 500">
                      建设新能源之都 新能源行业网络安全培训会成功举办
                    </div>
                    <div style="margin-top: 10px">
                      近日，常州市新能源行业网络安全培训会成功举办
                    </div>
                    <div style="margin-top: 30px">来源：常州工业信息安全联盟</div>
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: end;
                      align-items: end;
                      width: 20%;
                    "
                  >
                    2023-09-27 15:10:21
                  </div>
                </div>
                <div style="margin-top: 20px">
                  <q-separator />
                </div>
              </div>
              <!-- 第五行列表 -->
              <div style="padding: 20px 10px">
                <div style="display: flex">
                  <div style="width: 20%; margin-right: 20px">
                    <img
                      style="width: 100%"
                      src="../assets/images/zczx.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div style="width: 60%">
                    <div style="font-size: 20px; font-weight: 500">
                      建设新能源之都 新能源行业网络安全培训会成功举办
                    </div>
                    <div style="margin-top: 10px">
                      近日，常州市新能源行业网络安全培训会成功举办
                    </div>
                    <div style="margin-top: 30px">来源：常州工业信息安全联盟</div>
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: end;
                      align-items: end;
                      width: 20%;
                    "
                  >
                    2023-09-27 15:10:21
                  </div>
                </div>
                <div style="margin-top: 20px">
                  <q-separator />
                </div>
              </div>
              <!-- 第六行列表 -->
              <div style="padding: 20px 10px">
                <div style="display: flex">
                  <div style="width: 20%; margin-right: 20px">
                    <img
                      style="width: 100%"
                      src="../assets/images/zczx.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div style="width: 60%">
                    <div style="font-size: 20px; font-weight: 500">
                      建设新能源之都 新能源行业网络安全培训会成功举办
                    </div>
                    <div style="margin-top: 10px">
                      近日，常州市新能源行业网络安全培训会成功举办
                    </div>
                    <div style="margin-top: 30px">来源：常州工业信息安全联盟</div>
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: end;
                      align-items: end;
                      width: 20%;
                    "
                  >
                    2023-09-27 15:10:21
                  </div>
                </div>
                <div style="margin-top: 20px">
                  <q-separator />
                </div>
              </div>

              <div style="display: flex; justify-content: end">
                <q-pagination
                  v-model="current"
                  max="5"
                  direction-links
                  flat
                  color="grey"
                  active-color="primary"
                />
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="zcfg1">
            <div class="text-h6">政策法规</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="hydt2">
            <div class="text-h6">行业动态</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="zcfg2">
            <div class="text-h6">政策法规</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
    </template>
  </TemplateFrame>
  <div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TemplateFrame from '@/components/TemplateFrame.vue'
const tab = ref('hydt1')
const current = ref(1)
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

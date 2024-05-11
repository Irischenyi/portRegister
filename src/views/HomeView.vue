<template>
  <div>
    <!-- 背景图片 -->
    <img
      style="width: 100%; height: 400px"
      src="../assets//images/shujufuwu.png"
      alt=""
      srcset=""
    />
    <!-- 版心 -->
    <div class="contain">
      <!-- 数量 -->
      <div class="num_text">
        <div>
          <div class="num">1000+</div>
          <div>注册用户</div>
        </div>
        <div>
          <div class="num">32+</div>
          <div>专家入驻</div>
        </div>
        <div>
          <div class="num">800+</div>
          <div>上架服务</div>
        </div>
        <div>
          <div class="num">2500+</div>
          <div>服务用户</div>
        </div>
      </div>

      <!-- 服务简介 -->
      <div class="fwjj">
        <div class="fw">服务简介</div>
        <!-- 图片展示 -->
        <div style="display: flex">
          <div style="flex: 1; position: relative">
            <img
              class="fwjj_img1"
              style="width: 100%"
              src="../assets//images/fwjj1.png"
            />
            <div style="position: absolute; top: 50px; left: 20px; width: 50%">
              <div style="font-size: 20px; color: #fff">
                数据安全能力成熟度评估
              </div>
              <div style="width: 60%; color: #fff; margin: 10px 0 50px 0">
                从数据安全管理角度，以企业组织的数据为核心，围绕数据全生命周期进行分析，发现数据安全风险
              </div>
              <div>
                <q-btn
                  unelevated
                  rounded
                  color="rgba(255, 255, 255, 0.5)"
                  label="立即体验"
                  style="border: 1px solid #fff"
                />
              </div>
            </div>
          </div>
          <div style="width: 50%">
            <div style="display: flex">
              <div style="width: 50%; position: relative">
                <img class="fwjj_img" src="../assets//images/fwjj2.png" />
                <div style="position: absolute; top: 70px; left: 50px">
                  <div style="display: flex; align-items: center">
                    <div style="font-size: 20px; color: #fff">
                      <div class="yuan"></div>
                      安全评估
                    </div>
                  </div>
                  <div style="color: #fff; margin-left: 12px">专业评估团队</div>
                </div>
              </div>
              <div style="width: 50%; position: relative">
                <img class="fwjj_img" src="../assets//images/fwjj4.png" />
                <div style="position: absolute; top: 70px; left: 50px">
                  <div style="display: flex; align-items: center">
                    <div style="font-size: 20px; color: #fff">
                      <div class="yuan"></div>
                      安全评估
                    </div>
                  </div>
                  <div style="color: #fff; margin-left: 12px">专业评估团队</div>
                </div>
              </div>
            </div>
            <div style="display: flex">
              <div style="width: 50%; position: relative">
                <img class="fwjj_img" src="../assets//images/fwjj3.png" />
                <div style="position: absolute; top: 70px; left: 50px">
                  <div style="display: flex; align-items: center">
                    <div style="font-size: 20px; color: #fff">
                      <div class="yuan"></div>
                      安全评估
                    </div>
                  </div>
                  <div style="color: #fff; margin-left: 12px">专业评估团队</div>
                </div>
              </div>
              <div style="width: 50%; position: relative">
                <img class="fwjj_img" src="../assets//images/fwjj5.png" />
                <div style="position: absolute; top: 70px; left: 50px">
                  <div style="display: flex; align-items: center">
                    <div style="font-size: 20px; color: #fff">
                      <div class="yuan"></div>
                      安全评估
                    </div>
                  </div>
                  <div style="color: #fff; margin-left: 12px">专业评估团队</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 合规专题 -->
      <div class="hgzt">
        <div class="fw">合规专题</div>
        <div style="display: flex; justify-content: space-between; width: 100%">
          <div style="width: 33%; padding: 10px; background-color: #fafafa">
            <div>
              <div>
                <img style="width: 100%" src="../assets/images/hgzt1.png" />
              </div>
              <div style="font-size: 20px">数据出境合规自评估</div>
              <div>数据出境合规自评估数据出境合规自评估数据出境合规自评估</div>
            </div>
          </div>

          <div style="width: 33%; padding: 10px; background-color: #fafafa">
            <div>
              <div>
                <img style="width: 100%" src="../assets/images/hgzt2.png" />
              </div>
              <div style="font-size: 20px">数据出境合规自评估</div>
              <div>数据出境合规自评估数据出境合规自评估数据出境合规自评估</div>
            </div>
          </div>

          <div style="width: 33%; padding: 10px; background-color: #fafafa">
            <div>
              <div>
                <img style="width: 100%" src="../assets/images/hgzt3.png" />
              </div>
              <div style="font-size: 20px">数据出境合规自评估</div>
              <div>数据出境合规自评估数据出境合规自评估数据出境合规自评估</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 政策咨讯 -->
      <div class="zczx">
        <div class="fw">政策咨讯</div>
        <div style="text-align: right; color: #1f71ff; margin-top: -40px">
          查看更多
        </div>
        <div>
          <q-tabs
            v-model="tab"
            dense
            active-color="primary"
            indicator-color="primary"
            narrow-indicator
            align="left"
          >
            <q-tab name="hydt1" label="行业动态" />
            <q-tab name="zcfg1" label="政策法规" />
            <q-tab name="hydt2" label="行业动态" />
            <q-tab name="zcfg2" label="政策法规" />
          </q-tabs>

          <q-tab-panels style="margin-top: 10px" v-model="tab" animated>
            <q-tab-panel name="hydt1">
              <div style="display: flex; justify-content: space-between">
                <div style="width: 49%">
                  <div style="background-color: #fafafa">
                    <div>
                      <div>
                        <img
                          style="width: 100%"
                          src="../assets/images/zczx.png"
                        />
                      </div>
                      <div
                        style="display: flex; justify-content: space-between"
                      >
                        <div style="font-size: 20px">数据出境合规自评估</div>
                        <div>2024年04月15日</div>
                      </div>
                      <div>
                        数据出境合规自评估数据出境合规自评估数据出境合规自评估
                      </div>
                      <div style="text-align: end">查看详情</div>
                    </div>
                  </div>
                </div>
                <div style="width: 49%">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      padding: 10px;
                    "
                  >
                    <div style="display: flex; align-items: center">
                      <div class="yuan"></div>
                      <div style="margin-left: 20px; font-size: 20px">
                        建设新能源之都 新能源行业网络安全
                      </div>
                    </div>
                    <div>2024年04月15日</div>
                  </div>
                  <q-separator />

                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      padding: 10px;
                    "
                  >
                    <div style="display: flex; align-items: center">
                      <div class="yuan"></div>
                      <div style="margin-left: 20px; font-size: 20px">
                        建设新能源之都 新能源行业网络安全
                      </div>
                    </div>
                    <div>2024年04月15日</div>
                  </div>
                  <q-separator />

                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      padding: 10px;
                    "
                  >
                    <div style="display: flex; align-items: center">
                      <div class="yuan"></div>
                      <div style="margin-left: 20px; font-size: 20px">
                        建设新能源之都 新能源行业网络安全
                      </div>
                    </div>
                    <div>2024年04月15日</div>
                  </div>
                  <q-separator />

                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      padding: 10px;
                    "
                  >
                    <div style="display: flex; align-items: center">
                      <div class="yuan"></div>
                      <div style="margin-left: 20px; font-size: 20px">
                        建设新能源之都 新能源行业网络安全
                      </div>
                    </div>
                    <div>2024年04月15日</div>
                  </div>
                  <q-separator />

                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      padding: 10px;
                    "
                  >
                    <div style="display: flex; align-items: center">
                      <div class="yuan"></div>
                      <div style="margin-left: 20px; font-size: 20px">
                        建设新能源之都 新能源行业网络安全
                      </div>
                    </div>
                    <div>2024年04月15日</div>
                  </div>
                  <q-separator />

                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      padding: 10px;
                    "
                  >
                    <div style="display: flex; align-items: center">
                      <div class="yuan"></div>
                      <div style="margin-left: 20px; font-size: 20px">
                        建设新能源之都 新能源行业网络安全
                      </div>
                    </div>
                    <div>2024年04月15日</div>
                  </div>
                  <q-separator />
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
        </div>
      </div>

      <!-- 安全培训 -->
      <div class="aqpx">
        <div class="fw">安全培训</div>
        <div style="text-align: right; color: #1f71ff; margin: -40px 0 20px 0">
          查看更多
        </div>
        <div style="display: flex; justify-content: space-between">
          <div style="width: 24%">
            <img
              style="width: 100%"
              src="../assets/images/aqpx1.png"
              alt=""
              srcset=""
            />
          </div>

          <div style="width: 24%">
            <img
              style="width: 100%"
              src="../assets/images/aqpx2.png"
              alt=""
              srcset=""
            />
          </div>

          <div style="width: 24%">
            <img
              style="width: 100%"
              src="../assets/images/aqpx3.png"
              alt=""
              srcset=""
            />
          </div>

          <div style="width: 24%">
            <img
              style="width: 100%"
              src="../assets/images/aqpx4.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="bottom">
      <div class="contain">
        <div style="display: flex; justify-content: space-between">
          <div>
            <div class="bottom_text">
              <div class="bottom_text1">快速入口</div>
              <div style="font-size: 16px">联系我们</div>
            </div>
            <div class="bottom_text">
              <div class="bottom_texts">诊断评估</div>
              <div>联系方式：0619-85028717</div>
            </div>
            <div class="bottom_text">
              <div class="bottom_texts">专家资源</div>
              <div>
                企业地址：常州市钟楼区玉龙南路280号常州大数据产业园4号楼4楼
              </div>
            </div>
            <div class="bottom_text">
              <div class="bottom_texts">关于我们</div>
            </div>
          </div>
          <div class="bottom_text">二维码</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const tab = ref('hydt1')
</script>
<style lang="scss" scoped>
.contain {
  padding: 10px;
  width: 1300px;
  margin: 0 auto;
}
.num_text {
  display: flex;
  padding: 30px 0;
  justify-content: space-between;
  background-color: #f9f9f9;
}
.num {
  font-size: 40px;
  font-weight: 600;
  color: #4893ff;
}
.fwjj {
  width: 100%;
  height: 300px;
}
.fw {
  margin: 20px 0;
  font-size: 18px;
  text-align: center;
}
.fwjj_img1 {
  height: 400px;
}
.fwjj_img {
  display: block;
  width: 100%;
  height: 200px;
  margin: 0;
}
.yuan {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #1b6fff;
}
.hgzt {
  margin-top: 180px;
}
.bottom {
  width: 100%;
  background-color: #000;
}
.bottom_text {
  display: flex;
  color: #fff;
  margin: 10px;
}
.bottom_text1 {
  margin-right: 41px;
  font-size: 16px;
}
.bottom_texts {
  margin-right: 50px;
}
</style>

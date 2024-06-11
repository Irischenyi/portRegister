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
            <el-form>
              <el-row class="row_bottom">
                <el-col :span="12">
                  <div class="div_bottom">1.企业名称</div>
                  <el-input
                    v-model="ruleForm.qymc"
                    style="width: 80%"
                  ></el-input>
                </el-col>
                <el-col :span="12">
                  <div class="div_bottom">2.地址</div>
                  <el-input v-model="ruleForm.dz" style="width: 80%"></el-input>
                </el-col>
              </el-row>

              <el-row class="row_bottom">
                <el-col :span="12">
                  <div class="div_bottom">3. 统一社会信用代码</div>
                  <el-input
                    v-model="ruleForm.tyshxydm"
                    style="width: 80%"
                  ></el-input>
                </el-col>
              </el-row>

              <el-row class="row_bottom">
                <el-col :span="12">
                  <div class="div_bottom">
                    4. 您的企业现有人员规模符合以下哪种情况？
                  </div>
                  <el-checkbox-group v-model="ruleForm.rygm">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 1-100人" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 100-1000人" value="2" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 1000-10000人" value="3" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="D. 10000人以上" value="4" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>

                <el-col :span="12">
                  <div class="div_bottom">
                    5. 您的企业上年经营营收符合以下哪种情况？
                  </div>
                  <el-checkbox-group v-model="ruleForm.qyys">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 100万元以下" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 100-1000万元" value="2" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C 1000-10000万元" value="3" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="10000万元以上" value="4" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>
              </el-row>

              <el-row class="row_bottom">
                <el-col :span="12">
                  <div class="div_bottom">
                    6. 您的企业是否为关键基础设施运营者？
                  </div>
                  <el-checkbox-group v-model="ruleForm.jcss">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="2" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="3" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>
                <el-col :span="12">
                  <div class="div_bottom">7. 您的企业是否处理重要数据？</div>
                  <el-checkbox-group v-model="ruleForm.clsj">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="2" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="3" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>
              </el-row>

              <el-row class="row_bottom">
                <el-col :span="12">
                  <div class="div_bottom">
                    8. 您的企业是否处理个人信息数据？
                  </div>
                  <el-checkbox-group v-model="ruleForm.xxsj">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="2" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="3" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>
              </el-row>

              <el-row class="row_bottom">
                <el-col :span="12">
                  <div class="div_bottom">
                    9. 您的企业处理个人信息数据覆盖的自然人数量为_________?
                  </div>
                  <el-checkbox-group v-model="ruleForm.zrrsl1">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 10万人以下" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 10-100万人" value="2" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 100万人以上" value="3" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>

                <el-col :span="12">
                  <div class="div_bottom">
                    10. 您的企业处理个人信息数据覆盖的自然人数量为_________?
                  </div>
                  <el-checkbox-group v-model="ruleForm.zrrsl2">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 一万人以下" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 大于等于一万人" value="2" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不涉及" value="3" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>
              </el-row>
            </el-form>

            <div></div>
          </div>
        </q-step>

        <q-step :name="2" title="数据处境情况" :done="step > 2" prefix="2">
          <div style="padding: 20px 50px">
            <div style="margin: 0 0 20px -20px">第二部分 数据处境情况</div>
            <!-- 表单 -->
            <el-form>
              <el-row class="row_bottom">
                <el-col :span="12">
                  <div class="div_bottom">
                    11. 您的企业是否有数据出境的行为？
                  </div>
                  <el-checkbox-group v-model="ruleForm.cjdxw">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="2" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="3" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>

                <el-col :span="12">
                  <div class="div_bottom">
                    12. 数据出境的方式是___________?（多选）
                  </div>
                  <el-checkbox-group v-model="ruleForm.sjcjfs">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 跨境专线" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 公共互联网" value="2" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C 存储介质" value="3" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>
              </el-row>

              <el-row class="row_bottom">
                <el-col :span="12">
                  <div class="div_bottom">
                    13. 境外接收方位于_________？（多选）
                  </div>
                  <el-checkbox-group v-model="ruleForm.jcss">
                    <el-row>
                      <el-col :span="8">
                        <el-checkbox label="A. 欧洲" value="1" />
                      </el-col>
                      <el-col :span="8">
                        <el-checkbox label="B. 亚洲" value="2" />
                      </el-col>
                      <el-col :span="8">
                        <el-checkbox label="B. 南美" value="3" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="8">
                        <el-checkbox label="D. 北美" value="4" />
                      </el-col>
                      <el-col :span="8">
                        <el-checkbox label="E. 非洲" value="5" />
                      </el-col>
                      <el-col :span="8">
                        <el-checkbox label="F. 大洋洲" value="6" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="8">
                        <el-checkbox label="G. 港澳台" value="7" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>
                <el-col :span="12">
                  <div class="div_bottom">
                    14. 出境数据传输或访问频次__________?
                  </div>
                  <el-checkbox-group v-model="ruleForm.fwpc">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 定时" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 实时" value="2" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 与境外接收方约定" value="3" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>
              </el-row>

              <el-row class="row_bottom">
                <el-col :span="12">
                  <div class="div_bottom">
                    15. 您的企业出境的数据中是否包含重要数据？
                  </div>
                  <el-checkbox-group v-model="ruleForm.bhzysj">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="2" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="3" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>

                <el-col :span="12">
                  <div class="div_bottom">
                    16.
                    您的企业自上年1月1日起出境个人信息覆盖自然人人数为_________?
                  </div>
                  <el-checkbox-group v-model="ruleForm.qyfg1">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 10万人以下" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 10-100万人" value="2" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 100万人以上" value="3" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="D. 没有个人信息出境" value="4" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>
              </el-row>

              <el-row class="row_bottom">
                <el-col :span="12">
                  <div class="div_bottom">
                    17. 您的企业处理个人信息数据覆盖的自然人数量为_________?
                  </div>
                  <el-checkbox-group v-model="ruleForm.qyfg2">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 10万人以下" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 10-100万人" value="2" />
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 100万人以上" value="3" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>
              </el-row>
            </el-form>

            <div></div>
          </div>
        </q-step>

        <q-step :name="3" prefix="3" title="其他情况">
          <div style="padding: 20px 50px">
            <div style="margin: 0 0 20px -20px">第三部分 其他情况</div>
            <!-- 表单 -->
            <el-form>
              <el-row class="row_bottom">
                <el-col :span="12">
                  <div class="div_bottom">
                    18. 您的企业在数据出境过程中是否采取了安全防护措施？
                  </div>
                  <el-checkbox-group v-model="ruleForm.fhcs">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="2" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="3" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>

                <el-col :span="12">
                  <div class="div_bottom">
                    19.您的企业是否在出境个人信息前向个人信息主体告知并取得同意？
                  </div>
                  <el-checkbox-group v-model="ruleForm.qdty">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="2" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="3" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>
              </el-row>

              <el-row class="row_bottom">
                <el-col :span="12">
                  <div class="div_bottom">
                    20. 您的企业是否计划采取跨境数据申报工作？
                  </div>
                  <el-checkbox-group v-model="ruleForm.sbgz">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="1" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="2" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="3" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>
              </el-row>
            </el-form>

            <div></div>
          </div>
        </q-step>

        <template v-slot:navigation>
          <div
            style="display: flex; justify-content: end; padding: 0 20px 20px 0"
          >
            <q-stepper-navigation>
              <q-btn
                v-if="step > 1"
                style="
                  margin-right: 20px;
                  background-color: #c0c0c0;
                  width: 140px;
                  height: 50px;
                "
                rounded
                @click="($refs.stepper as any).previous()"
                label="上一步"
                color="#c0c0c0"
              />
              <q-btn
                style="width: 140px; height: 50px"
                @click="($refs.stepper as any).next()"
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
  <Bottom />
</template>
<script setup lang="ts">
import { ref } from "vue";
import Bottom from "@/components/Bottom.vue";
const step = ref(1);
const ruleForm = ref({
  // 第一部分
  qymc: "",
  dz: "",
  tyshxydm: "",
  rygm: [],
  qyys: [],
  jcss: [],
  clsj: [],
  xxsj: [],
  zrrsl1: [],
  zrrsl2: [],
  // 第二部分
  cjdxw: [],
  sjcjfs: [],
  fwpc: [],
  bhzysj: [],
  qyfg1: [],
  qyfg2: [],
  // 第三部分
  fhcs: [],
  qdty: [],
  sbgz: [],
});
</script>
<style lang="scss" scoped>
::v-deep.contain {
  padding: 10px;
  // width: 1300px;
  width: calc(100% - 480px);
  margin: 0 auto;
  .q-stepper__nav {
    margin-left: auto;
  }
  .bg-primary {
    background: linear-gradient(180deg, #5db9f8, #006cee) !important;
  }
  .q-stepper__tab--active,
  .q-stepper__tab--done {
    color: #2977ff;
  }
  .q-stepper__dot {
    font-size: 28px;
    width: 60px;
    height: 60px;
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

.div_bottom {
  margin-bottom: 10px;
}
.row_bottom {
  margin-bottom: 30px;
}
</style>

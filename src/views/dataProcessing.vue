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
                    v-model="ruleForm.entName"
                    style="width: 80%"
                  ></el-input>
                </el-col>
                <el-col :span="12">
                  <div class="div_bottom">2.地址</div>
                  <el-input
                    v-model="ruleForm.entAddr"
                    style="width: 80%"
                  ></el-input>
                </el-col>
              </el-row>

              <el-row class="row_bottom">
                <el-col :span="12">
                  <div class="div_bottom">3. 统一社会信用代码</div>
                  <el-input
                    v-model="ruleForm.creditCode"
                    style="width: 80%"
                  ></el-input>
                </el-col>
              </el-row>

              <el-row class="row_bottom">
                <el-col :span="12">
                  <div class="div_bottom">
                    4. 您的企业现有人员规模符合以下哪种情况？
                  </div>
                  <el-checkbox-group
                    v-model="ruleForm.empSize"
                    @change="Change4"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 1-100人" value="1-100人" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 100-1000人" value="100-1000人" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox
                          label="C. 1000-10000人"
                          value="1000-10000人"
                        />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox
                          label="D. 10000人以上"
                          value="10000人以上"
                        />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>

                <el-col :span="12">
                  <div class="div_bottom">
                    5. 您的企业上年经营营收符合以下哪种情况？
                  </div>
                  <el-checkbox-group
                    v-model="ruleForm.prevRevenue"
                    @change="Change5"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox
                          label="A. 100万元以下"
                          value="100万元以下"
                        />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox
                          label="B. 100-1000万元"
                          value="100-1000万元"
                        />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox
                          label="C. 1000-10000万元"
                          value="1000-10000万元"
                        />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox
                          label="D. 10000万元以上"
                          value="10000万元以上"
                        />
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
                  <el-checkbox-group
                    v-model="ruleForm.keyBaseBusiness"
                    @change="Change6"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="是" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="否" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="不清楚" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>
                <el-col :span="12">
                  <div class="div_bottom">7. 您的企业是否处理重要数据？</div>
                  <el-checkbox-group
                    v-model="ruleForm.procImpData"
                    @change="Change7"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="是" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="否" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="不清楚" />
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
                  <el-checkbox-group
                    v-model="ruleForm.procPersonalData"
                    @change="Change8"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="是" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="否" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="不清楚" />
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
                  <el-checkbox-group
                    v-model="ruleForm.personalInfoNatureSize"
                    @change="Change9"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 10万人以下" value="10万人以下" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 10-100万人" value="10-100万人" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox
                          label="C. 100万人以上"
                          value="100万人以上"
                        />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>

                <el-col :span="12">
                  <div class="div_bottom">
                    10. 您的企业处理个人信息数据覆盖的自然人数量为_________?
                  </div>
                  <el-checkbox-group
                    v-model="ruleForm.personalDataNatureSize"
                    @change="Change10"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 一万人以下" value="一万人以下" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox
                          label="B. 大于等于一万人"
                          value="大于等于一万人"
                        />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不涉及" value="不涉及" />
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
                  <el-checkbox-group
                    v-model="ruleForm.dataExitBehavior"
                    @change="Change11"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="是" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="否" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="不清楚" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>

                <el-col :span="12">
                  <div class="div_bottom">
                    12. 数据出境的方式是___________?（多选）
                  </div>
                  <el-checkbox-group v-model="ruleForm.dataExitMethods">
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 跨境专线" value="跨境专线" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 公共互联网" value="公共互联网" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 存储介质" value="存储介质" />
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
                  <el-checkbox-group v-model="ruleForm.foreignReceiverLocation">
                    <el-row>
                      <el-col :span="8">
                        <el-checkbox label="A. 欧洲" value="欧洲" />
                      </el-col>
                      <el-col :span="8">
                        <el-checkbox label="B. 亚洲" value="亚洲" />
                      </el-col>
                      <el-col :span="8">
                        <el-checkbox label="B. 南美" value="南美" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="8">
                        <el-checkbox label="D. 北美" value="北美" />
                      </el-col>
                      <el-col :span="8">
                        <el-checkbox label="E. 非洲" value="非洲" />
                      </el-col>
                      <el-col :span="8">
                        <el-checkbox label="F. 大洋洲" value="大洋洲" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="8">
                        <el-checkbox label="G. 港澳台" value="港澳台" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>
                <el-col :span="12">
                  <div class="div_bottom">
                    14. 出境数据传输或访问频次__________?
                  </div>
                  <el-checkbox-group
                    v-model="ruleForm.dataExitVisitHz"
                    @change="Change14"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 定时" value="定时" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 实时" value="实时" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox
                          label="C. 与境外接收方约定"
                          value="与境外接收方约定"
                        />
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
                  <el-checkbox-group
                    v-model="ruleForm.containImpData"
                    @change="Change15"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="是" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="否" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="不清楚" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>

                <el-col :span="12">
                  <div class="div_bottom">
                    16.
                    您的企业自上年1月1日起出境个人信息覆盖自然人人数为_________?
                  </div>
                  <el-checkbox-group
                    v-model="ruleForm.personalInfoPrevSize"
                    @change="Change16"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 10万人以下" value="10万人以下" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 10-100万人" value="10-100万人" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox
                          label="C. 100万人以上"
                          value="100万人以上"
                        />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox
                          label="D. 没有个人信息出境"
                          value="没有个人信息出境"
                        />
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
                  <el-checkbox-group
                    v-model="ruleForm.personalDataPrevSize"
                    @change="Change17"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 10万人以下" value="10万人以下" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 10-100万人" value="10-100万人" />
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-col :span="12">
                        <el-checkbox
                          label="C. 100万人以上"
                          value="100万人以上"
                        />
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
                  <el-checkbox-group
                    v-model="ruleForm.safetyMeasure"
                    @change="Change18"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="是" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="否" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="不清楚" />
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </el-col>

                <el-col :span="12">
                  <div class="div_bottom">
                    19.您的企业是否在出境个人信息前向个人信息主体告知并取得同意？
                  </div>
                  <el-checkbox-group
                    v-model="ruleForm.notifyAgree"
                    @change="Change19"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="是" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="否" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="不清楚" />
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
                  <el-checkbox-group
                    v-model="ruleForm.planApplyWork"
                    @change="Change20"
                  >
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="A. 是" value="是" />
                      </el-col>
                      <el-col :span="12">
                        <el-checkbox label="B. 否" value="否" />
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-checkbox label="C. 不清楚" value="不清楚" />
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
                v-if="step < 3"
                style="width: 140px; height: 50px"
                @click="($refs.stepper as any).next()"
                rounded
                color="primary"
                label="下一步"
              />
              <q-btn
                v-if="step === 3 && !isOk"
                style="width: 140px; height: 50px"
                @click="sumit"
                rounded
                color="primary"
                label="填写完成"
              />
              <q-btn
                v-if="isOk"
                style="width: 140px; height: 50px"
                @click="dialogVisible = true"
                rounded
                color="primary"
                label="评估结果"
              />
            </q-stepper-navigation>
          </div>
        </template>
      </q-stepper>
    </div>
  </div>
  <el-dialog v-model="dialogVisible" title="评估结果" width="500">
    <span>{{ result }}</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">
          关闭
        </el-button>
      </div>
    </template>
  </el-dialog>
  <Bottom />
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import Bottom from "@/components/Bottom.vue";
import { ElMessage } from "element-plus";
import http, { setBaseInf } from "@/http/httpContentMain";

const token = localStorage.getItem("token");
const isOk = ref(false);
const dialogVisible = ref(false);
const step = ref(1);
const result = ref("");
const stepper = ref();

const ruleForm = reactive({
  // 第一部分
  entName: "",
  entAddr: "",
  creditCode: "",
  empSize: [],
  prevRevenue: [],
  keyBaseBusiness: [],
  procImpData: [],
  procPersonalData: [],
  personalInfoNatureSize: [],
  personalDataNatureSize: [],
  // 第二部分
  dataExitBehavior: [],
  dataExitMethods: [],
  foreignReceiverLocation: [],
  dataExitVisitHz: [],
  containImpData: [],
  personalInfoPrevSize: [],
  personalDataPrevSize: [],
  // 第三部分
  safetyMeasure: [],
  notifyAgree: [],
  planApplyWork: [],
});
// 4
const Change4 = (e: any) => {
  if (e.length > 1) {
    let list = [];
    list.push(e[e.length - 1]);
    ruleForm.empSize = list as never[];
  }
};
// 5
const Change5 = (e: any) => {
  if (e.length > 1) {
    let list = [];
    list.push(e[e.length - 1]);
    ruleForm.prevRevenue = list as never[];
  }
};
// 6
const Change6 = (e: any) => {
  if (e.length > 1) {
    let list = [];
    list.push(e[e.length - 1]);
    ruleForm.keyBaseBusiness = list as never[];
  }
};
// 7
const Change7 = (e: any) => {
  if (e.length > 1) {
    let list = [];
    list.push(e[e.length - 1]);
    ruleForm.procImpData = list as never[];
  }
};
// 8
const Change8 = (e: any) => {
  if (e.length > 1) {
    let list = [];
    list.push(e[e.length - 1]);
    ruleForm.procPersonalData = list as never[];
  }
};
// 9
const Change9 = (e: any) => {
  if (e.length > 1) {
    let list = [];
    list.push(e[e.length - 1]);
    ruleForm.personalInfoNatureSize = list as never[];
  }
};
// 10
const Change10 = (e: any) => {
  if (e.length > 1) {
    let list = [];
    list.push(e[e.length - 1]);
    ruleForm.personalDataNatureSize = list as never[];
  }
};
// 11
const Change11 = (e: any) => {
  if (e.length > 1) {
    let list = [];
    list.push(e[e.length - 1]);
    ruleForm.dataExitBehavior = list as never[];
  }
};
// 14
const Change14 = (e: any) => {
  if (e.length > 1) {
    let list = [];
    list.push(e[e.length - 1]);
    ruleForm.dataExitVisitHz = list as never[];
  }
};
// 15
const Change15 = (e: any) => {
  if (e.length > 1) {
    let list = [];
    list.push(e[e.length - 1]);
    ruleForm.containImpData = list as never[];
  }
};
// 16
const Change16 = (e: any) => {
  if (e.length > 1) {
    let list = [];
    list.push(e[e.length - 1]);
    ruleForm.personalInfoPrevSize = list as never[];
  }
};
// 17
const Change17 = (e: any) => {
  if (e.length > 1) {
    let list = [];
    list.push(e[e.length - 1]);
    ruleForm.personalDataPrevSize = list as never[];
  }
};
// 18
const Change18 = (e: any) => {
  if (e.length > 1) {
    let list = [];
    list.push(e[e.length - 1]);
    ruleForm.safetyMeasure = list as never[];
  }
};
// 19
const Change19 = (e: any) => {
  if (e.length > 1) {
    let list = [];
    list.push(e[e.length - 1]);
    ruleForm.notifyAgree = list as never[];
  }
};
// 20
const Change20 = (e: any) => {
  if (e.length > 1) {
    let list = [];
    list.push(e[e.length - 1]);
    ruleForm.planApplyWork = list as never[];
  }
};
// 提交
const sumit = async (num: any) => {
  if (
    !ruleForm.entName.trim() ||
    !ruleForm.entAddr.trim() ||
    !ruleForm.creditCode.trim() ||
    ruleForm.empSize.length == 0 ||
    ruleForm.prevRevenue.length == 0 ||
    ruleForm.keyBaseBusiness.length == 0 ||
    ruleForm.procImpData.length == 0 ||
    ruleForm.procPersonalData.length == 0 ||
    ruleForm.personalInfoNatureSize.length == 0 ||
    ruleForm.personalDataNatureSize.length == 0 ||
    ruleForm.dataExitBehavior.length == 0 ||
    ruleForm.dataExitMethods.length == 0 ||
    ruleForm.foreignReceiverLocation.length == 0 ||
    ruleForm.dataExitVisitHz.length == 0 ||
    ruleForm.containImpData.length == 0 ||
    ruleForm.personalInfoPrevSize.length == 0 ||
    ruleForm.personalDataPrevSize.length == 0 ||
    ruleForm.safetyMeasure.length == 0 ||
    ruleForm.notifyAgree.length == 0 ||
    ruleForm.planApplyWork.length == 0
  ) {
    return ElMessage({
      type: "warning",
      message: "请填写完整",
    });
  }

  let params = {
    entName: ruleForm.entName, // 企业名称
    entAddr: ruleForm.entAddr, // 企业地址
    creditCode: ruleForm.creditCode, // 统一社会信用代码
    empSize: ruleForm.empSize[0], // 4. 您的企业现有人员规模符合以下哪种情况？取值["1-100人", "100-1000人", "1000-10000人", "10000人以上"]
    prevRevenue: ruleForm.prevRevenue[0], // 5. 您的企业上年经营营收符合以下哪种情况？取值["100万元以下", "100-1000万元", "1000-10000万元", "10000万以上"]
    keyBaseBusiness: ruleForm.keyBaseBusiness[0], // 6. 您的企业是否为关键基础设施运营者？取值["是", "否", "不清楚"]
    procImpData: ruleForm.procImpData[0], // 7. 您的企业是否处理重要数据？取值["是", "否", "不清楚"]
    procPersonalData: ruleForm.procPersonalData[0], // 8. 您的企业是否处理个人信息数据？取值["是", "否", "不清楚"]
    personalInfoNatureSize: ruleForm.personalInfoNatureSize[0], // 9. 您的企业处理个人信息数据覆盖的自然人数量为？取值["10万人以下", "10万-100万", "100万以上", "没有处理个人信息"]
    personalDataNatureSize: ruleForm.personalDataNatureSize[0], // 10. 您的企业处理个人敏感数据覆盖的自然人数量为？取值["1万人以下", "大于等于1万", "不涉及"]
    dataExitBehavior: ruleForm.dataExitBehavior[0], // 11. 您的企业是否有数据出境的行为？取值["是", "否", "不清楚"]
    dataExitMethods: ruleForm.dataExitMethods, // 12. 数据出境的方式是？（多选）取值["跨境专线", "公共互联网", "存储介质"]
    foreignReceiverLocation: ruleForm.foreignReceiverLocation, // 13. 境外接收方位于？（多选）取值["欧洲", "亚洲", "南美", "北美", "非洲", "大洋洲", "港澳台"]
    dataExitVisitHz: ruleForm.dataExitVisitHz[0], // 14. 数据出境传输或访问频次？取值["定时", "实时", "与境外接收方约定", "不确定"]
    containImpData: ruleForm.containImpData[0], // 15. 您的企业出境的数据中是否包含重要数据？取值["是", "否", "不清楚"]
    personalInfoPrevSize: ruleForm.personalInfoPrevSize[0], // 16. 您的企业自上年1月1日起出境个人信息覆盖自然人人数为？取值["10万人以下", "10万-100万", "100万以上", "没有个人信息出境"]
    personalDataPrevSize: ruleForm.personalDataPrevSize[0], // 17. 您的企业自上年1月1日起出境敏感个人信息覆盖自然人人数为？取值["1万人以下", "大于等于1万", "没有敏感个人信息出境"]
    safetyMeasure: ruleForm.safetyMeasure[0], // 18. 您的企业在数据出境过程中是否采取了安全防护措施？取值["是", "否", "不确定"]
    notifyAgree: ruleForm.notifyAgree[0], // 19. 您的企业是否在出境个人信息前向个人信息主体告知并取得同意？取值["是", "否", "不涉及个人信息出境", "不确定"]
    planApplyWork: ruleForm.planApplyWork[0], // 20. 您的企业是否计划采取跨境数据申报工作？取值["是", "否", "不确定"]
  };

  let res = (await http.post(
    "k2401-data-exit-self-assess/self-assess",
    params,
    {
      Authorization: "Bearer " + token,
    }
  )) as any;
  if (res) {
    result.value = res.result;
    isOk.value = true;
    dialogVisible.value = true;
    // return ElMessage({
    //   type: "success",
    //   message: "填写完成",
    // });
  } else {
    return ElMessage({
      type: "warning",
      message: "评估失败",
    });
  }
};
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

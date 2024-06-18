<template>
  <div>
    <div class="topImg" style="width: 100%">
      <img style="width: 100%" src="../assets/images/hgztbjt.png" alt="" />
      <div class="topImgText">
        <div style="color: #fff; font-size: 23px; font-weight: 500">
          合规专题
        </div>
        <div style="color: #fff">
          提供工业互联网o安全相关最新行业动态,包括新闻资讯、政策法规、通知告栏等项目；
          基于行业内最新动态的梳理与汇聚
        </div>
      </div>

      <!-- 页面 -->
      <div class="contain">
        <div style="font-size: 20px">新建数据出境安全评估材料完备性预检查</div>

        <div style="padding: 40px">
          <el-steps
            style="width: 100%"
            :active="active"
            align-center
            process-status="finish"
          >
            <el-step title="安全评估申 请适用场景"></el-step>
            <el-step title="数据处理者 情况" />
            <el-step title="法定代表人 信息" />
            <el-step title="数据安全负 责人和管理 机构信息" />
            <el-step title="经办人信息" />
            <el-step title="数据处理者 遵守中国法 律;行政法规; 部门规章情况" />
            <el-step title="数据出境场 景" />
            <el-step title="数据出境安 全评估申报 材料上传" />
          </el-steps>
        </div>

        <!-- 页面 -->
        <div style="margin-top: 20px">
          <div v-if="active == 0">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              数据处理者向境外提供数据，有下列情形之一的，应当通过所在地省级网信部门向国家网信办申报数据出境安全评估
            </div>
            <div style="margin-bottom: 20px">
              <el-checkbox-group v-model="checkList">
                <el-checkbox
                  label="（一）关键信息基础设施运营者向境外提供个人信息或者重要数据；"
                  value="（一）关键信息基础设施运营者向境外提供个人信息或者重要数据；"
                />
                <el-checkbox
                  label="（二）关键信息基础设施运营者以外的数据处理者向境外提供重要数据，或者自当年1月1日起累计向境外提供100万人以上个人信息（不含敏感个人信息）或者1万人以上敏感个人信息；"
                  value="（二）关键信息基础设施运营者以外的数据处理者向境外提供重要数据，或者自当年1月1日起累计向境外提供100万人以上个人信息（不含敏感个人信息）或者1万人以上敏感个人信息；"
                />
              </el-checkbox-group>
            </div>
            <div></div>
          </div>

          <div v-if="active == 1">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              个人信息处理者情况
            </div>
            <div style="margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef1" :model="ruleForm1" :rules="rules1">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="unitName">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 单位名称</div>
                        <el-input
                          v-model="ruleForm1.unitName"
                          placeholder="请输入单位名称"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="unitNatureValue">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*</span> 单位性质</div>
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm1.unitNatureValue"
                          placeholder="请选择单位性质"
                          clearable
                        >
                          <el-option
                            :label="(item as any).tagName"
                            :value="(item as any).tagValue"
                            v-for="(item, index) in unitNatureValuelist"
                            :key="index"
                          />
                        </el-select>
                      </div>
                    </el-form-item>

                    <el-form-item prop="unitNatureOther">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red"></span>其他</div>
                        <el-input
                          v-model="ruleForm1.unitNatureOther"
                          placeholder="请输入其他单位性质"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="unitCategoryValue">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*</span> 单位类型</div>
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm1.unitCategoryValue"
                          placeholder="请选择单位类型"
                          clearable
                        >
                          <el-option
                            :label="(item as any).tagName"
                            :value="(item as any).tagValue"
                            v-for="(item, index) in unitCategoryList"
                            :key="index"
                          />
                        </el-select>
                      </div>
                    </el-form-item>

                    <el-form-item prop="unitCategoryOther">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red"></span>其他</div>
                        <el-input
                          v-model="ruleForm1.unitCategoryOther"
                          placeholder="请输入其他单位性质"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="creditCode">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span>统一社会信用代码
                        </div>
                        <el-input
                          v-model="ruleForm1.creditCode"
                          placeholder="请输入统一社会信用代码"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="unitRegAddr">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red"></span>单位注册地</div>
                        <el-input
                          v-model="ruleForm1.unitRegAddr"
                          placeholder="请输入单位注册地"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="unitOfficeAddr">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>办公所在地</div>
                        <el-input
                          v-model="ruleForm1.unitOfficeAddr"
                          placeholder="请输入办公所在地"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="keyInfoOperatorFlag">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span
                          >是否为关键信息基础设施运营者
                        </div>
                        <el-select
                          v-model="ruleForm1.keyInfoOperatorFlag"
                          clearable
                          placeholder="请选择是否为关键信息基础设施运营者"
                        >
                          <el-option label="是" value="1" />
                          <el-option label="否" value="0" />
                        </el-select>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="empCount">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red"></span> 员工数量</div>
                        <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                        <el-input
                          v-model="ruleForm1.empCount"
                          placeholder="按自然人（去重统计数量）"
                        ></el-input>
                      </div>
                    </el-form-item>

                    <el-form-item prop="empCountUnitValue">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red"></span> 员工数量单位</div>
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm1.empCountUnitValue"
                          clearable
                          placeholder="请选择单位"
                        >
                          <el-option
                            :label="(item as any).tagName"
                            :value="(item as any).tagValue"
                            v-for="(item, index) in unitList"
                            :key="index"
                          />
                        </el-select>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="infoSize">
                      <div style="display: flex; flex-direction: column">
                        <div>
                          <span style="color: red">*</span>处理个人信息规模
                        </div>
                        <el-input
                          v-model="ruleForm1.infoSize"
                          placeholder="按自然人（去重统计数量）"
                        ></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item prop="infoSizeUnitValue">
                      <div style="display: flex; flex-direction: column">
                        <div>
                          <span style="color: red">*</span> 处理个人信息规模单位
                        </div>
                        <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm1.infoSizeUnitValue"
                          clearable
                          placeholder="请选择单位"
                        >
                          <el-option
                            :label="(item as any).tagName"
                            :value="(item as any).tagValue"
                            v-for="(item, index) in unitList"
                            :key="index"
                          />
                        </el-select>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <div></div>
          </div>

          <div v-if="active == 2">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              法定代表人信息
            </div>
            <!-- <el-checkbox
              v-model="ruleForm2.legalFlag"
              label="无法定代表人"
              size="large"
            /> -->
            <div style="height: 300px; margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef2" :model="ruleForm2" :rules="rules2">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="legal">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 姓名</div>
                        <el-input
                          v-model="ruleForm2.legal"
                          placeholder="请输入姓名"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="legalNationalValue">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 国籍</div>
                        <el-select
                          v-model="ruleForm2.legalNationalValue"
                          clearable
                          placeholder="请选择国籍"
                        >
                          <el-option
                            :label="(item as any).tagName"
                            :value="(item as any).tagValue"
                            v-for="(item, index) in guoji"
                            :key="index"
                          />
                        </el-select>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="legalTel">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 联系电话</div>
                        <el-input
                          v-model="ruleForm2.legalTel"
                          placeholder="请输入联系电话"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="legalEmail">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>电子邮箱</div>
                        <el-input
                          v-model="ruleForm2.legalEmail"
                          placeholder="请输入电子邮箱"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="legalCertificateTypeValue">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*</span> 证件类型</div>
                        <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm2.legalCertificateTypeValue"
                          clearable
                          placeholder="请选择证件类型"
                        >
                          <el-option
                            :label="(item as any).tagName"
                            :value="(item as any).tagValue"
                            v-for="(item, index) in certificatetype"
                            :key="index"
                          />
                        </el-select>
                      </div>
                    </el-form-item>

                    <el-form-item prop="legalCertificateTypeOther">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red"></span>其他</div>
                        <el-input
                          v-model="ruleForm2.legalCertificateTypeOther"
                          placeholder="请输入其他证件类型"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="legalCertificateCode">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>证件号码</div>
                        <el-input
                          v-model="ruleForm2.legalCertificateCode"
                          placeholder="请输入证件号码"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="legalJob">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>职务</div>
                        <el-input
                          v-model="ruleForm2.legalJob"
                          placeholder="请输入职务"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <div></div>
          </div>

          <div v-if="active == 3">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              数据安全负责人和管理机构信息
            </div>
            <div style="margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef3" :model="ruleForm3" :rules="rules3">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="principalName">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 姓名</div>
                        <el-input v-model="ruleForm3.principalName"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item prop="principalTel">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 联系电话</div>
                        <el-input v-model="ruleForm3.principalTel"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item prop="principalNationalValue">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 国籍</div>
                        <el-select
                          v-model="ruleForm3.principalNationalValue"
                          clearable
                          placeholder="请选择国籍"
                        >
                          <el-option
                            :label="(item as any).tagName"
                            :value="(item as any).tagValue"
                            v-for="(item, index) in guoji"
                            :key="index"
                          />
                        </el-select>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="principalJob">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>职务</div>
                        <el-input v-model="ruleForm3.principalJob"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="principalCertificateTypeValue">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*</span> 证件类型</div>
                        <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm3.principalCertificateTypeValue"
                          clearable
                          placeholder="请选择证件类型"
                        >
                          <el-option
                            :label="(item as any).tagName"
                            :value="(item as any).tagValue"
                            v-for="(item, index) in certificatetype"
                            :key="index"
                          />
                        </el-select>
                      </div>
                    </el-form-item>

                    <el-form-item prop="principalCertificateTypeOther">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red"></span> 其他</div>
                        <el-input
                          v-model="ruleForm3.principalCertificateTypeOther"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="principalCertificateCode">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>证件号码</div>
                        <el-input
                          v-model="ruleForm3.principalCertificateCode"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="principalOrgName">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>管理机构名称</div>
                        <el-input
                          v-model="ruleForm3.principalOrgName"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="principalOrgEmpCount">
                      <div style="display: flex; flex-direction: column">
                        <div>
                          <span style="color: red">*</span> 管理机构人数
                        </div>
                        <el-input
                          v-model="ruleForm3.principalOrgEmpCount"
                        ></el-input>
                      </div>
                    </el-form-item>

                    <el-form-item prop="principalOrgEmpCountUnitValue">
                      <div style="display: flex; flex-direction: column">
                        <div>
                          <span style="color: red">*</span> 管理机构人数单位
                        </div>
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm3.principalOrgEmpCountUnitValue"
                          clearable
                          placeholder="请选择单位"
                        >
                          <el-option
                            :label="(item as any).tagName"
                            :value="(item as any).tagValue"
                            v-for="(item, index) in unitList"
                            :key="index"
                          />
                        </el-select>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="principalEmail">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red"></span>电子邮箱</div>
                        <el-input v-model="ruleForm3.principalEmail"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <div></div>
          </div>

          <div v-if="active == 4">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              经办人信息
            </div>
            <div style="margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef4" :model="ruleForm4" :rules="rules4">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="operator">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 姓名</div>
                        <el-input
                          v-model="ruleForm4.operator"
                          placeholder="请输入姓名"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="operatorNationalValue">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 国籍</div>
                        <el-select
                          v-model="ruleForm4.operatorNationalValue"
                          clearable
                          placeholder="请选择国籍"
                        >
                          <el-option
                            :label="(item as any).tagName"
                            :value="(item as any).tagValue"
                            v-for="(item, index) in guoji"
                            :key="index"
                          />
                        </el-select>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="operatorTel">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 联系电话</div>
                        <el-input
                          v-model="ruleForm4.operatorTel"
                          placeholder="请输入联系电话"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="operatorEmail">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>电子邮箱</div>
                        <el-input
                          v-model="ruleForm4.operatorEmail"
                          placeholder="请输入电子邮箱"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="operatorCertificateTypeValue">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*</span> 证件类型</div>
                        <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm4.operatorCertificateTypeValue"
                          clearable
                          placeholder="请选择证件类型"
                        >
                          <el-option
                            :label="(item as any).tagName"
                            :value="(item as any).tagValue"
                            v-for="(item, index) in certificatetype"
                            :key="index"
                          />
                        </el-select>
                      </div>
                    </el-form-item>

                    <el-form-item prop="operatorCertificateTypeOther">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red"></span>其他</div>
                        <el-input
                          v-model="ruleForm4.operatorCertificateTypeOther"
                          placeholder="请输入其他证件类型"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="operatorCertificateCode">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>证件号码</div>
                        <el-input
                          v-model="ruleForm4.operatorCertificateCode"
                          placeholder="请输入证件号码"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="operatorJob">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>职务</div>
                        <el-input
                          v-model="ruleForm4.operatorJob"
                          placeholder="请输入职务"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <div></div>
          </div>

          <div v-if="active == 5">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              数据处理者遵守中国法律、行政法规、部门规章情况
            </div>
            <div style="margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef5" :model="ruleForm5" :rules="rules5">
                <el-row :gutter="20">
                  <el-col :span="24">
                    <el-form-item prop="observeContent">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 100%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span
                          >数据处理者遵守中国法律、行政法规、部门规章情况
                        </div>
                        <el-input
                          :rows="6"
                          type="textarea"
                          v-model="ruleForm5.observeContent"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <div></div>
          </div>

          <div v-if="active == 6">
            <div style="">
              <div
                v-for="(it, i) in ruleForm6"
                :key="i"
                style="
                  border: 1px dashed;
                  border-radius: 10px;
                  margin-bottom: 20px;
                  padding: 20px;
                "
              >
                <div
                  v-if="i > 0"
                  style="float: right; color: #409eff; cursor: pointer"
                  @click="closeScene(i)"
                >
                  删除该场景
                </div>
                <div
                  style="
                    color: #2977ff;
                    font-size: 15px;
                    margin: 30px 0;
                    text-align: center;
                  "
                >
                  数据出境场景{{ i + 1 }}
                </div>
                <el-form ref="ruleFormRef6" :model="it" :rules="rules6">
                  <el-row :gutter="20">
                    <el-col :span="24">
                      <el-form-item prop="summary">
                        <div
                          style="
                            display: flex;
                            flex-direction: column;
                            width: 100%;
                          "
                        >
                          <div>
                            <span style="color: red">*</span>数据出境场景描述
                          </div>
                          <el-input
                            :rows="6"
                            type="textarea"
                            v-model="it.summary"
                          ></el-input>
                        </div>
                      </el-form-item>
                    </el-col>
                  </el-row>

                  <div
                    style="
                      color: #2977ff;
                      font-size: 15px;
                      margin-bottom: 20px;
                      text-align: center;
                    "
                  >
                    拟数据出境情况
                  </div>

                  <el-row :gutter="20">
                    <el-col :span="8">
                      <el-form-item prop="dataTypeValue">
                        <div
                          style="
                            display: flex;
                            flex-direction: column;
                            width: 100%;
                          "
                        >
                          <div><span style="color: red">*</span> 数据类型</div>
                          <el-select
                            v-model="it.dataTypeValue"
                            clearable
                            placeholder="请选择数据类型"
                          >
                            <el-option
                              :label="(item as any).tagName"
                              :value="(item as any).tagValue"
                              v-for="(item, index) in datatype"
                              :key="index"
                            />
                          </el-select>
                        </div>
                      </el-form-item>
                    </el-col>

                    <el-col :span="8">
                      <el-form-item prop="impDeptName">
                        <div
                          style="
                            display: flex;
                            flex-direction: column;
                            width: 80%;
                          "
                        >
                          <div>
                            <span style="color: red"></span>
                            重要数据认定主管部门名称
                          </div>
                          <el-input
                            v-model="it.impDeptName"
                            placeholder="请输入重要数据认定主管部门名称"
                          ></el-input>
                        </div>
                      </el-form-item>
                    </el-col>

                    <el-col :span="8" style="display: flex">
                      <el-form-item prop="industryValue">
                        <div style="display: flex; flex-direction: column">
                          <div>
                            <span style="color: red">*</span> 涉及行业/领域
                          </div>
                          <el-select
                            style="width: 150px"
                            v-model="it.industryValue"
                            clearable
                            placeholder="请选择涉及行业/领域"
                          >
                            <el-option
                              :label="(item as any).tagName"
                              :value="(item as any).tagValue"
                              v-for="(item, index) in industryarea"
                              :key="index"
                            />
                          </el-select>
                        </div>
                      </el-form-item>

                      <el-form-item prop="industryOther">
                        <div style="display: flex; flex-direction: column">
                          <div>
                            <span style="color: red"></span>涉及其他行业/领域
                          </div>
                          <el-input
                            v-model="it.industryOther"
                            placeholder="请输入涉及行业/领域（其他）"
                          ></el-input>
                        </div>
                      </el-form-item>
                    </el-col>
                  </el-row>

                  <el-row :gutter="20">
                    <el-col :span="8" style="display: flex">
                      <el-form-item prop="impDataSize">
                        <div style="display: flex; flex-direction: column">
                          <div>
                            <span style="color: red">*</span> 涉及重要数据规模
                          </div>
                          <el-input
                            v-model="it.impDataSize"
                            placeholder="请输入涉及重要数据规模"
                          ></el-input>
                        </div>
                      </el-form-item>

                      <el-form-item prop="impDataSizeUnitValue">
                        <div style="display: flex; flex-direction: column">
                          <div>
                            <span style="color: red">*</span
                            >涉及重要数据规模单位
                          </div>

                          <el-select
                            style="width: 150px"
                            v-model="it.impDataSizeUnitValue"
                            clearable
                            placeholder="请选择涉及重要数据规模单位"
                          >
                            <el-option
                              :label="(item as any).tagName"
                              :value="(item as any).tagValue"
                              v-for="(item, index) in dataunit"
                              :key="index"
                            />
                          </el-select>
                        </div>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <div
                    v-for="(t, n) in it.receiveList"
                    :key="n"
                    style="
                      border: 1px dashed;
                      border-radius: 10px;
                      margin-bottom: 20px;
                      padding: 20px;
                    "
                  >
                    <div
                      v-if="n > 0"
                      style="float: right; color: #409eff; cursor: pointer"
                      @click="closeOutbound(i, n)"
                    >
                      删除该境外接收方
                    </div>
                    <div
                      style="
                        color: #2977ff;
                        font-size: 15px;
                        margin-bottom: 20px;
                        text-align: center;
                      "
                    >
                      境外接收方情况{{ i + 1 }}-{{ n + 1 }}
                    </div>
                    <el-checkbox
                      v-model="t.statDescriptionFlag"
                      label="填写统计说明"
                      size="large"
                    />
                    <div v-if="!t.statDescriptionFlag">
                      <el-row :gutter="20">
                        <el-col :span="8">
                          <el-form-item prop="foreignReceiver">
                            <div
                              style="
                                display: flex;
                                flex-direction: column;
                                width: 100%;
                              "
                            >
                              <div>
                                <span style="color: red">*</span> 境外接收方名称
                              </div>
                              <el-input
                                v-model="t.foreignReceiver"
                                placeholder="请输入境外接收方名称"
                              ></el-input>
                            </div>
                          </el-form-item>
                        </el-col>

                        <el-col :span="8">
                          <el-form-item prop="areaValue">
                            <div
                              style="
                                display: flex;
                                flex-direction: column;
                                width: 80%;
                              "
                            >
                              <div>
                                <span style="color: red">*</span>
                                所在国家或者地区
                              </div>
                              <el-select
                                v-model="t.areaValue"
                                clearable
                                placeholder="请选择所在国家或者地区"
                              >
                                <el-option
                                  :label="(item as any).tagName"
                                  :value="(item as any).tagValue"
                                  v-for="(item, index) in area"
                                  :key="index"
                                />
                              </el-select>
                            </div>
                          </el-form-item>
                        </el-col>

                        <el-col :span="8" style="display: flex">
                          <el-form-item prop="primaryBusiness">
                            <div style="display: flex; flex-direction: column">
                              <div>
                                <span style="color: red">*</span> 主营业务
                              </div>
                              <el-input
                                v-model="t.primaryBusiness"
                                placeholder="请输入主营业务"
                              ></el-input>
                            </div>
                          </el-form-item>
                        </el-col>
                      </el-row>

                      <el-row :gutter="20">
                        <el-col :span="8" style="display: flex">
                          <el-form-item prop="principalName">
                            <div
                              style="
                                display: flex;
                                flex-direction: column;
                                width: 150px;
                              "
                            >
                              <div>
                                <span style="color: red">*</span>负责人姓名
                              </div>
                              <el-input
                                v-model="t.principalName"
                                placeholder="请输入负责人姓名"
                              ></el-input>
                            </div>
                          </el-form-item>
                        </el-col>
                        <el-col :span="8" style="display: flex">
                          <el-form-item prop="principalJob">
                            <div
                              style="
                                display: flex;
                                flex-direction: column;
                                width: 80%;
                              "
                            >
                              <div>
                                <span style="color: red">*</span>负责人职务
                              </div>

                              <el-input
                                v-model="t.principalJob"
                                placeholder="请输入负责人职务"
                              ></el-input>
                            </div>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="8" style="display: flex">
                          <el-form-item prop="contactTel">
                            <div
                              style="
                                display: flex;
                                flex-direction: column;
                                width: 150px;
                              "
                            >
                              <div>
                                <span style="color: red"></span>联系方式-电话
                              </div>
                              <el-input
                                v-model="t.contactTel"
                                placeholder="请输入联系方式-电话"
                              ></el-input>
                            </div>
                          </el-form-item>
                        </el-col>
                        <el-col :span="8" style="display: flex">
                          <el-form-item prop="contactEmail">
                            <div
                              style="
                                display: flex;
                                flex-direction: column;
                                width: 80%;
                              "
                            >
                              <div>
                                <span style="color: red"></span>联系方式-邮箱
                              </div>

                              <el-input
                                v-model="t.contactEmail"
                                placeholder="请输入联系方式-邮箱"
                              ></el-input>
                            </div>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="24">
                          <el-form-item prop="addr">
                            <div
                              style="
                                display: flex;
                                flex-direction: column;
                                width: 100%;
                              "
                            >
                              <div>
                                <span style="color: red">*</span>所在地址
                              </div>
                              <el-input
                                :rows="6"
                                type="textarea"
                                v-model="t.addr"
                                placeholder="请输入所在地址"
                              ></el-input>
                            </div>
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </div>
                    <el-row v-else :gutter="20">
                      <el-col :span="24">
                        <el-form-item prop="statDescription">
                          <div
                            style="
                              display: flex;
                              flex-direction: column;
                              width: 100%;
                            "
                          >
                            <div><span style="color: red"></span>统计说明</div>
                            <el-input
                              :rows="6"
                              type="textarea"
                              v-model="t.statDescription"
                              placeholder="请输入统计说明"
                            ></el-input>
                          </div>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </div>
                  <div
                    style="width: 100%; text-align: center; margin-bottom: 10px"
                  >
                    <el-button @click="addOutbound(i)" type="primary"
                      >添加境外接收方情况</el-button
                    >
                  </div>
                </el-form>
              </div>

              <div style="width: 100%; text-align: center">
                <el-button @click="addScene" type="primary"
                  >添加数据出境场景</el-button
                >
              </div>
            </div>
          </div>

          <div v-if="active == 7">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              文件上传
            </div>
            <div style="margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef7" :model="ruleForm7" :rules="rules7">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item prop="creditCodeAttachIdList">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 70%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span>
                          统一社会信用代码证件影印件（加盖公章）
                        </div>
                        <div style="display: flex; position: relative">
                          <el-input
                            style="margin-right: 50px"
                            v-model="ruleForm7.credfileName"
                            placeholder="请上传格式为PDF、OFD、PNG、JPG、JPEG的文件"
                            readonly
                          ></el-input>
                          <el-icon
                            v-if="ruleForm7.credfileName"
                            style="
                              position: absolute;
                              top: 10px;
                              left: 250px;
                              cursor: pointer;
                            "
                            @click="deleteFileName(1)"
                            ><CircleClose
                          /></el-icon>
                          <el-upload
                            drag
                            class="upload-demo"
                            :show-file-list="false"
                            :http-request="customUpload71"
                          >
                            <el-button
                              style="
                                border-radius: 50px;
                                background-color: #fff;
                                color: #4984ff;
                              "
                              type="primary"
                              :icon="Download"
                              >上传文件</el-button
                            >
                          </el-upload>
                        </div>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item prop="legalIdCardAttachIdList">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 70%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span>
                          法定代表人身份证件影印件（加盖公章）
                        </div>
                        <div style="display: flex; position: relative">
                          <el-input
                            style="margin-right: 50px"
                            v-model="ruleForm7.legalfileName"
                            placeholder="请上传格式为PDF、OFD、PNG、JPG、JPEG的文件"
                            readonly
                          ></el-input>
                          <el-icon
                            v-if="ruleForm7.legalfileName"
                            style="
                              position: absolute;
                              top: 10px;
                              left: 250px;
                              cursor: pointer;
                            "
                            @click="deleteFileName(2)"
                            ><CircleClose
                          /></el-icon>
                          <el-upload
                            drag
                            class="upload-demo"
                            :show-file-list="false"
                            :http-request="customUpload72"
                          >
                            <el-button
                              style="
                                border-radius: 50px;
                                background-color: #fff;
                                color: #4984ff;
                              "
                              type="primary"
                              :icon="Download"
                              >上传文件</el-button
                            >
                          </el-upload>
                        </div>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item prop="operatorIdCardAttachIdList">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 70%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span>
                          经办人身份证件影印件（加盖公章）
                        </div>
                        <div style="display: flex; position: relative">
                          <el-input
                            style="margin-right: 50px"
                            v-model="ruleForm7.operatorfileName"
                            placeholder="请上传格式为PDF、OFD、PNG、JPG、JPEG的文件"
                            readonly
                          ></el-input>
                          <el-icon
                            v-if="ruleForm7.operatorfileName"
                            style="
                              position: absolute;
                              top: 10px;
                              left: 250px;
                              cursor: pointer;
                            "
                            @click="deleteFileName(3)"
                            ><CircleClose
                          /></el-icon>
                          <el-upload
                            drag
                            class="upload-demo"
                            :show-file-list="false"
                            :http-request="customUpload73"
                          >
                            <el-button
                              style="
                                border-radius: 50px;
                                background-color: #fff;
                                color: #4984ff;
                              "
                              type="primary"
                              :icon="Download"
                              >上传文件</el-button
                            >
                          </el-upload>
                        </div>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12">
                    <el-form-item prop="delegateAttachIdList">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 70%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span>
                          经办人授权委托书
                        </div>
                        <div style="display: flex; position: relative">
                          <el-input
                            style="margin-right: 50px"
                            v-model="ruleForm7.delegatefileName"
                            placeholder="请上传格式为PDF、OFD、PNG、JPG、JPEG的文件"
                            readonly
                          ></el-input>
                          <el-icon
                            v-if="ruleForm7.delegatefileName"
                            style="
                              position: absolute;
                              top: 10px;
                              left: 250px;
                              cursor: pointer;
                            "
                            @click="deleteFileName(4)"
                            ><CircleClose
                          /></el-icon>
                          <el-upload
                            drag
                            class="upload-demo"
                            :show-file-list="false"
                            :http-request="customUpload74"
                          >
                            <el-button
                              style="
                                border-radius: 50px;
                                background-color: #fff;
                                color: #4984ff;
                              "
                              type="primary"
                              :icon="Download"
                              >上传文件</el-button
                            >
                          </el-upload>
                        </div>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item prop="promiseAttachIdList">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 70%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span>
                          承诺书
                        </div>
                        <div style="display: flex; position: relative">
                          <el-input
                            style="margin-right: 50px"
                            v-model="ruleForm7.promfileName"
                            placeholder="请上传格式为PDF、OFD、PNG、JPG、JPEG的文件"
                            readonly
                          ></el-input>
                          <el-icon
                            v-if="ruleForm7.promfileName"
                            style="
                              position: absolute;
                              top: 10px;
                              left: 250px;
                              cursor: pointer;
                            "
                            @click="deleteFileName(5)"
                            ><CircleClose
                          /></el-icon>
                          <el-upload
                            drag
                            class="upload-demo"
                            :show-file-list="false"
                            :http-request="customUpload75"
                          >
                            <el-button
                              style="
                                border-radius: 50px;
                                background-color: #fff;
                                color: #4984ff;
                              "
                              type="primary"
                              :icon="Download"
                              >上传文件</el-button
                            >
                          </el-upload>
                        </div>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item prop="contractAttachIdList">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 70%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span>
                          与境外接收方拟订立的数据出境相关合同或其他具有法律效力影印件
                          (加盖公章)
                        </div>
                        <div style="display: flex; position: relative">
                          <el-input
                            style="margin-right: 50px"
                            v-model="ruleForm7.contfileName"
                            placeholder="请上传格式为PDF、OFD、PNG、JPG、JPEG的文件"
                            readonly
                          ></el-input>
                          <el-icon
                            v-if="ruleForm7.contfileName"
                            style="
                              position: absolute;
                              top: 10px;
                              left: 250px;
                              cursor: pointer;
                            "
                            @click="deleteFileName(6)"
                            ><CircleClose
                          /></el-icon>
                          <el-upload
                            drag
                            class="upload-demo"
                            :show-file-list="false"
                            :http-request="customUpload76"
                          >
                            <el-button
                              style="
                                border-radius: 50px;
                                background-color: #fff;
                                color: #4984ff;
                              "
                              type="primary"
                              :icon="Download"
                              >上传文件</el-button
                            >
                          </el-upload>
                        </div>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item prop="reportAttachIdList">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 70%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span>
                          数据出境风险自评估报告
                        </div>
                        <div style="display: flex; position: relative">
                          <el-input
                            style="margin-right: 50px"
                            v-model="ruleForm7.reportfileName"
                            placeholder="请上传格式为PDF、OFD、PNG、JPG、JPEG的文件"
                            readonly
                          ></el-input>
                          <el-icon
                            v-if="ruleForm7.reportfileName"
                            style="
                              position: absolute;
                              top: 10px;
                              left: 250px;
                              cursor: pointer;
                            "
                            @click="deleteFileName(7)"
                            ><CircleClose
                          /></el-icon>
                          <el-upload
                            drag
                            class="upload-demo"
                            :show-file-list="false"
                            :http-request="customUpload77"
                          >
                            <el-button
                              style="
                                border-radius: 50px;
                                background-color: #fff;
                                color: #4984ff;
                              "
                              type="primary"
                              :icon="Download"
                              >上传文件</el-button
                            >
                          </el-upload>
                        </div>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <div style="margin-bottom: 10px">
              <el-button type="primary" plain
                >《经办人授权委托书》模板下载</el-button
              >
              <el-button type="primary" plain>《承诺书》模板下载</el-button>
              <el-button type="primary" plain
                >《数据出境风险自评估报告》模板下载</el-button
              >
            </div>
            <div>
              <div style="color: #333; margin-bottom: 10px; font-size: 16px">
                请上传《经办人授权委托书》签字并加盖公章的影印件
              </div>
              <div style="color: #333; margin-bottom: 10px; font-size: 16px">
                请上传《承诺书》签字并加盖公章的影印件
              </div>
              <div style="color: #333; margin-bottom: 10px; font-size: 16px">
                请上传《个人信息出境标准合同》加盖公章的影印件
              </div>
              <div style="color: #333; margin-bottom: 10px; font-size: 16px">
                请上传《数据出境风险自评估报告》加盖公章的影印件
              </div>
            </div>
            <div>
              <!-- #2977ff -->
              <div style="color: #333; margin-bottom: 10px; font-size: 16px">
                其他相关证明材料
              </div>
              <div style="display: flex; position: relative; width: 34%">
                <el-input
                  style="margin-right: 50px"
                  v-model="ruleForm7.otherfileName"
                  placeholder="请上传格式为PDF、OFD、PNG、JPG、JPEG的文件"
                  readonly
                ></el-input>
                <el-icon
                  v-if="ruleForm7.otherfileName"
                  style="
                    position: absolute;
                    top: 10px;
                    left: 250px;
                    cursor: pointer;
                  "
                  @click="deleteFileName(8)"
                  ><CircleClose
                /></el-icon>
                <el-upload
                  drag
                  class="upload-demo"
                  :show-file-list="false"
                  :http-request="customUpload78"
                >
                  <el-button
                    style="
                      border-radius: 50px;
                      background-color: #fff;
                      color: #4984ff;
                    "
                    type="primary"
                    :icon="Download"
                    >上传文件</el-button
                  >
                </el-upload>
              </div>
              <!-- <div>已上传 {{ ruleForm7.otherAttachIdList }}</div> -->
              <div style="color: #333; margin-bottom: 10px; font-size: 16px">
                请上传格式为PDF、OFD、PNG、JPG、JPEG的文件
              </div>
            </div>
          </div>
        </div>

        <!--  -->
        <div style="display: flex; justify-content: end">
          <el-button
            v-if="active > 0"
            type="primary"
            style="border-radius: 50px; margin-top: 12px"
            @click="last"
            >上一步</el-button
          >
          <el-button
            v-if="active < 7"
            type="primary"
            style="border-radius: 50px; margin-top: 12px"
            @click="next"
            >下一步</el-button
          >
          <el-button
            type="primary"
            style="border-radius: 50px; margin-top: 12px"
            @click="sumit(0)"
            >暂存</el-button
          >
          <el-button
            v-if="active == 7"
            type="primary"
            style="border-radius: 50px; margin-top: 12px"
            @click="sumit(1)"
            >填写完成</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { ElMessage } from "element-plus";
import type {
  ComponentSize,
  FormInstance,
  FormRules,
  UploadProps,
  UploadUserFile,
} from "element-plus";
import { Download, CircleClose } from "@element-plus/icons-vue";
import http, { setBaseInf, setHttp } from "@/http/httpContentMain";
const token = localStorage.getItem("token");
import { useRoute, useRouter } from "vue-router";
const router = useRouter();

const route = useRoute();
// 获取id
const query = route.query as {
  id: string;
};
const ruleFormRef1 = ref<FormInstance>();
const ruleFormRef2 = ref<FormInstance>();
const ruleFormRef3 = ref<FormInstance>();
const ruleFormRef4 = ref<FormInstance>();
const ruleFormRef5 = ref<FormInstance>();
const ruleFormRef6 = ref<FormInstance>();
const ruleFormRef7 = ref<FormInstance>();

onMounted(async () => {
  await getItems(); //编辑详情

  await getUnitNatureValue(); //获取 Banner 图
  await getUnitCategoryValue(); //获取政策资讯类别
  await getUnitList();
  await getGuoji();
  await getCertificatetype();
  await getIndustryarea();
  await getArea();
  await getDatatype();
  await getDataunit();
});

const active = ref(0);
// 下一步
const next = () => {
  if (active.value == 0 && checkList.value.length == 0) {
    return ElMessage({ type: "warning", message: "下列情形至少选择一项" });
  } else if (active.value == 0 && checkList.value.length > 0) {
    active.value++;
  } else if (active.value == 1) {
    submitForm1(ruleFormRef1.value);
  } else if (active.value == 2) {
    submitForm2(ruleFormRef2.value);
  } else if (active.value == 3) {
    submitForm3(ruleFormRef3.value);
  } else if (active.value == 4) {
    submitForm4(ruleFormRef4.value);
  } else if (active.value == 5) {
    if (ruleForm5.observeContent.trim()) {
      active.value++;
    } else {
      return showWarningMessage("请补求信息");
    }
  } else if (active.value == 6) {
    // submitForm6(ruleFormRef6.value);
    console.log(ruleForm6, "ruleForm6ruleForm6");
    let isok = false;
    let isok2 = false;
    ruleForm6.map((item) => {
      if (
        !item.summary.trim() ||
        !item.dataTypeValue ||
        !item.industryValue ||
        !item.impDataSize ||
        !item.impDataSizeUnitValue
      ) {
        return (isok = true);
      } else {
        // 数据类型
        datatype.value.map((t: any) => {
          if (t.tagValue == item.dataTypeValue) {
            item.dataTypeName = t.tagName;
          }
        });
        // 涉及行业/领域
        industryarea.value.map((t: any) => {
          if (t.tagValue == item.industryValue) {
            item.industryName = t.tagName;
          }
        });
        // 所在国家或地区
        dataunit.value.map((t: any) => {
          if (t.tagValue == item.impDataSizeUnitValue) {
            item.impDataSizeUnitName = t.tagName;
          }
        });
        item.receiveList.map((it) => {
          console.log(it.statDescriptionFlag, "statDescriptionFlag");

          if (
            !it.statDescriptionFlag &&
            !it.contactTel.trim() &&
            !it.statDescriptionFlag &&
            !it.contactEmail.trim()
          ) {
            return (isok2 = true);
          }
        });
      }
    });

    if (isok) {
      return showWarningMessage("请补求信息");
    } else if (isok2) {
      return showWarningMessage("请填写联系方式，电话和邮箱至少填写一项");
    } else {
      active.value++;
    }
  } else if (active.value == 7) {
    if (
      ruleForm7.creditCodeAttachIdList.length == 0 ||
      ruleForm7.legalIdCardAttachIdList.length == 0 ||
      ruleForm7.operatorIdCardAttachIdList.length == 0 ||
      ruleForm7.delegateAttachIdList.length == 0 ||
      ruleForm7.promiseAttachIdList.length == 0 ||
      ruleForm7.contractAttachIdList.length == 0 ||
      ruleForm7.reportAttachIdList.length == 0
    ) {
      showWarningMessage("请上传文件");
    }
  } else {
    active.value++;
  }
  // active.value++;
};
//  上一步
const last = () => {
  active.value--;
};
const customUpload71 = (file: any) => {
  const formData = new FormData();
  formData.append("file", file.file);
  http
    .post("file/push-file", formData, {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    })
    .then((response) => {
      const id = (response as unknown as { id: string }).id;
      const fileName = (response as unknown as { fileName: string }).fileName;

      let list = [];
      list.push(id);
      ruleForm7.creditCodeAttachIdList = list as never[];
      ruleForm7.credfileName = fileName;
    });
};
const customUpload72 = (file: any) => {
  const formData = new FormData();
  formData.append("file", file.file);
  http
    .post("file/push-file", formData, {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    })
    .then((response) => {
      const id = (response as unknown as { id: string }).id;
      const fileName = (response as unknown as { fileName: string }).fileName;

      let list = [];
      list.push(id);
      ruleForm7.legalIdCardAttachIdList = list as never[];
      ruleForm7.legalfileName = fileName;
    });
};
const customUpload73 = (file: any) => {
  const formData = new FormData();
  formData.append("file", file.file);
  http
    .post("file/push-file", formData, {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    })
    .then((response) => {
      const id = (response as unknown as { id: string }).id;
      const fileName = (response as unknown as { fileName: string }).fileName;

      let list = [];
      list.push(id);
      ruleForm7.operatorIdCardAttachIdList = list as never[];
      ruleForm7.operatorfileName = fileName;
    });
};
const customUpload74 = (file: any) => {
  const formData = new FormData();
  formData.append("file", file.file);
  http
    .post("file/push-file", formData, {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    })
    .then((response) => {
      const id = (response as unknown as { id: string }).id;
      const fileName = (response as unknown as { fileName: string }).fileName;

      let list = [];
      list.push(id);
      ruleForm7.delegateAttachIdList = list as never[];
      ruleForm7.delegatefileName = fileName;
    });
};
const customUpload75 = (file: any) => {
  const formData = new FormData();
  formData.append("file", file.file);
  http
    .post("file/push-file", formData, {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    })
    .then((response) => {
      const id = (response as unknown as { id: string }).id;
      const fileName = (response as unknown as { fileName: string }).fileName;

      let list = [];
      list.push(id);
      ruleForm7.promiseAttachIdList = list as never[];
      ruleForm7.promfileName = fileName;
    });
};
const customUpload76 = (file: any) => {
  const formData = new FormData();
  formData.append("file", file.file);
  http
    .post("file/push-file", formData, {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    })
    .then((response) => {
      const id = (response as unknown as { id: string }).id;
      const fileName = (response as unknown as { fileName: string }).fileName;

      let list = [];
      list.push(id);
      ruleForm7.contractAttachIdList = list as never[];
      ruleForm7.contfileName = fileName;
    });
};
const customUpload77 = (file: any) => {
  const formData = new FormData();
  formData.append("file", file.file);
  http
    .post("file/push-file", formData, {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    })
    .then((response) => {
      const id = (response as unknown as { id: string }).id;
      const fileName = (response as unknown as { fileName: string }).fileName;

      let list = [];
      list.push(id);
      ruleForm7.reportAttachIdList = list as never[];
      ruleForm7.reportfileName = fileName;
    });
};
const customUpload78 = (file: any) => {
  const formData = new FormData();
  formData.append("file", file.file);
  http
    .post("file/push-file", formData, {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    })
    .then((response) => {
      const id = (response as unknown as { id: string }).id;
      const fileName = (response as unknown as { fileName: string }).fileName;

      let list = [];
      list.push(id);
      ruleForm7.otherAttachIdList = list as never[];
      ruleForm7.otherfileName = fileName;
    });
};
const checkList = ref([]);
// 表单1
const ruleForm1 = reactive({
  unitName: "", // 单位名称
  unitNatureValue: "", // 单位性质值（标签）（标签接口数据接口参见接口1.12.3），取tagValue字段，数据接口：tag/tag?tagCode=unitnature
  unitNatureName: "", // 单位性质名称（标签）/同上，取tagName字段
  unitNatureOther: "", // 其他单位性质
  unitCategoryValue: "", // 单位类型值（标签）数据接口：tag/tag?tagCode=unitcategory
  unitCategoryName: "", // 单位类型名称（标签）
  unitCategoryOther: "", // 其他单位类型
  creditCode: "", // 统一社会信用代码
  unitRegAddr: "", // 单位注册地
  unitOfficeAddr: "", // 办公所在地
  keyInfoOperatorFlag: "", // 是否为关键信息基础设施运营者
  empCount: "", // 员工数据
  empCountUnitValue: "", // 员工数量单位值（标签）数据接口：tag/tag?tagCode=personunit
  empCountUnitName: "", // 员工数量单位名称（标签）
  infoSize: "", // 处理个人信息规模
  infoSizeUnitValue: "", // 处理个人信息规模单位值（标签）数据接口：tag/tag?tagCode=dataunit
  infoSizeUnitName: "", // 处理个人信息规模单位名称（标签）
});
const rules1 = reactive({
  unitName: [{ required: true, message: "请输入单位名称", trigger: "blur" }],
  unitNatureValue: [
    { required: true, message: "请选择单位性质", trigger: "change" },
  ],
  unitCategoryValue: [
    { required: true, message: "请选择单位类型", trigger: "change" },
  ],
  creditCode: [
    { required: true, message: "请输入统一社会信用代码", trigger: "blur" },
  ],
  unitOfficeAddr: [
    { required: true, message: "请输入办公所在地", trigger: "blur" },
  ],
  keyInfoOperatorFlag: [
    {
      required: true,
      message: "请选择是否为关键信息基础设施运营者",
      trigger: "change",
    },
  ],
  infoSize: [
    { required: true, message: "请选择处理个人信息规模", trigger: "change" },
  ],
  infoSizeUnitValue: [
    {
      required: true,
      message: "请选择处理个人信息规模单位",
      trigger: "change",
    },
  ],
});

// 表单2
const ruleForm2 = reactive({
  // legalFlag: false,
  legal: "", //姓名
  legalTel: "", //联系电话
  legalNationalValue: "", //国籍 code
  legalNationalName: "", //国籍 name
  legalJob: "", //职务
  legalCertificateTypeValue: "", //证件类型 code
  legalCertificateTypeName: "", //证件类型  name
  legalCertificateTypeOther: "", //其他证件类型
  legalCertificateCode: "", //证件号码
  legalEmail: "", //电子邮箱
});
const rules2 = reactive({
  legal: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  legalTel: [{ required: true, message: "请输入联系电话", trigger: "blur" }],
  legalNationalValue: [
    { required: true, message: "请输入国籍", trigger: "change" },
  ],
  legalJob: [{ required: true, message: "请输入职务", trigger: "blur" }],
  legalCertificateTypeValue: [
    { required: true, message: "请选择证件类型", trigger: "change" },
  ],
  legalCertificateCode: [
    { required: true, message: "请输入证件号码", trigger: "blur" },
  ],
  legalEmail: [
    { required: true, message: "请选择电子邮箱", trigger: "change" },
  ],
});

// 表单3
const ruleForm3 = reactive({
  principalName: "", // 负责人姓名
  principalTel: "", // 负责人联系电话
  principalNationalValue: "", // 负责人国籍值（标签）数据接口：tag/tag?tagCode=guoji
  principalNationalName: "", // 负责人国籍名称（标签）
  principalJob: "", // 负责人职务
  principalCertificateTypeValue: "", //  负责人证件类型值（标签）数据接口：tag/tag?tagCode=certificatetype
  principalCertificateTypeName: "", // 负责人证件类型名称（标签）
  principalCertificateTypeOther: "", // 负责人其他证件类型
  principalCertificateCode: "", // 负责人证件号码
  principalOrgName: "", // 负责人管理机构名称
  principalOrgEmpCount: "", // 负责人管理机构人数
  principalOrgEmpCountUnitValue: "", // 负责人管理机构人数单位值（标签）数据接口：tag/tag?tagCode=personunit
  principalOrgEmpCountUnitName: "", // 负责人管理机构人数单位名称（标签）
  principalEmail: "", // 负责人电子邮箱
});
const rules3 = reactive({
  principalName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  principalTel: [
    { required: true, message: "请输入联系电话", trigger: "blur" },
  ],
  principalNationalValue: [
    { required: true, message: "请输入国籍", trigger: "change" },
  ],
  principalJob: [{ required: true, message: "请输入职务", trigger: "blur" }],
  principalCertificateTypeValue: [
    { required: true, message: "请选择证件类型", trigger: "change" },
  ],
  principalCertificateCode: [
    { required: true, message: "请输入证件号码", trigger: "blur" },
  ],
  principalOrgName: [
    { required: true, message: "请输入管理机构名称", trigger: "blur" },
  ],
  gljgrprincipalOrgEmpCounts: [
    { required: true, message: "请选择管理机构人数", trigger: "change" },
  ],
  principalOrgEmpCount: [
    { required: true, message: "请输入管理机构人数", trigger: "blur" },
  ],
  principalOrgEmpCountUnitValue: [
    { required: true, message: "请输入管理机构人数单位", trigger: "blur" },
  ],
});

// 表单4
const ruleForm4 = reactive({
  operator: "", // 经办人姓名
  operatorTel: "", // 经办人联系电话
  operatorNationalValue: "", // 经办人国籍值（标签）数据接口：tag/tag?tagCode=guoji
  operatorNationalName: "", // 经办人国籍名称（标签）
  operatorJob: "", // 经办人职务
  operatorCertificateTypeValue: "", // 经办人证件类型值（标签）数据接口：tag/tag?tagCode=certificatetype
  operatorCertificateTypeName: "", // 经办人证件类型名称（标签）
  operatorCertificateTypeOther: "", // 经办人其他证件类型
  operatorCertificateCode: "", // 经办人证件号码
  operatorEmail: "", // 经办人电子邮箱
});
const rules4 = reactive({
  operator: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  operatorTel: [{ required: true, message: "请输入联系电话", trigger: "blur" }],
  operatorNationalValue: [
    { required: true, message: "请输入国籍", trigger: "change" },
  ],
  operatorJob: [{ required: true, message: "请输入职务", trigger: "blur" }],
  operatorCertificateTypeValue: [
    { required: true, message: "请选择证件类型", trigger: "change" },
  ],
  // qt: [{ required: true, message: "请输入其他", trigger: "blur" }],
  operatorCertificateCode: [
    { required: true, message: "请输入证件号码", trigger: "blur" },
  ],
  operatorEmail: [
    { required: true, message: "请选择电子邮箱", trigger: "change" },
  ],
});

// 表单5
const ruleForm5 = reactive({
  observeContent: "",
});
const rules5 = reactive({
  observeContent: [{ required: true, message: "请输入内容", trigger: "blur" }],
});

// 表单6
const ruleForm6 = reactive([
  {
    summary: "", // 出境场景简述
    dataTypeValue: "", // 数据类型值（标签）数据接口：tag/tag?tagCode=datatype
    dataTypeName: "", // 数据类型名称（标签）
    impDeptName: "", // [重要数据]重要数据认定主管部门名称
    industryValue: "", // [重要数据、个人信息]涉及行业/领域值（标签）数据接口：tag/tag?tagCode=industryarea
    industryName: "", // [重要数据、个人信息]涉及行业/领域名称（标签）
    industryOther: "", // [重要数据、个人信息]涉及其他行业/领域
    impDataSize: "", // [重要数据]涉及重要数据规模
    impDataSizeUnitValue: "", // [重要数据]涉及重要数据规模单位值（标签）数据接口：tag/tag?tagCode=dataunit
    impDataSizeUnitName: "", // [重要数据]涉及重要数据规模单位名称（标签）
    containInfoFlag: false, // [个人信息]是否包含敏感个人信息
    personCount: "", // [个人信息]涉及自然人（去重）数量
    personCountUnitValue: "", // [个人信息]涉及自然人（去重）数量单位值（标签）数据接口：tag/tag?tagCode=personunit
    personCountUnitName: "", // [个人信息]涉及自然人（去重）数量单位名称（标签）
    receiveList: [
      // 境外接收方情况
      {
        statDescriptionFlag: false, // 填写统计说明
        statDescription: "", // 统计说明
        foreignReceiver: "", // 境外接收方名称
        areaValue: "", // 所在国家或地区值（标签）数据接口：tag/tag?tagCode=area
        areaName: "", // 所在国家或地区名称（标签）
        primaryBusiness: "", // 主营业务
        principalName: "", // 负责人姓名
        principalJob: "", // 负责人职务
        contactTel: "", // 联系方式-电话
        contactEmail: "", // 联系方式-邮箱
        addr: "", // 所在地址
      },
    ],
  },
]);

const rules6 = reactive({
  summary: [{ required: true, message: "请输入内容", trigger: "blur" }],
  dataTypeValue: [
    { required: true, message: "请输入数据类型", trigger: "blur" },
  ],

  industryValue: [
    { required: true, message: "请选择涉及行业/领域 ", trigger: "change" },
  ],
  impDataSize: [
    { required: true, message: "请输入涉及重要数据规模 ", trigger: "change" },
  ],
  impDataSizeUnitValue: [
    {
      required: true,
      message: "请选择涉及重要数据规模单位值 ",
      trigger: "change",
    },
  ],
  containInfoFlag: [
    {
      required: true,
      message: "请选择是否包含敏感个人信息",
      trigger: "change",
    },
  ],
});

// 表单7
const ruleForm7 = reactive({
  creditCodeAttachIdList: [
    // 统一社会信用代码证件影印件（加盖公章） 附件id集合
  ],
  credfileName: "",
  legalIdCardAttachIdList: [
    //  法定代表人身份证件影印件（加盖公章） 附件id集合
  ],
  legalfileName: "",
  operatorIdCardAttachIdList: [
    // 经办人身份证件影印件（加盖公章） 附件id集合
  ],
  operatorfileName: "",

  delegateAttachIdList: [
    // 经办人授权委托书 附件id集合
  ],
  delegatefileName: "",

  promiseAttachIdList: [
    // 承诺书 附件id集合
  ],
  promfileName: "",
  contractAttachIdList: [
    // 与境外接收方拟订立的数据出境相关合同或者其他具有法律效力的文件影印件（加盖公章） 附件id集合
  ],
  contfileName: "",
  reportAttachIdList: [
    // 数据出境风险自评估报告 附件id集合
  ],
  reportfileName: "",
  otherAttachIdList: [
    // 其他相关证明材料 附件id集合
  ],
  otherfileName: "",
});
const rules7 = reactive({
  creditCodeAttachIdList: [
    {
      required: true,
      message: "请上传统一社会信用代码证件影印件(加盖公章)",
      trigger: "blur",
    },
  ],
  legalIdCardAttachIdList: [
    {
      required: true,
      message: "请上传法定代表人身份证件影印件（加盖公章）",
      trigger: "blur",
    },
  ],
  operatorIdCardAttachIdList: [
    {
      required: true,
      message: "请上传经办人身份证件影印件（加盖公章）",
      trigger: "blur",
    },
  ],
  delegateAttachIdList: [
    { required: true, message: "请上传经办人授权委托书", trigger: "blur" },
  ],
  contractAttachIdList: [
    {
      required: true,
      message:
        "请上传与境外接收方拟订立的数据出境相关合同或其他具有法律效力影印件 (加盖公章)",
      trigger: "blur",
    },
  ],
  promiseAttachIdList: [
    { required: true, message: "请上传承诺书", trigger: "blur" },
  ],
  reportAttachIdList: [
    {
      required: true,
      message: "请上传数据出境风险自评估报告 ",
      trigger: "blur",
    },
  ],
});
const items = ref({});

// 详情
const getItems = () => {
  if (query.id) {
    const baseUrl = "k2401-data-exit/exit/";
    const ids = query.id.replace(/"/g, "");
    const url = `${baseUrl}${ids}`;
    const http = setHttp();

    http
      .get(url, {
        Authorization: "Bearer " + token,
      })
      .then((res: any) => {
        items.value = res;
        // console.log(res, "resresres--------------");
        checkList.value = res.conditionContent.split("|");

        const {
          // ruleForm1
          unitName,
          unitNatureValue,
          unitNatureName,
          unitNatureOther,
          unitCategoryValue,
          unitCategoryName,
          unitCategoryOther,
          creditCode,
          unitRegAddr,
          unitOfficeAddr,
          keyInfoOperatorFlag,
          empCount,
          empCountUnitValue,
          empCountUnitName,
          infoSize,
          infoSizeUnitValue,
          infoSizeUnitName,
          // ruleForm2
          legal,
          legalTel,
          legalNationalValue,
          legalNationalName,
          legalJob,
          legalCertificateTypeValue,
          legalCertificateTypeName,
          legalCertificateTypeOther,
          legalCertificateCode,
          legalEmail,
          // ruleForm3
          principalName, // 负责人姓名
          principalTel, // 负责人联系电话
          principalNationalValue, // 负责人国籍值（标签）数据接口：tag/tag?tagCode=guoji
          principalNationalName, // 负责人国籍名称（标签）
          principalJob, // 负责人职务
          principalCertificateTypeValue, //  负责人证件类型值（标签）数据接口：tag/tag?tagCode=certificatetype
          principalCertificateTypeName, // 负责人证件类型名称（标签）
          principalCertificateTypeOther, // 负责人其他证件类型
          principalCertificateCode, // 负责人证件号码
          principalOrgName, // 负责人管理机构名称
          principalOrgEmpCount, // 负责人管理机构人数
          principalOrgEmpCountUnitValue, // 负责人管理机构人数单位值（标签）数据接口：tag/tag?tagCode=personunit
          principalOrgEmpCountUnitName, // 负责人管理机构人数单位名称（标签）
          principalEmail, // 负责人电子邮箱
          // ruleForm4
          operator,
          operatorTel,
          operatorNationalValue,
          operatorNationalName,
          operatorJob,
          operatorCertificateTypeValue,
          operatorCertificateTypeName,
          operatorCertificateTypeOther,
          operatorCertificateCode,
          operatorEmail,
          // ruleForm5
          observeContent,
          // ruleForm6
          sceneList,
          // ruleForm7
          creditCodeAttachList,
          legalIdCardAttachList,
          operatorIdCardAttachList,
          delegateAttachList,
          promiseAttachList,
          contractAttachList,
          reportAttachList,
          otherAttachList,
        } = res; // 解构需要的属性

        const ruleF1 = {
          unitName,
          unitNatureValue,
          unitNatureName,
          unitNatureOther,
          unitCategoryValue,
          unitCategoryName,
          unitCategoryOther,
          creditCode,
          unitRegAddr,
          unitOfficeAddr,
          keyInfoOperatorFlag: keyInfoOperatorFlag ? "1" : "0",
          empCount,
          empCountUnitValue,
          empCountUnitName,
          infoSize,
          infoSizeUnitValue,
          infoSizeUnitName,
        };
        Object.assign(ruleForm1, ruleF1);

        const ruleF2 = {
          legal,
          legalTel,
          legalNationalValue,
          legalNationalName,
          legalJob,
          legalCertificateTypeValue,
          legalCertificateTypeName,
          legalCertificateTypeOther,
          legalCertificateCode,
          legalEmail,
        };
        Object.assign(ruleForm2, ruleF2);
        const ruleF3 = {
          principalName, // 负责人姓名
          principalTel, // 负责人联系电话
          principalNationalValue, // 负责人国籍值（标签）数据接口：tag/tag?tagCode=guoji
          principalNationalName, // 负责人国籍名称（标签）
          principalJob, // 负责人职务
          principalCertificateTypeValue, //  负责人证件类型值（标签）数据接口：tag/tag?tagCode=certificatetype
          principalCertificateTypeName, // 负责人证件类型名称（标签）
          principalCertificateTypeOther, // 负责人其他证件类型
          principalCertificateCode, // 负责人证件号码
          principalOrgName, // 负责人管理机构名称
          principalOrgEmpCount, // 负责人管理机构人数
          principalOrgEmpCountUnitValue, // 负责人管理机构人数单位值（标签）数据接口：tag/tag?tagCode=personunit
          principalOrgEmpCountUnitName, // 负责人管理机构人数单位名称（标签）
          principalEmail, // 负责人电子邮箱
        };
        Object.assign(ruleForm3, ruleF3);

        // ruleForm4
        const ruleF4 = {
          operator,
          operatorTel,
          operatorNationalValue,
          operatorNationalName,
          operatorJob,
          operatorCertificateTypeValue,
          operatorCertificateTypeName,
          operatorCertificateTypeOther,
          operatorCertificateCode,
          operatorEmail,
        };
        Object.assign(ruleForm4, ruleF4);
        // ruleForm5
        const ruleF5 = {
          observeContent,
        };

        Object.assign(ruleForm5, ruleF5);

        // ruleForm6

        Object.assign(ruleForm6, sceneList);

        // ruleForm7
        const ruleF7 = {
          creditCodeAttachIdList: creditCodeAttachList,
          credfileName: creditCodeAttachList[0].fileName,
          legalIdCardAttachIdList: legalIdCardAttachList,
          legalfileName: legalIdCardAttachList[0].fileName,
          operatorIdCardAttachIdList: operatorIdCardAttachList,
          operatorfileName: operatorIdCardAttachList[0].fileName,
          delegateAttachIdList: delegateAttachList,
          delegatefileName: delegateAttachList[0].fileName,
          promiseAttachIdList: promiseAttachList,
          promfileName: promiseAttachList[0].fileName,
          contractAttachIdList: contractAttachList,
          contfileName: contractAttachList[0].fileName,
          reportAttachIdList: reportAttachList,
          reportfileName: reportAttachList[0].fileName,
          otherAttachIdList: otherAttachList,
          otherfileName: otherAttachList[0].fileName,
        };
        Object.assign(ruleForm7, ruleF7);

        console.log(ruleForm1, "ruleForm1ruleForm1");
      });
  }
};

// 提交
const sumit = async (num: any) => {
  let params = {
    // 0 数据出境安全评估申报使用情形
    conditionContent: checkList.value.join("|"),
    // "（一）关键信息基础设施运营者向境外提供个人信息或者重要数据；|（二）关键信息基础设施运营者以外的数据处理者向境外提供重要数据，或者自当年1月1日起累计向境外提供100万人以上个人信息（不含敏感个人信息）或者1万人以上敏感个人信息；", // 前提（每个选项的值用|分割即可）
    // 1 数据处理者情况
    unitName: ruleForm1.unitName, // 单位名称
    unitNatureValue: ruleForm1.unitNatureValue, // 单位性质值（标签）（标签接口数据接口参见接口1.12.3），取tagValue字段，数据接口：tag/tag?tagCode=unitnature
    unitNatureName: ruleForm1.unitNatureName, // 单位性质名称（标签）/同上，取tagName字段
    unitNatureOther: ruleForm1.unitNatureOther, // 其他单位性质
    unitCategoryValue: ruleForm1.unitCategoryValue, // 单位类型值（标签）数据接口：tag/tag?tagCode=unitcategory
    unitCategoryName: ruleForm1.unitCategoryName, // 单位类型名称（标签）
    unitCategoryOther: ruleForm1.unitCategoryOther, // 其他单位类型
    creditCode: ruleForm1.creditCode, // 统一社会信用代码
    unitRegAddr: ruleForm1.unitRegAddr, // 单位注册地
    unitOfficeAddr: ruleForm1.unitOfficeAddr, // 办公所在地
    keyInfoOperatorFlag: ruleForm1.keyInfoOperatorFlag == "1" ? true : false, // 是否为关键信息基础设施运营者
    empCount: ruleForm1.empCount, // 员工数据
    empCountUnitValue: ruleForm1.empCountUnitValue, // 员工数量单位值（标签）数据接口：tag/tag?tagCode=personunit
    empCountUnitName: ruleForm1.empCountUnitName, // 员工数量单位名称（标签）
    infoSize: ruleForm1.infoSize, // 处理个人信息规模
    infoSizeUnitValue: ruleForm1.infoSizeUnitValue, // 处理个人信息规模单位值（标签）数据接口：tag/tag?tagCode=dataunit
    infoSizeUnitName: ruleForm1.infoSizeUnitName, // 处理个人信息规模单位名称（标签）
    // 2 法定代表人
    legal: ruleForm2.legal, // 法人姓名
    legalTel: ruleForm2.legalTel, // 法人联系电话
    legalNationalValue: ruleForm2.legalNationalValue, // 法人国籍值（标签）数据接口：tag/tag?tagCode=guoji
    legalNationalName: ruleForm2.legalNationalName, // 法人国籍名称（标签）
    legalJob: ruleForm2.legalJob, // 法人职务
    legalCertificateTypeValue: ruleForm2.legalCertificateTypeValue, // 法人证件类型值（标签）数据接口：tag/tag?tagCode=certificatetype
    legalCertificateTypeName: ruleForm2.legalCertificateTypeName, // 法人证件类型名称（标签）
    legalCertificateTypeOther: ruleForm2.legalCertificateTypeOther, // 法人其他证件类型
    legalCertificateCode: ruleForm2.legalCertificateCode, // 法人证件号码
    legalEmail: ruleForm2.legalEmail, // 法人电子邮箱
    // 3 数据安全负责人和管理机构信息
    principalName: ruleForm3.principalName, // 负责人姓名
    principalTel: ruleForm3.principalTel, // 负责人联系电话
    principalNationalValue: ruleForm3.principalNationalValue, // 负责人国籍值（标签）数据接口：tag/tag?tagCode=guoji
    principalNationalName: ruleForm3.principalNationalName, // 负责人国籍名称（标签）
    principalJob: ruleForm3.principalJob, // 负责人职务
    principalCertificateTypeValue: ruleForm3.principalCertificateTypeValue, //  负责人证件类型值（标签）数据接口：tag/tag?tagCode=certificatetype
    principalCertificateTypeName: ruleForm3.principalCertificateTypeName, // 负责人证件类型名称（标签）
    principalCertificateTypeOther: ruleForm3.principalCertificateTypeOther, // 负责人其他证件类型
    principalCertificateCode: ruleForm3.principalCertificateCode, // 负责人证件号码
    principalOrgName: ruleForm3.principalOrgName, // 负责人管理机构名称
    principalOrgEmpCount: ruleForm3.principalOrgEmpCount, // 负责人管理机构人数
    principalOrgEmpCountUnitValue: ruleForm3.principalOrgEmpCountUnitValue, // 负责人管理机构人数单位值（标签）数据接口：tag/tag?tagCode=personunit
    principalOrgEmpCountUnitName: ruleForm3.principalOrgEmpCountUnitName, // 负责人管理机构人数单位名称（标签）
    principalEmail: ruleForm3.principalEmail, // 负责人电子邮箱
    // 4 经办人信息
    operator: ruleForm4.operator, // 经办人姓名
    operatorTel: ruleForm4.operatorTel, // 经办人联系电话
    operatorNationalValue: ruleForm4.operatorNationalValue, // 经办人国籍值（标签）数据接口：tag/tag?tagCode=guoji
    operatorNationalName: ruleForm4.operatorNationalName, // 经办人国籍名称（标签）
    operatorJob: ruleForm4.operatorJob, // 经办人职务
    operatorCertificateTypeValue: ruleForm4.operatorCertificateTypeValue, // 经办人证件类型值（标签）数据接口：tag/tag?tagCode=certificatetype
    operatorCertificateTypeName: ruleForm4.operatorCertificateTypeName, // 经办人证件类型名称（标签）
    operatorCertificateTypeOther: ruleForm4.operatorCertificateTypeOther, // 经办人其他证件类型
    operatorCertificateCode: ruleForm4.operatorCertificateCode, // 经办人证件号码
    operatorEmail: ruleForm4.operatorEmail, // 经办人电子邮箱
    // 5 数据处理者遵守中国法律、行政法规、部门规章情况
    observeContent: ruleForm5.observeContent,
    // 6 数据出境场景
    sceneList: ruleForm6,
    //  [
    //   // 数据出境场景集合
    //   {
    //     summary: "出境场景简述", // 出境场景简述
    //     dataTypeValue: "1", // 数据类型值（标签）数据接口：tag/tag?tagCode=datatype
    //     dataTypeName: "重要数据", // 数据类型名称（标签）
    //     impDeptName: "重要数据认定主管部门名称", // [重要数据]重要数据认定主管部门名称
    //     industryValue: "1", // [重要数据、个人信息]涉及行业/领域值（标签）数据接口：tag/tag?tagCode=industryarea
    //     industryName: "工业", // [重要数据、个人信息]涉及行业/领域名称（标签）
    //     industryOther: "涉及其他行业/领域", // [重要数据、个人信息]涉及其他行业/领域
    //     impDataSize: 100, // [重要数据]涉及重要数据规模
    //     impDataSizeUnitValue: "1", // [重要数据]涉及重要数据规模单位值（标签）数据接口：tag/tag?tagCode=dataunit
    //     impDataSizeUnitName: "MB", // [重要数据]涉及重要数据规模单位名称（标签）
    //     containInfoFlag: true, // [个人信息]是否包含敏感个人信息
    //     personCount: 100, // [个人信息]涉及自然人（去重）数量
    //     personCountUnitValue: "1", // [个人信息]涉及自然人（去重）数量单位值（标签）数据接口：tag/tag?tagCode=personunit
    //     personCountUnitName: "人", // [个人信息]涉及自然人（去重）数量单位名称（标签）
    //     receiveList: [
    //       // 境外接收方情况
    //       {
    //         statDescriptionFlag: true, // 填写统计说明
    //         statDescription: "统计说明内容", // 统计说明
    //         foreignReceiver: "境外接收方名称", // 境外接收方名称
    //         areaValue: "1", // 所在国家或地区值（标签）数据接口：tag/tag?tagCode=area
    //         areaName: "中国台湾", // 所在国家或地区名称（标签）
    //         primaryBusiness: "主营业务", // 主营业务
    //         principalName: "负责人姓名", // 负责人姓名
    //         principalJob: "负责人职务", // 负责人职务
    //         contactTel: "联系方式-电话", // 联系方式-电话
    //         contactEmail: "联系方式-邮箱", // 联系方式-邮箱
    //         addr: "所在地址", // 所在地址
    //       },
    //     ],
    //   },
    // ],
    // 7 数据出境安全评估申报材料上传:
    creditCodeAttachIdList: ruleForm7.creditCodeAttachIdList,
    legalIdCardAttachIdList: ruleForm7.legalIdCardAttachIdList,
    operatorIdCardAttachIdList: ruleForm7.operatorIdCardAttachIdList,
    delegateAttachIdList: ruleForm7.delegateAttachIdList,
    promiseAttachIdList: ruleForm7.promiseAttachIdList,
    contractAttachIdList: ruleForm7.contractAttachIdList,
    reportAttachIdList: ruleForm7.reportAttachIdList,
    otherAttachIdList: ruleForm7.otherAttachIdList,

    // creditCodeAttachIdList: [
    //   "1661292619461849090", // 统一社会信用代码证件影印件（加盖公章） 附件id集合
    // ],
    // legalIdCardAttachIdList: [
    //   "1661321500252299265", //  法定代表人身份证件影印件（加盖公章） 附件id集合
    // ],
    // operatorIdCardAttachIdList: [
    //   "1674334124413935617", // 经办人身份证件影印件（加盖公章） 附件id集合
    // ],
    // delegateAttachIdList: [
    //   "1674334852431740930", // 经办人授权委托书 附件id集合
    // ],
    // promiseAttachIdList: [
    //   "1674338104548261889", // 承诺书 附件id集合
    // ],
    // contractAttachIdList: [
    //   "1678979353561567234", // 与境外接收方拟订立的数据出境相关合同或者其他具有法律效力的文件影印件（加盖公章） 附件id集合
    // ],
    // reportAttachIdList: [
    //   "1785846491328344066", // 数据出境风险自评估报告 附件id集合
    // ],
    // otherAttachIdList: [
    //   "1785853147294588929", // 其他相关证明材料 附件id集合
    // ],

    // 状态
    status: num == 1 ? 1 : 0, // 枚举：0暂存、1填写完成
  };
  let res = "";
  if (!query.id) {
    res = (await http.post("k2401-data-exit/exit", params, {
      Authorization: "Bearer " + token,
    })) as any;
  } else {
    const baseUrl = "k2401-data-exit/exit/";
    const ids = query.id.replace(/"/g, "");
    const url = `${baseUrl}${ids}`;

    res = (await http.put(url, params, {
      Authorization: "Bearer " + token,
    })) as any;
  }
  console.log(res, "resresres");
  if (res) {
    if (num == 1) {
      router.go(-1);
    }
    return ElMessage({
      type: "success",
      message: num == 1 ? "填写完成" : "暂存成功",
    });
  } else {
    return ElMessage({
      type: "warning",
      message: num == 1 ? "填写失败" : "暂存失败",
    });
  }
};

const addOutbound = (index: any) => {
  let form = {
    statDescriptionFlag: false, // 填写统计说明
    statDescription: "", // 统计说明
    foreignReceiver: "", // 境外接收方名称
    areaValue: "", // 所在国家或地区值（标签）数据接口：tag/tag?tagCode=area
    areaName: "", // 所在国家或地区名称（标签）
    primaryBusiness: "", // 主营业务
    principalName: "", // 负责人姓名
    principalJob: "", // 负责人职务
    contactTel: "", // 联系方式-电话
    contactEmail: "", // 联系方式-邮箱
    addr: "", // 所在地址
  };

  ruleForm6[index].receiveList.push(form);
};

const addScene = () => {
  let form = {
    summary: "", // 出境场景简述
    dataTypeValue: "", // 数据类型值（标签）数据接口：tag/tag?tagCode=datatype
    dataTypeName: "", // 数据类型名称（标签）
    impDeptName: "", // [重要数据]重要数据认定主管部门名称
    industryValue: "", // [重要数据、个人信息]涉及行业/领域值（标签）数据接口：tag/tag?tagCode=industryarea
    industryName: "", // [重要数据、个人信息]涉及行业/领域名称（标签）
    industryOther: "", // [重要数据、个人信息]涉及其他行业/领域
    impDataSize: "", // [重要数据]涉及重要数据规模
    impDataSizeUnitValue: "", // [重要数据]涉及重要数据规模单位值（标签）数据接口：tag/tag?tagCode=dataunit
    impDataSizeUnitName: "", // [重要数据]涉及重要数据规模单位名称（标签）
    containInfoFlag: false, // [个人信息]是否包含敏感个人信息
    personCount: "", // [个人信息]涉及自然人（去重）数量
    personCountUnitValue: "", // [个人信息]涉及自然人（去重）数量单位值（标签）数据接口：tag/tag?tagCode=personunit
    personCountUnitName: "", // [个人信息]涉及自然人（去重）数量单位名称（标签）
    receiveList: [
      // 境外接收方情况
      {
        statDescriptionFlag: false, // 填写统计说明
        statDescription: "", // 统计说明
        foreignReceiver: "", // 境外接收方名称
        areaValue: "", // 所在国家或地区值（标签）数据接口：tag/tag?tagCode=area
        areaName: "", // 所在国家或地区名称（标签）
        primaryBusiness: "", // 主营业务
        principalName: "", // 负责人姓名
        principalJob: "", // 负责人职务
        contactTel: "", // 联系方式-电话
        contactEmail: "", // 联系方式-邮箱
        addr: "", // 所在地址
      },
    ],
  };
  ruleForm6.push(form);
};

const closeScene = (index: any) => {
  ruleForm6.splice(index, 1);
};
const closeOutbound = (index: any, ind: any) => {
  ruleForm6[index].receiveList.splice(ind, 1);
};

const deleteFileName = (num: any) => {
  if (num == 1) {
    ruleForm7.credfileName = "";
    ruleForm7.creditCodeAttachIdList = [];
  } else if (num == 2) {
    ruleForm7.legalfileName = "";
    ruleForm7.legalIdCardAttachIdList = [];
  } else if (num == 3) {
    ruleForm7.operatorfileName = "";
    ruleForm7.operatorIdCardAttachIdList = [];
  } else if (num == 4) {
    ruleForm7.delegatefileName = "";
    ruleForm7.delegateAttachIdList = [];
  } else if (num == 5) {
    ruleForm7.promfileName = "";
    ruleForm7.promiseAttachIdList = [];
  } else if (num == 6) {
    ruleForm7.contfileName = "";
    ruleForm7.contractAttachIdList = [];
  } else if (num == 7) {
    ruleForm7.reportfileName = "";
    ruleForm7.reportAttachIdList = [];
  } else {
    ruleForm7.otherfileName = "";
    ruleForm7.otherAttachIdList = [];
  }
};
// 校验表单1
const submitForm1 = async (ruleFormRef1: FormInstance | undefined) => {
  if (!ruleFormRef1) return;

  await ruleFormRef1.validate(async (valid: boolean) => {
    if (valid) {
      // 单位性质
      unitNatureValuelist.value.map((item: any) => {
        if (item.tagValue == ruleForm1.unitNatureValue) {
          ruleForm1.unitNatureName = item.tagName;
        }
      });
      // 单位类型
      unitCategoryList.value.map((item: any) => {
        if (item.tagValue == ruleForm1.unitCategoryValue) {
          ruleForm1.unitCategoryName = item.tagName;
        }
      });
      // 单位
      unitList.value.map((item: any) => {
        // 员工数量单位
        if (item.tagValue == ruleForm1.empCountUnitValue) {
          ruleForm1.empCountUnitName = item.tagName;
        }
        // 处理个人信息规模单位
        if (item.tagValue == ruleForm1.infoSizeUnitValue) {
          ruleForm1.infoSizeUnitName = item.tagName;
        }
      });
      console.log(ruleForm1, "validvalidsubmit!");

      active.value++;
    } else {
      showWarningMessage("请补求信息");
    }
  });
};

// 校验表单2
const submitForm2 = async (ruleFormRef2: FormInstance | undefined) => {
  if (!ruleFormRef2) return;
  await ruleFormRef2.validate(async (valid: boolean) => {
    if (valid) {
      // 国籍
      guoji.value.map((item: any) => {
        if (item.tagValue == ruleForm2.legalNationalValue) {
          ruleForm2.legalNationalName = item.tagName;
        }
      });
      // 证件类型
      certificatetype.value.map((item: any) => {
        if (item.tagValue == ruleForm2.legalCertificateTypeValue) {
          ruleForm2.legalCertificateTypeName = item.tagName;
        }
      });
      console.log("error submit!", ruleForm2);

      active.value++;
    } else {
      showWarningMessage("请补求信息");
    }
  });
};

// 校验表单3
const submitForm3 = async (ruleFormRef3: FormInstance | undefined) => {
  if (!ruleFormRef3) return;
  await ruleFormRef3.validate(async (valid: boolean) => {
    if (valid) {
      // 国籍
      guoji.value.map((item: any) => {
        if (item.tagValue == ruleForm3.principalNationalValue) {
          ruleForm3.principalNationalName = item.tagName;
        }
      });
      // 证件类型
      certificatetype.value.map((item: any) => {
        if (item.tagValue == ruleForm3.principalCertificateTypeValue) {
          ruleForm3.principalCertificateTypeName = item.tagName;
        }
      });
      // 单位
      unitList.value.map((item: any) => {
        // 员工数量单位
        if (item.tagValue == ruleForm3.principalOrgEmpCountUnitValue) {
          ruleForm3.principalOrgEmpCountUnitName = item.tagName;
        }
      });
      console.log("error submit!", ruleForm3);
      active.value++;
    } else {
      showWarningMessage("请补求信息");
    }
  });
};
const getName = (list: any, code: any, name: any) => {
  list.map((item: any) => {
    if (item.tagValue == code) {
      name = item.tagName;
    }
  });
};
// 校验表单4
const submitForm4 = async (ruleFormRef4: FormInstance | undefined) => {
  if (!ruleFormRef4) return;
  await ruleFormRef4.validate(async (valid: boolean) => {
    if (valid) {
      // 国籍
      guoji.value.map((item: any) => {
        if (item.tagValue == ruleForm4.operatorNationalValue) {
          ruleForm4.operatorNationalName = item.tagName;
        }
      });
      // 证件类型
      certificatetype.value.map((item: any) => {
        if (item.tagValue == ruleForm4.operatorCertificateTypeValue) {
          ruleForm4.operatorCertificateTypeName = item.tagName;
        }
      });
      active.value++;
    } else {
      showWarningMessage("请补求信息");
    }
  });
};

const showWarningMessage = (message: string) => {
  ElMessage({ type: "warning", message });
};
// 单位性质
const unitNatureValuelist = ref([]);
const getUnitNatureValue = () => {
  const http = setHttp();

  http
    .get("/tag/tag?tagCode=unitnature", {
      Authorization: "Bearer " + token,
    })
    .then((data: any) => {
      unitNatureValuelist.value = data.children;
    });
};
// 单位类型  unitCategoryValue
const unitCategoryList = ref([]);
const getUnitCategoryValue = () => {
  const http = setHttp();
  http
    .get("/tag/tag?tagCode=unitcategory", {
      Authorization: "Bearer " + token,
    })
    .then((data: any) => {
      unitCategoryList.value = data.children;
    });
};
// 数量单位   empCountUnitValue
const unitList = ref([]);
const getUnitList = () => {
  const http = setHttp();

  http
    .get("/tag/tag?tagCode=personunit", {
      Authorization: "Bearer " + token,
    })
    .then((data: any) => {
      unitList.value = data.children;
    });
};
// 法人国籍   legalNationalValue
const guoji = ref([]);
const getGuoji = () => {
  const http = setHttp();

  http
    .get("/tag/tag?tagCode=guoji", {
      Authorization: "Bearer " + token,
    })
    .then((data: any) => {
      guoji.value = data.children;
      // console.log(guoji.value,'guoji.value')
    });
};
// 证件类型   legalCertificateTypeValue
const certificatetype = ref([]);
const getCertificatetype = () => {
  const http = setHttp();

  const res = http
    .get("/tag/tag?tagCode=certificatetype", {
      Authorization: "Bearer " + token,
    })
    .then((data: any) => {
      certificatetype.value = data.children;
    });
};
// 涉及行业/领域   industryValue
const industryarea = ref([]);
const getIndustryarea = () => {
  const http = setHttp();

  http
    .get("/tag/tag?tagCode=industryarea", {
      Authorization: "Bearer " + token,
    })
    .then((data: any) => {
      industryarea.value = data.children;
    });
};
// 所在国家或地区   areaValue
const area = ref([]);
const getArea = () => {
  const http = setHttp();

  http
    .get("/tag/tag?tagCode=area", {
      Authorization: "Bearer " + token,
    })
    .then((data: any) => {
      area.value = data.children;
    });
};
// 法人国籍   legalNationalValue
const datatype = ref([]);
const getDatatype = () => {
  const http = setHttp();

  http
    .get("/tag/tag?tagCode=datatype", {
      Authorization: "Bearer " + token,
    })
    .then((data: any) => {
      datatype.value = data.children;
    });
};
// 数量单位   empCountUnitValue
const dataunit = ref([]);
const getDataunit = () => {
  const http = setHttp();

  http
    .get("/tag/tag?tagCode=dataunit", {
      Authorization: "Bearer " + token,
    })
    .then((data: any) => {
      dataunit.value = data.children;
    });
};
</script>
<style lang="scss" scoped>
::v-deep .contain {
  padding: 10px;
  width: 1300px;
  margin: 0 auto;
  .el-upload-dragger {
    border: none;
    padding: 0;
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
</style>

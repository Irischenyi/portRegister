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
        <div style="font-size: 20px">
          个人信息出境标准合同备案材料完备性预检查
        </div>

        <div style="padding: 40px">
          <el-steps
            style="width: 100%"
            :active="active"
            align-center
            process-status="finish"
          >
            <el-step title="个人信息出境标准合同备案适用场景"></el-step>
            <el-step title="个人信息处理者情况" />
            <el-step title="法定代表人 信息" />
            <el-step title="经办人信息" />
            <el-step title="承诺书" />
            <el-step title="个人信息出境场景" />
            <el-step title="个人信息出境标准合同" />
            <el-step title="个人信息保护影响评估报告" />
            <el-step title="其他相关证明材料" />
          </el-steps>
        </div>

        <!-- 页面 -->
        <div style="margin-top: 20px">
          <div v-if="active == 0">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              个人信息处理者通过订立标准合同的方式向境外提供个人信息的，应当同时符合下列情形
            </div>
            <div style="margin-bottom: 20px">
              <el-checkbox-group v-model="checkList">
                <div>
                  <el-checkbox
                    label=" (一) 关键信息基础设施运营者以外的数据处理者             "
                    value="1"
                  />
                </div>
                <div>
                  <el-checkbox
                    label="（二) 自当年1月1日起，累计向境外提供10万人以上、不满100万人个人信 (不含敏感个人信息) 的；"
                    value="2"
                  />
                </div>
                <div>
                  <el-checkbox
                    label="（三) 自当年1月1日起，累计向境外提供不满1万人敏感个人信息的；"
                    value="3"
                  />
                </div>
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
                        <div><span style="color: red"></span> 单位性质</div>
                        <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
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
                        <div><span style="color: red">*-</span></div>
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
                        <div><span style="color: red">*-</span></div>
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
                          <span style="color: red"></span>统一社会信用代码
                        </div>
                        <el-input
                          v-model="ruleForm1.creditCode"
                          placeholder="请输入统一社会信用代码"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

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
            <el-checkbox
              v-model="ruleForm2.legalFlag"
              label="无法定代表人"
              size="large"
            />
            <div style="height: 300px; margin: 0 0 20px 20px">
              <el-form
                v-if="!ruleForm2.legalFlag"
                ref="ruleFormRef2"
                :model="ruleForm2"
                :rules="rules2"
              >
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
                          <!-- <el-option label="居民身份证" value="1" />
                          <el-option label="护照" value="2" />
                          <el-option label="台湾居民来往大陆通行证" value="3" />
                          <el-option label="港澳居民来往大陆通行证" value="4" />
                          <el-option label="其他" value="5" /> -->
                        </el-select>
                      </div>
                    </el-form-item>

                    <el-form-item prop="legalCertificateTypeOther">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*-</span></div>
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
              经办人信息
            </div>
            <div style="margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef3" :model="ruleForm3" :rules="rules3">
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
                          v-model="ruleForm3.operator"
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
                          style="width: 150px"
                          v-model="ruleForm3.operatorNationalValue"
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
                          v-model="ruleForm3.operatorTel"
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
                          v-model="ruleForm3.operatorEmail"
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
                          v-model="ruleForm3.operatorCertificateTypeValue"
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
                        <div><span style="color: red">*-</span></div>
                        <el-input
                          v-model="ruleForm3.operatorCertificateTypeOther"
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
                          v-model="ruleForm3.operatorCertificateCode"
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
                          v-model="ruleForm3.operatorJob"
                          placeholder="请输入职务"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <!-- <el-col :span="8" style="display: flex">
                    <el-form-item prop="gljgrs">
                      <div style="display: flex; flex-direction: column">
                        <div>
                          <span style="color: red">*</span> 管理机构人数
                        </div>
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm3.gljgrs"
                          clearable
                        >
                          <el-option label="单位性质1" value="单位性质1" />
                          <el-option label="单位性质2" value="单位性质2" />
                        </el-select>
                      </div>
                    </el-form-item>

                    <el-form-item prop="gljgrsdw">
                      <div style="display: flex; flex-direction: column">
                        <div>
                          <span style="color: red">*</span> 管理机构人数单位
                        </div>
                        <el-input v-model="ruleForm3.gljgrsdw"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="dzyx">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>电子邮箱</div>
                        <el-input v-model="ruleForm3.dzyx"></el-input>
                      </div>
                    </el-form-item>
                  </el-col> -->
                </el-row>
              </el-form>
            </div>
            <div></div>
          </div>

          <div v-if="active == 4">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              承诺书
            </div>
            <div style="margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef4" :model="ruleForm4" :rules="rules4">
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
                        <div style="display: flex">
                          <el-input
                            style="margin-right: 50px"
                            v-model="ruleForm4.fileName"
                            placeholder="请上传格式为PDF、OFD、PNG、JPG、JPEG的文件"
                          ></el-input>
                          <!-- <el-button
                            style="
                              border-radius: 50px;
                              background-color: #fff;
                              color: #4984ff;
                            "
                            type="primary"
                            :icon="Download"
                            >上传文件</el-button
                          > -->
                          <!-- <q-file
                        v-model="file"
                        filled
                        style="max-width: 300px"
                        /> -->
                          <el-upload
                            drag
                            class="upload-demo"
                            :show-file-list="false"
                            :http-request="customUpload"
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

                            <!-- <template #tip>
                              <div class="el-upload__tip">
                                jpg/png files with a size less than 500KB.
                              </div>
                            </template> -->
                          </el-upload>
                          <!-- <div v-if="ruleForm4.promiseAttachIdList.length > 0">
                            已上传
                          </div> -->
                        </div>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <div></div>
            <div style="color: #2977ff; margin-bottom: 10px; font-size: 16px">
              《承诺书》模板下载
            </div>
          </div>

          <div v-if="active == 5">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              个人信息出境场景描述
            </div>
            <div style="margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef5" :model="ruleForm5" :rules="rules5">
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
                        <div><span style="color: red">*</span>出境场景简述</div>
                        <el-input
                          :rows="6"
                          type="textarea"
                          v-model="ruleForm5.summary"
                          placeholder="填写拟出境个人信息类型，比如姓名(真实姓名)、电话号码(手机号或固定电话号码)、身份证(身份证号码或身份证照片)、护照(护照号码或护照照片)、电子邮箱、移动设备型号(如手机、PAD型号)、社交媒体账号、社交媒体浏览\搜索\点赞等行为记录、银行卡号、交易信息、用户设置的访问密码、设备型号信息、位置信息(静态信息)、轨迹信息(动态信息)、影像记录信息、个人生物识别信息(面部识别或指纹识别或声音识别)、病例、医疗影像信息、工作经历、教育经历信息、办公地址、家庭地址、家庭成员、家庭财产信息(如家庭收入、债务)、其他"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <div
                  style="color: #2977ff; font-size: 15px; margin-bottom: 20px"
                >
                  拟数据出境情况
                </div>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="dataTypeName">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 100%;
                        "
                      >
                        <div><span style="color: red">*</span> 数据类型</div>
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm5.dataTypeName"
                          clearable
                          placeholder="请选择数据类型"
                        >
                          <el-option label="个人信息" value="1" />
                        </el-select>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item prop="containInfoFlag">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span> 是否包含敏感个人信息
                        </div>
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm5.containInfoFlag"
                          clearable
                          placeholder="请选择数据类型"
                        >
                          <el-option label="是" value="1" />
                          <el-option label="否" value="0" />
                        </el-select>
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
                          v-model="ruleForm5.industryValue"
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
                          <span style="color: red">*</span>涉及其他行业/领域
                        </div>
                        <el-input
                          v-model="ruleForm5.industryOther"
                          placeholder="请输入涉及行业/领域（其他）"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="personCount">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 150px;
                        "
                      >
                        <div>
                          <span style="color: red">*</span
                          >涉及自然人（去重）数量
                        </div>
                        <el-input
                          v-model="ruleForm5.personCount"
                          placeholder="请输入涉及自然人（去重）数量"
                        ></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item prop="personCountUnitValue">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span
                          >涉及自然人（去重）数量单位
                        </div>

                        <el-select
                          style="width: 150px"
                          v-model="ruleForm5.personCountUnitValue"
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

                <div
                  style="color: #2977ff; font-size: 15px; margin-bottom: 20px"
                >
                  境外接收方情况
                </div>

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
                          v-model="ruleForm5.foreignReceiver"
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
                          <span style="color: red">*</span> 所在国家或者地区
                        </div>
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm5.areaValue"
                          clearable
                          placeholder="请选择所在国家或者地区"
                        >
                          <el-option
                            :label="(item as any).tagName"
                            :value="(item as any).tagValue"
                            v-for="(item, index) in area"
                            :key="index"
                          />
                          <!-- <el-option label="是" value="1" />
                          <el-option label="否" value="1" /> -->
                        </el-select>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="primaryBusiness">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*</span> 主营业务</div>
                        <el-input
                          v-model="ruleForm5.primaryBusiness"
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
                        <div><span style="color: red">*</span>负责人姓名</div>
                        <el-input
                          v-model="ruleForm5.principalName"
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
                        <div><span style="color: red">*</span>负责人职务</div>

                        <el-input
                          v-model="ruleForm5.principalJob"
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
                        <div><span style="color: red"></span>联系方式-电话</div>
                        <el-input
                          v-model="ruleForm5.contactTel"
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
                        <div><span style="color: red"></span>联系方式-邮箱</div>

                        <el-input
                          v-model="ruleForm5.contactEmail"
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
                        <div><span style="color: red">*</span>所在地址</div>
                        <el-input
                          :rows="6"
                          type="textarea"
                          v-model="ruleForm5.addr"
                          placeholder="请输入所在地址"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
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
                          v-model="ruleForm5.statDescription"
                          placeholder="请输入统计说明"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>

          <div v-if="active == 6">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              承诺书
            </div>
            <div style="margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef6" :model="ruleForm6" :rules="rules6">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="contractMakeDate">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span>标准合同订立日期
                        </div>
                        <el-date-picker
                          v-model="ruleForm6.contractMakeDate"
                          type="date"
                          placeholder="请选择标准合同订立日期"
                        />
                        <!-- <el-input
                          v-model="ruleForm6.contractMakeDate"
                          placeholder="请输入办公所在地"
                        ></el-input> -->
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="contractValidDate">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span>标准合同生效日期
                        </div>
                        <el-date-picker
                          v-model="ruleForm6.contractValidDate"
                          type="date"
                          placeholder="请选择标准合同生效日期"
                        />
                        <!-- <el-input
                          v-model="ruleForm6.contractValidDate"
                          placeholder="请输入办公所在地"
                        ></el-input> -->
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="contractContent">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div>
                          <span style="color: red"></span>相关商业合同名称
                        </div>
                        <el-input
                          v-model="ruleForm6.contractContent"
                          placeholder="请输入相关商业合同名称"
                        ></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item prop="standardContractAttachIdList">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 70%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span>
                          标准合同文件
                        </div>
                        <div style="display: flex">
                          <el-input
                            style="margin-right: 50px"
                            v-model="ruleForm6.fileName"
                            placeholder="请上传格式为PDF、OFD、PNG、JPG、JPEG的文件"
                          ></el-input>
                          <el-upload
                            drag
                            class="upload-demo"
                            :show-file-list="false"
                            :http-request="customUpload6"
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

                            <!-- <template #tip>
                              <div class="el-upload__tip">
                                jpg/png files with a size less than 500KB.
                              </div>
                            </template> -->
                          </el-upload>
                          <!-- <el-button
                            style="
                              border-radius: 50px;
                              background-color: #fff;
                              color: #4984ff;
                            "
                            type="primary"
                            :icon="Download"
                            >上传文件</el-button
                          > -->
                        </div>
                      </div>
                    </el-form-item>
                    <div style="font-size: 12px; margin-top: -10px">
                      请上传《个人信息出境标准合同》加盖公章的影印件
                    </div>
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <div></div>
            <div style="color: #2977ff; margin-bottom: 10px; font-size: 16px">
              《个人信息出境标准合同》模板下载
            </div>
          </div>

          <div v-if="active == 7">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              个人信息保护影响评估报告
            </div>
            <div style="margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef7" :model="ruleForm7" :rules="rules7">
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
                          个人信息保护影响评估报告
                        </div>
                        <div style="display: flex">
                          <el-input
                            style="margin-right: 50px"
                            v-model="ruleForm7.fileName"
                            placeholder="请上传格式为PDF、OFD、PNG、JPG、JPEG的文件"
                          ></el-input>
                          <el-upload
                            drag
                            class="upload-demo"
                            :show-file-list="false"
                            :http-request="customUpload7"
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

                            <!-- <template #tip>
                              <div class="el-upload__tip">
                                jpg/png files with a size less than 500KB.
                              </div>
                            </template> -->
                          </el-upload>
                          <!-- <el-button
                            style="
                              border-radius: 50px;
                              background-color: #fff;
                              color: #4984ff;
                            "
                            type="primary"
                            :icon="Download"
                            >上传文件</el-button
                          > -->
                        </div>
                      </div>
                    </el-form-item>
                    <div style="font-size: 12px; margin-top: -10px">
                      请上传《个人信息保护影响评估报告》加盖公章的影印件
                    </div>
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <div></div>
            <div style="color: #2977ff; margin-bottom: 10px; font-size: 16px">
              《个人信息保护影响评估报告》模板下载
            </div>
          </div>

          <div v-if="active == 8">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              承诺书
            </div>
            <div style="margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef8" :model="ruleForm8" :rules="ruleForm8">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item prop="delegateAttachIdList">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 90%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span>
                          经办人授权委托书
                        </div>
                        <div style="display: flex">
                          <el-input
                            style="margin-right: 50px"
                            v-model="ruleForm8.fileName1"
                          ></el-input>

                          <el-upload
                            drag
                            class="upload-demo"
                            :show-file-list="false"
                            :http-request="customUpload8"
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

                            <!-- <template #tip>
                              <div class="el-upload__tip">
                                jpg/png files with a size less than 500KB.
                              </div>
                            </template> -->
                          </el-upload>
                        </div>
                      </div>
                    </el-form-item>
                    <div style="margin-top: -10px">
                      请上传《经办人授权委托书》加盖公章的影印件
                    </div>
                    <div
                      style="color: #2977ff; margin: 20px 0; font-size: 16px"
                    >
                      《经办人授权委托书》模板下载
                    </div>
                    <!-- <div style="font-size: 12px; margin-top: -10px">
                      请上传《个人信息出境标准合同》加盖公章的影印件
                    </div> -->
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <div></div>
            <div style="color: #2977ff; margin-bottom: 10px; font-size: 16px">
              其他文件上传
            </div>
            <div style="margin-left: 20px">
              <el-input
                style="margin-right: 50px"
                v-model="ruleForm8.fileName2"
              ></el-input>
              <el-upload
                drag
                class="upload-demo"
                :show-file-list="false"
                :http-request="customUpload82"
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

                <!-- <template #tip>
                              <div class="el-upload__tip">
                                jpg/png files with a size less than 500KB.
                              </div>
                            </template> -->
              </el-upload>
              <div style="margin-top: 10px">
                请上传除承诺书、个人信息出境标准合同、个人信息保护影响评估报告、经办人授权委托书以外的其他材料，格式为PDF、OFD、PNG、
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
            v-if="active < 8"
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
            v-if="active == 8"
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
import { ref, reactive, onMounted, watch } from "vue";
import { ElMessage } from "element-plus";
import type {
  ComponentSize,
  FormInstance,
  FormRules,
  UploadProps,
  UploadUserFile,
  FormValidateCallback,
} from "element-plus";
import { Download } from "@element-plus/icons-vue";
import http, { setBaseInf } from "@/http/httpContentMain";
import { useRoute } from "vue-router";
const route = useRoute();
// 获取id
const query = route.query as {
  id: string;
};

const token = localStorage.getItem("token");

const active = ref(0);
const ruleFormRef1 = ref<FormInstance>();
const ruleFormRef2 = ref<FormInstance>();
const ruleFormRef3 = ref<FormInstance>();
const ruleFormRef4 = ref<FormInstance>();
const ruleFormRef5 = ref<FormInstance>();
const ruleFormRef6 = ref<FormInstance>();
const ruleFormRef7 = ref<FormInstance>();
const ruleFormRef8 = ref<FormInstance>();

onMounted(async () => {
  await getItems(); //编辑详情
  await getSelet(); //编辑详情
});

const getSelet = async () => {
  await getUnitNatureValue(); //单位性质
  await getUnitCategoryValue(); //单位类型
  await getUnitList(); //数量单位
  await getGuoji(); //国籍
  await getCertificatetype(); //证件类型
  await getIndustryarea(); //涉及行业/领域
  await getArea(); // 所在国家或地区
};

const file = ref();

watch(file, (value) => {
  const formData = new FormData();
  console.log(value, "value");
  // formData.append("file", value);
  // http
  //   .post("k2401-enterprise/upload-business-license", formData, {
  //     "Content-Type": "multipart/form-data",
  //   })
  //   .then((response) => {
  //     const id = (response as unknown as { id: string }).id;
  //     form.value.businessLicenseAttachIdList = [id];
  //   });
});
const customUpload = (file: any) => {
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
      ruleForm4.promiseAttachIdList = list as never[];
      ruleForm4.fileName = fileName;
    });
};

const customUpload6 = (file: any) => {
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
      ruleForm6.standardContractAttachIdList = list as never[];
      ruleForm6.fileName = fileName;
    });
};
const customUpload7 = (file: any) => {
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
      ruleForm7.fileName = fileName;
    });
};
const customUpload8 = (file: any) => {
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
      ruleForm8.delegateAttachIdList = list as never[];
      ruleForm8.fileName1 = fileName;
    });
};
const customUpload82 = (file: any) => {
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
      ruleForm8.otherAttachIdList = list as never[];
      ruleForm8.fileName2 = fileName;
    });
};
const items = ref({});
const checkList = ref([] as string[]);
// 表单1
const ruleForm1 = reactive({
  unitName: "", //单位名称
  unitNatureValue: "", //单位性质 code
  unitNatureName: "", //单位性质 name
  unitNatureOther: "", //其他单位性质
  unitCategoryValue: "", //单位类型 code
  unitCategoryName: "", //单位类型 name
  unitCategoryOther: "", //其他单位类型
  creditCode: "", //统一社会信用代码
  unitRegAddr: "", //单位注册地
  unitOfficeAddr: "", //办公所在地
  keyInfoOperatorFlag: "", //是否为关键信息基础设施运营者
  empCount: "", //员工数量
  empCountUnitValue: "", //员工数量单位 code
  empCountUnitName: "", //员工数量单位 name
  infoSize: "", //处理个人信息规模
  infoSizeUnitValue: "", //处理个人信息规模单位  code
  infoSizeUnitName: "", //处理个人信息规模单位   name
});
// 表单2
const ruleForm2 = reactive({
  legalFlag: false,
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

// 表单3
const ruleForm3 = reactive({
  operator: "", //姓名
  operatorTel: "", //联系电话
  operatorNationalValue: "", //国籍code
  operatorNationalName: "", //国籍name
  operatorJob: "", //职务
  operatorCertificateTypeValue: "", //证件类型 code
  operatorCertificateTypeName: "", //证件类型 name
  operatorCertificateTypeOther: "", //其他证件类型
  operatorCertificateCode: "", //证件号码
  operatorEmail: "", //电子邮箱
});
// 表单4
const ruleForm4 = reactive({
  fileName: "",
  promiseAttachIdList: [],
});
// 表单5
const ruleForm5 = reactive({
  summary: "", //出境场景简述
  dataTypeName: "", //数据类型
  containInfoFlag: "", //是否包含敏感个人信息
  industryValue: "", //涉及行业/领域  code
  industryName: "", //涉及行业/领域 name
  industryOther: "", //其他涉及行业/领域
  personCount: "", //涉及自然人（去重）数量
  personCountUnitValue: "", //请输入涉及自然人（去重）数量单位 code
  personCountUnitName: "", //请输入涉及自然人（去重）数量单位 name
  foreignReceiver: "", //境外接收方名称
  areaValue: "", //所在国家或地区标签 code
  areaName: "", //所在国家或地区标签  name
  primaryBusiness: "", //主营业务
  principalName: "", //负责人姓名
  principalJob: "", //负责人职务
  contactTel: "", //联系方式-电话
  contactEmail: "", //联系方式-邮箱
  addr: "", //所在地址
  statDescription: "", //统计说明
});
// 表单6
const ruleForm6 = reactive({
  contractMakeDate: "", //标准合同订立日期
  contractValidDate: "", //标准合同定订立日期
  contractContent: "", //相关商业合同名称
  standardContractAttachIdList: [], //标准合同文件
  fileName: "",
});
// 表单7
const ruleForm7 = reactive({
  reportAttachIdList: [], // 个人信息保护影响评估报告
  fileName: "",
});
// 表单8
const ruleForm8 = reactive({
  delegateAttachIdList: [], //经办人授权委托书
  otherAttachIdList: [], //其他相关证明材料
  fileName1: "",
  fileName2: "",
});
// 详情
const getItems = async () => {
  if (query.id) {
    const baseUrl = "/k2401-personal-exit/exit/";
    const ids = query.id.replace(/"/g, "");
    const url = `${baseUrl}${ids}`;
    const res = (await http.get(url, {
      Authorization: "Bearer " + token,
    })) as any;

    items.value = res;
    // console.log(res, "resresres--------------");
    checkList.value = ["1", "2", "3"] as never[];

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
      legalFlag,
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
      // ruleForm4
      promiseAttachList,
      // ruleForm5
      sceneList,
      // ruleForm6
      contractMakeDate,
      contractValidDate,
      contractContent,
      standardContractAttachList,
      // ruleForm7
      reportAttachList,
      // ruleForm8
      delegateAttachList,
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
      legalFlag,
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
    Object.assign(ruleForm3, ruleF3);

    // ruleForm4
    const ruleF4 = {
      promiseAttachIdList: promiseAttachList,
      fileName: promiseAttachList[0].fileName,
    };
    Object.assign(ruleForm4, ruleF4);

    // ruleForm5
    const {
      summary,
      dataTypeName,
      containInfoFlag,
      industryValue,
      industryName,
      industryOther,
      personCount,
      personCountUnitValue,
      personCountUnitName,
      foreignReceiver,
      areaValue,
      areaName,
      primaryBusiness,
      principalName,
      principalJob,
      contactTel,
      contactEmail,
      addr,
      statDescription,
    } = sceneList[0];
    const ruleF5 = {
      summary,
      dataTypeName,
      containInfoFlag: containInfoFlag ? "1" : "0",
      industryValue,
      industryName,
      industryOther,
      personCount,
      personCountUnitValue,
      personCountUnitName,
      foreignReceiver,
      areaValue,
      areaName,
      primaryBusiness,
      principalName,
      principalJob,
      contactTel,
      contactEmail,
      addr,
      statDescription,
    };
    Object.assign(ruleForm5, ruleF5);

    // ruleForm6
    const ruleF6 = {
      contractMakeDate,
      contractValidDate,
      contractContent,
      standardContractAttachIdList: standardContractAttachList,
      fileName: standardContractAttachList[0].fileName,
    };
    Object.assign(ruleForm6, ruleF6);

    // ruleForm7
    const ruleF7 = {
      reportAttachIdList: reportAttachList,
      fileName: reportAttachList[0].fileName,
    };
    Object.assign(ruleForm7, ruleF7);

    // ruleForm8
    const ruleF8 = {
      delegateAttachIdList: delegateAttachList,
      otherAttachIdList: otherAttachList,
      fileName1: delegateAttachList[0].fileName,
      fileName2: otherAttachList[0].fileName,
    };
    Object.assign(ruleForm8, ruleF8);

    console.log(ruleForm7, "ruleForm1ruleForm1");
  }
};

// 下一步
const next = () => {
  if (active.value == 0 && checkList.value.length !== 3) {
    return ElMessage({ type: "warning", message: "第一步信息需要全部勾选" });
  } else if (active.value == 0 && checkList.value.length == 3) {
    active.value++;
  } else if (active.value == 1) {
    submitForm1(ruleFormRef1.value);
  }
  if (active.value == 2) {
    if (!ruleForm2.legalFlag) {
      submitForm2(ruleFormRef2.value);
    } else {
      active.value++;
    }
  } else if (active.value == 3) {
    submitForm3(ruleFormRef3.value);
  } else if (active.value == 4) {
    if (ruleForm4.promiseAttachIdList.length == 0) {
      return ElMessage({ type: "warning", message: "请补求信息" });
    } else {
      active.value++;
    }
  } else if (active.value == 5) {
    submitForm5(ruleFormRef5.value);
  } else if (active.value == 6) {
    submitForm6(ruleFormRef6.value);
  } else if (active.value == 7) {
    if (ruleForm7.reportAttachIdList.length == 0) {
      return ElMessage({ type: "warning", message: "请补求信息" });
    } else {
      active.value++;
    }
  } else if (active.value == 8) {
    if (ruleForm8.delegateAttachIdList.length == 0) {
      return ElMessage({ type: "warning", message: "请补求信息" });
    } else {
      active.value++;
    }
  } else {
    active.value++;
  }
  // active.value++;
};
//  上一步
const last = () => {
  // if (active.value == 0 && checkList.value.length !== 3) {
  //   return ElMessage({ type: "info", message: "第一步信息需要全部勾选" });
  // }

  active.value--;
};
// 提交
const sumit = async (num: any) => {
  if (ruleForm6.contractMakeDate) {
    let data1 = new Date(ruleForm6.contractMakeDate);

    let year1 = data1.getFullYear();
    let month1 = data1.getMonth() + 1;
    let day1 = data1.getDate();

    // 格式化为年月日格式
    ruleForm6.contractMakeDate = `${year1}-${padZero(month1)}-${padZero(day1)}`;
  }
  if (ruleForm6.contractValidDate) {
    let data2 = new Date(ruleForm6.contractValidDate);

    let year2 = data2.getFullYear();
    let month2 = data2.getMonth() + 1;
    let day2 = data2.getDate();

    // 格式化为年月日格式
    ruleForm6.contractValidDate = `${year2}-${padZero(month2)}-${padZero(
      day2
    )}`;
  }

  // 将单个数字转换为两位数的格式（例如：1 变为 01）
  function padZero(num: any) {
    return (num < 10 ? "0" : "") + num;
  }
  let params = {
    // 0 前提
    conditionContent:
      "（一）关键信息基础设施运营者以外的数据处理者；（二）自当年1月1日起，累计向境外提供10万人以上、不满100万人个人信息（不含敏感个人信息）的；（三）自当年1月1日起，累计向境外提供不满1万人敏感个人信息的；", // 前提
    // 1 个人信息处理者基本情况
    unitName: ruleForm1.unitName, // 单位名称
    unitNatureValue: ruleForm1.unitNatureValue, // 单位性质标签（标签接口数据接口参见接口1.12.3），取tagValue字段，数据接口：tag/tag?tagCode=unitnature
    unitNatureName: ruleForm1.unitNatureName, // 同上，取tagName字段
    unitNatureOther: ruleForm1.unitNatureOther, // 其他单位性质
    unitCategoryValue: ruleForm1.unitCategoryValue, // 单位类型标签，数据接口：tag/tag?tagCode=unitcategory
    unitCategoryName: ruleForm1.unitCategoryName, // 同上
    unitCategoryOther: ruleForm1.unitCategoryOther, // 其他单位类型
    unitRegAddr: ruleForm1.unitRegAddr, // 单位注册地
    unitOfficeAddr: ruleForm1.unitOfficeAddr, // 办公所在地
    empCount: ruleForm1.empCount, // 员工数量
    empCountUnitValue: ruleForm1.empCountUnitValue, // 员工数量单位标签，数据接口：tag/tag?tagCode=personunit
    empCountUnitName: ruleForm1.empCountUnitName, // 同上
    creditCode: ruleForm1.creditCode, // 统一社会信用代码
    keyInfoOperatorFlag: ruleForm1.keyInfoOperatorFlag == "1" ? true : false, // 是否为关键信息基础设施运营者
    infoSize: ruleForm1.infoSize, // 处理个人信息规模
    infoSizeUnitValue: ruleForm1.infoSizeUnitValue, // 处理个人信息规模单位标签，数据接口：tag/tag?tagCode=personunit
    infoSizeUnitName: ruleForm1.infoSizeUnitName, // 同上
    // 2 法定代表人信息
    legalFlag: ruleForm2.legalFlag, // 是否有法定代表人
    legal: ruleForm2.legal, // 法人姓名
    legalNationalValue: ruleForm2.legalNationalValue, // 法人国籍标签，数据接口：tag/tag?tagCode=guoji
    legalNationalName: ruleForm2.legalNationalName, // 同上
    legalTel: ruleForm2.legalTel, // 法人联系电话
    legalEmail: ruleForm2.legalEmail, // 法人电子邮箱
    legalCertificateTypeValue: ruleForm2.legalCertificateTypeValue, // 法人证件类型标签，数据接口：tag/tag?tagCode=certificatetype
    legalCertificateTypeName: ruleForm2.legalCertificateTypeName, // 同上
    legalCertificateTypeOther: ruleForm2.legalCertificateTypeOther, // 法人其他证件类型
    legalCertificateCode: ruleForm2.legalCertificateCode, // 法人证件号码
    legalJob: ruleForm2.legalJob, // 法人职务
    // 3 经办人信息
    operator: ruleForm3.operator, // 经办人姓名
    operatorNationalValue: ruleForm3.operatorNationalValue, //  经办人国籍标签，数据接口：tag/tag?tagCode=guoji
    operatorNationalName: ruleForm3.operatorNationalName, // 同上
    operatorTel: ruleForm3.operatorTel, // 经办人联系电话
    operatorEmail: ruleForm3.operatorEmail, // 经办人电子邮箱
    operatorCertificateTypeValue: ruleForm3.operatorCertificateTypeValue, // 经办人证件类型标签，数据接口：tag/tag?tagCode=certificatetype
    operatorCertificateTypeName: ruleForm3.operatorCertificateTypeName, // 同上
    operatorCertificateTypeOther: ruleForm3.operatorCertificateTypeOther, // 经办人其他证件类型
    operatorCertificateCode: ruleForm3.operatorCertificateCode, // 经办人证件号码
    operatorJob: ruleForm3.operatorJob, // 经办人职务
    // 4 承诺书 文件上传 - 文件上传均调用统一的上传接口（本文档接口1），获取其返回值对象中的id
    promiseAttachIdList: ruleForm4.promiseAttachIdList, // 承诺书 附件id集合
    // 5 个人信息出境场景 - 子对象集合
    sceneList: [
      {
        summary: ruleForm5.summary, // 出境场景简述
        dataTypeName: ruleForm5.dataTypeName, // 数据类型
        containInfoFlag: ruleForm5.containInfoFlag ? true : false, // 是否包含敏感个人信息
        industryValue: ruleForm5.industryValue, // 涉及行业/领域标签，数据接口：tag/tag?tagCode=industryarea
        industryName: ruleForm5.industryName, // 同上
        industryOther: ruleForm5.industryOther, // 涉及其他行业/领域
        personCount: ruleForm5.personCount, // 涉及自然人（去重）数量
        personCountUnitValue: ruleForm5.personCountUnitValue, // 涉及自然人（去重）数量单位标签，数据接口：tag/tag?tagCode=personunit
        personCountUnitName: ruleForm5.personCountUnitName, // 同上
        foreignReceiver: ruleForm5.foreignReceiver, // 境外接收方名称
        areaValue: ruleForm5.areaValue, // 所在国家或地区标签，数据接口：tag/tag?tagCode=guoji
        areaName: ruleForm5.areaName, // 同上
        primaryBusiness: ruleForm5.primaryBusiness, // 主营业务
        principalName: ruleForm5.principalName, // 负责人姓名
        principalJob: ruleForm5.principalJob, // 负责人职务
        contactTel: ruleForm5.contactTel, // 联系方式-电话
        contactEmail: ruleForm5.contactEmail, // 联系方式-邮箱
        addr: ruleForm5.addr, // 所在地址
        statDescription: ruleForm5.statDescription, // 统计说明
      },
    ],
    // 6 个人信息出境标准合同
    contractMakeDate: ruleForm6.contractMakeDate, // 标准合同订立日期
    contractValidDate: ruleForm6.contractValidDate, // 标准合同生效日期
    contractContent: ruleForm6.contractContent, // 相关商业合同名称
    standardContractAttachIdList: ruleForm6.standardContractAttachIdList,
    // 7 个人信息保护影响评估报告
    reportAttachIdList: ruleForm7.reportAttachIdList,
    // 8 其他相关证明材料
    delegateAttachIdList: ruleForm8.delegateAttachIdList,
    otherAttachIdList: ruleForm8.otherAttachIdList,
    // 状态
    status: num == 1 ? 1 : 0, // 枚举：0暂存、1填写完成
  };
  let res = "";
  if (!query.id) {
    res = (await http.post("/k2401-personal-exit/exit", params, {
      Authorization: "Bearer " + token,
    })) as any;
  } else {
    const baseUrl = "/k2401-personal-exit/exit/";
    const ids = query.id.replace(/"/g, "");
    const url = `${baseUrl}${ids}`;

    res = (await http.put(url, params, {
      Authorization: "Bearer " + token,
    })) as any;
  }
  console.log(res, "resresres");
  if (res) {
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
        if (item.tagValue == ruleForm3.operatorNationalValue) {
          ruleForm3.operatorNationalName = item.tagName;
        }
      });
      // 证件类型
      certificatetype.value.map((item: any) => {
        if (item.tagValue == ruleForm3.operatorCertificateTypeValue) {
          ruleForm3.operatorCertificateTypeName = item.tagName;
        }
      });
      console.log("error submit!", ruleForm3);
      active.value++;
    } else {
      showWarningMessage("请补求信息");
    }
  });
};
// 校验表单5
const submitForm5 = async (ruleFormRef5: FormInstance | undefined) => {
  if (!ruleFormRef5) return;
  await ruleFormRef5.validate(async (valid: boolean) => {
    if (valid) {
      // 涉及行业/领域
      industryarea.value.map((item: any) => {
        if (item.tagValue == ruleForm5.industryValue) {
          ruleForm5.industryName = item.tagName;
        }
      });
      // 单位
      unitList.value.map((item: any) => {
        // 员工数量单位
        if (item.tagValue == ruleForm5.personCountUnitValue) {
          ruleForm5.personCountUnitName = item.tagName;
        }
      });
      // 所在国家或地区
      area.value.map((item: any) => {
        if (item.tagValue == ruleForm5.areaValue) {
          ruleForm5.areaName = item.tagName;
        }
      });
      console.log("error submit!", ruleForm5);
      active.value++;
    } else {
      showWarningMessage("请补求信息");
    }
  });
};
// 校验表单6
const submitForm6 = async (ruleFormRef6: FormInstance | undefined) => {
  if (!ruleFormRef6) return;
  await ruleFormRef6.validate(async (valid: boolean) => {
    if (valid) {
      let data1 = new Date(ruleForm6.contractMakeDate);

  //     let year1 = data1.getFullYear();
  //     let month1 = data1.getMonth() + 1;
  //     let day1 = data1.getDate();

  //     // 格式化为年月日格式
  //     ruleForm6.contractMakeDate = `${year1}-${padZero(month1)}-${padZero(
  //       day1
  //     )}`;

  //     let data2 = new Date(ruleForm6.contractValidDate);

  //     let year2 = data2.getFullYear();
  //     let month2 = data2.getMonth() + 1;
  //     let day2 = data2.getDate();

      // 格式化为年月日格式
      ruleForm6.contractValidDate = `${year2}-${padZero(month2)}-${padZero(
        day2
      )}`;
      // 将单个数字转换为两位数的格式（例如：1 变为 01）
      function padZero(num: any) {
        return (num < 10 ? "0" : "") + num;
      }
      console.log("error submit!", ruleForm6);
      active.value++;
    } else {
      showWarningMessage("请补求信息");
    }
  });
};
const showWarningMessage = (message: string) => {
  ElMessage({ type: "warning", message });
};
const rules1 = reactive({
  unitName: [{ required: true, message: "请输入单位名称", trigger: "blur" }],
  unitCategoryValue: [
    { required: true, message: "请选择单位类型", trigger: "change" },
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
    { required: true, message: "请选择处理个人信息规模", trigger: "blur" },
  ],
  infoSizeUnitValue: [
    {
      required: true,
      message: "请选择处理个人信息规模单位",
      trigger: "change",
    },
  ],
});

const rules2 = reactive({
  legal: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  legalTel: [{ required: true, message: "请输入联系电话", trigger: "blur" }],
  legalNationalValue: [
    { required: true, message: "请输入国籍", trigger: "blur" },
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

const rules3 = reactive({
  operator: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  operatorTel: [{ required: true, message: "请输入联系电话", trigger: "blur" }],
  operatorNationalValue: [
    { required: true, message: "请输入国籍", trigger: "blur" },
  ],
  operatorJob: [{ required: true, message: "请输入职务", trigger: "blur" }],
  operatorCertificateTypeValue: [
    { required: true, message: "请选择证件类型", trigger: "change" },
  ],
  operatorCertificateCode: [
    { required: true, message: "请输入证件号码", trigger: "blur" },
  ],
  operatorEmail: [
    { required: true, message: "请输入电子邮箱", trigger: "blur" },
  ],
});

const rules4 = reactive({
  promiseAttachIdList: [
    { required: true, message: "请上传承诺书", trigger: "blur" },
  ],
});

const rules5 = reactive({
  summary: [{ required: true, message: "请输入出境场景简述", trigger: "blur" }],
  dataTypeName: [
    { required: true, message: "请输入数据类型", trigger: "blur" },
  ],
  containInfoFlag: [
    { required: true, message: "请输入是否包含敏感个人信息", trigger: "blur" },
  ],
  industryValue: [
    { required: true, message: "请选择涉及行业/领域 ", trigger: "change" },
  ],
  personCount: [
    {
      required: true,
      message: "请输入涉及自然人（去重）数量",
      trigger: "blur",
    },
  ],
  personCountUnitValue: [
    {
      required: true,
      message: "请输入涉及自然人（去重）数量单位",
      trigger: "blur",
    },
  ],
  foreignReceiver: [
    {
      required: true,
      message: "请输入境外接收方名称",
      trigger: "blur",
    },
  ],
  areaValue: [
    {
      required: true,
      message: "请输入所在国家或地区",
      trigger: "blur",
    },
  ],
  primaryBusiness: [
    {
      required: true,
      message: "请输入主营业务",
      trigger: "blur",
    },
  ],
  principalName: [
    {
      required: true,
      message: "请输入负责人姓名",
      trigger: "blur",
    },
  ],
  principalJob: [
    {
      required: true,
      message: "请输入负责人职务",
      trigger: "blur",
    },
  ],
  addr: [
    {
      required: true,
      message: "请输入所在地址",
      trigger: "blur",
    },
  ],
});

const rules6 = reactive({
  contractMakeDate: [
    { required: true, message: "请输入标准合同订立日期", trigger: "blur" },
  ],
  contractValidDate: [
    { required: true, message: "请输入标准合同生效日期", trigger: "blur" },
  ],
  standardContractAttachIdList: [
    { required: true, message: "请输入标准合同文件", trigger: "blur" },
  ],
});

const rules7 = reactive({
  reportAttachIdList: [
    { required: true, message: "请输入标准合同文件", trigger: "blur" },
  ],
});

const rules8 = reactive({
  delegateAttachIdList: [
    { required: true, message: "请输入经办人授权委托书", trigger: "blur" },
  ],
});

const unitNatureValuelist = ref([]); // 单位性质
const area = ref([]); // 所在国家或地区   areaValue

const getUnitNatureValue = async () => {
  const res = (await http.get("/tag/tag?tagCode=unitnature", {
    Authorization: "Bearer " + token,
  })) as any;
  unitNatureValuelist.value = res.children;
};

// 单位类型  unitCategoryValue
const unitCategoryList = ref([]);
const getUnitCategoryValue = async () => {
  const res = (await http.get("/tag/tag?tagCode=unitcategory", {
    Authorization: "Bearer " + token,
  })) as any;
  unitCategoryList.value = res.children;
};
// 数量单位   empCountUnitValue
const unitList = ref([]);
const getUnitList = async () => {
  const res = (await http.get("/tag/tag?tagCode=personunit", {
    Authorization: "Bearer " + token,
  })) as any;
  unitList.value = res.children;
};
// 数量单位   empCountUnitValue
const dataunit = ref([]);
const getDataunit = async () => {
  const res = (await http.get("/tag/tag?tagCode=dataunit", {
    Authorization: "Bearer " + token,
  })) as any;
  dataunit.value = res.children;
};
// 法人国籍   legalNationalValue
const guoji = ref([]);
const getGuoji = async () => {
  const res = (await http.get("/tag/tag?tagCode=guoji", {
    Authorization: "Bearer " + token,
  })) as any;
  guoji.value = res.children;
};
// 证件类型   legalCertificateTypeValue
const certificatetype = ref([]);
const getCertificatetype = async () => {
  const res = (await http.get("/tag/tag?tagCode=certificatetype", {
    Authorization: "Bearer " + token,
  })) as any;
  certificatetype.value = res.children;
};
// 涉及行业/领域   industryValue
const industryarea = ref([]);
const getIndustryarea = async () => {
  const res = (await http.get("/tag/tag?tagCode=industryarea", {
    Authorization: "Bearer " + token,
  })) as any;
  industryarea.value = res.children;
};

const getArea = async () => {
  const res = (await http.get("/tag/tag?tagCode=area", {
    Authorization: "Bearer " + token,
  })) as any;
  area.value = res.children;
};
</script>
<style lang="scss" scoped>
::v-deep .contain {
  padding: 10px;
  width: 1300px;
  margin: 0 auto;
  .el-upload-dragger {
    border: none;
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

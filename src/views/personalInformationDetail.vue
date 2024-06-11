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
        <div style="font-size: 20px">个人信息出境标准合同备案项目预览</div>

        <!-- 页面 -->
        <div style="margin-top: 20px">
          <div>
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              个人信息处理者通过订立标准合同的方式向境外提供个人信息的，应当同时符合下列情形
            </div>
            <div style="margin-bottom: 20px">
              <div style="margin-bottom: 20px">
                <div>(一) 关键信息基础设施运营者以外的数据处理者</div>
                <div>
                  （二)
                  自当年1月1日起，累计向境外提供10万人以上、不满100万人个人信
                  (不含敏感个人信息) 的；
                </div>
                <div>
                  （三) 自当年1月1日起，累计向境外提供不满1万人敏感个人信息的；
                </div>
              </div>
            </div>
            <div></div>
          </div>

          <div>
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
                          <!-- <el-option label="事业单位" value="2" />
                          <el-option label="企业" value="3" />
                          <el-option label="社会组织" value="4" />
                          <el-option label="其他" value="5" /> -->
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

          <div>
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              法定代表人信息
            </div>
            <el-checkbox
              v-model="legalFlag"
              label="无法定代表人"
              size="large"
            />
            <div style="margin: 0 0 20px 20px">
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
                          style="width: 150px"
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

          <div>
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

          <div>
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
                            v-model="ruleForm4.promiseAttachIdList"
                            placeholder="请上传格式为PDF、OFD、PNG、JPG、JPEG的文件"
                          ></el-input>
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

          <div>
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
                          <!-- <el-option label="工业" value="1" />
                          <el-option label="电信" value="2" />
                          <el-option label="交通" value="3" />
                          <el-option label="金融" value="4" />
                          <el-option label="自然资源" value="5" />
                          <el-option label="卫生健康" value="6" />
                          <el-option label="教育" value="7" />
                          <el-option label="科技" value="8" />
                          <el-option label="跨境电商" value="9" />
                          <el-option label="零售" value="10" />
                          <el-option label="文旅" value="11" />
                          <el-option label="互联网" value="12" />
                          <el-option label="国防科工" value="13" />
                          <el-option label="其他" value="14" /> -->
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
                    <el-form-item prop="countryValue">
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
                          v-model="ruleForm5.countryValue"
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

          <div>
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
                            v-model="ruleForm6.standardContractAttachIdList"
                            placeholder="请上传格式为PDF、OFD、PNG、JPG、JPEG的文件"
                          ></el-input>
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

          <div>
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
                            v-model="ruleForm7.reportAttachIdList"
                            placeholder="请上传格式为PDF、OFD、PNG、JPG、JPEG的文件"
                          ></el-input>
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

          <div>
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
                            v-model="ruleForm8.delegateAttachIdList"
                          ></el-input>
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
              文件上传
            </div>
            <div style="margin-left: 20px">
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
              <div style="margin-top: 10px">
                请上传除承诺书、个人信息出境标准合同、个人信息保护影响评估报告、经办人授权委托书以外的其他材料，格式为PDF、OFD、PNG、
              </div>
            </div>
          </div>
        </div>

        <!--  -->
        <div style="display: flex; justify-content: end">
          <el-button
            type="primary"
            style="border-radius: 50px; margin-top: 12px"
            @click="route.go(-1)"
            >返回</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, watch } from "vue";
import { ElMessage } from "element-plus";
import type { ComponentSize, FormInstance, FormRules } from "element-plus";
import { Download } from "@element-plus/icons-vue";
import http, { setBaseInf } from "@/http/httpContentMain";
import { useRoute } from "vue-router";
const route = useRoute();
// 获取id
const query = route.query as {
  id: string;
};
const items = ref({});

// watch(query, (newValue, oldValue) => {
//   console.log("New value: ", newValue);
//   console.log("Old value: ", oldValue);
// });

const token = localStorage.getItem("token");

const ruleFormRef1 = ref<FormInstance>();
const ruleFormRef2 = ref<FormInstance>();
const ruleFormRef3 = ref<FormInstance>();
const ruleFormRef4 = ref<FormInstance>();
const ruleFormRef5 = ref<FormInstance>();
const ruleFormRef6 = ref<FormInstance>();
const ruleFormRef7 = ref<FormInstance>();
const ruleFormRef8 = ref<FormInstance>();

// onMounted(async () => {
//   await getUnitNatureValue(); //获取 Banner 图
//   await getUnitCategoryValue(); //获取政策资讯类别
//   //指定政策资讯下的分页列表
//   await getUnitList();
//   await getGuoji();
//   await getCertificatetype();
//   await getIndustryarea();
//   await getArea();
// });

const checkList = ref([]);
const legalFlag = ref(false);
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
  promiseAttachIdList: "",
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
  countryValue: "", //所在国家或地区标签 code
  countryName: "", //所在国家或地区标签  name
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
});

// 表单7
const ruleForm7 = reactive({
  reportAttachIdList: [],
});

// 表单8
const ruleForm8 = reactive({
  delegateAttachIdList: "",
});

// 单位性质
const unitNatureValuelist = ref([]);
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
// 单位   empCountUnitValue
const unitList = ref([]);
const getUnitList = async () => {
  const res = (await http.get("/tag/tag?tagCode=personunit", {
    Authorization: "Bearer " + token,
  })) as any;
  unitList.value = res.children;
};
// 法人国籍   legalNationalValue
const guoji = ref([]);
const getGuoji = async () => {
  const res = (await http.get("/tag/tag?tagCode=guoji", {
    Authorization: "Bearer " + token,
  })) as any;
  guoji.value = res.children;
  console.log(guoji.value, "empCountUnitValueList");
};
// 证件类型   legalCertificateTypeValue
const certificatetype = ref([]);
const getCertificatetype = async () => {
  const res = (await http.get("/tag/tag?tagCode=certificatetype", {
    Authorization: "Bearer " + token,
  })) as any;
  certificatetype.value = res.children;
  console.log(certificatetype.value, "empCountUnitValueList");
};
// 涉及行业/领域   industryValue
const industryarea = ref([]);
const getIndustryarea = async () => {
  const res = (await http.get("/tag/tag?tagCode=industryarea", {
    Authorization: "Bearer " + token,
  })) as any;
  industryarea.value = res.children;
  console.log(industryarea.value, "industryarea");
};
// 所在国家或地区   countryValue
const area = ref([]);
const getArea = async () => {
  const res = (await http.get("/tag/tag?tagCode=area", {
    Authorization: "Bearer " + token,
  })) as any;
  area.value = res.children;
};
// 详情
const getItems = async () => {
  const baseUrl = "/k2401-personal-exit/exit/";
  const ids = query.id.replace(/"/g, "");
  const url = `${baseUrl}${ids}`;

  const res = (await http.get(url, {
    Authorization: "Bearer " + token,
  })) as any;

  items.value = res;
  console.log(res, "resresresres");
};
getItems();
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

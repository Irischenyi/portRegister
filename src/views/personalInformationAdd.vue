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
                <el-checkbox
                  label="(一) 关键信息基础设施运营者以外的数据处理者             "
                  value="1"
                />
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
                    <el-form-item prop="dwmc">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 单位名称</div>
                        <el-input v-model="ruleForm1.dwmc"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="dwxz1">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*</span> 单位性质</div>
                        <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm1.dwxz1"
                          clearable
                        >
                          <el-option label="单位性质1" value="单位性质1" />
                          <el-option label="单位性质2" value="单位性质2" />
                        </el-select>
                      </div>
                    </el-form-item>

                    <el-form-item prop="qt1">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*</span> 其他</div>
                        <el-input v-model="ruleForm1.qt1"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="dwxz2">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*</span> 单位性质</div>
                        <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm1.dwxz2"
                          clearable
                        >
                          <el-option label="单位性质1" value="单位性质1" />
                          <el-option label="单位性质2" value="单位性质2" />
                        </el-select>
                      </div>
                    </el-form-item>

                    <el-form-item prop="qt2">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*</span> 其他</div>
                        <el-input v-model="ruleForm1.qt2"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="tyshxydm">
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
                        <el-input v-model="ruleForm1.tyshxydm"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="dwmczcd">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span>单位名称注册地
                        </div>
                        <el-input v-model="ruleForm1.dwmczcd"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="bgszd">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>办公所在地</div>
                        <el-input v-model="ruleForm1.bgszd"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="jcxxyyz">
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
                        <!-- <el-input v-model="ruleForm1.jcxxyyz"></el-input> -->
                        <el-select v-model="ruleForm1.jcxxyyz" clearable>
                          <el-option label="11" value="11" />
                          <el-option label="22" value="22" />
                        </el-select>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="ygsl">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*</span> 员工数量</div>
                        <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm1.ygsl"
                          clearable
                        >
                          <el-option label="单位性质1" value="单位性质1" />
                          <el-option label="单位性质2" value="单位性质2" />
                        </el-select>
                      </div>
                    </el-form-item>

                    <el-form-item prop="ygsldw">
                      <div style="display: flex; flex-direction: column">
                        <div>
                          <span style="color: red">*</span> 员工数量单位
                        </div>
                        <el-input v-model="ruleForm1.ygsldw"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="clgrxxgm">
                      <div style="display: flex; flex-direction: column">
                        <div>
                          <span style="color: red">*</span>处理个人信息规模
                        </div>
                        <el-input v-model="ruleForm1.clgrxxgm"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item prop="clgrxxgmdw">
                      <div style="display: flex; flex-direction: column">
                        <div>
                          <span style="color: red">*</span> 处理个人信息规模单位
                        </div>
                        <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm1.clgrxxgmdw"
                          clearable
                        >
                          <el-option label="单位性质1" value="单位性质1" />
                          <el-option label="单位性质2" value="单位性质2" />
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
            <div style="margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef2" :model="ruleForm2" :rules="rules2">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="xm">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 姓名</div>
                        <el-input v-model="ruleForm2.xm"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item prop="lxdh">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 联系电话</div>
                        <el-input v-model="ruleForm2.lxdh"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item prop="gj">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 国籍</div>
                        <el-input v-model="ruleForm2.gj"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="zw">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>职务</div>
                        <el-input v-model="ruleForm2.zw"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="zjlx">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*</span> 证件类型</div>
                        <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm2.zjlx"
                          clearable
                        >
                          <el-option label="单位性质1" value="单位性质1" />
                          <el-option label="单位性质2" value="单位性质2" />
                        </el-select>
                      </div>
                    </el-form-item>

                    <el-form-item prop="qt">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*</span> 其他</div>
                        <el-input v-model="ruleForm2.qt"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="zjhm">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>证件号码</div>
                        <el-input v-model="ruleForm2.zjhm"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
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
                        <!-- <el-input v-model="ruleForm1.jcxxyyz"></el-input> -->
                        <el-select v-model="ruleForm2.dzyx" clearable>
                          <el-option label="11" value="11" />
                          <el-option label="22" value="22" />
                        </el-select>
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
                    <el-form-item prop="xm">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 姓名</div>
                        <el-input v-model="ruleForm3.xm"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item prop="lxdh">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 联系电话</div>
                        <el-input v-model="ruleForm3.lxdh"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item prop="gj">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span> 国籍</div>
                        <el-input v-model="ruleForm3.gj"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="zw">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>职务</div>
                        <el-input v-model="ruleForm3.zw"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="zjlx">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*</span> 证件类型</div>
                        <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm3.zjlx"
                          clearable
                        >
                          <el-option label="单位性质1" value="单位性质1" />
                          <el-option label="单位性质2" value="单位性质2" />
                        </el-select>
                      </div>
                    </el-form-item>

                    <el-form-item prop="qt">
                      <div style="display: flex; flex-direction: column">
                        <div><span style="color: red">*</span> 其他</div>
                        <el-input v-model="ruleForm3.qt"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="zjhm">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>证件号码</div>
                        <el-input v-model="ruleForm3.zjhm"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="gljgmc">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div><span style="color: red">*</span>电子邮箱</div>
                        <el-input v-model="ruleForm3.gljgmc"></el-input>
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
                    <el-form-item prop="xm">
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
                            v-model="ruleForm4.xm"
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

          <div v-if="active == 5">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              个人信息出境场景描述
            </div>
            <div style="margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef6" :model="ruleForm5" :rules="rules5">
                <el-row :gutter="20">
                  <el-col :span="24">
                    <el-form-item prop="cjms">
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
                          v-model="ruleForm5.cjms"
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
                    <el-form-item prop="sjlx">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 100%;
                        "
                      >
                        <div><span style="color: red">*</span> 数据类型</div>
                        <el-input v-model="ruleForm5.sjlx"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item prop="grxx">
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
                        <el-input v-model="ruleForm5.grxx"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8" style="display: flex">
                    <el-form-item prop="sjhy">
                      <div style="display: flex; flex-direction: column">
                        <div>
                          <span style="color: red">*</span> 涉及行业/领域
                        </div>
                        <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                        <el-select
                          style="width: 150px"
                          v-model="ruleForm5.sjhy"
                          clearable
                        >
                          <el-option label="单位性质1" value="单位性质1" />
                          <el-option label="单位性质2" value="单位性质2" />
                        </el-select>
                      </div>
                    </el-form-item>

                    <el-form-item prop="qt">
                      <div style="display: flex; flex-direction: column">
                        <div>
                          <span style="color: red">*</span>涉及其他行业/领域
                        </div>
                        <el-input v-model="ruleForm5.qt"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="sjzrr">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span
                          >涉及自然人（去重）数量
                        </div>
                        <el-input v-model="ruleForm5.sjzrr"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :span="8">
                    <el-form-item prop="sldw">
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
                        <el-input v-model="ruleForm5.sldw"></el-input>
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
              <el-form ref="ruleFormRef4" :model="ruleForm6" :rules="rules6">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item prop="dlri">
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
                        <el-input v-model="ruleForm6.dlri"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="sxrq">
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
                        <el-input v-model="ruleForm6.sxrq"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item prop="htmc">
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 80%;
                        "
                      >
                        <div>
                          <span style="color: red">*</span>相关商业合同名称
                        </div>
                        <el-input v-model="ruleForm6.htmc"></el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item prop="xm">
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
                            v-model="ruleForm6.xm"
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

          <div v-if="active == 7">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              个人信息保护影响评估报告
            </div>
            <div style="margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef4" :model="ruleForm7" :rules="rules7">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item prop="xm">
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
                            v-model="ruleForm7.xm"
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
              《个人信息保护影响评估报告》模板下载
            </div>
          </div>

          <div v-if="active == 8">
            <div style="color: #2977ff; font-size: 15px; margin-bottom: 20px">
              承诺书
            </div>
            <div style="margin: 0 0 20px 20px">
              <el-form ref="ruleFormRef4" :model="ruleForm8" :rules="ruleForm8">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item prop="xm">
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
                            v-model="ruleForm8.xm"
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
            @click="next"
            >下一步</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Download } from '@element-plus/icons-vue'
const active = ref(0)
const next = () => {
  active.value++
}

const checkList = ref([])
// 表单1
const ruleForm1 = ref({
  dwmc: '',
  dwxz1: '',
  qt1: '',
  dwxz2: '',
  qt2: '',
  tyshxydm: '',
  dwmczcd: '',
  bgszd: '',
  jcxxyyz: '',
  ygsl: '',
  ygsldw: '',
  clgrxxgm: '',
  clgrxxgmdw: ''
})
const rules1 = ref({
  dwmc: [{ required: true, message: '请输入单位名称', trigger: 'blur' }],
  dwxz1: [{ required: true, message: '请选择单位性质', trigger: 'change' }],
  qt1: [{ required: true, message: '请输入其他', trigger: 'blur' }],
  dwxz2: [{ required: true, message: '请选择单位性质', trigger: 'change' }],
  qt2: [{ required: true, message: '请输入其他', trigger: 'blur' }],
  tyshxydm: [
    { required: true, message: '请输入统一社会信用代码', trigger: 'blur' }
  ],
  dwmczcd: [
    { required: true, message: '请输入单位名称注册地', trigger: 'blur' }
  ],
  bgszd: [{ required: true, message: '请输入办公所在地', trigger: 'blur' }],
  jcxxyyz: [
    {
      required: true,
      message: '请选择是否为关键信息基础设施运营者',
      trigger: 'change'
    }
  ],
  ygsl: [{ required: true, message: '请选择员工数量', trigger: 'change' }],
  ygsldw: [{ required: true, message: '请输入员工数量单位', trigger: 'blur' }],
  clgrxxgm: [
    { required: true, message: '请选择处理个人信息规模', trigger: 'blur' }
  ],
  clgrxxgmdw: [
    { required: true, message: '请选择处理个人信息规模单位', trigger: 'change' }
  ]
})

// 表单2
const ruleForm2 = ref({
  xm: '',
  lxdh: '',
  gj: '',
  zw: '',
  zjlx: '',
  qt: '',
  zjhm: '',
  dzyx: ''
})
const rules2 = ref({
  xm: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  lxdh: [{ required: true, message: '请输入联系电话', trigger: 'blur' }],
  gj: [{ required: true, message: '请输入国籍', trigger: 'blur' }],
  zw: [{ required: true, message: '请输入职务', trigger: 'blur' }],
  zjlx: [{ required: true, message: '请选择证件类型', trigger: 'change' }],
  qt: [{ required: true, message: '请输入其他', trigger: 'blur' }],
  zjhm: [{ required: true, message: '请输入证件号码', trigger: 'blur' }],
  dzyx: [{ required: true, message: '请选择电子邮箱', trigger: 'change' }]
})

// 表单3
const ruleForm3 = ref({
  xm: '',
  lxdh: '',
  gj: '',
  zw: '',
  zjlx: '',
  qt: '',
  zjhm: '',
  gljgmc: '',
  gljgrs: '',
  gljgrsdw: '',
  dzyx: ''
})
const rules3 = ref({
  xm: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  lxdh: [{ required: true, message: '请输入联系电话', trigger: 'blur' }],
  gj: [{ required: true, message: '请输入国籍', trigger: 'blur' }],
  zw: [{ required: true, message: '请输入职务', trigger: 'blur' }],
  zjlx: [{ required: true, message: '请选择证件类型', trigger: 'change' }],
  qt: [{ required: true, message: '请输入其他', trigger: 'blur' }],
  zjhm: [{ required: true, message: '请输入证件号码', trigger: 'blur' }],
  gljgmc: [{ required: true, message: '请输入电子邮箱', trigger: 'blur' }]
  //   gljgrs: [
  //     { required: true, message: '请选择管理机构人数', trigger: 'change' }
  //   ],
  //   gljgrsdw: [
  //     { required: true, message: '请输入管理机构人数单位', trigger: 'blur' }
  //   ],
  //   dzyx: [{ required: true, message: '请输入电子邮箱', trigger: 'blur' }]
})

// 表单4
const ruleForm4 = ref({
  xm: ''
})
const rules4 = ref({
  xm: [{ required: true, message: '请输入承诺书', trigger: 'blur' }]
})

// 表单5
const ruleForm5 = ref({
  cjms: '',
  sjlx: '',
  grxx: '',
  sjhy: '',
  qt: '',
  sjzrr: '',
  sldw: ''
})

const rules5 = ref({
  cjms: [{ required: true, message: '请输入内容', trigger: 'blur' }],
  sjlx: [{ required: true, message: '请输入数据类型', trigger: 'blur' }],
  grxx: [
    { required: true, message: '请输入是否包含敏感个人信息', trigger: 'blur' }
  ],
  sjhy: [
    { required: true, message: '请选择*涉及行业/领域 ', trigger: 'change' }
  ],
  qt: [{ required: true, message: '请输入其他', trigger: 'blur' }],
  sjzrr: [
    { required: true, message: '请输入涉及自然人（去重）数量', trigger: 'blur' }
  ],
  sldw: [
    {
      required: true,
      message: '请输入涉及自然人（去重）数量单位',
      trigger: 'blur'
    }
  ]
})

// 表单6
const ruleForm6 = ref({
  xm: '',
  dlri: '',
  sxrq: '',
  htmc: ''
})
const rules6 = ref({
  xm: [{ required: true, message: '请输入标准合同文件', trigger: 'blur' }],
  dlri: [
    { required: true, message: '请输入标准合同定订立日期', trigger: 'blur' }
  ],
  sxrq: [
    { required: true, message: '请输入标准合同生效日期', trigger: 'blur' }
  ],
  htmc: [{ required: true, message: '请输入相关商业合同名称', trigger: 'blur' }]
})

// 表单7
const ruleForm7 = ref({
  xm: ''
})
const rules7 = ref({
  xm: [{ required: true, message: '请输入标准合同文件', trigger: 'blur' }]
})
// 表单6
const ruleForm8 = ref({
  xm: '',
  dlri: '',
  sxrq: '',
  htmc: ''
})
const rules8 = ref({
  xm: [{ required: true, message: '请输入标准合同文件', trigger: 'blur' }],
  dlri: [
    { required: true, message: '请输入标准合同定订立日期', trigger: 'blur' }
  ],
  sxrq: [
    { required: true, message: '请输入标准合同生效日期', trigger: 'blur' }
  ],
  htmc: [{ required: true, message: '请输入相关商业合同名称', trigger: 'blur' }]
})
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

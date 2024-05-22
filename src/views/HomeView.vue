<template>
  <div style="position: relative">
    <!-- 背景图片 -->
    <!-- <img
      style="width: 100%; height: 400px"
      src="../assets//images/shujufuwu.png"
      alt=""
      srcset=""
    /> -->
    <img style="width: 100%; height: 400px" :src="bannerSy" alt="" srcset="" />
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
            @update:model-value="btns"
            v-model="tab"
            dense
            active-color="primary"
            indicator-color="primary"
            narrow-indicator
            align="left"
          >
            <q-tab name="1" :label="tabsChange1" />
            <q-tab name="2" :label="tabsChange2" />
            <q-tab name="3" :label="tabsChange3" />
            <q-tab name="4" :label="tabsChange4" />
          </q-tabs>
          <q-tab-panels style="margin-top: 10px" v-model="tab" animated>
            <q-tab-panel :name="tabsValue">
              <div style="display: flex; justify-content: space-between">
                <div style="width: 49%">
                  <div style="background-color: #fafafa">
                    <div>
                      <div>
                        <img style="width: 100%" :src="imgTabs" />
                      </div>
                      <div
                        style="display: flex; justify-content: space-between"
                      >
                        <div
                          class="moreText"
                          :title="titleTabs"
                          style="font-size: 16px"
                        >
                          {{ titleTabs }}
                        </div>
                        <div>{{ timeTabs }}</div>
                      </div>
                      <div class="moreText" :title="summaryTabs">
                        {{ summaryTabs }}
                      </div>
                      <div @click="searchDetail" style="text-align: end">
                        查看详情
                      </div>
                    </div>
                  </div>
                </div>
                <div style="width: 49%">
                  <div v-for="(item, index) in tabsLists" :key="index">
                    <div
                      style="
                        display: flex;
                        justify-content: space-between;
                        font-size: 16px;
                      "
                    >
                      <div style="display: flex; align-items: center">
                        <div class="yuan"></div>
                        <div class="moreText" :title="(item as any).title">
                          {{ (item as any).title }}
                        </div>
                      </div>
                      <div>
                        {{ (item as any).publishDate }}
                      </div>
                    </div>
                    <div style="margin-top: -20px">
                      <el-divider />
                    </div>
                  </div>
                </div>
              </div>
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

    <!-- 智能客服模块 -->
    <div class="fuwu_f">
      <div @click="khfwBtn" class="fuwu">
        <img
          style="width: 35%; margin-bottom: 5px"
          src="../assets/images/kehufuwu.png"
          alt=""
        />
        <div style="color: #fff">客户服务</div>
      </div>
      <div @click="zxlyBtn" class="fuwu">
        <img
          style="width: 35%; margin-bottom: 5px"
          src="../assets/images/zaixianfuwu.png"
          alt=""
        />
        <div style="color: #fff">在线服务</div>
      </div>
      <div @click="lxfsBtn" class="fuwu">
        <img
          style="width: 35%; margin-bottom: 5px"
          src="../assets/images/lianxifangshi.png"
          alt=""
        />
        <div style="color: #fff">联系方式</div>
      </div>
    </div>
  </div>
  <!-- 客户服务弹框 -->
  <el-dialog
    style="padding: 20px; background-color: #eaeff9"
    v-model="khfwDialog"
    width="25%"
    :before-close="handleClose1"
  >
    <div style="font-size: 18px; font-weight: 600">
      <div>客服电话</div>
      <div>
        <span style="margin-right: 30px">0519-12345678</span>
        <span>0519-12345678</span>
      </div>
      <div style="margin-top: 10px">工作时间</div>
      <div>
        <span style="margin-right: 50px">8:30-11:30</span>
        <span>13:00-17:00</span>
      </div>
    </div>
  </el-dialog>
  <!-- 在线服务弹框 -->
  <el-dialog
    style="background-color: #eaeff9"
    v-model="zxfwDialog"
    width="35%"
    maxHeight="400"
    :before-close="handleClose2"
  >
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="常见问题" name="first">
        <div class="tabPane">
          <div
            @click="questionBtn(item as any)"
            class="cjwt"
            v-for="item in questionList"
            :key="(item as any).id"
          >
            {{ (item as any).question }}

            <div
              v-if="(item as any).showAnswer"
              v-html="(item as any).showAnswerDetail"
            ></div>
          </div>
        </div>
        <div style="display: flex; margin-top: 20px">
          <el-input v-model="cjwtInput" style="height: 40px"></el-input>
          <el-button class="elBtn">发送</el-button>
        </div>
      </el-tab-pane>

      <el-tab-pane label="智能咨询" name="second">
        <div class="tabPane">
          <div class="chat-container">
            <div
              v-for="(message, index) in messages"
              :key="index"
              class="message"
              :class="{
                'sent-message': message.sent,
                'received-message': !message.sent
              }"
            >
              {{ message.text }}
            </div>
          </div>
        </div>
        <div style="display: flex; margin-top: 20px">
          <el-input
            v-model="question"
            @keyup.enter="askQuestion"
            placeholder="请输入您的问题..."
            style="height: 40px"
          ></el-input>
          <el-button @click="askQuestion" class="elBtn1">发送</el-button>
        </div>
      </el-tab-pane>

      <el-tab-pane label="在线留言" name="third">
        <div class="tabPane">
          <el-form
            ref="formRef"
            :model="formModel"
            :rules="formRules"
            label-width="60px"
          >
            <el-form-item label="单位" prop="dw1">
              <el-input style="width: 60%"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="xm">
              <el-input style="width: 60%"></el-input>
            </el-form-item>
            <el-form-item label="单位" prop="dw2">
              <el-input style="width: 60%"></el-input>
            </el-form-item>
            <el-form-item label="留言" prop="ly">
              <el-input type="textarea" :rows="4"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div style="display: flex; margin-top: 20px">
          <el-input v-model="cjwtInput" style="height: 40px"></el-input>
          <el-button class="elBtn1">发送</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>

  <!-- 联系方式弹框 -->
  <el-dialog
    style="padding: 20px 30px; background-color: #eaeff9"
    v-model="lxfsDialog"
    width="18%"
    :before-close="handleClose3"
  >
    <div style="display: flex; justify-content: space-around">
      <div style="margin-right: 10px">
        <span>企业客服二维码</span>
        <div style="width: 100px; height: 100px; background-color: #000">
          <img style="" src="" alt="" />
        </div>
      </div>

      <div>
        <span style="display: block; text-align: center">公众号二维码</span>
        <div style="width: 100px; height: 100px; background-color: #000">
          <img style="" src="" alt="" />
        </div>
      </div>
    </div>
  </el-dialog>
</template>
<script setup lang="ts">
import type { Ref } from 'vue'
import { ref, onMounted } from 'vue'

import http, { setBaseInf } from '@/http/httpContentMain'
import { useRouter } from 'vue-router'

const router = useRouter()
onMounted(async () => {
  await getBanner() //获取 Banner 图
  await getCategoryTabs() //获取政策资讯类别
  //指定政策资讯下的分页列表
  await getArticlePaged()
})
import type { TabsPaneContext } from 'element-plus'
//  获取 Banner 图
const bannerSy = ref('')
const getBanner = async () => {
  const res = (await http.get('/k2401-banner/list', {
    params: { category: 1 }
  })) as any
  bannerSy.value = `${setBaseInf.baseUrl}` + res[0].storagePath
  console.log(res, 'res+++11111111+++++')
}
//获取政策资讯类别
const tabsChange = ref([])
const tabsChange1 = ref('')
const tabsChange2 = ref('')
const tabsChange3 = ref('')
const tabsChange4 = ref('')

const getCategoryTabs = async () => {
  const res = (await http.get('/k2401-article/article-category-list')) as any
  console.log(res, 'res+++222222222+++++')
  tabsChange.value = res as any
  // console.log(tabsChange.value[0].name, 'tabsChange.value[0].name')
  tabsChange1.value = res[0].name
  tabsChange2.value = res[1].name
  tabsChange3.value = res[2].name
  tabsChange4.value = res[3].name
}
const tabsLists = ref([])
const titleTabs = ref('')
const timeTabs = ref('')
const summaryTabs = ref('')
const imgTabs = ref('')
const ids = ref('')
const getArticlePaged = async () => {
  const res = (await http.get('/k2401-article/article/paged', {
    params: {
      category: tabsValue.value || 1,
      current: 1, //当前页码
      size: 10 //每页多少条数据
    }
  })) as any
  console.log(res, 'resttttttttttt')

  tabsLists.value = res.items
  titleTabs.value = res.items[0].title
  summaryTabs.value = res.items[0].summary
  timeTabs.value = res.items[0].publishDate
  ids.value = res.items[0].id
  imgTabs.value = `${setBaseInf.baseUrl}` + res.items[0].attach.storagePath
}
const tab = ref('1')
const tabsValue = ref('1')
const btns = (value: any) => {
  console.log(value, 'val++++++')
  tabsValue.value = value
  getArticlePaged()
}
// 封装常见问题列表接口
const questionList = ref([])
const getQuestion = async () => {
  const res = (await http.post('/k2401-question/question/paged', {
    current: 1, // 第几页
    size: 10, // 每页多少条数据
    key: '' // 问题的关键字
  })) as any
  questionList.value = res.items
  console.log(res, '常见问题列表接口')
}
// 封装指定常见问题的详情的接口
let answerDetail = ref('')
const getQuestionDetail = async (id: any) => {
  const res = (await http.get(`k2401-question/question/${id}`)) as any
  answerDetail.value = res.answer
  console.log(answerDetail.value, 'answerDetail.value')
}
const questionBtn = async (item: any) => {
  await getQuestionDetail(item.id)
  item.showAnswer = !item.showAnswer
  item.showAnswerDetail = answerDetail.value

  console.log(item, 'item77777777')
}
const zxfwDialog = ref(false)
const zxlyBtn = () => {
  zxfwDialog.value = true
  getQuestion()
}
const handleClose2 = () => {
  zxfwDialog.value = false
}

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const cjwtInput = ref('')

const formModel = ref({
  dw1: '',
  xm: '',
  dw2: '',
  ly: ''
})

const formRules = ref({
  dw1: [
    {
      required: 'true',
      message: '请填写单位',
      trigger: 'blur'
    }
  ],
  xm: {
    required: 'true',
    message: '请填写姓名',
    trigger: 'blur'
  },
  dw2: {
    required: 'true',
    message: '请填写单位',
    trigger: 'blur'
  },
  ly: {
    required: 'true',
    message: '请填写留言',
    trigger: 'blur'
  }
})
const khfwDialog = ref(false)
const khfwBtn = () => {
  khfwDialog.value = true
}
const handleClose1 = () => {
  khfwDialog.value = false
}

const lxfsDialog = ref(false)
const lxfsBtn = () => {
  lxfsDialog.value = true
}
const handleClose3 = () => {
  lxfsDialog.value = false
}

const itemDetail = ref('')
const getArticleDetail = async (id: any) => {
  const res = await http.get(`k2401-article/article/${id}`)
  console.log(res, '政策咨询详情++')
  console.log(itemDetail.value, 'itemDetail.value')

  itemDetail.value = res
  router.push({
    path: '/index/policyconSultationDetail',
    query: {
      value: JSON.stringify(itemDetail?.value)
    }
  })
}
const searchDetail = () => {
  console.log(ids.value, 'idsssssss')

  // 获取指定政策的详情
  getArticleDetail(ids.value)
}
// 智能咨询接口封装
const getQueryQusetion = async () => {
  const res = (await http.post('/k2401-talk/question', {
    question: '问题' // 输入的问题（必填）
  })) as any

  console.log(res, '智能咨询接口')
}

const zhinneg = () => {
  getQueryQusetion()
}
const question = ref('')
const messages: Ref<{ text: string; sent: boolean }[]> = ref([])
const askQuestion = async () => {
  if (question.value.trim() === '') return

  messages.value.push({ text: question.value, sent: true }) // 将用户输入的问题显示在右上角

  const res = (await http.post('/k2401-talk/question', {
    question: question.value // 输入的问题（必填）
  })) as any

  console.log(res, '智能咨询接口')
  setTimeout(() => {
    console.log(res.length, 'res.length')

    if (res.answer) {
      messages.value.push({ text: res.answer, sent: false }) // 将服务端返回的答案显示在左上角
    } else {
      messages.value.push({
        text: '抱歉，出现了一些问题，请重新提问',
        sent: false
      }) // 将服务端返回的答案显示在左上角
    }
  }, 500)

  question.value = '' // 重置输入框
}
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
.moreText {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 30em; /* 设置需要显示的最大宽度，10em 约等于10个中文字的宽度 */
  margin-left: 10px;
}
.fuwu_f {
  position: absolute;
  top: 400px;
  right: 0;
}
.fuwu {
  background-color: #6cabf8;
  display: flex;
  width: 80px;
  height: 80px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 10px;
}

::v-deep .el-tabs__nav-wrap:after {
  background-color: #eaeff9;
  bottom: 0;
  content: '';
  height: 2px;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: var(--el-index-normal);
}
.tabPane {
  padding: 20px;
  background-color: #fff;
  height: 300px;
  overflow: auto;
  border-radius: 10px;
}

.cjwt {
  margin-bottom: 10px;
  color: #409eff;
}

::v-deep .el-input__wrapper {
  border-radius: 50px;
}

.elBtn {
  padding: 10px 30px;
  border-radius: 50px;
  background-color: #c0c0c0;
  color: #fff;
  height: 40px;
  margin-left: 20px;
}

.elBtn1 {
  padding: 10px 30px;
  border-radius: 50px;
  background-color: #2d91f3;
  color: #fff;
  height: 40px;
  margin-left: 20px;
}

.chat-container {
  margin: auto;
  display: flex;
  flex-direction: column;
}

.message {
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
}

.sent-message {
  align-self: flex-end;
  background-color: #90ee90;
}

.received-message {
  align-self: flex-start;
  background-color: #add8e6;
}
</style>

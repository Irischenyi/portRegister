<template>
  <div style="position: relative">
    <!-- 背景图片 -->
    <!-- <img
      style="width: 100%; height: 400px"
      src="../assets//images/shujufuwu.png"
      alt=""
      srcset=""
    /> -->
    <!-- <img style="width: 100%; height: 400px" :src="bannerSy" alt="" srcset="" /> -->
    
    <div class="slider-box">
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        v-if="bannerSy.length > 1"
        :autoplay="autoplay"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide v-for="(item, key) in bannerSy" :name="key" :img-src="setBaseInf.picUrl + item?.previewUrl" />
      </q-carousel>
      <div class="slider" v-else>
          <imgIn :src="setBaseInf.picUrl+bannerSy[0]?.previewUrl"/>
      </div>
    </div>
    <div class="num-box" style="display: none;">
      <!-- 数量 -->
      <div class="contain">
        <div class="num_text">
        <div>
          <div class="num">1000+</div>
          <div class="text">注册用户</div>
        </div>
        <div>
          <div class="num">32+</div>
          <div class="text">专家入驻</div>
        </div>
        <div>
          <div class="num">800+</div>
          <div class="text">上架服务</div>
        </div>
        <div>
          <div class="num">2500+</div>
          <div class="text">服务用户</div>
        </div>
      </div>
      </div>
    </div>
    <!-- 版心 -->
    <div class="contain">
      

      <!-- 服务简介 -->
      <div class="fwjj">
        <div class="fw">服务简介</div>
        <!-- 图片展示 -->
        <div class="fwjj-main"> 
          <!--  -->
          <!-- active -->
          <div class="item1 active" :style="activeInt">
            <div class="content">
                <img src="@/assets/images/fwjj1.png"/>
                <div class="title">数据安全能力成熟度评估</div>
                <div class="sub-title" style="width: 230px;">从数据安全管理的角度，以及企业组织的数据为核心，微软数据安全生命周期进行分析发现苏剧安全风险。</div>
                <div class="click-button">立即体验</div>
              </div>
          </div>
          <div class="item-line" style="order: 1;">
            <div  class="item1">
              <div class="content">
                 <img src="@/assets/images/fwjj2.png"/>
                 <div class="title">安全评估</div>
                 <div class="sub-title">专业的评估团队</div>
              </div>
            </div>
            <!-- @mouseenter="changeActive(2)" -->
            <div  class="item1 item2" >
              <div class="content">
                 <img src="@/assets/images/fwjj3.png"/>
                 <div class="title">安全服务商</div>
                 <div class="sub-title">您身边的安全服务顾问</div>
              </div>
            </div>
          </div>
          <div class="item-line" style="order: 2;">
            <div  class="item1 item2">
              <div class="content">
                <img src="@/assets/images/fwjj4.png"/>
                 <div class="title">安全服务</div>
                 <div class="sub-title">秒级部署 安全稳定</div>
              </div>
            </div>
            <div  class="item1" >
              <div class="content">
                <img src="@/assets/images/fwjj5.png"/>
                 <div class="title">安全培训</div>
                 <div class="sub-title">您身边的安全服务顾问</div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div style="display: flex">
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
        </div> -->
      </div>

      <!-- 合规专题 -->
      <div class="hgzt">
        <div class="fw">合规专题</div>
        <div class="hgzt-main">
            <div class="simple-line" v-for="item in [1,2,3]">
              <div>
                <img style="width: 100%" src="../assets/images/hgzt1.png" />
              </div>
              <div class="title">数据出境合规自评估</div>
              <div class="content">数据出境合规自评估数据出境合规自评估数据出境合规自评估</div>
            </div>
        </div>
      </div>

      <!-- 政策咨讯 -->
      <div class="zczx">
        <div class="fw">政策咨讯</div>
        <div style="text-align: right; color: #1f71ff; margin-top: -40px">
          查看更多
        </div>
        <div class="police-main">
          <q-tabs
            @update:model-value="btns"
            v-model="tab"
            dense
            active-color="primary"
            indicator-color="primary"
            narrow-indicator
            align="left"
          >
            <q-tab v-for="(item, key) in tabsChange" :name="key" :label="item.name" />
          </q-tabs>
          <div class="police-detail">
            <div class="left">
                <div class="pic">
                  <imgIn :src="setBaseInf.picUrl + tabsLists?.[0]?.attach.previewUrl"/>
                  <img />
                </div>
                <div class="content">
                  <div class="title">{{tabsLists?.[0]?.title}}</div>
                  <div class="content-detail">{{tabsLists?.[0]?.summary}}</div>
                  <div class="detail">查看详情</div>
                </div>
            </div>
            <div class="right">
              <ul>
                  <li v-for="item in tabsLists">
                    <div class="title">{{item.title }}</div>
                    <i>{{ item.publishDate }}</i>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 安全培训 -->
      <div class="aqpx">
        <div class="fw">安全培训</div>
        <div style="text-align: right; color: #1f71ff; margin: -40px 0 20px 0">
          查看更多
        </div>
        <div class="train-mian">
          <div class="item" v-for="item in safeList" @click="safeRouterPush(item.id)">
              <div class="img">
                <imgIn :src="setBaseInf.picUrl + item.coverImage.previewUrl"/>
                <!-- <img :src="setBaseInf.picUrl + item.coverImage.previewUrl"/> -->
              </div>
              <div class="bottom">{{  item.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <Bottom/>

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
    <!--  -->
  </div>
  <!-- 客户服务弹框 -->
  <el-dialog
    class="service-dialog"
    v-model="khfwDialog"
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
    style="
      position: absolute;
      right: 0px;
      bottom: -50px;
      background-color: #eaeff9;
    "
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
            <div style="font-size: 14px; margin-bottom: 15px">
              {{ (item as any).question }}
            </div>

            <div
              style="margin-left: 20px; color: #000"
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
        <div style="position: relative" class="tabPane">
          <el-form
            ref="formRef"
            :model="formModel"
            :rules="formRules"
            label-width="60px"
          >
            <el-form-item label="单位" prop="dw1">
              <el-input v-model="formModel.dw1" style="width: 60%"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="xm">
              <el-input v-model="formModel.xm" style="width: 60%"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="dw2">
              <el-input v-model="formModel.dw2" style="width: 60%"></el-input>
            </el-form-item>
            <el-form-item label="留言" prop="ly">
              <el-input
                v-model="formModel.ly"
                type="textarea"
                :rows="4"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div
          style="
            display: flex;

            margin-top: 20px;
          "
        >
          <el-input v-model="cjwtInput" style="height: 40px"></el-input>

          <el-button @click="getCodes" class="elBtn1">发送</el-button>
          <div
            style="width: 10%; position: absolute; top: -200px; left: -800px"
          >
            <picSlider
              ref="picRef"
              :show="codeValue.show"
              @postCheck="postCheck"
            />
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>

  <!-- 联系方式弹框 -->
  <el-dialog
    style="padding: 20px 30px; background-color: #eaeff9"
    v-model="lxfsDialog"
    width="25%"
    :before-close="handleClose3"
  >
    <div style="display: flex; justify-content: space-around;">
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
import { ElMessage } from 'element-plus'
import { setBaseInf, setHttp } from '@/http/httpContentMain'
import { useRouter } from 'vue-router'
import picSlider from '@/components/picSlider.vue'
import codeMixinHook from '../views/login/codeMixin'
import Bottom from '@/components/Bottom.vue'
const router = useRouter()
onMounted(async () => {
  await getBanner() //获取 Banner 图
  await getCategoryTabs() //获取政策资讯类别
  //指定政策资讯下的分页列表
  await getArticlePaged()
  await safeService()
})
import type { TabsPaneContext } from 'element-plus'

const picRef = ref()
const { codeValue, getCode, closeCodeFun, failMessage } = codeMixinHook(picRef)
//  获取 Banner 图
const bannerSy = ref([] as {previewUrl: string}[])
const getBanner = async () => {
  const http = setHttp();
  const res = (await http.get('/k2401-banner/list?category=1')) as any
  bannerSy.value = res as {previewUrl: string}[]
}
//获取政策资讯类别
const tabsChange = ref([] as { name: string, value: string}[])

const getCategoryTabs = async () => {
  const http = setHttp();
  const res = (await http.get('/k2401-article/article-category-list')) as any
  tabsChange.value = res as { name: string, value: string}[]
}
const tabsLists = ref([] as {title: string , publishDate: string, id: string, summary: string, attach: {
  previewUrl: string
}}[])
const ids = ref('')
const getArticlePaged = async () => {
  const http = setHttp();
  const res = (await http.get('k2401-article/article/paged?current=1&size=8&category='+(tab.value+1))) as any

  tabsLists.value = res.items as {title: string , publishDate: string, id: string, summary: string, attach: {
  previewUrl: string
}}[]

}
const tab = ref(0)
const slide = ref(1)
const tabsValue = ref('1')
const autoplay = ref(true)
const btns = (value: any) => {
  tabsValue.value = value
  getArticlePaged()
}

interface itemInf {
  title: string;
  id: string;
  coverImage: { previewUrl: string}
}
const safeList = ref([] as itemInf[])
const safeService = async () => {
  safeList.value = [];
  const http = setHttp();
  const res = await http.get('k2401-safety/safety/paged?current=1&size=4&category=1') as unknown  as { items : itemInf[]}
  safeList.value = res.items as itemInf[]
}

// 封装常见问题列表接口
const questionList = ref([])
const getQuestion = async () => {
  const http = setHttp();
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
  const http = setHttp();
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

const isAcitive = ref(0);

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
  const http = setHttp();
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
  const http = setHttp();
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
  const http = setHttp();
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

const safeRouterPush = (id: string) => {
  const routerUrl = router.resolve({
    path: 'dataDetail',
    query: {
      type: 1,
      id: id
    }
  })

  window.open(routerUrl.href, '_blank')
}

const activeInt = ref('order: 0;')
const changeActive = (key: number) => {
  console.log(key)
  if(key == 1){
    activeInt.value = 'order: 1;';
  } else if(key == 2 || key == 3){
    activeInt.value = 'order: 2;';
  } else if(key == 4 || key == 5){
    activeInt.value = 'order: 3;';
  }
  isAcitive.value = key;
}

const getCodes = async () => {
  await formRef.value.validate()
  await getCode()
}
const formRef = ref()
const postCheck = (uuid: string, left: number) => {
  const http = setHttp();
  http
    .post('k2401-online-message/message', {
      unitName: formModel.value.dw1, // 单位名称（必填）
      userName: formModel.value.xm, // 姓名（必填）
      mobile: formModel.value.dw2, // 手机号码（必填）
      msgContent: formModel.value.ly, // 留言内容（必填）
      uuid: uuid, // 1.9.1中的滑动验证码的唯一识别号（必填）
      xposition: left // 1.9.1中滑动验证码的x坐标值
    })
    .then((value) => {
      closeCodeFun(true)
    })
    .fail((value) => {
      console.log('失败 ++++++++')
      ElMessage({ type: 'warning', message: value })
      closeCodeFun(value)
      failMessage.value = value as string
    })
}
</script>
<style lang="scss" scoped>
.contain {
  width: 70%;
  padding: 10px;
  max-width: 1300px;
  min-width: 800px;
  margin: 0 auto;
}
.num-box{
  background-color: #eef1f6;
  max-width: auto;
  width: 100%;
}
.num_text {
  display: flex;
  padding: 30px 0;
  justify-content: space-between;
}
.num {
  font-size: 45px;
  font-weight: 600;
  color: #4893ff;
}
.text{
  margin-top: 10px;
  color: grey;
  position: relative;
  transform: scale(0.9);
  &::after{
    content: '';
    position: absolute;
    width: 15px;
    height: 3px;
    left: 0px;
    bottom: -10px;
    background: #4893FF;
  }
}
.fwjj {
  width: 100%;
  .fwjj-main{
    width: 100%;
    font-size: 0px;
    display: flex;
    .item-line{
      width: 25%;
    }
    .item1{
      width: 100%;
      padding-top: 90%;
      background: #525B75;
      box-sizing: border-box;
      display: inline-block;
      transition: all ease 0.2;
      position: relative;
      .content{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
        img{
          position: absolute;
          width: 120%;
          z-index: 0;
          bottom: 0px;
          left: -20%;
        }
        .sub-title{
          color: white;
          margin-top: 10px;
          font-size: 13px;
          margin-left: 30px;
          z-index: 1;
        }
        .title{
          color: white;
          font-weight: bold;
          margin-left: 30px;
          font-size: 15px;
          position: relative;
          &::after{
            content: '';
            width: 5px;
            height: 5px;
            background-color: #146AFF;
            position: absolute;
            left: -15px;
            top: 9px;
          }
        }
        .click-button{
          z-index: 1;
          display: inline-block;
          padding: 8px 10px;
          border: 1px solid white;
          border-radius: 20px;
          font-size: 14px;
          color: white;
          text-align:center;
          width: 120px;
          margin-top: 100px;
          margin-left: 30px;
          cursor: pointer;
        }
      }
    }
    .item2{
      background: #454D62;
    }
    .active{
        width: 50%;
        padding-top: 40%;
        background: #146AFF;
        order: 3;
    }
    &::after{
      content: '';
      display: block;
      clear: both;
    }
  }
}
.fw {
  margin-top: 10px;
  padding: 50px 0;
  font-size: 18px;
  text-align: center;
  position: relative;
  &::after{
    content: '';
    position: absolute;
    width: 20px;
    height: 5px;
    bottom: 40px;
    border-radius: 10px;
    background-color: #1b6fff;
    left: calc(50% - 10px);
  }
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
.hgzt-main{
  display: flex;
  justify-content: space-between;
  .simple-line{
    border: 1px dashed #b3b3b3;
    box-sizing: border-box;
    padding: 12px;
    width: calc(33% - 10px);
    padding-bottom: 5px;
    .title{
      font-weight: bold;
      margin: 2px 0px;
    }
    .content{
      color: grey;
      font-size: 12px;
      margin: 5px 0px;
    }
  }
  
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
  position: fixed;
  top: 400px;
  right: 10px;
  transition: all ease 0.5s;
}
.fuwu {
  background-color: #6cabf8;
  display: flex;
  width: 70px;
  height: 70px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 6px;
  transform: scale(0.9);
  right: 20px;
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

// .dialogClass {
//   top: 1000px;
//   left: 1000px;
// }

.slider-box{
  width: 100%;
  .slider{
    width: 100%;
    padding-top: 35%;
    position: relative;
  }
}

.train-mian{
  display: flex;
  margin-bottom: 80px;
  justify-content: space-between;
  .item{
    width: calc(25% - 19px);
    padding-top: 28%;
    position: relative;
    .img{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      img{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
      }
    }
    .bottom{
      position: absolute;
      width: 100%;
      bottom: 0px;
      padding: 10px 0px;
      text-align: center;
      color: white;
      background-color: rgba(0,0,0,0.2);
    }
  }
}

.police-main{
  min-height: 400px;
}
.police-detail{
  display: flex;
  .left{
    width: 50%;
    height: 350px;
    box-sizing: border-box;
    padding: 20px;
    .pic{
      width: 100%;
      padding-top: 55%;
      overflow: hidden;
      position: relative;
      img{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
      }
    }
    .title{
      font-size: 15px;
      color: black;
      padding: 5px 0px;
      text-wrap: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .content{
      color: grey;
      font-size: 13px;
      padding: 10px;
    }
    
    .detail{
      text-align: right;
      color: grey;
      font-size: 13px;
      margin-top: 5px;
    }
  }
  .right{
    width: 50%;
    height:100%;
    li{
      padding: 10px 0px;
      border-bottom: 1px solid #ededed;
      position: relative;
      display: flex;
      &::marker{
        color: #146AFF;
      }
      &::after{
        content: '';
        width: 5px;
        height: 5px;
        background-color: #146AFF;
        border-radius: 5px;
        position: absolute;
        left: -15px;
        top: 16px;
      }
      .title{
        width: 70%;
        text-wrap: nowrap;
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
      }
      i{
        position: absolute;
        right: 0px;
        font-size: 12px;
        color: grey;
      }
    }
  }
}

::v-deep .el-overlay-dialog .service-dialog{
  width: 300px;
}
</style>

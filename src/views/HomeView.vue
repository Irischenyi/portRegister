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
       <!-- 合规专题 -->
       <div class="hgzt">
        <div class="fw">合规专题</div>
        <div class="hgzt-main">
            <div class="simple-line" @click="changeRouter(1)">
              <div>
                <img style="width: 100%" src="../assets/images/hgzt1.png" />
              </div>
              <div class="title">数据出境合规自评估</div>
              <div class="content">数据出境合规自评估</div>
            </div>
            <div class="simple-line" @click="changeRouter(2)">
              <div>
                <img style="width: 100%" src="../assets/images/hgzt2.png" />
              </div>
              <div class="title">数据出境安全评估材料完备性预检查</div>
              <div class="content">数据出境安全评估材料完备性预检查</div>
            </div>
            <div class="simple-line" @click="changeRouter(3)">
              <div>
                <img style="width: 100%" src="../assets/images/hgzt3.png" />
              </div>
              <div class="title">个人信息出境标准合同备案</div>
              <div class="content">个人信息出境标准合同备案</div>
            </div>
        </div>
      </div>

      <!-- 服务简介 -->
      <div class="fwjj">
        <div class="fw">服务简介</div>
        <!-- 图片展示 -->
        <div class="fwjj-main" @click="goToService()"> 
          <!--  -->
          <!-- active -->
          <div class="item1 active" :style="activeInt">
            <div class="content">
                <img src="@/assets/images/fwjj1.png"/>
                <div class="title">数据出境安全咨询服务</div>
                <div class="sub-title" style="width: 230px;">专注于为企业提供数据出境合规指导，服务内容包括解读相关政策法规，协助开展数据出境风险评估，指导数据合规整改，助力企业数据安全合法出境。
数据安全风险评估服务：依据国家、行业等有关数据安全技术与管理标准，从风险管理的角度，采用专业工具对客户数据生命周期中存在的安全隐患和威胁风险进行评估。</div>
                <div class="click-button">立即体验</div>
              </div>
          </div>
          <div class="item-line" style="order: 1;">
            <div  class="item1">
              <div class="content">
                 <img src="@/assets/images/fwjj2.png"/>
                 <div class="title">数据安全分类分级服务</div>
                 <div class="sub-title">
                  依据国家、行业等有关数据安全技术与管理标准，从风险管理的角度，采用专业工具对客户数据生命周期中存在的安全隐患和威胁风险进行评估。
数据安全分类分级服务：采用“数据分类分级工具+专业服务人员”组合形式，全面开展数据分类分级工作，形成用户的数据分类分级清单。
                 </div>
              </div>
            </div>
            <!-- @mouseenter="changeActive(2)" -->
            <div  class="item1 item2" >
              <div class="content">
                 <img src="@/assets/images/fwjj3.png"/>
                 <div class="title">数据安全能力成熟度评估服务</div>
                 <div class="sub-title">
                  依据国家标准定义的能力成熟度等级及安全过程域划分定义，聚焦数据安全相关的四大能力:组织建设、制度流程、技术工具、人员能力，针对组织当前的数据安全能力进行评级。
                 </div>
              </div>
            </div>
          </div>
          <div class="item-line" style="order: 2;">
            <div  class="item1 item2">
              <div class="content">
                <img src="@/assets/images/fwjj4.png"/>
                 <div class="title">数据安全治理咨询服务</div>
                 <div class="sub-title">
                    从数据资产梳理、安全现状调研、从合规性和数据全生命周期等视角，识别数据安全能力差距和安全风险，助力制定全面且可执行的数据安全计划。
                 </div>
              </div>
            </div>
            <div  class="item1" >
              <div class="content">
                <img src="@/assets/images/fwjj5.png"/>
                 <div class="title">跨境数据安全合规监测服务</div>
                 <div class="sub-title">
                  平台提供了一整套数据跨境合规流程的技术手段和方法，能够清晰掌握业务数据、个人信息、重要数据等敏感数据的跨境流动情况，有效帮助企业避免因数据处理不当导致的数据丢失、经济受损、名誉受损。
数据安全合规检测服务：通过智能分析网络流量，全面理数据资产暴露面和流转情况，及时发现业务系统的脆弱性和数据流转风险，帮助用户发现当前面临的数据安全风险，有效识别敏感数据，辅助客户进行分类分级管理，帮助用户快速分析合规现状，并提供安全整改建议及解决方案。
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      <!-- 政策咨讯 -->
      <div class="zczx">
        <div class="fw" @click="artDetail()">政策咨讯</div>
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
                  <imgIn :src="setBaseInf.picUrl + tabsLists?.[0]?.attach.previewUrl" v-if="tabsLists?.[0]?.attach.previewUrl"/>
                </div>
                <div class="content">
                  <div class="title">{{tabsLists?.[0]?.title}}</div>
                  <div class="content-detail">{{tabsLists?.[0]?.summary}}</div>
                  <div class="detail" @click="artDetail(tabsLists?.[0]?.id)">查看详情</div>
                </div>
            </div>
            <div class="right">
              <ul>
                  <li v-for="item in tabsLists" @click="artDetail(item.id)">
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
        <div class="fw"  @click="seeMore('safe')">安全培训</div>
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
      <div @click="khfwDialog = true" class="fuwu">
        <img
          style="width: 35%; margin-bottom: 5px"
          src="../assets/images/kehufuwu.png"
          alt=""
        />
        <div style="color: #fff">客户服务</div>
        <q-tooltip anchor="center left" transition-show="flip-right" self="center right" :offset="[10, 10]">
          <div style="font-size: 14px;padding: 10px;">0230-12322221111</div> 
        </q-tooltip>
      </div>
      <div @click="khfwDialog=true" class="fuwu">
        <img
          style="width: 35%; margin-bottom: 5px"
          src="../assets/images/zaixianfuwu.png"
          alt=""
        />
        <div style="color: #fff">在线服务</div>
      </div>
      <div  class="fuwu">
        <img
          style="width: 35%; margin-bottom: 5px"
          src="../assets/images/lianxifangshi.png"
          alt=""
        />
        <div style="color: #fff">联系方式</div>
        <q-tooltip anchor="center left" transition-show="flip-right" self="center right" :offset="[10, 10]">
          <div class="code-pic"></div> 
        </q-tooltip>
      </div>
    </div>
    <!--  -->
  </div>
  <questionBox :show="khfwDialog" @close="khfwDialog=false;"/>
  <!-- 联系方式弹框 -->
  <q-dialog v-model="showQuestion">
      <div class="question-dialog">
        <q-card-section class="row q-pb-none" style="display: flex;flex-direction: row-reverse;">
          <q-btn icon="close" flat round dense @click="closeQuestion"/>
        </q-card-section>
        <q-card-section>
          <div class="question-main">
            <div class="icons">
              <q-icon name="report"/>
            </div>
            <div class="main">
              <div class="title">跨境数据需求调研</div>
              <div class="sub-title">您的需求调研任务未完成，需要尽快处理</div>
            </div>
          </div> 
            <q-btn color="primary" @click="showQuestionPage()" unelevated  rounded  class="button" label="立即查看" />
        </q-card-section>
      </div>
    </q-dialog>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { setBaseInf, setHttp } from '@/http/httpContentMain'
import { useRouter } from 'vue-router'
import questionBox from '@/components/questionBox.vue'
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
  await isRegise()
})
import type { TabsPaneContext } from 'element-plus'

const picRef = ref()
const showQuestion = ref(false)
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
  tabsLists.value = []
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


const changeRouter  = (val: number) => {
  let path
  if(val == 1){
    path = '/index/dataProcessing'
  }else if(val == 2){
    path = '/index/securityAssessment'
  }else if(val == 3){
    path = '/index/securityAssessment'
  }
  router.push({
    path: path
  })
}


const isRegise = async  () => {
  if(localStorage.getItem('close') == 'true') return
  const token = localStorage.getItem('token');
  const http = setHttp();
  http.get('k2401-survey/check-submit', {
      'Authorization':  'Bearer ' + token
    }).then((data) => {
      if(!data){
        showQuestion.value = true;
      }else{

      }
    })
}

const closeQuestion = () => {
  showQuestion.value = false;
  localStorage.setItem('close','true')
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

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const showQuestionPage = () => {
  
  router.push({
      path: '/index/quastionHome'
    })
}

const goToService = () => {
  router.push({
      path: '/index/serviceHall'
  })
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


const seeMore = (type: string) => {
    let routerUrl: {href: string}
    if(type == 'safe'){
      router.push({
        path: '/index/securityTraining'
      })
    }
  }
    

const safeRouterPush = (id: string) => {
  router.push({
    path: 'dataDetail',
    query: {
      type: 1,
      id: id
    }
  })
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
      ElMessage({ type: 'warning', message: value })
      closeCodeFun(value)
      failMessage.value = value as string
    })
}

const artDetail = (id?: string) => {
  if(id){
    router.push({
      path: '/index/policyconSultationDetail',
      query: {
        id: id
      }
    })
  }else{
    router.push({
      path: '/index/policyconSultation'
    })
  }
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
    transition: all ease 0.3s;
    position: relative;
    
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
      
      &:hover{
        &::before{
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0px;
            top: 0px;
            background: rgba(0,0,0,0.3);
            z-index: 2;
            box-shadow: inset -20px -20px 30px rgba(255,255,255,0.12);
        }
          img{
            transform: scale(1.1) translateY(-5%) translateX(-5%);
            
          }
          .title{
            display: none;
          }
          .sub-title{
            text-wrap: wrap !important;
            overflow: hidden;
            text-overflow: unset;
            font-size: 11px  !important;
            height:auto !important;
            width: 80% !important;
            margin: 0 auto  !important;
            color: #dad4d4 !important;
            position: absolute;
            top: 50%;
            left: 10%;
            transform: translateY(-50%);
          }
        }
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
          transition: all ease-in 0.3s;
        }
        .sub-title{
          color: white;
          margin-top: 10px;
          font-size: 13px;
          margin-left: 30px;
          text-wrap: nowrap;
          overflow: hidden;
          width: 80%;
          text-overflow: ellipsis;
          z-index: 2;
          transition: all ease 0.25s 0s;
        }
        .title{
          color: white;
          font-weight: bold;
          margin-left: 30px;
          font-size: 15px;
          position: relative;
          transition: all ease 0.3s 0.12s;
          z-index: 2;
          &::after{
            content: '';
            width: 5px;
            height: 5px;
            background-color: white;
            position: absolute;
            left: -15px;
            top: 9px;
          }
        }
        .click-button{
          z-index: 2;
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
        .sub-title{
          text-wrap: wrap !important;
          transition: all ease 0.12s 0s !important;
        }
        &:hover{
          .sub-title{
            font-size: 16px !important;
            line-height: 28px;
          }

          .click-button{
            display: none;
          }
        }
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
    transition: all ease 0.3s;
    &:hover{
      background-color: #dadada;
      img{
        transform: scale(1.01)
      }
    }
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
  bottom: 100px;
  right: 5px;
  transition: all ease 0.5s;
  transform: scale(0.9);
  font-size: 12px;
  z-index: 11;
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
    box-sizing: border-box;
    padding: 20px;
    transition: all ease 0.2s;
    &:hover{
      background-color: rgba(0,0,0,0.08);
      .pic{
        transform: scale(0.98);
      }
      .detail{
        color: #146AFF;
      }
    }
    .pic{
      width: 100%;
      padding-top: 55%;
      overflow: hidden;
      position: relative;
      transition: all ease 0.13s 0.03s;
      img{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
      }
    }
    .title{
      text-align: left;
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
      // height: 20px;
      // overflow: hidden;
    }
    .detail{
      margin-top: 3px;
      transition: all ease 0.13s;
      cursor: pointer;
    }
    .content-detail{
      text-align: left;
      height: 20px;
      overflow: hidden;
      text-wrap: nowrap;
      text-overflow: ellipsis;
    }
    .content{
      text-align: right;
      color: grey;
      font-size: 13px;
      margin-top: 12px;
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
      transition: all ease 0.23s;
      cursor: pointer;
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
      &::before{
        height: 0px;
      }
      &:hover{
        &::before{
          content: '';
          width: calc(100% + 40px);
          height: 100%;
          position: absolute;
          left: -30px;
          top: 0px;
          background-color: rgba(0,0,0,0.04);
        }
        i{
          color: #146AFF;
        }
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

.question-dialog{
  width: 400px;
  height: 230px;
  background: white;
  .question-main{
    display: flex;
    align-items: center;
    justify-content: center;
    .icons{
      font-size: 60px;
      color: #ffc155;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 60px;
      position: relative;
      z-index: 10;
      padding: 10px;
      margin-right: 4px;
      &::before{
        content: '';
        width: 65px;
        height: 65px;
        position: absolute;
        background: #f9e1b6;
        opacity: 0.4;
        left: 7px;
        z-index: 1;
        top: 7px;
        border-radius: 60px;
      }
    }
    .main{
      .title{
        font-weight: bold;
        font-size: 17px;
      }
      .sub-title{
        font-size: 13px;
        margin-top: 2px;
      }
    }
  }
  button.button{
      margin: 0 auto;
      position: relative;
      left: 50%;
      margin-left: -50px;
      margin-top: 10px;
    }
}

.code-pic{
  width: 80px;
  height: 80px;
  border-radius: 2px;
  border: 1px solid white;
  background-color: white;
  margin: 3px 0px;
}

</style>

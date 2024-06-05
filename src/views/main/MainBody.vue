<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import http from '@/http/httpContentMain'
import { ref } from 'vue'

const router = useRouter()
const headers = [
  {
    name: '首页',
    link: '/index/home'
  },
  {
    name: '服务大厅',
    link: '/index/serviceHall'
  },
  {
    name: '合规专题',
    link: '/index/complianCetopics'
  },
  {
    name: '政策咨询',
    link: '/index/policyconSultation'
  },
  {
    name: '安全培训',
    link: '/index/securityTraining'
  }
]
const token = localStorage.getItem('token');
const isShowQuestionButton = ref(false)
http.get('k2401-survey/check-submit', {
      'Authorization':  'Bearer ' + token
    }).then((data) => {
  if(!data){
    isShowQuestionButton.value = true;
  }
}).fail(() => {
  isShowQuestionButton.value = true;
})


const routerChange = (value: string) => {
  if(value == 'login') {
    router.push({
      path: '/login'
    })
  } else if(value == 'center'){
    const routerUrl = router.resolve({
      path: '/personalPlatform/basic'
    })
    window.open(routerUrl.href, '_blank')
  } else {
    http.get('k2401-survey/check-submit', {
      'Authorization':  'Bearer ' + token
    }).then((data) => {
      router.push({
        path: '/index/quastionHome'
      })
    }).fail((data) => {
      router.push({
        path: '/login'
      })
    })
    
  }
  
}

const goTo = (link: string) => {
  router.push({
      path:link
    })
}

</script>

<template>
  <div>
    <div class="footer_wrap">
      <div class="title1">
        <div class="pic-Logo">
          <img src="@/assets/images/selfLogo.png"/>
        </div>
        数据出境公共服务平台
      </div>
      <div class="center-name">
        <div v-for="item in headers" @click="goTo(item.link)">{{item.name}}</div>
      </div>
      <div class="right">
        <div class="form" v-if="isShowQuestionButton" @click="routerChange('question')">调研填表</div>
        <div class="login" v-if="!token" @click="routerChange('login')">登录/注册</div>
        <div class="head" v-if="token" @click="routerChange('center')"></div>
      </div>
    </div>
  </div>

  <RouterView />
</template>

<style lang="scss" scoped>
.footer_wrap {
  /* position: fixed;
  left: 0;
  top: 0; */
  display: flex;
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  position: relative;
  align-items: center;
}
.title1{
  .pic-Logo{
    width: 40px;
    height: 40px;
    background: grey;
    margin-right: 20px;
    border-radius: 40px;
  }
  display: flex;
  align-items: center;
  padding: 0px 10px;
  font-weight: bold;
  font-size: 18px;
  padding: 0px 30px;
}
.center-name{
  display: flex;
  margin-left: 30px;
  div{
    padding: 15px 28px;
    font-size: 14px;
    cursor: pointer;
    transition: all ease 0.2s;
    &:hover{
      color: #4984FF;
    }
  }
}
.right{
  display: flex;
  position: absolute;
  right: 35px;
  .form, .login{
    cursor: pointer;
    padding: 6px 18px;
    font-size: 12px;
    border-radius: 40px;
  }
  .login{
    background: #4984FF;
    margin-left: 10px;
    color: white;
  }
  .form{
    border: 1px dashed #4984FF;
    color: #4984FF;
  }
  .head{
    width: 30px;
    height: 30px;
    background: grey;
    border-radius: 40px;
    margin-left: 20px;
  }
}
.routey {
  color: #000;
  text-decoration: none;
  margin-right: 50px;
}
.title {
  font-size: 18px;
  margin-right: 150px;
}
</style>

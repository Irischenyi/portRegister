<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import http from '@/http/httpContentMain'
import { ref } from 'vue'

const router = useRouter()
const headers = [
  {
    name: '首页',
    link: '/index/home',
    value: 'home'
  },
  {
    name: '服务大厅',
    link: '/index/serviceHall',
    value: 'service'
  },
  {
    name: '合规专题',
    link: '/index/complianCetopics',
    value: 'complian'
  },
  {
    name: '政策咨询',
    link: '/index/policyconSultation',
    value: 'policy'
  },
  {
    name: '安全培训',
    link: '/index/securityTraining',
    value: 'security'
  }
]
const token = localStorage.getItem('token');
const showing = ref(false)
const isShowQuestionButton = ref(false)
if(!token){
  isShowQuestionButton.value = false
}else{
  http.get('k2401-survey/check-submit', {
      'Authorization':  'Bearer ' + token
    }).then((data) => {
    if(!data){
      isShowQuestionButton.value = true;
    }
  }).fail(() => {
    isShowQuestionButton.value = true;
  })
}


const routerChange = (value: string) => {
  if(value == 'login') {
    router.push({
      path: '/login'
    })
  } else if(value == 'center'){
    const routerUrl = router.push({
      path: '/personalPlatform/basic'
    })
    // window.open(routerUrl.href, '_blank')
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

const loginOut = () => {
  localStorage.setItem('token', '');
  location.reload()
}

const name = ref('')
const goTo = (link: string, value: string) => {
  router.push({
      path:link
  })
  name.value = value
}

</script>

<template>
  <div>
    <div class="footer_wrap">
      <div class="title1">
        <div class="pic-Logo">
          <img src="@/assets/logo.png"/>
        </div>
        数据出境公共服务平台
      </div>
      <div class="center-name">
        <div v-for="item in headers" :class="{'active': name == item.value }" @click="goTo(item.link, item.value)">{{item.name}}</div>
      </div>
      <div class="right">
        <div class="form" v-if="isShowQuestionButton" :style="token?'top: 10px;':''" @click="routerChange('question')">调研填表</div>
        <div class="login" v-if="!token" @click="routerChange('login')">登录/注册</div>
        <!--  -->
        <div class="head" v-if="token">
          <img/>
          <q-menu class="menu" v-model="showing">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section class="section" @click="routerChange('center')">用户中心</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section class="section" @click="loginOut">退出登录</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
        
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
  box-shadow: 0 0 20px 4px rgba(0,0,0,0.12);
}
.title1{
  .pic-Logo{
    width: 40px;
    height: 40px;
    margin-right: 20px;
    border-radius: 40px;
    position: relative;
    img{
      position: relative;
      top: 3px;
      width: 100%;
    }
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

.active{
  color: #4984FF;
  font-weight: bold;
  position: relative;
  &::after{
    content: '';
    width: 60px;
    height: 3px;
    background-color: #4984FF;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
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
    height: 30px;
    position: relative;
  }
  .head{
    width: 50px;
    height: 53px;
    border-radius: 40px;
    margin-left: 20px;
    font-size: 14px;
    img{
      width: 35px;
      height: 35px;
      border-radius: 90px;
      position: relative;
      top: 7px;
      background-color: grey;
    }
    
  }
}
::v-deep .section{
  font-size: 13px !important;
  text-align: center;
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

.menu{
  position: relative;
  top: 20px;
}
</style>

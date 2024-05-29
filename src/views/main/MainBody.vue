<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import http from '@/http/httpContentMain'
import { useRouter } from 'vue-router'

const router = useRouter()
const routerChange = (value: string) => {
  if(value == 'login') {
    router.push({
      path: '/login'
    })
  } else {
    // http.get('k2401-survey/check-submit', {
    //   'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRlIjoiMjAyNC0wNS0wMiAyMjo1ODoyNiIsIm5pY2tOYW1lIjoi5LyB5Lia5ZCN56ewIiwibG9naW5OYW1lIjoiZGVtbzIiLCJ1c2VySWQiOjE3ODYwMjkzNzUwMzMwNDQ5OTR9.BsbPBttaiC9jtj_AjVXZnCvACA-QUN2pfCnbOWdzAq4'
    // }).then((data) => {
    //   console.log(data)
    // }).fail(() => {

    // })
    router.push({
      path: '/index/quastionHome'
    })
  }
  
}

</script>

<template>
  <div>
    <div class="footer_wrap">
      <div class="title">数据出境公共服务平台</div>
      <div style="margin-right: 600px">
        <RouterLink class="routey" to="/index/home">首页</RouterLink>
        <RouterLink class="routey" to="/index/serviceHall">服务大厅</RouterLink>
        <RouterLink class="routey" to="/index/complianCetopics"
          >合规专题</RouterLink
        >
        <RouterLink class="routey" to="/index/policyconSultation"
          >政策咨讯</RouterLink
        >
        <RouterLink class="routey" to="/index/securityTraining">安全培训</RouterLink>
      </div>
      <div>
        <q-btn color="white" text-color="black" label="调研填表" @click="routerChange('question')"/>
        <q-btn color="primary" label="登陆注册" @click="routerChange('login')"/>
        <!--  -->
      </div>
    </div>
    <div class="public"></div>
  </div>

  <RouterView />
</template>

<style scoped>
.footer_wrap {
  /* position: fixed;
  left: 0;
  top: 0; */
  display: flex;
  padding: 20px 50px;
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
}
/* .public {
  width: 1500px;
  margin: 0 auto;
  background-color: red;
} */
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

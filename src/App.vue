<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <div class="footer_wrap">
      <div class="title">数据出境公共服务平台</div>
      <div style="margin-right: 600px">
        <RouterLink class="routey" to="/home">首页</RouterLink>
        <RouterLink class="routey" to="/serviceHall">服务大厅</RouterLink>
        <RouterLink class="routey" to="/complianCetopics">合规专题</RouterLink>
        <RouterLink class="routey" to="/policyconSultation"
          >政策咨讯</RouterLink
        >
        <RouterLink class="routey" to="/securityTraining">安全培训</RouterLink>
      </div>
      <div>数据出境公共服务平台</div>
    </div>
    <div class="public">
      <RouterView />
    </div>
  </div>

  <!-- <RouterView /> -->
</template>

<style scoped>
.footer_wrap {
  /* position: fixed;
  left: 0;
  top: 0; */
  display: flex;
  padding: 20px 50px;
  background-color: red;
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

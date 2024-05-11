<script setup lang="ts">
import InputTemplate from '@/components/InputTemplate.vue'
defineProps<{
 
}>()
</script>

<template>
    <div class="bg"></div>
    <div class="center">
        <div class="title">欢迎登录 !</div>
        <InputTemplate name="用户名"/>
        <InputTemplate name="密码"/>
        <div style="position: relative;">
            <InputTemplate class="check-value" name="验证码"/>
            <q-btn class="get-code" outline rounded color="primary" label="获取验证码" />
        </div>
        <InputTemplate name="新密码"/>
        <InputTemplate name="确认密码"/>
        <div class="bottom-btn">
            <q-btn unelevated rounded color="grey-5" label="返回" />
            <q-btn unelevated rounded color="primary" label="提交" />
        </div>
    </div>
</template>

<style scoped>
.center{
    width: 400px;
    height: auto;
    background: linear-gradient(to bottom,#99caf9,white,white, #ffffff);
    position: absolute;
    right: 150px;
    padding: 40px 20px;
    border-top: 3px #2ef3fd solid;
    margin-top: 20px;
}
.title{
    font-weight: 400;
    padding: 20px 20px;
    font-size: 20px;
}

.bottom *, .bottom div div{
    display: inline-block;
}

.login{
    margin-top: 25px;
    margin-bottom: 10px;
    width: 100%;
}

.bottom div:nth-child(1) div{
   margin-right: 10px;
}

.bg{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background-image: url("@/assets/login.png");
    background-size: 100% 100%;
}

.remember-box{
    margin: 10px 0px;
    margin-bottom: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
::v-deep .check-value .q-input{
    width: 200px;
}

.get-code{
    position: absolute;
    width: 180px;
    left: 220px;
    top: 40px;
    height: 40px;
}

.bottom-btn{
    display: flex;
    justify-content: space-around;
    padding: 10px 0px;
    padding-top: 20px;
}

.q-btn{
    padding: 0px 40px;
    margin: 0px 10px;
}
</style>


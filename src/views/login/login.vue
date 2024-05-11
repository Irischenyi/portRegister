<script setup lang="ts">
import InputTemplate from '@/components/InputTemplate.vue'
defineProps<{
 
}>()
const remember = false
</script>

<template>
    <div class="bg">
        <div class="right">
            <div class="title">欢迎登录 !</div>
            <InputTemplate name="用户名"/>
            <InputTemplate name="密码"/>
            <div class="remember-box"><q-checkbox v-model="remember" />记住密码</div>
            <div style="position: relative;">
                <InputTemplate class="check-value" name="验证码"/>
                <q-btn class="get-code" outline rounded color="primary" label="获取验证码" />
            </div>
            <q-btn class="glossy login" rounded color="primary" label="登录" />
            <div class="bottom"> 
                <div>
                    <div>返回页面</div>
                    <div>忘记密码</div>
                </div>
                <div>免费注册</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.right{
    width: 400px;
    background: linear-gradient(to bottom,#99caf9,white,white, #ffffff);
    position: absolute;
    right: 20%;
    padding: 40px 20px;
    border-top: 3px #2ef3fd solid;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.title{
    font-weight: 400;
    padding: 20px 20px;
    font-size: 20px;
    width: 100%;
}

.bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 5px;
    margin-top: 20px;
    font-size: 14px;
    color: #0179FF;
    width: 100%;
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
    display: flex;
    align-items: center;
}

.remember-box{
    margin: 10px 0px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 8px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
}
::v-deep .check-value .q-input{
    width: 200px;
}

.get-code{
    position: absolute;
    width: 140px;
    left: 210px;
    top: 40px;
    height: 40px;
}
</style>


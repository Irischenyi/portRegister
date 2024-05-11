<script setup lang="ts">
import InputTemplate from '@/components/InputTemplate.vue'
defineProps<{
 
}>()
const list = [
    {
        name: "企业名称"
    },
    {
        name: "地址"
    },
    {
        name: "邮件"
    },
    {
        name: "联系电话"
    },
    {
        name: "用户名"
    },
    {
        name: "统一社会信用代码"
    },
    {
        name: "联系人"
    },
    {
        name: "验证码"
    },
    {
        name: "密码"
    },
    {
        name: "确认密码"
    }
]
</script>

<template>
    <div class="rest-password">
        <div class="center">
            <div class="welcome-register">欢迎企业注册！</div>
            <div class="inline">
                <InputTemplate  name="企业名称" />
                <InputTemplate  name="统一社会信用代码" />
                <InputTemplate  name="地址" />
                <InputTemplate  name="注册地" />
                <InputTemplate  name="邮箱" />
                <InputTemplate  name="联系人" />
                <InputTemplate  name="联系电话" />
                <div class="check-code" style="position: relative;width:340px;">
                    <InputTemplate class="check-value" name="验证码"/>
                    <q-btn class="get-code" outline rounded color="primary" label="获取验证码" />
                </div>
                <InputTemplate  name="用户名" />
                <InputTemplate  name="密码" />
                <InputTemplate  name="上传营业执照" />
                <InputTemplate  name="确认密码" />
            </div>
            <div class="bottom-btn">
                <q-btn unelevated rounded color="grey-5" label="返回" />
                <q-btn unelevated rounded color="primary" label="提交" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.center{
   width: 840px;
   margin: 0 auto;
   background: linear-gradient(to bottom,#99caf9,white,white, #ffffff);
   padding: 20px 10px;
   border-top: 2px solid #2ef3fd;
}
.rest-password{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    background-image: url("@/assets/images/register.png");
    background-size: 100% 40%;
    background-repeat: no-repeat;
    background-color: #E9EFF9;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inline{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.inline div{
    display: inline-block;
}
.welcome-register{
    font-size: 18px;
    padding: 15px 20px;
}
.q-btn{
    padding: 0px 40px;
    margin: 0px 10px;
}
.bottom-btn{
    display: flex;
    justify-content: end;
    padding: 10px 0px;
    padding-top: 20px;
}

::v-deep .check-value .q-input{
    width: 160px;
}

.check-code{
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
}

.get-code{
    position: absolute;
    width: 150px;
    left: 180px;
    top: 40px;
    height: 40px;
}
</style>


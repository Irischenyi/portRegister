<script setup lang="ts">
import InputTemplate from '@/components/InputTemplate.vue'
import { ref, reactive, toRefs } from 'vue'
import http from '@/http/httpContentMain'
import picSlider from '@/components/picSlider.vue';
import { useRouter } from 'vue-router'
defineProps<{
 
}>()

const form = reactive({
    loginName: '',
    password: '',
    mobileCode: '',
} as {[code: string]: any})
const {loginName, password, mobileCode }  = toRefs(form)

const failMessage = ref('')
const login = () => {
    failMessage.value = ''
    http.post('enterprise/login',{
        ...form
    }).then(() =>{
        console.log('====')
    }).fail((value) => {
        failMessage.value = value
    })
}


const codeValue = ref({
    show: false,
    buttonDis: false
})

const getCode = () => {
    codeValue.value.show = true;
}

let timeTag: any
const closeCode = (isSuccess: boolean|string)=>{
    codeValue.value.show = false
    if(isSuccess == true){
        codeValue.value.buttonDis = true
        timeTag = setTimeout(()=>{
            codeValue.value.buttonDis = false
            clearTimeout(timeTag)
        }, 60000)
    } else {
        failMessage.value = isSuccess as string
    }
}
const changeFormValue = (code: string, value: string) => {
    form[code] = value
}

const router = useRouter()

const remember = ref(false)

const forgetPassword = () => {
    router.push({
      path: '/ResetPassword'
    })
}

const setUser = () => {
    router.push({
      path: '/register'
    })
}
</script>

<template>
    <div class="bg">
        <div class="right">
            <div class="title">欢迎登录 !</div>
            <InputTemplate name="手机号码" v-model="loginName" code="loginName" @changeFormValue="changeFormValue"/>
            <InputTemplate name="密码" type="password" v-model="password" code="password" @changeFormValue="changeFormValue"/>
            <div class="remember-box"><q-checkbox v-model="remember" />记住密码</div>
            <div style="position: relative;">
                <InputTemplate class="check-value" v-model="mobileCode"  @changeFormValue="changeFormValue" code="mobileCode" name="验证码"/>
                <q-btn :disable="codeValue.buttonDis" class="get-code" outline rounded color="primary" @click="getCode" label="获取验证码" />
            </div>
            <div class="tips">{{ failMessage }}</div>
            <q-btn class="glossy login" rounded color="primary" label="登录" @click="login"/>
            <div class="bottom">
                <div>
                    <div @click="router.back()">返回页面</div>
                    <div @click="forgetPassword">忘记密码</div>
                </div>
                <div @click="setUser">免费注册</div>
            </div>
        </div>
        <picSlider :show="codeValue.show" @closeCode="closeCode" :tel="loginName"/>
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

.tips{
    position: absolute;
    bottom: 130px;
    color: #b73232;
    font-size: 12px;
}
</style>


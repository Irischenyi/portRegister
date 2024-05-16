<script setup lang="ts">
import InputTemplate from '@/components/InputTemplate.vue'
import { ref, reactive, toRefs } from 'vue'
import http from '@/http/httpContentMain'
import picSlider from '@/components/picSlider.vue';
import codeMixinHook from './codeMixin'
defineProps<{
 
}>()

const picRef = ref()
const form = reactive({
    entName: '',
    mobile: '',
    mobileCode: '',
    password: '',
    reportPassword: ''
} as {[code: string]: any})

const { codeValue, getCode, closeCodeFun, failMessage } = codeMixinHook(picRef)

const changeFormValue = (code: string, value: string) => {
    form[code] = value
}

const postCheck = (uuid: string, left: number ) => {
    failMessage.value = ''
    http.post('k2401-enterprise/reset-pwd-mobile-code', {
            uuid: uuid,
            mobile: form.mobile,
            xposition: left,
            password: form.password,
            entName: form.entName
    }).then((value) => {
        closeCodeFun(true)
    }).fail((value) => {
        closeCodeFun(value)
        failMessage.value = value as string
    })
}

const save = () => {
    failMessage.value = '';
    http.post('k2401-enterprise/reset-pwd', {
           ...form
    }).then((value) => {
        console.log(value)
        //重置成功 dialog
        /** 还没写完 */
    }).fail((value) => {
        failMessage.value = value as string
    })
}
</script>

<template>
    <div class="bg">
        <div class="center">
            <div class="title">重置密码 !</div>
            <InputTemplate name="企业名称" code="entName" @changeFormValue="changeFormValue"/>
            <!-- <InputTemplate name="用户名"/> -->
            <InputTemplate name="联系电话" code="mobile" @changeFormValue="changeFormValue"/>
            <div style="position: relative;">
                <InputTemplate class="check-value" code="mobileCode" @changeFormValue="changeFormValue" name="验证码"/>
                <q-btn class="get-code" outline rounded @click="getCode" color="primary" label="获取验证码" />
            </div>
            <InputTemplate type="password" code="password"  @changeFormValue="changeFormValue" name="新密码"/>
            <InputTemplate type="password" code="reportPassword" @changeFormValue="changeFormValue" name="确认密码"/>
            <div class="failMessage">{{ failMessage }}</div>
            <div class="bottom-btn">
                <q-btn unelevated rounded color="grey-5" label="返回" />
                <q-btn unelevated rounded color="primary" @click="save" label="提交" />
            </div>
        </div>
        <picSlider ref="picRef" :show="codeValue.show" @postCheck="postCheck" />
    </div>
</template>

<style scoped>
.center{
    width: 400px;
    height: auto;
    background: linear-gradient(to bottom,#99caf9,white,white, #ffffff);
    padding: 40px 20px;
    border-top: 3px #2ef3fd solid;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    display: flex;
    align-items: center;
    justify-content: center;
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
    width: 180px;
}

.get-code{
    position: absolute;
    width: 150px;
    left: 182px;
    top: 40px;
    height: 40px;
}

.bottom-btn{
    display: flex;
    justify-content: space-around;
    padding: 0px 0px;
    padding-top: 20px;
}

.q-btn{
    padding: 0px 40px;
    margin: 0px 10px;
}

.failMessage{
    margin: 0 auto;
    margin-top: 4px;
    text-align: center;
    width: 100%;
    font-size: 13px;
    color: #b73232;
}
</style>


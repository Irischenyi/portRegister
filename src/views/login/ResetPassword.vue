<script setup lang="ts">
import { useRouter } from 'vue-router'
import InputTemplate from '@/components/InputTemplate.vue'
import { ref, reactive, toRefs } from 'vue'
import http from '@/http/httpContentMain'
import picSlider from '@/components/picSlider.vue';
import codeMixinHook from './codeMixin'
import { Loading } from 'quasar'

const router = useRouter()
defineProps<{
 
}>()
const dialog = ref(false)
const backdropFilter = ref(null)

const picRef = ref()
const form = reactive({
    entName: '',
    mobile: '',
    mobileCode: '',
    password: '',
    reportPassword: ''
} as {[code: string]: any})

const checkList = {
    entName: '企业名称',
    mobile: '手机号码',
    mobileCode: '验证码',
    password: '新密码',
    reportPassword: '确认密码'
} as {
    [name: string]: string
}

const { codeValue, getCode, closeCodeFun, failMessage } = codeMixinHook(picRef)

const changeFormValue = (code: string, value: string) => {
    failMessage.value = ''
    form[code] = value
}

const checkHaveValue = () => {
    const emptyNum = (Object.values(form)).indexOf('')
    const key = (Object.keys(form))[emptyNum]
    failMessage.value = '请填写'+checkList[key]
    if(form.password != form.reportPassword){
        failMessage.value = '两次密码不一致'
        return false
    }
    if(emptyNum>=0){
        return false
    }else{
        return true
    }
    
    
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
        const timeOut = setTimeout(()=>{
            closeCodeFun(true)
            clearTimeout(timeOut)
        }, 1000)
    }).fail((value) => {
        closeCodeFun(value)
        failMessage.value = value as string
    })
}

const save = () => {
    if(!checkHaveValue()) return false
    failMessage.value = '';
    http.post('k2401-enterprise/reset-pwd', {
           ...form
    }).then((value) => {
        Loading.show();
        setTimeout(() => {
            dialog.value = true;
        }, 1000)
        setTimeout(() => {
            Loading.hide()
            router.push('./login')
        }, 3000)
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
                <q-btn unelevated rounded color="grey-5" label="返回" @click="router.go(-1)"/>
                <q-btn unelevated rounded color="primary" @click="save" label="提交" />
            </div>
        </div>
        <picSlider ref="picRef" :show="codeValue.show" @postCheck="postCheck" />
    </div>
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
            重置密码成功
        </q-card-section>
      </q-card>
    </q-dialog>
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


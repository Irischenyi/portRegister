<script setup lang="ts">
import InputTemplate from '@/components/InputTemplate.vue'
import picSlider from '@/components/picSlider.vue';
import http from '@/http/httpContentMain'
import codeMixinHook from './codeMixin'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Loading } from 'quasar'

const picRef = ref()
const { codeValue, getCode, closeCodeFun, failMessage } = codeMixinHook(picRef)
const file = ref()
const router = useRouter()

http.get('/tag/province-list').then((data) => {
    (data as unknown as []).forEach((item: {tagName: string, id: string})  => {
        cityGroup.value.push({
            label: item.tagName,
            value: item.id
        })
    });
})


const getCity = (value:string, type: string) => {
    if(type == 'city'){
        city.value = []
    } else {
        area.value = []
    }
    if(!value) return false;
    http.get('/tag/child-list/'+value).then((response) => {
        (response as unknown as []).forEach((item: {tagName: string, id: string})  => {
            if(type == 'city'){
                city.value.push({
                    label: item.tagName,
                    value: item.id
                })
            } else {
                area.value.push({
                    label: item.tagName,
                    value: item.id
                })
            }
        });
    })
}



const cityGroup = ref([
] as {value: string, label: string}[])

const city = ref([
] as {value: string, label: string}[])

const area = ref([
] as {value: string, label: string}[])
const repeatPassword = ref('')

const provinceValue = ref()
const cityValue = ref()
const areaValue = ref()
const buttonDis = ref(false)

const model = ref('')
const form = ref({
    entName: '',
    creditCode: '',
    address: '',
    email: '',
    contact: '',
    mobile: '',
    mobileVerifyCode: '',
    password: '',
    repeatPassword: '',
    provinceValue: '',
    provinceName: '',
    cityValue: '',
    cityName: '',
    areaValue: '',
    areaName: '',
} as {
    cityValue: '',
    cityName: '',
    areaValue: '',
    areaName: '',
    entName: '',
    creditCode: '',
    address: '',
    [name:string]: any
})


const map = {
    entName: '企业名称',
    creditCode: '统一社会信用代码',
    address: '地址',
    email: '邮箱',
    contact: '联系人',
    mobile: '手机号码',
    mobileVerifyCode: '手机验证码',
    password: '密码',
    repeatPassword: '确认密码',
    provinceValue: '省份',
    provinceName: '省份',
    cityValue: '市区',
    cityName: '市区',
    areaValue: '地区',
    areaName: '地区',
} as {
    [name:string]: any
}

watch(provinceValue, (value: {value: string}) => {
    cityValue.value = '';
    getCity(value.value, 'city')
})

watch(cityValue, (value: {value: string}) => {
    areaValue.value = '';
    getCity(value.value, 'area')
})

watch(file, (value) => {
    const formData = new FormData()
    formData.append('file', value)
    http.post('k2401-enterprise/upload-business-license', formData , {
    'Content-Type': 'multipart/form-data'
    }).then((response) => {
        const id = (response as unknown as {id: string}).id;
        form.value.businessLicenseAttachIdList = [id]
    })
})

const changeFormValue = (code: string, value: string) => {
    form.value[code] = value
}


const saveForm = () => {
    form.value['provinceValue'] = provinceValue.value?.value
    form.value['provinceName'] = provinceValue.value?.label

    form.value['cityValue'] = cityValue.value?.value
    form.value['cityName'] = cityValue.value?.label

    form.value['areaValue'] = areaValue.value?.value
    form.value['areaName'] = areaValue.value?.label


    const emptyNum = (Object.values(form.value)).indexOf('')
    const valueList = Object.keys(form.value)
    if(emptyNum >= 0){
        const checkName = (map[valueList[emptyNum] as string])
        failMessage.value = '请填写'+checkName
        return false;
    }
    if(form.value.password != form.value.repeatPassword){
        failMessage.value = '两次密码请保持一致'
        return false;
    }

    submitForm()
}

const submitForm = () => {
    http.post('k2401-enterprise/reg', {
        ...form.value
    }).then((value) => {
        Loading.show();
        setTimeout(() => {
            Loading.hide()
            router.push('./login')
        }, 13000)
    }).fail((value) => {
        failMessage.value = value
    })
}

const postCheck = (uuid: string, left: number ) => {
    failMessage.value = ''
    http.post('k2401-enterprise/reg-mobile-code', {
            uuid: uuid,
            mobile: form.value.mobile,
            xposition: left
    }).then((value) => {
        closeCodeFun(true)
    }).fail((value) => {
        closeCodeFun(value)
        failMessage.value = value as string
    })
}

</script>

<template>
    <div class="rest-password">
        <div class="center">
            <div class="welcome-register">欢迎企业注册！</div>
            <div class="inline">
                <InputTemplate  name="企业名称" code="entName" @changeFormValue="changeFormValue"/>
                <InputTemplate  name="统一社会信用代码" code="creditCode" @changeFormValue="changeFormValue"/>
                <InputTemplate  name="地址" code="address" @changeFormValue="changeFormValue"/>
                <InputTemplate  name="注册地">
                    <div class="group">
                        <q-select rounded outlined v-model="provinceValue" :options="cityGroup" label="省份" />
                        <q-select rounded outlined v-model="cityValue" :options="city" label="市级" />
                        <q-select rounded outlined v-model="areaValue" :options="area" label="区级" />
                    </div>
                </InputTemplate>
                <InputTemplate  name="邮箱" code="email" @changeFormValue="changeFormValue"/>
                <InputTemplate  name="联系人" code="contact" @changeFormValue="changeFormValue"/>
                <InputTemplate  name="登录账号（手机号码）" code="mobile" @changeFormValue="changeFormValue"/>
                <div class="check-code" style="position: relative;width:340px;">
                    <InputTemplate class="check-value" name="验证码" code="mobileVerifyCode" @changeFormValue="changeFormValue"/>
                    <q-btn class="get-code" outline rounded color="primary" label="获取验证码" @click="getCode" />
                </div>
                <!-- <InputTemplate  name="用户名" /> -->
                <InputTemplate  name="密码" type="password" code="password" @changeFormValue="changeFormValue"/>
                <InputTemplate  name="确认密码" type="password" code="repeatPassword" @changeFormValue="changeFormValue"/>
                <InputTemplate  name="上传营业执照">
                    <q-file
                        v-model="file"
                        filled
                        style="max-width: 300px"
                        />
                </InputTemplate>
                <div class="tips">{{ failMessage }}</div>
            </div>
            <div class="bottom-btn">
                <q-btn unelevated rounded color="grey-5" label="返回" @click="router.go(-1)"/>
                <q-btn unelevated rounded @click="saveForm" color="primary" label="提交" />
            </div>
        </div>
        <picSlider ref="picRef" :show="codeValue.show" @postCheck="postCheck" />
    </div>
</template>

<style lang="scss" scoped>
.center{
   width: 840px;
   margin: 0 auto;
   background: linear-gradient(to bottom,#99caf9,white,white, #ffffff);
   padding: 20px 55px;
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
    justify-content: space-between;
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

.group{
    width: 100%;
    display: flex !important;
    align-items: center;
    justify-content: center;
}

::v-deep .group .q-field--auto-height .q-field__control,
::v-deep .group .q-field__marginal
{
    height: 40px;
    padding-top: 0px;
    min-height: 40px;
    white-space: nowrap;
    // width: 50px;
    // width: 100px;
}
::v-deep .q-field__label{
    padding-top: 0px;
    top: 10px;
}

::v-deep .q-field--float .q-field__label{
    transform: translateY(-40%) scale(0);
}

::v-deep .q-field--auto-height.q-field--labeled .q-field__control-container{
    padding-top: 8px;
}

::v-deep .group .q-select{
    margin-right: 11px;
    display: inline-block;
    width: 30%;
    font-size: 12px;
}

.q-file{
    background-color: white;
    border: 1px solid #c7c7c7;
    width: 100px;
    height: 100px;
    position: relative;
    &::before, &::after{
        content: '';
        width: 60px;
        height: 1px;
        background: #c7c7c7;
        position: absolute;
        left: 20px;
        top: 50px;
        z-index: 1;
    }
    &::after{
        width: 1px;
        height: 60px;
        left: 50px;
        top: 20px;
    }
}
:deep(.q-field--filled .q-field__control){
    background: white;
    height: 100%;
}

.tips{
    width: 100%;
    height: 20px;
    text-align: right;
    color: #bf2222;
    font-weight: bold;
}
</style>


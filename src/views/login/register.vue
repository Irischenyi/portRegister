<script setup lang="ts">
import InputTemplate from '@/components/InputTemplate.vue'
import axios from 'axios'
import http from '@/http/httpContentMain'
import { ref, watch } from 'vue'
defineProps<{
 
}>()

http.get('/tag/province-list').then((data) => {
    (data as unknown as []).forEach((item: {tagName: string, id: string})  => {
        cityGroup.value.push({
            label: item.tagName,
            value: item.id
        })
    });
})

// axios.get(http.baseUrl+).then(response => {
//     const data = response.data.data;

// })

const getCity = (value:string, type: string) => {
    if(type == 'city'){
        city.value = []
    } else {
        area.value = []
    }
    
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

const provinceValue = ref()
const cityValue = ref()
const areaValue = ref()

const model = ref('')
const options = ['1',2,3,5]
const form = ref({} as {
    provinceValue: '',
    provinceName: '',
    cityValue: '',
    cityName: '',
    areaValue: '',
    areaName: '',
    [name:string]: any
})


watch(provinceValue, (value: {value: string}) => {
    cityValue.value = '';
    getCity(value.value, 'city')
})

watch(cityValue, (value: {value: string}) => {
    areaValue.value = '';
    getCity(value.value, 'area')
})

const changeFormValue = (code: string, value: string) => {
    form.value[code] = value
}

const saveForm = () => {
    form.value['provinceValue'] = provinceValue.value.value
    form.value['provinceName'] = provinceValue.value.label

    form.value['cityValue'] = cityValue.value.value
    form.value['cityName'] = cityValue.value.label

    form.value['areaValue'] = areaValue.value.value
    form.value['areaName'] = areaValue.value.label
    console.log(form.value)
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
                    <q-btn class="get-code" outline rounded color="primary" label="获取验证码" />
                </div>
                <!-- <InputTemplate  name="用户名" /> -->
                <InputTemplate  name="密码" code="password" @changeFormValue="changeFormValue"/>
                <InputTemplate  name="确认密码" @changeFormValue="changeFormValue"/>
                <InputTemplate  name="上传营业执照" />
            </div>
            <div class="bottom-btn">
                <q-btn unelevated rounded color="grey-5" label="返回" />
                <q-btn unelevated rounded @click="saveForm" color="primary" label="提交" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
</style>


<template>
  <div class="main" v-if="form?.['creditCode']">
    <div class="row-box" >
      <InputTemplate name="用户名称" :value="form.auditUserName"  code="auditUserName" size="min" ismust="no"/>
      <InputTemplate name="账号类型" :value="form?.['creditCode']"  :disable="true" size="min" ismust="no"/>
      <InputTemplate name="统一信用社代码"  :value="form?.['creditCode']" :disable="true" code="creditCode" size="min" ismust="no" @changeFormValue="changeFormValue"/>
      <InputTemplate name="注册时间" :value="form.createDate" code="createDate" :disable="true" size="min" ismust="no"/>
      <!-- <InputTemplate  name="注册地"  :value="form.createDate" code="createDate" size="min" ismust="no"/> -->
      <br/>
      <br/>
      <InputTemplate name="所属省市">
        <div class="group">
          <q-select rounded outlined :disable="true" v-model="form.provinceName" :options="cityGroup" label="省份" />
          <q-select rounded outlined :disable="true" v-model="form.cityName" :options="cityGroup" label="市级" />
        </div>
        </InputTemplate>
      <InputTemplate  name="地址"  code="address" :value="form.address" size="min" ismust="no"/>
      <InputTemplate name="联系电话" code="mobile":value="form.mobile" size="min" ismust="no"/>
    </div>
    <div class="row-box">
      <InputTemplate name="账户ID" :value="form?.['id']" :disable="true" code="id" size="min" ismust="no"/>
      <InputTemplate name="所属企业" :disable="true" :value="form?.['entName']" code="entName" size="min" ismust="no"/>
      <InputTemplate name="认证信息" :value="form?.auditStatusName" :disable="true" code="auditStatusName" size="min" ismust="no"/>
    </div>
    <div class="footer">
      <q-btn unelevated color="grey-5" label="返回" />
      <q-btn unelevated color="primary" @click="saveMessage()" label="提交更新" />
    </div>
  </div>
</template>
<script setup lang="ts">
import http, { setBaseInf, setHttp } from '@/http/httpContentMain'
import InputTemplate from '@/components/InputTemplate.vue'
import { ref, watch, toRefs, reactive, onMounted } from 'vue'

interface formIn {
  creditCode: string;
  id: string;
  createDate: string;
  entName: string;
  auditStatusName: string;
  address: string;
  mobile: string;
  auditUserName: string;
  provinceName: string;
  cityName: string;
  [key: string]: string;
}



const form = ref({
  id:'',
  provinceName: '',
  cityValue: '',
  num: '',
  creditCode: '',
  createDate: '',
  entName:'',
  auditStatusName: '',
  address: '',
  mobile: '',
  auditUserName: '',
  cityName: ''
} as formIn)

const saveMessage = () => {
  console.log('save message')
}

const cityGroup = ref([] as {value: string, label: string}[])
const token = localStorage.getItem('token');


const getBasicData = () => {
  http.get('k2401-enterprise/enterprise', {
      'Authorization':  'Bearer ' + token
  }).then((data) => {
    const back = data as unknown as formIn
    form.value = back;
    console.log(data)
  })
} 

const changeFormValue = (code: string, value: string) => {
    form.value[code] = value
    console.log(form)
}

onMounted(async () => {
  getBasicData()

})
</script>
<style lang="scss" scoped>
.main{
  display: flex;
  flex-direction: row;
  padding: 40px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
}
.row-box{
  display: flex;
  flex-direction: column;
  margin-right: 50px;
}
.title{
  margin: 5px 0px;
}

.group{
    width: 100%;
    display: flex !important;
    align-items: center;
    justify-content:  flex-start;
}

::v-deep .group .q-field--auto-height .q-field__control,
::v-deep .group .q-field__marginal
{
    height: 36px;
    padding-top: 0px;
    min-height: 36px;
    white-space: nowrap;
    // width: 50px;
    // width: 100px;
}
::v-deep .q-field__label{
    padding-top: 0px;
    top: 8px;
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
.footer{
  display: flex;
  justify-content: end;
  position: absolute;
  bottom: 15px;
  right: 15px;
  button{
    margin-left: 10px;
  }
}

.num {
  width: 100px;
  margin-right: 10px;
}

.tel{
  width: 190px;
}
</style>
  
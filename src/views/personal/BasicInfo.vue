<template>
  <div class="main" v-if="form?.['creditCode']">
    <div class="row-box" >
      <InputTemplate name="用户名称" :disable="true" :value="form.auditUserName"  code="auditUserName" size="min" ismust="no"/>
      <InputTemplate name="邮箱" :disable="true" :value="form?.['email']"  size="min" ismust="no"/>
      <InputTemplate name="统一信用社代码" :disable="true" :value="form?.['creditCode']"  code="creditCode" size="min" ismust="no" @changeFormValue="changeFormValue"/>
      <InputTemplate name="注册时间" :disable="true" :value="form.createDate" code="createDate"  size="min" ismust="no"/>
      <!-- <InputTemplate  name="注册地"  :value="form.createDate" code="createDate" size="min" ismust="no"/> -->
      <br/>
      <br/>
      <InputTemplate name="所属省市">
        <div class="group">
          <q-select rounded outlined :disable="true" v-model="form.provinceName" :options="cityGroup" label="省份" />
          <q-select rounded outlined :disable="true" v-model="form.cityName" :options="cityGroup" label="市级" />
        </div>
        </InputTemplate>
      <InputTemplate  name="地址"  :disable="true" code="address" :value="form.address" size="min" ismust="no"/>
      <InputTemplate name="联系电话" :disable="true" code="mobile":value="form.mobile" size="min" ismust="no"/>
    </div>
    <div class="row-box">
      <InputTemplate name="账户ID" :disable="true"  :value="form?.['id']" code="id" size="min" ismust="no"/>
      <InputTemplate name="所属企业" :disable="true" :value="form?.['entName']" code="entName" size="min" ismust="no"/>
      <InputTemplate name="认证信息" :disable="true" :value="form?.auditStatusName" code="auditStatusName" size="min" ismust="no"/>
      <InputTemplate  name="更改头像">
          <q-file
              v-model="file"
              filled
              style="max-width: 300px"
              />
      </InputTemplate>
    </div>
    <div class="footer">
      <q-btn unelevated color="grey-5" label="返回" @click="goHome"/>
      <q-btn unelevated color="primary" @click="saveMessage()" label="提交更新" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ElMessage } from "element-plus";
import http, { setBaseInf, setHttp } from '@/http/httpContentMain'
import InputTemplate from '@/components/InputTemplate.vue'
import { useRouter } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import { user } from '@/http/commonData'

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
  businessLicenseAttachList?: {previewUrl: string}[]
  [key: string]: any;
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
  http.put(`k2401-enterprise/enterprise/${form.value.id}`, { businessLicenseAttachIdList: form.value.businessLicenseAttachIdList }, {
    'Authorization':  'Bearer ' + token
  }).then((data) => {
    ElMessage({ type: 'success', message: '头像修改成功' })
  })
}
const router = useRouter()
const file = ref()
const cityGroup = ref([] as {value: string, label: string}[])
const token = localStorage.getItem('token');

const goHome = () => {
  router.push({
    path: '/index/home'
  })
}

const getBasicData = () => {
  http.get('k2401-enterprise/enterprise', {
      'Authorization':  'Bearer ' + token
  }).then((data) => {
    const back = data as unknown as formIn
    form.value = back;
    console.log(form.value)
    user.value.name = back.entName;
    user.value.previewUrl = setBaseInf.picUrl+back.businessLicenseAttachList?.[0].previewUrl||''
  })
} 

watch(file, (value) => {
    const formData = new FormData()
    formData.append('file', value)
    http.post('k2401-enterprise/upload-avatar', formData , {
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Bearer '+token
    }).then((response) => {
        const id = (response as unknown as {id: string}).id;
        form.value.businessLicenseAttachIdList = [id]
    })
})


const changeFormValue = (code: string, value: string) => {
    form.value[code] = value
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
</style>
  
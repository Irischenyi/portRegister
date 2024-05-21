<script setup lang="ts">
import InputTemplate from '@/components/InputTemplate.vue'
import { ref, watch, toRefs, reactive } from 'vue'
const form = reactive({
  provinceValue: '',
  cityValue: '',
  num: ''
})

const { provinceValue, cityValue, num } = toRefs(form)
const cityGroup = ref([] as {value: string, label: string}[])

</script>
<template>
  <div class="main">
    <div class="row-box">
      <InputTemplate name="用户名称"  code="loginName" size="min" ismust="no"/>
      <InputTemplate name="账号类型"  code="loginName" size="min" ismust="no"/>
      <InputTemplate name="统一信用社代码"  code="loginName" size="min" ismust="no"/>
      <InputTemplate name="注册时间"  code="loginName" size="min" ismust="no"/>
      <InputTemplate  name="注册地"  code="loginName" size="min" ismust="no"/>
      <InputTemplate name="所属省市">
        <div class="group">
          <q-select rounded outlined v-model="provinceValue" :options="cityGroup" label="省份" />
          <q-select rounded outlined v-model="cityValue" :options="cityGroup" label="市级" />
        </div>
        </InputTemplate>
      <InputTemplate  name="地址"  code="loginName" size="min" ismust="no"/>
      <InputTemplate name="联系电话">
        <div class="group">
          <q-input rounded outlined  v-model="num" class="num"/>
          <q-input rounded outlined  v-model="num" class="tel"/>
        </div>
      </InputTemplate>
    </div>
    <div class="row-box">
      <InputTemplate name="账户ID"  code="loginName" size="min" ismust="no"/>
      <InputTemplate name="所属企业"  code="loginName" size="min" ismust="no"/>
      <InputTemplate name="认证信息"  code="loginName" size="min" ismust="no"/>
    </div>
    <div class="footer">
      <q-btn unelevated color="grey-5" label="返回" />
      <q-btn unelevated color="primary" label="提交更新" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main{
  display: flex;
  flex-direction: row;
  padding: 40px;
  box-sizing: border-box;
  position: relative;
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
  
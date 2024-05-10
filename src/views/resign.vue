<script setup lang="ts">
import InputTemplate from '../components/InputTemplate.vue'
defineProps<{
  msg: string
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
    <div>
        <InputTemplate v-for="(item,key) in list" :key="key" :name="item.name" />
    </div>
</template>

<style scoped>

</style>


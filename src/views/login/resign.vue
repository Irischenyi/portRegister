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
            <div class="inline">
                <InputTemplate v-for="(item,key) in list" :key="key" :name="item.name" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.center{
   width: 900px;
   margin: 0 auto;
}
.rest-password{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
}

.inline{
    display: inline-block;

}
</style>


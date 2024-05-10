<script setup lang="ts">
import InputTemplate from '@/components/InputTemplate.vue'
defineProps<{
 
}>()

</script>

<template>
    <div class="right">
        <InputTemplate name="用户名"/>
        <InputTemplate name="密码"/>
        <InputTemplate name="验证码"/>
    </div>
</template>

<style scoped>
.right{
    width: 450px;
    height: 400px;
    background-color: rgba(1,1,1,0.02);
    position: absolute;
    right: 150px;
}
</style>


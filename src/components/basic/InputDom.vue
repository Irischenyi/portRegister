<template>
    <el-row>
        <el-col>
            <div style="display: flex; flex-direction: column">
                <div>{{ attrValue.nodeName }}</div>
                <br/>
                <div>
                    <el-input type="textarea" v-model="value"></el-input>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { ref, useAttrs } from 'vue';
import http, { mainHttpConnect, setBaseInf } from '@/http/httpContentMain'
const attrs = useAttrs()
const value = ref('')
const attrValue = attrs.value as {
    nodeName: string,
    dataSourceUrl: string
}
const token = localStorage.getItem('token');


</script>
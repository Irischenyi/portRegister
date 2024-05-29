<template>
    <el-row>
        <el-col>
            <div style="display: flex; flex-direction: column">
                <div>{{ attrValue.nodeName }}</div>
                <br/>
                <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                <el-select style="width: 150px" clearable>
                    <el-option label="单位性质1" value="单位性质1" />
                    <el-option label="单位性质2" value="单位性质2" />
                </el-select>
            </div>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { ref, useAttrs } from 'vue';
import http, { mainHttpConnect, setBaseInf } from '@/http/httpContentMain'
const attrs = useAttrs()
const attrValue = attrs.value as {
    nodeName: string,
    dataSourceUrl: string
}
const token = localStorage.getItem('token');
console.log('select 框');
(new mainHttpConnect(setBaseInf.picUrl)).get(attrValue.dataSourceUrl , {
    Authorization: 'Bearer '+token
}).then((data) => {
    console.log(data)
})


</script>
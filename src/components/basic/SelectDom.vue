<template>
    <el-row>
        <el-col>
            <div style="display: flex; flex-direction: column">
                <div>{{ attrValue.sequence + ' . ' + attrValue.nodeName }}</div>
                <br/>
                <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                <el-select v-model="selectValue" style="width: 250px" clearable>
                    <el-option v-for="items in selectContent" :label="items.tagName" :value="items.tagValue" />
                </el-select>
            </div>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { ref, useAttrs, watch, defineEmits } from 'vue';
import http, { mainHttpConnect, setBaseInf } from '@/http/httpContentMain'
const attrs = useAttrs()
const attrValue = attrs.value as {
    nodeName: string,
    dataSourceUrl: string,
    sequence: number,
    id: string
}
interface child {
    tagName: string
    tagValue: string 
}

const selectContent = ref([] as child[])
const selectValue = ref('')

const token = localStorage.getItem('token');
const emit = defineEmits(['set-Value']);

(new mainHttpConnect(setBaseInf.baseUrl)).get('/'+attrValue.dataSourceUrl , {
    Authorization: 'Bearer '+token
}).then((data) => {
    const back = data as unknown as { children: child[] }
    selectContent.value = back?.children as child[]
})

watch(selectValue,() => {
    emit('set-Value', attrValue.id, selectValue.value)
})


</script>
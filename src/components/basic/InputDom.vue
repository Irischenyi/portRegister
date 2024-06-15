<template>
    <el-row>
        <el-col>
            <div style="display: flex; flex-direction: column">
                <div>{{ attrValue.sequence + ' . ' +attrValue.nodeName }}</div>
                <br/>
                <div>
                    <el-input v-if="type == 'number'" :class="{'input': type == 'number'}" :type="type" v-model.number="value" :show-password="showPassword"></el-input>
                    <el-input v-else :class="{'input': type == 'text'}" :type="type" v-model="value" :show-password="showPassword"></el-input>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { ref, useAttrs, watch, computed} from 'vue';
import http, { mainHttpConnect, setBaseInf } from '@/http/httpContentMain'
const attrs = useAttrs()
const value = ref('')
const attrValue = attrs.value as {
    nodeName: string,
    dataSourceUrl: string,
    id: string,
    sequence: string,
    nodeType: number
  
}

const token = localStorage.getItem('token');
const emit = defineEmits(['set-Value']);
watch(value,() => {
    emit('set-Value', attrValue.id, value.value)
})
const showPassword = ref(attrValue.nodeType == 3?true:false)

const type = computed(() => {
    if(attrValue.nodeType == 3||attrValue.nodeType == 1){
        return 'text'
    }else if(attrValue.nodeType == 8){
        return 'textarea'
    }else if(attrValue.nodeType == 2){
        return 'number'
    }
})

</script>

<style lang="scss" scoped>
.input{
    width: 200px;
}
</style>
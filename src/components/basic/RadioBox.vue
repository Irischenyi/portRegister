<template>
    <el-row>
        <el-col>
            <div>
                {{ attrValue.sequence + ' . ' +attrValue.nodeName}}
            </div>
            <br/>
            <div>
                <el-radio v-for="item in attrValue.optionList" v-model="getValue" :label="item.optionCode">{{ item.optionName }}</el-radio>
            </div>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { ref, useAttrs, watch } from 'vue';
const attrs = useAttrs()
const getValue = ref('')
const attrValue = attrs.value as {
    nodeName: string,
    id: string,
    sequence: number,
    optionList: {
        optionCode: string,
        optionName: string
    }[]
}
const emit = defineEmits(['set-Value']);
watch(getValue,() => {
    emit('set-Value', attrValue.id, getValue.value)
})
getValue.value = attrValue.optionList[0].optionCode

</script>
<template>
    <el-row>
        <el-col>
            <div>
                {{ attrValue.nodeName}}
            </div>
            <br/>
            <div>
                <el-radio v-for="item in attrValue.optionList" v-model="getValue" :label="item.optionCode">{{ item.optionName }}</el-radio>
            </div>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { ref, useAttrs } from 'vue';
const attrs = useAttrs()
const getValue = ref('')
const attrValue = attrs.value as {
    nodeName: string,
    optionList: {
        optionCode: string,
        optionName: string
    }[]
}
getValue.value = attrValue.optionList[0].optionCode

console.log(attrValue)

</script>
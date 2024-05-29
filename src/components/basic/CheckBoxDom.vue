<template>
    <el-row>
        <el-col>
            <div>
                {{ attrValue.nodeName + getValue}}
            </div>
            <br/>
            <el-checkbox-group v-model="getValue">
                <el-checkbox v-for="item in attrValue.optionList" :label="item.optionName" :value="item.optionCode" />
            </el-checkbox-group>
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

console.log(attrValue)

</script>
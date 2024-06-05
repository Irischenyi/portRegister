<template>
    <el-row>
        <el-col>
            <div>
                {{ attrValue.sequence + '. ' + attrValue.nodeName }}
            </div>
            <br/>
            <el-checkbox-group v-model="value">
                <el-checkbox v-for="item in attrValue.optionList" :label="item.optionName" :value="item.optionCode" />
            </el-checkbox-group>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { ref, useAttrs, watch } from 'vue';
const attrs = useAttrs()
const attrValue = attrs.value as {
    nodeName: string,
    id: string,
    sequence: string,
    optionList: {
        optionCode: string,
        optionName: string
    }[]
}
const value = ref([])

const emit = defineEmits(['set-Value']);
watch(value,() => {
    emit('set-Value', attrValue.id, value.value)
})

</script>
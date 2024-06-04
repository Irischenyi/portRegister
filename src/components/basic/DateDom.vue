<template>
    <el-row>
        <el-col>
            <div>
                {{ attrValue.nodeType }}
                {{ attrValue.sequence + ' . ' +attrValue.nodeName}}
            </div>
            <br/>
            <div>
                <el-date-picker
                    v-if="type == 13"
                    v-model="getValue"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>

                <el-time-picker
                    v-if="type == 14"
                    v-model="getValue"
                    :picker-options="{
                        selectableRange: '18:30:00 - 20:30:00'
                    }"
                    placeholder="选择时间">
                </el-time-picker>

                <el-date-picker
                    v-if="type == 15"
                    v-model="getValue"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                </el-date-picker>
                <div v-if="type == 16">
                    <el-time-picker
                        is-range
                        v-model="getValue"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        placeholder="选择时间范围">
                    </el-time-picker>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { ref, useAttrs, watch } from 'vue';
const attrs = useAttrs()
const getValue = ref('' as any)
const attrValue = attrs.value as {
    nodeName: string,
    id: string,
    sequence: number,
    nodeType: number
   
}

const type = attrValue.nodeType
if(type == 14){
    getValue.value = new Date(2016, 9, 10, 18, 40)
}


const emit = defineEmits(['set-Value']);
watch(getValue,() => {
    emit('set-Value', attrValue.id, getValue.value)
})

</script>
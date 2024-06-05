<template>
    <el-row>
        <el-col>
            <div style="display: flex; flex-direction: column">
                <div>{{ attrValue.sequence + ' . ' + attrValue.nodeName }}</div>
                <br />
                <!-- <el-input v-model="ruleForm1.dwxz1"></el-input> -->
                <el-select multiple v-model="selectValue" style="width: 250px" clearable>
                    <el-option class="option">
                        <el-tree
                        ref="tree"
                        :data="selectContent"
                        show-checkbox
                        node-key="id"
                        @check-change="handleTree"
                        :props="defaultProps">
                        </el-tree>
                    </el-option>
                </el-select>
            </div>
        </el-col>
    </el-row>
</template>
<script setup lang="ts">
import { ref, useAttrs, watch, defineEmits } from 'vue';
import http, { mainHttpConnect, setBaseInf } from '@/http/httpContentMain'
import { handleCurrentChange } from 'element-plus/es/components/tree/src/model/util.mjs';
const attrs = useAttrs()
const attrValue = attrs.value as {
    nodeName: string,
    dataSourceUrl: string,
    sequence: number,
    id: string,

}
interface child {
    tagName?: string;
    tagValue?: string;
    children: {
        id: string;
        tagName?: string;
        tagValue?: string;
    }[]
}

const selectValue = ref('' as string | string[])
const selectContent = ref([] as child[])
const token = localStorage.getItem('token');
const emit = defineEmits(['set-Value']);
const tree = ref()


const defaultProps = {
    children: 'children',
    label: 'tagName'
};
const backValue = ref([] as string[])

const handleTree = () => {
    backValue.value = []
    const arrs = [] as string[]
    tree.value.getCheckedKeys().forEach((item: string) => {
        selectContent.value.forEach((child: child) => {
            child.children.forEach((chi) => {
                if(chi.id == item){
                    backValue.value.push(chi.tagValue as string)
                    arrs.push(chi.tagName as string)
                }
            })
        })
    });
    selectValue.value = arrs
}

(new mainHttpConnect(setBaseInf.baseUrl)).get('/' + attrValue.dataSourceUrl, {
    Authorization: 'Bearer ' + token
}).then((data:any) => {
    selectContent.value = data.children as unknown as  child[]
})


watch(selectValue, () => {
    emit('set-Value', attrValue.id, [...backValue.value])
})
</script>
<style lang="scss" scoped>
.option{
    height: auto;
}
</style>


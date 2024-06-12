<template>
<el-table
    ref="multipleTable"
    :data="table"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
>
        <el-table-column type="selection" width="55"> </el-table-column>
        <!-- <el-table-column label="消息编号" width="120">
            <template #default="scope">{{ scope.row.name }}</template>
        </el-table-column> -->
        <el-table-column v-for="item in titles" :label="item.name" :width="item.width">
            <template #default="scope"><div class="th">{{ scope.row[item.key] }}</div></template>
        </el-table-column>
        <el-table-column  width="120" fixed="right" label="操作" >
            <template #default="scope">
                <div class="detail" @click="change(scope.row)">{{ button(scope.row) }}</div>
            </template>
        </el-table-column>
    </el-table>
</template>
<script setup>
import { ref, watch, useAttrs } from 'vue';
const attrs = useAttrs()
const titles = attrs.titles
const table = (attrs.tableData)

const button = (item) =>{
    if(attrs.button == '继续填报'){
        if(item.status == '3'){
            return '编辑重报'
        }
    }
    return attrs.button
}
const id = attrs.id
const emit = defineEmits(['detailMethod']);
const handleSelectionChange = () =>{}
const change = (item) => {
    emit('detailMethod', item)
}
</script>
<style scoped>
.th{
    max-width:100%;
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.detail{
    color: #4984FF;
    cursor: pointer;
    &:hover{
      color: #233e77;
    }
  }
</style>
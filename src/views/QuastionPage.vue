<template>
    <TemplateFrame>
        <template #body>
            <div class="question-center">
                <div class="title">需求调研表单</div>
                <el-form>
                    <component v-for="(item, key) in stageList" :is="backComponent(item.nodeType)" :value="item" />
                    <q-btn class="glossy login" rounded color="primary" label="提交" />
                </el-form>
            </div>
        </template>
    </TemplateFrame>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TemplateFrame from '@/components/TemplateFrame.vue'
import http, { mainHttpConnect, setBaseInf } from '@/http/httpContentMain'
import SelectDom from '@/components/basic/SelectDom.vue';
import InputDom from '@/components/basic/InputDom.vue'
import CheckBoxDom from '@/components/basic/CheckBoxDom.vue';
import RadioBox from '@/components/basic/RadioBox.vue';
// import date from './test'

const stageList = ref([] as { nodeType: number, nodeName: string }[])
const token = localStorage.getItem('token');

http.get('k2401-survey/survey', {
    Authorization: 'Bearer '+token
}).then((data) => {
    const back = data as unknown as {stageList: [{ nodeList:[] }]}
    stageList.value = back?.stageList[0].nodeList;
}).fail((value) => {
    console.log(value)
})

// stageList.value = date

const backComponent = (type: number) => {
    switch(type){
        case 4:
            return RadioBox
            break;
        case 9:
            return SelectDom
            break
        case 8:
            return InputDom
            break
    }
}


</script>

<style lang="scss" scoped>
.el-row {
    padding: 20px 0px;
}

.title {
    padding: 30px 0px;
    font-size: 20px;
}

.question-center {
    background-color: white;
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 20px 50px;
}

.login {
    margin: 20px 0px;
    padding: 0px 30px;
}
</style>
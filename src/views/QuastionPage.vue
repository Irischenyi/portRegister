<template>
    <TemplateFrame>
        <template #body>
            <div class="question-center">
                <div class="title">需求调研表单</div>
                <el-form>
                    <component v-for="(item, key) in stageList" :is="backComponent(item.nodeType)" :value="item" @set-Value = "changeValue"/>
                    <div class="fail-message-box">{{ failMessage }}</div>
                    <div class="submit-box">
                        <q-btn class="glossy login" rounded color="primary" label="提交" @click="submitFun"/>
                    </div>
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
import SelectGroup from '@/components/basic/SelectGroup.vue';
import RadioBox from '@/components/basic/RadioBox.vue';
import DateDom from '@/components/basic/DateDom.vue';
import { Loading } from 'quasar'
// import date from './test'

const stageList = ref([] as { nodeType: number, nodeName: string, sequence: number }[])
const token = localStorage.getItem('token');
interface nodeDT {
    id: string
    submitValue: string|string[]
}
const orginalDate = ref({} as {stageList: [{ nodeList: nodeDT[] }]})
const nodeListDate = ref([] as nodeDT[])
const failMessage = ref('')

Loading.show();
http.get('k2401-survey/survey', {
    Authorization: 'Bearer '+token
}).then((data) => {
    Loading.hide();
    const back = data as unknown as {stageList: [{ nodeList:[] }]}
    stageList.value = back?.stageList[0].nodeList;
    orginalDate.value = JSON.parse(JSON.stringify(back)) 
}).fail((value) => {
    Loading.hide();
})

// stageList.value = date

const changeValue = (id: string, value: string|string[]) => {
    failMessage.value = '';
    const nodeList = orginalDate.value.stageList[0].nodeList as {id: string, submitValue: string|string[]}[]
    const index = (nodeList.findIndex(item => item.id == id))
    nodeList[index].submitValue = value;
    nodeListDate.value = nodeList;
}

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
        case 11:
            return SelectGroup
            break
        case 2:
            return InputDom
            break
        case 3:
            return InputDom
            break
        case 5:
            return CheckBoxDom
            break
        case 1:
            return InputDom
            break
        case 10:
            return SelectDom
            break
        case 13:
            return DateDom
            break
        case 14:
            return DateDom
            break
        case 15:
            return DateDom
            break
        case 16:
            return DateDom
            break
    }
    console.log(type)
}

const submitFun = () => {
    Loading.show();
    orginalDate.value.stageList[0].nodeList = [...nodeListDate.value]
    http.post('flow-project/project', {...orginalDate.value}, {
        Authorization: 'Bearer '+token
    }).then((data) => {
        setTimeout(() => {
            Loading.hide();
        }, 100)
        console.log(data)
    }).fail((data) => {
        setTimeout(() => {
            Loading.hide();
        }, 100)
        failMessage.value = data
    })
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

.submit-box{
    display: flex;
    justify-content: end;
    button{
        justify-content: center;
    }
}
.fail-message-box{
    width: 100%;
    text-align: center;
    color: #b23737;
}
</style>
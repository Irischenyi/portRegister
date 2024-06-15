<template>
    <Transition name="fade">
        <div  class="question-bpx-back" v-if="show">
            <div  :class="{'question-bpx':true, 'questuon-ask-box': activeTab =='ask'}">
                <q-icon name="close" class="close" @click="emit('close')"/>
                <div class="dev1">
                    <div class="head">
                        <div :class="{'tab':true, 'tab-active': activeTab == item.value}" v-for="item in tabs" @click="activeTab = item.value">{{ item.name }}</div>
                    </div>
                    <div :class="{'main-box':true, 'ask-style': activeTab =='ask'}">
                        <div class="question" v-if="activeTab =='usl'">
                                <q-scroll-area
                                    visible
                                    style="height: 406px;"
                                    class="col"
                                    @scroll="onScrollFirst"
                                    >
                                    <div class="nol-que">
                                        <questionLine v-for="item in questionList" :item="item"> </questionLine>
                                    </div>
                                </q-scroll-area>
                        </div>
                        <div class="ask" v-if="activeTab =='ask'">
                            <q-scroll-area
                                visible
                                style="height: 380px;"
                                class="col"
                                ref="firstRef"
                                @scroll="onScrollFirst"
                                :initial-index="0"
                                offset="0"
                                >
                                <div class="nol-que">
                                    <div v-for="item in messages">
                                        <div class="ask-box" v-if="item.sent">
                                            <div class="ask-block">
                                                <div class="reply">
                                                    {{ item.text }}
                                                </div>
                                                <div class="name">我</div>
                                            </div>
                                        </div>
                                        <div class="back-block" v-else>
                                            <div class="ask-block">
                                                <div class="name">小智</div>
                                                <div class="reply">
                                                    <div v-if="item.text">{{ item.text }}</div>
                                                    <div v-else style="margin: 0 auto;padding: 0px 20px;"><q-spinner-dots color="white"/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </q-scroll-area>
                        </div>
                        <div class="line" v-if="activeTab =='line'">
                           <el-form
                                ref="formRef"
                                :model="formModel"
                                :rules="formRules"
                                label-width="60px"
                            >
                                <el-form-item label="单位" prop="dw1">
                                <el-input v-model="formModel.dw1" style="width: 60%"></el-input>
                                </el-form-item>
                                <el-form-item label="姓名" prop="xm">
                                <el-input v-model="formModel.xm" style="width: 60%"></el-input>
                                </el-form-item>
                                <el-form-item label="手机号" prop="dw2">
                                <el-input v-model="formModel.dw2" style="width: 60%"></el-input>
                                </el-form-item>
                                <el-form-item label="留言" prop="ly">
                                <el-input
                                    v-model="formModel.ly"
                                    type="textarea"
                                    :rows="4"
                                ></el-input>
                            </el-form-item>
                            <div class="let-save">
                               
                                <q-btn color="primary" label="留言" @click="showSlider"/>
                            </div>
                        </el-form>
                        </div>
                    </div>
                    <div class="submit" v-if="activeTab =='ask'">
                        <input class="input" v-model="question"/><q-btn color="primary"  label="发送" @click="askQuestion()"/>
                    </div>
                </div>
            </div>
            <picSlider
                ref="picRef"
                :show="codeValue.show"
                @postCheck="postCheck"
            />
        </div>
    </Transition>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { setBaseInf, setHttp } from '@/http/httpContentMain'
import questionLine from './queLine.vue';
import { scroll } from 'quasar'
import { ElMessage } from 'element-plus'
import codeMixinHook from '../views/login/codeMixin'
import picSlider from '@/components/picSlider.vue';

const firstRef = ref()
const { getVerticalScrollPosition, setVerticalScrollPosition } = scroll

const picRef = ref()
const showQuestion = ref(false)
const { codeValue, getCode, closeCodeFun, failMessage } = codeMixinHook(picRef)

const emit = defineEmits(['close']);
const attrs = defineProps({
    show: {
        type: Boolean
    }
})
const formRules = ref({
  dw1: [
    {
      required: 'true',
      message: '请填写单位',
      trigger: 'blur'
    }
  ],
  xm: {
    required: 'true',
    message: '请填写姓名',
    trigger: 'blur'
  },
  dw2: {
    required: 'true',
    message: '请填写单位',
    trigger: 'blur'
  },
  ly: {
    required: 'true',
    message: '请填写留言',
    trigger: 'blur'
  }
})

//  @click="emit('close')"
const tabs = [
    {
        name: "常见问题",
        value:"usl"
    },
    {
        name: "智能咨询",
        value: "ask"
    },
    {
        name: "在线留言",
        value: "line"
    }
]
const onScrollFirst = () => {
    
}



const askList = [{
    value: '问题',
    type: 'ask',
}, {
    value: '回答',
    type: 'back'
}]
const activeTab = ref('usl')
const formModel = ref({
  dw1: '',
  xm: '',
  dw2: '',
  ly: ''
})
const questionList = ref([])
const getQuestion = async () => {
    const http = setHttp();
    const res = (await http.post('/k2401-question/question/paged', {
            current: 1, // 第几页
            size: 10, // 每页多少条数据
            key: '' // 问题的关键字
        })) as any
        questionList.value = res.items
    }

onMounted(() => {
    getQuestion()
})


const question = ref('')
const messages = ref([] as { text: string; sent: boolean }[])
const askQuestion =  () => {
  if (question.value.trim() === '') return

  messages.value.push({ text: question.value, sent: true }) // 将用户输入的问题显示在右上角
  const http = setHttp();
  const res = http.post('/k2401-talk/question', {
    question: question.value // 输入的问题（必填）
  }).then((data) => {
    const dataBack = data as unknown as {answer: string }
    messages.value.push({ text: '', sent: false })
        setTimeout(() => {
            if (dataBack.answer) {
                messages.value[messages.value.length-1].text = dataBack.answer
            } else {
                messages.value[messages.value.length-1].text = '抱歉，暂无对应的回答'
            }
        }, 500)
  })

  question.value = ''
  console.log(messages.value)
}

const showSlider = () => {
    formRef.value.validate((value:any) => {
        if(!value){
            ElMessage({ type: 'warning', message: '请填写完整' })
            return false;
        }else{
            getCode()
        }
    })
}

const formRef = ref()
const postCheck = (uuid: string, left: number) => {
    const http = setHttp();
    //   console.log(formRules)
    closeCodeFun(true)
    http
        .post('k2401-online-message/message', {
            unitName: formModel.value.dw1, // 单位名称（必填）
            userName: formModel.value.xm, // 姓名（必填）
            mobile: formModel.value.dw2, // 手机号码（必填）
            msgContent: formModel.value.ly, // 留言内容（必填）
            uuid: uuid, // 1.9.1中的滑动验证码的唯一识别号（必填）
            xposition: left // 1.9.1中滑动验证码的x坐标值
        })
        .then((value) => {
            formModel.value = {
                dw1: '',
                xm: '',
                dw2: '',
                ly: ''
            }
            ElMessage({ type: 'success', message: value })
        })
        .fail((value) => {
            ElMessage({ type: 'warning', message: value })
        })
}

</script>
<style lang="scss" scoped>
.question-bpx-back{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 12;
    background-color: rgba(0,0,0,0.7);
}
.question-bpx{
    width: 500px;
    height: 500px;
    background-color: #e9eff9;
    position: fixed;
    bottom: 5px;
    right: 80px;
    z-index: 10;
    transition: all ease 0.3s;
    border-radius: 10px;
    .head{
        display: flex;
        padding: 0px 20px;
        margin-top: 10px;
        .tab{
            padding: 12px 20px;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
        }
        .tab-active{
            color:#146AFF;
        }
    }
    .main-box{
        height: 420px;
        width: calc(100% - 40px);
        background-color: white;
        margin: 0 auto;
        border-radius: 10px;
        padding: 10px;
    }
}
.submit{
    padding: 20px 5px;
    .input{
        width: 438px;
        height: 40px;
        border: 1px solid white;
        border-radius: 66px;
        background-color: white;
        box-sizing: border-box;
        padding: 5px 20px;
        margin-right: 20px;
        margin-left: 16px;
    }
}

.ask-box{
    display: flex;
    justify-content: right;
    transform: scale(0.9);
    right: -26px;
    position:relative;
}
.ask-block{
    display: flex;
    width: 70%;
    justify-content: flex-end;
    .name{
        font-size: 14px;
        width: 45px;
        position: relative;
        top: 10px;
        text-align: right;
        height: 20px;
        margin-right: 10px;
        margin-left: 20px;
    }
    .reply{
        background-color: #6e98ef;
        color: white;
        padding: 10px;
        border-radius: 15px;
        position: relative;
        &:after{
            content: '';
            position: absolute;
            // background-color: red;
            width: 0px;
            right: -19px;
            top: 3px;
            height: 0px;
            transform: rotate(-90deg) scale(0.96);
            border-top: 16px solid #6e98ef;
            border-right: 10px solid transparent;
            border-left: 10px solid transparent;
            border-bottom: 10px solid transparent;
        }
    }
}
.back-block{
    margin-top: 10px;
    transform: scale(0.9);
    left: -26px;
    position:relative;
    .ask-block{
        justify-content: flex-start;
    }
    .name{
        margin-right: 20px;
        margin-left: 10px;
        text-align: left;
    }
    .reply{
        &::after{
            left: -19px;
            transform: rotate(90deg) scale(0.96);
        }
    }
}

.nol-que{
    width: 100%;
    overflow: hidden;
}

.ask-style{
    height: 424px !important;
}

.questuon-ask-box{
    height: 560px;
    width: 560px;
}

.line{
    padding: 20px;
}

::v-deep .el-form-item__label{
    width: 80px !important;
    margin-right: 10px;
    margin-top: 10px;
}

.let-save{
    display: flex;
    justify-content: end;
    margin-top: 55px;
}

.close{
    font-size: 22px;
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
}

.fade-enter-active,
.fade-leave-active{
    transition: opacity ease-in .3s;
}

.fade-enter,
.fade-leave-to{
    opacity: 0;
}
</style>
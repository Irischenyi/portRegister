<template>
    <div class="item">
        <div class="title" @click="getQuestionDetail">{{ item.question }}</div>
        <Transition name="fade">
            <div class="content" v-if="show">
                <div class="name">解决方案: </div>
                <div class="detail" v-html="answerDetail">
                </div>
            </div>
        </Transition>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import http, { setBaseInf, setHttp } from '@/http/httpContentMain'
interface ItemDo {
    question: string;
    id: string

}
const props = defineProps({
    item: {
        type: Object
    }
})

const answerDetail = ref('')

const getQuestionDetail = async () => {
  const id = (props.item as ItemDo).id
  show.value = !show.value;
  const res = (await http.get(`k2401-question/question/${id}`)) as any
  answerDetail.value = res.answer
}
const show = ref(false)
</script>

<style lang="scss" scoped>
.question{
    .item{
        padding: 10px;
        width: 400px;
        font-size: 13px;
        box-sizing: border-box;
        cursor: pointer;
        .title{
            color: #146AFF;
        }
        .content{
            display: flex;
            margin-top: 20px;
            .name{
                color: #146AFF;
                font-size: 13px;
                width: 75px;
            }
            .detail{
                width: calc(100% - 130px);
            }
        }
    }
}

.fade-in-enter,
.fade-enter-active,
.fade-leave-active{
    transition: opacity ease-in .16s;
}


.fade-enter,
.fade-leave-to{
    opacity: 0;
}

</style>
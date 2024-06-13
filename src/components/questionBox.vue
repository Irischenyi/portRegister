<template>
    <Transition name="fade">
        <div  class="question-bpx-back" v-if="show">
            <div  class="question-bpx" @click="emit('close')">
                <div class="dev1">
                    <div class="head">
                        <div class="tab">常见问题</div>
                        <div class="tab">智能咨询</div>
                        <div class="tab">在线留言</div>
                    </div>
                    <div class="main-box">
                        <div class="question"></div>

                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const emit = defineEmits(['close']);
const attrs = defineProps({
    show: {
        type: Boolean
    }
})
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
    height: 560px;
    background-color: #e9eff9;
    position: fixed;
    bottom: 5px;
    right: 80px;
    z-index: 10;
    border-radius: 10px;
    .head{
        display: flex;
        padding: 0px 20px;
        margin-top: 10px;
        .tab{
            padding: 12px 20px;
            font-size: 15px;
            font-weight: bold;
        }
    }
    .main-box{
        height: 480px;
        width: calc(100% - 50px);
        background-color: white;
        margin: 0 auto;
        border-radius: 10px;
    }
}
</style>
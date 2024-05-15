<script setup lang="ts">
    import { ref, defineExpose, onBeforeMount, watch, defineEmits, watchEffect } from 'vue'
    
    import http from '@/http/httpContentMain'



    const props = defineProps<{
        show: boolean,
    }>()

   
    const img = ref('')
    const standard = ref(0)
    const srcImg = ref('')
    const picInfo = ref({
        srcImageHeight: 0,
        srcImageWidth: 0,
        top: 0,
        left: 0,
        uuid: ''
    })
    const emit = defineEmits(['postCheck'])

    const getPic = () => {
        srcImg.value = ''
        img.value = ''
        picInfo.value.left = -6;
        standard.value = 0
        http.get('k2401-enterprise/verify-image').then((value) => {
            const valueInt = value as unknown as { uuid: string, yposition: number, cutImage: string, srcImage: string, srcImageHeight: number, srcImageWidth: number}
            img.value = 'data:image/png;base64,'+valueInt.srcImage
            picInfo.value.srcImageHeight = valueInt.srcImageHeight
            picInfo.value.srcImageWidth = valueInt.srcImageWidth
            picInfo.value.top = valueInt.yposition;
            picInfo.value.uuid = valueInt.uuid;
            srcImg.value = 'data:image/png;base64,'+valueInt.cutImage
        })
    }

    defineExpose({
        getPic
    })

    const postCheck = () => {
        emit('postCheck', picInfo.value.uuid, picInfo.value.left+6)
    }
    

    let TimeIn:number
    watch(standard, (value) => {
        picInfo.value.left = value - 6;
        clearTimeout(TimeIn)
        TimeIn = setTimeout(()=>{
            postCheck()
        }, 2000)
    })


    watchEffect(() => {
        img.value = props.show?img.value: ''
    })

</script>
<template>
<div class="back" v-if="show">
    <div class="center">
        <div class="img-center">
            <img :src="img" :width="picInfo.srcImageWidth" :height="picInfo.srcImageHeight"/>
            <img :src="srcImg" :style="'position:absolute;left:'+picInfo.left+'px;top:'+picInfo.top+'px'"/>
            <q-slider v-model="standard" :min="0" :max="picInfo.srcImageWidth" style="width: 200px;"/>
        </div>
    </div>
</div>
</template>

<style scoped>
.q-dialog-plugin{
    height: 300px;
}

.back{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
}

.center{
    width: 300px;
    height: 180px;
    background-color: white;
}

.img-center{
    display: inline-block;
    position: relative;
    width: 200px;
    left: 50px;
    top: 20px;
}
</style>
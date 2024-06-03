<template>
    <img :src="props.src" />
    <div v-if="!isShow" class="loading load2">
        <div class="loader"></div>
    </div>
</template>
<style lang="scss" scoped>
img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
}

.loading {
    width: 100%;
    height: 100%;
    background-color: #D3D3D3;
    left: 0px;
    top: 0px;
    position: absolute;
    display: flex;
    align-items: center;
}

.load2 .loader,
.load2 .loader:before,
.load2 .loader:after {
    border-radius: 50%;
    transform: scale(0.2);
}

.load2 .loader:before,
.load2 .loader:after {
    position: absolute;
    content: '';
    transform: scale(0.2);
}

.load2 .loader:before {
    width: 5.2em;
    height: 10.2em;
    background: #0dcecb;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    -webkit-transform-origin: 5.2em 5.1em;
    transform-origin: 5.2em 5.1em;
    -webkit-animation: load2 2s infinite ease 1.5s;
    animation: load2 2s infinite ease 1.5s;
    transform: scale(0.2);
}

.load2 .loader {
    font-size: 11px;
    text-indent: -99999em;
    margin: 30% auto;
    position: relative;
    width: 10em;
    height: 10em;
    box-shadow: inset 0 0 0 1em #FFF;
    transform: scale(0.2);
}

.load2 .loader:after {
    width: 5.2em;
    height: 10.2em;
    background: #0dcecb;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    -webkit-transform-origin: 0px 5.1em;
    transform-origin: 0px 5.1em;
    -webkit-animation: load2 2s infinite ease;
    animation: load2 2s infinite ease;
    transform: scale(0.2);
}

@-webkit-keyframes load2 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes load2 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
<script setup lang="ts">
import { ref, useAttrs, watch, defineProps } from 'vue';
const attrs = useAttrs()

const imgOne = ref('')

const attrValue = attrs.value as {
    src: string
}

const props = defineProps<{
    src: string
}>()

const isShow = ref(false)

if (props.src.indexOf('undefin')<=0) {
    const imgDom = new Image();
    imgDom.src = props.src;
    imgDom.onload = () => {
        console.log('加载完成')
        isShow.value = true;
    }
}else{
    setTimeout(() => {
        isShow.value = true;
    }, 2000)
}



</script>
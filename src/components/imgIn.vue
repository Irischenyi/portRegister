<template>
    <img :src="props.src" />
    <Transition name="fade">
        <div v-if="!isShow" class="loader-box">
            <div class="dev1">
              <q-spinner
                color="primary"
                size="3em"
              />
            </div>
        </div>
    </Transition>
</template>
<style lang="scss" scoped>
img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
}

.loader-box{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #f4f4f4;
    left: 0px;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.dev1
{
    position: absolute;
    height: 90px;
    width: 90px;
    margin: 50px;
    padding:10px;
    // border: 1px solid red;
    perspective:150;
    left: calc(50% - 80px);
    top: calc(50% - 80px);
    -webkit-perspective:150; /* Safari and Chrome */
}

.dev2,.dev3,.dev4, .dev5
{
    padding:50px;
    position: absolute;
    border: 3px solid #0c00ff;
    transform-origin: 50% 50%;
    transform: rotateX(0deg);
    box-sizing: border-box;
    border-radius: 50px;
    -webkit-transform: rotateX(0deg); /* Safari and Chrome */
    animation: jumping 2s infinite;
}

.dev3{
    transform: rotateX(0deg) scale(0.9);
    animation: jumping3 2s infinite;
    animation-delay: 0.2s;
}
.dev4{
    transform: rotateX(0deg) scale(0.83);
    animation: jumping4 2s infinite;
    animation-delay: 0.4s;
}
.dev5{
    transform: rotateX(0deg) scale(0.8);
    animation: jumping4 2s infinite alternate;
    animation-delay: 0.6s;
}

@keyframes jumping {
  0% {
    border: 3px solid #0c00ff;
    transform:  rotateY(0px) rotateX(0deg);
  }

  100% {
    border: 3px solid black;
    transform: rotateY(-365deg) rotateX(365deg);
  }
}

@keyframes jumping3 {
  0% {
    border: 3px solid #0c00ff;
    transform:   rotateX(0deg) scale(1);
  }
  50% {
    border: 3px solid rgb(172, 161, 206);
    transform: translateY(0px) rotateX(160deg) scale(0.8);
  }
  100% {
    border: 3px solid black;
    transform:  rotateX(365deg) scale(1);
  }
}
@keyframes jumping4 {
  0% {
    border: 3px solid #0c00ff;
    transform:  rotateX(0deg) scale(1);
  }
  50% {
    transform: rotateX(180deg) scale(0.6);
  }
  100% {
    border: 3px solid black;
    transform: translateY(-10px) rotateX(365deg) scale(1);
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
if(props.src.indexOf('@')>=0){
    console.log(props.src)
    isShow.value = true;
}else{
    if (props.src && props.src.indexOf('undefin')<=0) {
        const imgDom = new Image();
        imgDom.src = props.src;
        imgDom.onload = () => {
            isShow.value = true;
        }
    }else{
        setTimeout(() => {
            isShow.value = true;
        }, 2000)
    }
}




</script>
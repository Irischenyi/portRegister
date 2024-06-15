<template>
    <div>
        <Transition name="fade">
            <div class="loading" v-if="show">
                <div class="dev1">
                    <div class="dev2"></div>
                    <div class="dev3"></div>
                    <div class="dev4"></div>
                </div>
            </div>
        </Transition>
    </div>
</template>
<script setup lang="ts">
import { ref, defineProps, watch } from 'vue';
const attrs = defineProps({
    show: {
        type: Boolean
    }
})

</script>
<style lang="scss" scoped>
.loading{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0px;
    left: 0px;
}
.fade-enter-active,
.fade-leave-active{
    transition: opacity ease-in .3s;
}

.fade-enter,
.fade-leave-to{
    opacity: 0;
}


.dev1
{
    position: absolute;
    height: 120px;
    width: 120px;
    margin: 50px;
    padding:10px;
    transform: scale(0.7);
    // border: 1px solid red;
    perspective:150;
    left: calc(50% - 120px);
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
    border: 3px solid rgb(210, 199, 225);
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
    border: 3px solid rgb(172, 161, 206);
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
    border: 3px solid white;
    transform: translateY(-10px) rotateX(365deg) scale(1);
  }
}

</style>
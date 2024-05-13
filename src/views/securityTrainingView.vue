<template>
   <TemplateFrame>
      <template #tabs>
          <q-tab name="train"  label="安全培训" />
          <q-tab name="tool" label="安全工具" />
      </template>
      <template #body>
          <div class="card" v-for="item in [1,2,3,4,5,6]">
            <div class="bg"></div>
            <div class="bottom">安全信息培训</div>
          </div>
      </template>
  </TemplateFrame>
</template>

<script setup lang="ts">
import TemplateFrame from '@/components/TemplateFrame.vue'
</script>
<style lang="scss" scoped>
.card{
  width: calc(25% - 20px);
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 28%;
  background-color: white;
  margin-top: 20px;
  position: relative;
}

.bg{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  background-color: rebeccapurple;
}

.bottom{
  position: absolute;
  bottom: 0px;
  height: 50px;
  width: 100%;
  background-color: rgba(0,102,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
</style>

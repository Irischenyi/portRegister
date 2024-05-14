<script setup lang="ts">
import { ref, watch , defineEmits} from 'vue';
const props = defineProps<{
  name: string,
  code?: string
}>()
const value = ref('')
watch(value, () => {
  emit('changeFormValue', props.code, value.value)
})

const emit = defineEmits(['changeFormValue'])
</script>

<template>
  <div class="input-set">
    <div class="title"><span class="tips">*</span>{{ name }}</div>
    <slot v-if="$slots.default"> </slot>
    <q-input v-else rounded outlined  :placeholder="'请填写'+ name" v-model="value"/>
  </div>
</template>

<style type="scss" scoped>
.tips{
  color: red;
  margin-left: 10px;
  margin-right: 10px;
}
.title{
  margin-top: 10px;
  margin-bottom: 10px;
}
::v-deep .q-input .q-field__control{
    height: 40px;
    border-radius: 17px;
}

::v-deep .q-input .q-field__control input{
  box-sizing: border-box;
  padding: 0px 15px;
}

::v-deep .q-input .q-field__control input::placeholder{
  color: rgba(1,1,1,0.3);
}

.input-set{
  width: 340px;
  display: inline-block;
}
</style>

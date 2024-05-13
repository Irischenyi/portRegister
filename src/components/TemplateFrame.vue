<template>
    <div class="service">
      <div class="head">
  
      </div>
      <div class="tabber-list">
        <q-tabs
          v-model="tab"
          class="text-teal"
        >
          <slot name="tabs"></slot>
        </q-tabs>
      </div>
      <div class="body">
          <slot name="body"></slot>
      </div>
      <slot name="end"></slot>
    </div>
  </template>
  <script setup lang="ts">
  import { ref } from 'vue';
  const tab = ref('assess')
  </script>
  <style lang="scss" scoped>
  .service{
    background-color: #e9eff9;
    overflow-x: hidden;
  }
  .head{
    width: 100%;
    padding-top: 15%;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #efefef;
  }
  
  .tabber-list{
    width: 100vw;
    min-height: 45px;
    background-color: white;
  }
  
  .body{
    width: calc(100% - 480px);
    margin-left: 240px;
    display: flex;
    flex-wrap: wrap;
  }
  
  ::v-deep .q-tabs{
    width: calc(100% - 500px);
    margin: 0 auto;
    margin-left: 250px;
    .q-tabs__content{
      display: flex;
      justify-content: left;
    }
  }
  
  
  </style>
  
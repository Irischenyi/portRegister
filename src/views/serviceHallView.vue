<template>
  <TemplateFrame>
      <template #tabs>
        <q-tabs
          v-model="tab"
          @update:model-value="changeTab"
          class="text-teal"
        >
          <q-tab name="assess"  label="数据安全评估" />
          <q-tab name="govern" label="数据安全治理" />
          <q-tab name="pool" label="服务商资源池" />
        </q-tabs>
      </template>
      <template #body>
          <div class="card" v-for="item in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]">
              <div class="card-box">
                  <div class="pic"></div>
                  <div class="title">数据安全风险评估</div>
                  <div class="content">会议由省本次会议由省本次会议由省本次会议由省本次会议由省本次会议由省本次会议由省本次会议由省本次会议由省本次会议由省。</div>
                  <div class="end">
                    <div class="icon"></div>
                    <div>中新科技股份有限公司</div>
                  </div>
              </div>
          </div>
      </template>
      <template #end>
        <div class="bottom-card">
          <div class="bottom-body">
            <div class="card">
              <div class="card-box">
                <div class="pic"></div>
                <div class="end">
                    <div class="icon"></div>
                    <div>中新科技股份有限公司</div>
                </div>
                <div class="content">本次会议由省工信厅指导。市工信局主办。此次培训会旨在增强企业网络安全意识，构筑网络安全保障</div>
                <div>
                  <q-btn unelevated rounded color="primary" label="查看详情" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
  </TemplateFrame>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import TemplateFrame from '@/components/TemplateFrame.vue'
const tab = ref('assess')
const changeTab = () => {
  console.log('======')
}
</script>
<style lang="scss" scoped>
.card{
    width: calc(33% - 30px);
    padding-top: 27%;
    background-color: white;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 30px;
    position: relative;
    .card-box{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      padding: 15px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .pic{
        width: 100%;
        padding-top: 40%;
        background-color: #efefef;
      }
      .title{
        width: 100%;
        font-size: 17px;
        font-weight: bold;
      }
      .content{
        width: 100%;
        height: 4vw;
        text-overflow:ellipsis;
        overflow: hidden;
        font-size: 13px;
        -webkit-line-clamp:3;
        -webkit-box-orient: vertical;
        color: #b8b3b3;
      }
      .end{
        display: flex;
        justify-content: left;
        border-top: 1px solid #dedcdc;
        padding-top: 15px;
        color: #7e7e7e;
        .icon{
          width: 40px;
          height: 20px;
          background-color: #efefef;
          margin-right: 10px;
        }
        font-size: 13px;
      }
    }
}

.bottom-card{
  width: 100%;
  background-color: white;
  margin-top: 30px;
  padding-bottom: 80px;
  padding-top: 10px;
  .bottom-body{
    width: calc(100% - 480px);
    margin-left: 240px;
    display: flex;
    flex-wrap: wrap;
    .card-box{
      background-color: #f8f8f8;
      box-shadow: 0 0 14px rgba(0,0,0,0.13);
    }
    .end{
      padding: 0px;
      border: none;
      color: black;
      font-size: 13px;
    }
  }
}
::v-deep  button{
  width: 130px;
}

</style>
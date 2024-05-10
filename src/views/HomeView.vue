<template>
  <div>
    <!-- 背景图片 -->
    <img
      style="width: 100%; height: 400px"
      src="../assets//images/shujufuwu.png"
      alt=""
      srcset=""
    />
    <!-- 版心 -->
    <div class="contain">
      <!-- 数量 -->
      <div class="num_text">
        <div>
          <div class="num">1000+</div>
          <div>注册用户</div>
        </div>
        <div>
          <div class="num">32+</div>
          <div>专家入驻</div>
        </div>
        <div>
          <div class="num">800+</div>
          <div>上架服务</div>
        </div>
        <div>
          <div class="num">2500+</div>
          <div>服务用户</div>
        </div>
      </div>

      <!-- 服务简介 -->
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.contain {
  padding: 10px;
  width: 1300px;
  background-color: #bfa;
  margin: 0 auto;
}
.num_text {
  display: flex;
  padding: 50px 0;
  justify-content: space-between;
}
.num {
  font-size: 40px;
  font-weight: 600;
  color: #4893ff;
}
</style>

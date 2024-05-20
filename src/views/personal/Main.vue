<template>
    <div>
        <div class="header"></div>
        <div class="body">
            <div class="left">
              <q-list bordered separator>
                <q-item clickable v-ripple>
                  <q-item-section>基础信息</q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>消息中心</q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>我的流程</q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="right">
              <RouterView />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.header{
  width: 100%;
  height: 3vw;
  background-color: #4984FF;
}
.body{
  width: 100%;
  height: calc(100vh - 3vw);
  background: #e9eff9;
  .left{
    width: 250px;
    height: 100%;
    background-color: #eef4ff;
    display: inline-block;
    vertical-align: top;
  }
  .right{
    width: calc(100% - 280px);
    height: calc(100% - 20px);
    margin-left: 15px;
    margin-top: 10px;
    border-radius: 10px;
    background: white;
    display: inline-block;
    vertical-align: top;
    box-shadow: 0 0 10px rgba(0,0,0,0.06);
  }
}

.q-list--separator > .q-item-type + .q-item-type{
  border: none;
}
.q-list--bordered{
  border: none;
  font-size: 14px;
  color: #787878;
}
</style>
  
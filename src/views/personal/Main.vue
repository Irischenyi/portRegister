<template>
    <div>
        <div class="header">
          <img src="@/assets/images/selfLogo.png" class="logo"/>
          <div>数据出境公共服务平台</div>
          <div class="name-box">
            <q-icon name="notifications " />
            <div class="img"></div>
            小拉科技
          </div>
        </div>
        <div class="body">
            <div class="left">
              <q-list bordered separator>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-icon name="hubs" />
                    基础信息
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-icon name="chats" />
                    消息中心
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-icon name="chats" />
                    我的流程
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="right">
              <RouterView />
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.header{
  width: 100%;
  height: 3vw;
  background-color: #4984FF;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: white;
  font-weight: bold;
  position: relative;
  .name-box{
    cursor: pointer;
    font-style: normal;
    position: absolute;
    right: 20px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    .q-icon{
      padding-right: 15px;
      margin-right: 15px;
      border-right: 1px solid white;
      font-size: 20px;
    }
    .img{
      width: 25px;
      height: 25px;
      background: white;
      display: inline-block;
      border-radius: 40px;
      margin-right: 10px;
    }
  }
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
    .q-item{
      text-align: center;
      padding: 20px 10px;
    }
    .q-item__section{
      flex-direction: row;
      align-items: center;
      i{
        margin-right: 20px;
        width: 20px;
        font-size: 20px;
      }
    }
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

.logo{
  width: 30px;
  height: 30px;
  margin: 10px;
  box-sizing: border-box;
}


</style>
  
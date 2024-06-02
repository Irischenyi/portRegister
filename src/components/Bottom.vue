<template>
    <!-- 底部 -->
    <div class="bottom">
      <div class="contain">
        <div style="display: flex; justify-content: space-between">
          <div>
            <div class="bottom_text" style="margin-bottom: 20px;">
              <div class="bottom_text1">快速入口</div>
              <div style="font-size: 16px">联系我们</div>
            </div>
            <div class="bottom_text bottom_text2">
              <div class="bottom_texts">诊断评估</div>
              <div>联系方式：0619-85028717</div>
            </div>
            <div class="bottom_text bottom_text2">
              <div class="bottom_texts">专家资源</div>
              <div>
                企业地址：常州市钟楼区玉龙南路280号常州大数据产业园4号楼4楼
              </div>
            </div>
            <div class="bottom_text bottom_text2">
              <div class="bottom_texts">关于我们</div>
            </div>
          </div>
          <div class="code-text">
              <div class="pic">
                <img/>
              </div>
              <div class="text">企业客服二维码</div>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
.bottom {
  width: 100%;
  background-color: #000;
}
.bottom_text {
  display: flex;
  color: #fff;
  margin: 10px;
  font-weight: bold;
}
.bottom_text1 {
  margin-right: 41px;
  font-size: 16px;
}
.bottom_texts {
  margin-right: 50px;
}
.bottom_text2{
  color: grey;
  font-size: 13px;
}
.contain {
  padding: 80px 0px;
  width: 70%;
  margin: 0 auto;
  max-width: 1300px;
  min-width: 800px;
}

.code-text{
  height: 120px;
  .pic{
    width: 90px;
    height: 90px;
    border: 1px solid grey;
    border-radius: 5px;
    position: relative;
    img{
      width: 70px;
      height: 70px;
      position: absolute;
      left: 9px;
      top: 9px;
      background: white;
    }
  }
  .text{
    color: white;
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
  }
}
</style>
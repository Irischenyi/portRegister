<template>
  <TemplateFrame>
    <template #body>
        <div class="contain">
          <div class="detail-title">
            <span style="font-size: 16px">行业动态</span> >
            {{ (items as any).title }}
          </div>

          <div class="contain-main">
            <div class="title">
              {{ (items as any).title }}
            </div>

            <div class="sub-title">
              <span style="margin-right: 30px"
                >来源：{{ (items as any).sourceFrom }}</span
              >
              <span>发布时间: {{ (items as any).createDate }}</span>
            </div>
            <!-- 内容 -->
            <div>
              <div class="imgClass">
                <imgIn style="width: 100%" :src="bannerSy" alt="" />
              </div>
              <div v-html="(items as any).content" style="margin: 10px"></div>
            </div>
          
          </div>
        </div>
        
    </template>
  </TemplateFrame>
  <Bottom />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import http, { setBaseInf } from "@/http/httpContentMain";
import Bottom from "@/components/Bottom.vue";
import TemplateFrame from "@/components/TemplateFrame.vue";

const route = useRoute();
const items = ref({});
// 图片
const bannerSy = ref("");
// 获取id
const query = route.query as {
  id: string;
};
// 详情
const getItems = async () => {
  const baseUrl = "/k2401-article/article/";
  const ids = query.id.replace(/"/g, "");
  const url = `${baseUrl}${ids}`;

  const res = (await http.get(url)) as any;

  items.value = res;

  bannerSy.value =
    `${setBaseInf.baseUrl}` + (items as any).value.attach.storagePath;
};
getItems();
</script>
<style lang="scss" scoped>
.contain {
  width: 100%;
  margin: 20px 0px;
}

.contain-main{
  padding: 30px 30px;
  background-color: white;
  position: relative;
  .title{
    font-size: 24px;
    margin: 20px 0px;
    font-weight: bold;
  }
  .sub-title{
    font-size: 14px;
    color: grey;
    margin-bottom: 40px;
  } 
}

.detail-title{
    font-size: 14px;
    padding: 5px 0px;
    margin-bottom: 10px;
}

.imgClass{
  width: 98%;
  padding-top: 60%;
  margin: 0 auto;
  margin-bottom: 20px;
  position: relative;
}


</style>

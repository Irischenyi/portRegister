<template>
  <div style="width: 100%; height: 100vh; background-color: #eaeff9">
    <div class="contain">
      <div>
        <span style="font-size: 16px">行业动态</span> >
        {{ (items as any).title }}
      </div>

      <div style="padding: 20px; background-color: #fff">
        <div style="font-size: 20px; margin-bottom: 20px; font-weight: 600">
          {{ (items as any).title }}
        </div>

        <div style="margin-bottom: 30px">
          <span style="margin-right: 30px"
            >来源：{{ (items as any).sourceFrom }}</span
          >
          <span>发布时间: {{ (items as any).createDate }}</span>
        </div>
        <!-- 内容 -->
        <div>
          <img style="width: 100%" :src="bannerSy" alt="" />
          <div v-html="(items as any).content" style="margin: 10px"></div>
        </div>
        <!-- <div style="margin: 10px">
          {{ (items as any).summary }}
        </div> -->

        <!-- <div>
          <img style="width: 100%" src="../assets/images/zczxxq2.png" alt="" />
        </div>
        <div style="margin: 10px">
          本文来源于互联网，本看传播知识、有益学习和研究的目的进行的转载，为网友免费提供，并以尽力标明作者与出处，如有著作权人或出版方提出异议，本站将立即删除。如
          果您对文章转载有任何疑问请告之我们，以便我们及时纠正。
        </div> -->
      </div>
    </div>
    <Bottom />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import http, { setBaseInf } from "@/http/httpContentMain";
import Bottom from "@/components/Bottom.vue";

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
  padding: 10px;
  width: 1300px;
  margin: 0 auto;
}
</style>

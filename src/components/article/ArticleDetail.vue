<script setup>
import { ref, onMounted, computed } from 'vue'
import CommonHeader from '@/components/common/CommonHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
import ArticleSide from '@/components/article/ArticleSide.vue';
import { useRoute } from 'vue-router'
import { formatDate } from '@/util/dateUtil'
import { articleApi } from '@/api/articleApi'

//获取API接口
const articleDetail = ref({});

const route = useRoute();
const routeValue = computed(() => route.params.id);
//文章接口
const articleIndexApi = async () => {
      const getArticleDetail = await articleApi.getArticleDetail({
            articleId: routeValue.value,
      });
      articleDetail.value = getArticleDetail.data;
}

//组件加载完成后再加载接口
onMounted(async () =>{
      //加载接口
      await articleIndexApi();
});
</script>

<template>
      <CommonHeader />
      <div class="content">
            <div class="container">
                  <div class="x-placeholder"></div>
                  <div class="content-left">
                        <ul class="breadcrumb">
                              <li>
                                    <router-link :to="`/article`" class="active">文章</router-link>
                              </li>
                              <span>/</span>
                              <li>
                                    <router-link :to="`/article?categoryId=${articleDetail.categoryId}`" class="active">{{ articleDetail.categoryName }}</router-link>
                              </li>
                              <span>/</span>
                              <li>
                                    {{ articleDetail.title }}
                              </li>
                        </ul>
                        <div class="content-detail">
                              <h2>{{ articleDetail.title }}</h2>
                              <p class="detail-add-time">{{ formatDate(articleDetail.addTime) }}</p>
                              <div class="detail-body" v-html="articleDetail.content"></div>
                        </div>
                  </div>
                  <ArticleSide />
                  <div style="clear:both;"></div>
            </div>
      </div>
      <CommonFooter />
</template>

<style scoped>
</style>
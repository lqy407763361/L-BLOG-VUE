<script setup>
import { ref, watch } from 'vue';
import CommonHeader from '@/components/common/CommonHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
import ArticleSide from '@/components/article/ArticleSide.vue';
import { useRoute } from 'vue-router'
import { formatDate } from '@/util/dateUtil'
import { articleApi } from '@/api/articleApi'

//获取API接口
const route = useRoute();
const articleList = ref({list: []});
//文章分类接口
const articleIndexApi = async (params = {}) => {
      const getArticleList = await articleApi.getArticleList(params);
      articleList.value = getArticleList.data;
}

//更新搜索结果
watch(() => route.query, (newVal) => {
      articleIndexApi(newVal);
}, {immediate: true, deep: true});
</script>

<template>
      <CommonHeader />
      <div class="content">
            <div class="container">
                  <div class="x-placeholder"></div>
                  <div class="content-left">
                        <div class="description-box" v-if="articleList.list.length == 0"><p>暂无结果</p></div>
                        <div class="description-box" v-for="article in articleList.list"
                              :key="article.id">
                              <h3><router-link :to="`/article/${article.id}`">{{ article.title }}</router-link></h3>
                              <p class="time">{{ formatDate(article.addTime) }}</p>
                        </div>
                        <div style="clear:both;"></div>
                  </div>
                  <ArticleSide />
                  <div style="clear:both;"></div>
            </div>
      </div>
      <CommonFooter />
</template>

<style scoped>
</style>
<script setup>
import { ref, onMounted } from 'vue';
import CommonHeader from '@/components/common/CommonHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
import ArticleSide from '@/components/article/ArticleSide.vue';
import { formatDate } from '@/util/dateUtil'
import { articleApi } from '@/api/articleApi'

//获取API接口
const articleList = ref('');
//文章分类接口
const articleIndexApi = async () => {
      const getArticleList = await articleApi.getArticleList();
      articleList.value = getArticleList.data;
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
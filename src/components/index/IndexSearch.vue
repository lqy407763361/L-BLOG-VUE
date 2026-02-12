<script setup>
import { ref, watch } from 'vue'
import CommonHeader from '@/components/common/CommonHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
import IndexSide from '@/components/index/IndexSide.vue'
import { useRoute } from 'vue-router'
import { formatDate } from '@/util/dateUtil'
import { articleApi } from '@/api/articleApi'

const route = useRoute();
const searchResult = ref([]);

//搜索API调用
const searchArticle = async (title) => {
      const articleList = await articleApi.getArticleList({title});
      searchResult.value = articleList.data.list || [];
}

//监听路由变化，更新搜索结果
watch(() => route.query.title, (newVal) => {
      searchArticle(newVal);
}, {immediate: true});
</script>

<template>
      <CommonHeader />
      <div class="content">
            <div class="container">
                  <div class="x-placeholder"></div>
                  <div class="content-left">
                        <h2>搜索内容</h2>
                        <div class="description-box" v-if="searchResult.length == 0"><p>暂无结果</p></div>
                        <div class="description-box" v-for="article in searchResult"
                              :key="article.id">
                              <h3><router-link :to="`/article/${article.id}`">{{ article.title }}</router-link></h3>
                              <p class="time">{{ formatDate(article.addTime) }}</p>
                        </div>
                  </div>
                  <IndexSide />
                  <div style="clear:both;"></div>
            </div>
      </div>
      <CommonFooter />
</template>

<style scoped>
</style>
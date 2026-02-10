<script setup>
import { ref, onMounted } from 'vue'
import CommonHeader from '@/components/common/CommonHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
import IndexSide from '@/components/index/IndexSide.vue'
import { articleApi } from '@/api/articleApi'
import { formatDate } from '@/util/dateUtil'

//获取API接口
const newArticleList = ref({});
//文章接口
const articleIndexApi = async () => {
      const getNewArticleList = await articleApi.getNewArticleList();
      newArticleList.value = getNewArticleList.data;
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
                        <h2>最新发表</h2>
                        <div class="description-box" v-for="article in newArticleList"
                              :key="article.id">
                              <h3><router-link :to="`/article/${ article.id }`">{{ article.title }}</router-link></h3>
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
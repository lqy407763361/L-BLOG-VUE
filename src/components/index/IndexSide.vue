<script setup>
import { ref, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import { articleApi } from '@/api/articleApi'

const route = useRoute();
const searchTitle = ref(route.query.title || '');
const clickSearch = () => {
      if(searchTitle.value.trim()){
            router.push({
                  path: '/search',
                  query: {
                        title: searchTitle.value
                  }
            });
      }
}

//获取API接口
const hotArticleList = ref({});
//文章接口
const articleIndexApi = async () => {
      const getHotArticleList = await articleApi.getHotArticleList();
      hotArticleList.value = getHotArticleList.data;
}

//组件加载完成后再加载接口
onMounted(async () =>{
      //加载接口
      await articleIndexApi();
});
</script>

<template>
      <div class="content-right">
            <div class="index-search">
                  <h2>站内搜索</h2>
                  <el-form :model="form">
                        <ul>
                              <li><el-input v-model="searchTitle" style="width:100%" placeholder="请输入关键词" /></li>
                              <li><el-button type="primary" :icon="Search" @click="clickSearch"></el-button></li>
                        </ul>
                  </el-form>
            </div>
            <div class="recommend-posts">
                  <h2>热门文章</h2>
                  <div class="description-box" v-for="article in hotArticleList" 
                        :key="article.id">
                        <h3><router-link :to="`/article/${ article.id }`">{{ article.title }}</router-link></h3>
                  </div>
            </div>
      </div>
</template>

<style scoped>
</style>
<script setup>
import { ref, onMounted } from 'vue';
import { articleCategoryApi } from '@/api/articleCategoryApi'

//获取API接口
const articleCategoryList = ref('');
//文章分类接口
const articleCategoryIndexApi = async () => {
      const getArticleCategoryList = await articleCategoryApi.getArticleCategoryList();
      articleCategoryList.value = getArticleCategoryList.data;
}

//组件加载完成后再加载接口
onMounted(async () =>{
      //加载接口
      await articleCategoryIndexApi();
});
</script>

<template>
      <div class="content-right">
            <h2>分类标题</h2>
            <div class="description-box" v-for="articleCategory in articleCategoryList.list"
                  :key="articleCategory.id">
                  <h3><router-link :to="`/article?categoryId=${articleCategory.id}`">{{ articleCategory.name }}</router-link></h3>
            </div>
      </div>
</template>

<style scoped>
</style>
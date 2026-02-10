<script setup>
import { ref } from 'vue'
import { siteConfigApi } from '@/api/siteConfigApi'
import { formatCurrentYear } from '@/util/dateUtil'

//获取API接口
const siteConfigDetail = ref({});
const commonFooterApi = async() => {
      //获取网站配置
      const getSiteConfigDetail = await siteConfigApi.getSiteConfigDetail();
      siteConfigDetail.value = getSiteConfigDetail.data;
}
commonFooterApi();
</script>

<template>
      <footer>
            <div class="container">
                  <p><router-link to="/">{{ siteConfigDetail?.siteTitle || 'L-BLOG' }}</router-link> 2017-{{ formatCurrentYear() }}</p>
                  <div style="clear:both;"></div>
            </div>
            <input type="hidden" value="author:lqy407763361|project:L-WEB/L-BLOG">
      </footer>
</template>

<style scoped>
</style>
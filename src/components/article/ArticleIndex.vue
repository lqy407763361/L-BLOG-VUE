<script setup>
import CommonHeader from '@/components/common/CommonHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
import ArticleSide from '@/components/article/ArticleSide.vue';
</script>

<template>
      <CommonHeader />
      <div class="content">
            <div class="container">
                  <div class="x-placeholder"></div>
                  <div class="content-left">
                        <div class="description-box">
                              <h3><a href="">文章列表页标题</a></h3>
                              <p class="time">2025-06-24</p>
                        </div>
                        <div class="description-box">
                              <h3><a href="">文章列表页标题</a></h3>
                              <p class="time">2025-06-24</p>
                        </div>
                        <div class="description-box">
                              <h3><a href="">文章列表页标题</a></h3>
                              <p class="time">2025-06-24</p>
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
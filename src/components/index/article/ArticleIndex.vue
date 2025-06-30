<script setup>
import CommonHeader from '@/components/index/common/CommonHeader.vue'
import CommonFooter from '@/components/index/common/CommonFooter.vue'
import ArticleSide from '@/components/index/article/ArticleSide.vue';
</script>

<template>
      <div class="layout">
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
      </div>
</template>

<style scoped>
</style>
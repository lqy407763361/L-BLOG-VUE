<script setup>
import CommonHeader from '@/components/common/CommonHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
import IndexSide from '@/components/index/IndexSide.vue'
</script>

<template>
      <CommonHeader />
      <div class="content">
            <div class="container">
                  <div class="x-placeholder"></div>
                  <div class="content-left">
                        <h2>搜索内容</h2>
                        <div class="description-box">
                              <h3><a href="">文章标题</a></h3>
                              <p class="time">2025-06-24</p>
                        </div>
                        <div class="description-box">
                              <h3><a href="">文章标题</a></h3>
                              <p class="time">2025-06-24</p>
                        </div>
                        <div class="description-box">
                              <h3><a href="">文章标题</a></h3>
                              <p class="time">2025-06-24</p>
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
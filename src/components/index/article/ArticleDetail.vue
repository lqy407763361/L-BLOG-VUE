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
                              <ul class="breadcrumb">
                                    <li>
                                          <a class="active">面包屑导航</a>
                                    </li>
                                    <span>/</span>
                                    <li>
                                          <a class="active">面包屑导航</a>
                                    </li>
                                    <span>/</span>
                                    <li>
                                          面包屑导航
                                    </li>
                              </ul>
                              <div class="content-detail">
                                    <h2>文章标题</h2>
                                    <p class="detail-add-time">2025-06-27</p>
                                    <p class="detail-body">文章内容</p>
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
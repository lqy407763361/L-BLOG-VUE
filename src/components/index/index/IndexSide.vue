<script setup>
import { Search } from '@element-plus/icons-vue'
</script>

<template>
      <div class="content-right">
            <div class="index-search">
                  <h2>站内搜索</h2>
                  <el-form :model="form">
                        <ul>
                              <li><el-input v-model="input" style="width:100%" placeholder="请输入关键词" /></li>
                              <li><el-button type="primary" :icon="Search" @click="onSubmit"></el-button></li>
                        </ul>
                  </el-form>
            </div>
            <div class="recommend-posts">
                  <h2>热门文章</h2>
                  <div class="description-box">
                        <h3><a href="">热门文章标题</a></h3>
                  </div>
                  <div class="description-box">
                        <h3><a href="">热门文章标题</a></h3>
                  </div>
                  <div class="description-box">
                        <h3><a href="">热门文章标题</a></h3>
                  </div>
            </div>
      </div>
</template>

<style scoped>
</style>
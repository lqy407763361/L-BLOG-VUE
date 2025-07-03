<script setup>
import CommonHeader from '@/components/index/common/CommonHeader.vue'
import CommonFooter from '@/components/index/common/CommonFooter.vue'
</script>

<template>
      <div class="layout">
            <CommonHeader />
            <div class="content">
                  <div class="container">
                        <div class="x-placeholder"></div>
                        <div class="content-left">
                              <div class="description-box">
                                    <p>你可以说点什么</p>
                              </div>
                              <el-form :model="form" label-width="auto">
                                    <el-form-item label="标题">
                                          <el-input v-model="title" />
                                    </el-form-item>
                                    <el-form-item label="正文">
                                          <el-input v-model="content" type="textarea" rows="10"/>
                                    </el-form-item>
                                    <el-form-item>
                                          <el-button type="primary" @click="onSubmit">发送</el-button>
                                    </el-form-item>
                              </el-form>
                        </div>
                        <div class="content-right">
                              <div class="about-author">
                                    <h2>关于作者</h2>
                                    <div class="author-portrait">
                                    <a href="http://weibo.com/louqinyu" target="_blank"><img src="http://tvax3.sinaimg.cn/crop.0.0.640.640.180/005tFtr1ly8fii5pclqg2j30hs0hs0ts.jpg" alt=""></a>
                                    </div>
                                    <div class="author-separate">
                                    <a href="http://weibo.com/louqinyu" target="_blank"><p>废废废废导</p></a>
                                    <wb:follow-button uid="5019062503" type="red_1" style="display:block;"></wb:follow-button>	
                                    </div>
                              </div>
                        </div>
                        <div style="clear:both;"></div>
                  </div>
            </div>
            <CommonFooter />
      </div>
</template>

<style scoped>
</style>
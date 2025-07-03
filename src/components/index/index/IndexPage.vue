<script setup>
import { ref } from 'vue';
import CommonHeader from '@/components/index/common/CommonHeader.vue'
import CommonFooter from '@/components/index/common/CommonFooter.vue'
import CommonLogin from '@/components/index/common/CommonLogin.vue' 
import IndexSide from '@/components/index/index/IndexSide.vue'

// 登录弹窗
const commonLoginRef = ref();
const triggerLoginPopup = (status) => {
      commonLoginRef.value.showLoginPopup(status);
}
</script>

<template>
      <div class="layout">
            <CommonHeader @triggerLoginPopup="triggerLoginPopup"/>
            <div class="content">
                  <div class="container">
                        <div class="x-placeholder"></div>
                        <div class="content-left">
                              <h2>最新发表</h2>
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
            <CommonLogin ref="commonLoginRef" />
            <CommonFooter />
      </div>
</template>

<style scoped>
</style>
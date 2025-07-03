<script setup>
import {ref} from 'vue'

// 侧边导航栏
const mobileNavStatus = ref(false);
const maskFade = ref(true);
const changeMobileNav = (status) => {
      mobileNavStatus.value = status;
      maskFade.value = !status;
};

// 登录弹窗
const emitLoginPopup = defineEmits(['triggerLoginPopup']);
const loginPopup = (status) => {
      emitLoginPopup('triggerLoginPopup', {status:status});
}
</script>

<template>
      <header>
            <nav class="mobile-nav" :class="{'mobile-nav-fadein':mobileNavStatus}">
                  <CircleClose class="close-menu" @click="changeMobileNav(false)" />
                  <div style="clear:both;"></div>
                  <ul>
                        <li class="nav-active"><a href="/">首页</a></li>
                        <li><a href="/article">文章</a></li>
                        <li><a href="/about">关于</a></li>
                        <li><a @click="loginPopup(true)">登录</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0);">注册</a></li>
                  </ul>
            </nav>
            <div class="mask" :class="{'fade':maskFade}" @click="changeMobileNav(false)"></div>
            <div class="container">
                  <h1><a href="">L-BLOG</a></h1>
                  <ul class="pc-nav">
                        <li class="nav-active"><a href="/">首页</a></li>
                        <li><a href="/article">文章</a></li>
                        <li><a href="/about">关于</a></li>
                  </ul>
                  <ul class="login-nav">
                        <li>
                              <a @click="loginPopup(true)">
                              <User style="width:2rem;height:2rem;float:left;"/>
                              &nbsp;&nbsp;登录</a>
                              /
                              <a href="javascript:void(0);">注册</a>
                        </li>
                  </ul>
                  <Operation class="mobile-nav-button" @click="changeMobileNav(true)" />
                  <div style="clear:both;"></div>
            </div>
      </header>
</template>

<style scoped>
</style>
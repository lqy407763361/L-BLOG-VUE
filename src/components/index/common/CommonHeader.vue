<script setup>
import {ref} from 'vue'
import CommonLogin from '@/components/index/common/CommonLogin.vue'

// 蒙版
const maskStatus = ref(true);
const closeAll = () => {
      mobileNavStatus.value = false;
      commonLoginRef.value.loginPopus(false);
      maskStatus.value = true;
}

// 侧边导航栏
const mobileNavStatus = ref(false);
const changeMobileNav = (status) => {
      mobileNavStatus.value = status;
      maskStatus.value = !status;
};

// 登录弹窗
const commonLoginRef = ref(false);
const changeLoginPopup = (status, loginType) => {
      commonLoginRef.value.loginPopus(status, loginType);
      maskStatus.value = !status;
}
</script>

<template>
      <div class="header-box">
            <nav class="mobile-nav" :class="{'mobile-nav-fadein':mobileNavStatus}">
                  <CircleClose class="close-menu" @click="changeMobileNav(false)" />
                  <div style="clear:both;"></div>
                  <ul>
                        <li class="nav-active"><a href="/">首页</a></li>
                        <li><a href="/article">文章</a></li>
                        <li><a href="/about">关于</a></li>
                        <li><a @click="changeLoginPopup(true, 'login')">登录</a>&nbsp;&nbsp;&nbsp;&nbsp;<a @click="changeLoginPopup(true, 'register')">注册</a></li>
                  </ul>
            </nav>
            <header>
                  <div class="container">
                        <h1><a href="">L-BLOG</a></h1>
                        <ul class="pc-nav">
                              <li class="nav-active"><a href="/">首页</a></li>
                              <li><a href="/article">文章</a></li>
                              <li><a href="/about">关于</a></li>
                        </ul>
                        <ul class="login-nav">
                              <li>
                                    <a @click="changeLoginPopup(true, 'login')">
                                    <User style="width:2rem;height:2rem;float:left;"/>
                                    &nbsp;&nbsp;登录</a>
                                    /
                                    <a @click="changeLoginPopup(true, 'register')">注册</a>
                              </li>
                        </ul>
                        <Operation class="mobile-nav-button" @click="changeMobileNav(true)" />
                        <div style="clear:both;"></div>
                  </div>
            </header>
            <div class="mask" :class="{'fade':maskStatus}" @click="closeAll(false)"></div>
            <CommonLogin ref="commonLoginRef" />
      </div>
</template>

<style scoped>
</style>
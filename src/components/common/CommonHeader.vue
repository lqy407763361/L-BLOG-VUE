<script setup>
import { useHead } from '@vueuse/head';
import { ref } from 'vue';
import CommonLogin from '@/components/common/CommonLogin.vue'

// SEO
useHead({
      title: 'L-BLOG',
      meta: [{ 
            name: 'L-BLOG',
            content: '我的个人博客' 
      }],
});

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

// 退出登录
// const changeLoginOut = () => {
//       alert("退出登录!");
// }
</script>

<template>
      <nav class="mobile-nav" :class="{'mobile-nav-fadein':mobileNavStatus}">
            <font-awesome-icon icon="fa-regular fa-circle-xmark" class="close-menu" @click="changeMobileNav(false)"/>
            <div style="clear:both;"></div>
            <ul>
                  <li><router-link to="/">首页</router-link></li>
                  <li><router-link to="/article">文章</router-link></li>
                  <li><router-link to="/about">关于</router-link></li>
                  <li><a @click="changeLoginPopup(true, 'login')">登录</a>&nbsp;&nbsp;&nbsp;&nbsp;<a @click="changeLoginPopup(true, 'register')">注册</a></li>
            </ul>
      </nav>
      <header>
            <div class="container">
                  <h1><router-link to="/">L-BLOG</router-link></h1>
                  <ul class="pc-nav">
                        <li :class="{'nav-active': $route.path === '/'}"><router-link to="/">首页</router-link></li>
                        <li :class="{'nav-active': $route.path.startsWith('/article')}"><router-link to="/article">文章</router-link></li>
                        <li :class="{'nav-active': $route.path === '/about'}"><router-link to="/about">关于</router-link></li>
                  </ul>
                  <ul class="login-nav">
                        <li>
                              <a @click="changeLoginPopup(true, 'login')">
                              <font-awesome-icon icon="fa-solid fa-right-to-bracket" />
                              &nbsp;&nbsp;登录</a>
                              /
                              <a @click="changeLoginPopup(true, 'register')">注册</a>
                        </li>
                        <!-- <li>
                              您好！张三
                              /
                              <a @click="changeLoginOut()">退出</a>
                        </li> -->
                  </ul>
                  <font-awesome-icon icon="fa-solid fa-bars" class="mobile-nav-button" @click="changeMobileNav(true)"/>
                  <div style="clear:both;"></div>
            </div>
      </header>
      <div class="mask" :class="{'fade':maskStatus}" @click="closeAll(false)"></div>
      <CommonLogin ref="commonLoginRef" />
</template>

<style scoped>
</style>
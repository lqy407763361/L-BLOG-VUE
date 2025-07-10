<script setup>
</script>

<template>
      <header>
            <div class="container">
                  <h1><a href="/">L-BLOG</a></h1>
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
</template>

<style scoped>
</style>
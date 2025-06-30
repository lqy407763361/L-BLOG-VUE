<script setup>
</script>

<template>
      <nav class="mobile-nav">
            <CircleClose class="close-menu"/>
            <div style="clear:both;"></div>
            <ul>
                  <li class="nav-active"><a href="/">首页</a></li>
                  <li><a href="/article">文章</a></li>
                  <li><a href="/about">关于</a></li>
                  <li><a href="javascript:void(0);">登录</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0);">注册</a></li>
            </ul>
      </nav>
      <header>
            <div class="container">
                  <h1><a href="">L-BLOG</a></h1>
                  <ul class="pc-nav">
                        <li class="nav-active"><a href="/">首页</a></li>
                        <li><a href="/article">文章</a></li>
                        <li><a href="/about">关于</a></li>
                        <component :is="currentView" />
                  </ul>
                  <ul class="login-nav">
                        <li>
                              <a href="javascript:void(0);">
                              <User style="width:2rem;height:2rem;float:left;"/>
                              &nbsp;&nbsp;登录</a>
                              /
                              <a href="javascript:void(0);">注册</a>
                        </li>
                  </ul>
                  <Operation class="mobile-nav-button"/>
                  <div style="clear:both;"></div>
            </div>
      </header>
</template>

<style scoped>
</style>
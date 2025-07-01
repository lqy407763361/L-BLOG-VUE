<script>
export default{
      data(){
            return{
                  loginText:'登录',
                  registerText:'注册',
                  mobileNavStatus:false,
                  maskFade:true
            }
      },
      methods:{
            changeMobileNav(status){
                  this.mobileNavStatus=status;
                  this.maskFade=!status;
            },
      }
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
                        <li><a href="javascript:void(0);">{{loginText}}</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0);">{{registerText}}</a></li>
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
                              <a href="javascript:void(0);">
                              <User style="width:2rem;height:2rem;float:left;"/>
                              &nbsp;&nbsp;{{loginText}}</a>
                              /
                              <a href="javascript:void(0);">{{registerText}}</a>
                        </li>
                  </ul>
                  <Operation class="mobile-nav-button" @click="changeMobileNav(true)" />
                  <div style="clear:both;"></div>
            </div>
      </header>
</template>

<style scoped>
</style>
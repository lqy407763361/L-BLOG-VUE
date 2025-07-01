<script setup>
import CommonHeader from '@/components/index/common/CommonHeader.vue'
import CommonFooter from '@/components/index/common/CommonFooter.vue'
import IndexSide from '@/components/index/index/IndexSide.vue'
</script>

<template>
      <div class="layout">
            <CommonHeader />
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

            <div class="login-popup">
                  <ul class="login-popup-tab">
                        <li class="login-tab active" data-tab="login-content"><a href=""><h3>登录</h3></a></li>
                        <li class="register-tab" data-tab="register-content"><a href=""><h3>注册</h3></a></li>
                        <div style="clear:both;"></div>
                  </ul>
                  <div class="login-popup-body">
                        <div class="login-content active">
                              <el-form :model="form" label-width="auto">
                                    <el-form-item label="账号">
                                          <el-input v-model="account" placeholder="2-10位字符长度"/>
                                    </el-form-item>
                                    <el-form-item label="密码">
                                          <el-input v-model="password" type="password" placeholder="6-12位英文/数字密码" />
                                    </el-form-item>
                                    <el-checkbox-group v-model="checkList">
                                          <el-checkbox label="30天内自动登录" value="1" />
                                          <div style="clear:both;"></div>
                                    </el-checkbox-group>
                                    <el-form-item>
                                          <el-button type="primary" @click="onSubmit">登录</el-button>
                                    </el-form-item>
                              </el-form>
                        </div>
                        <div class="register-content fade">
                              <el-form :model="form" label-width="auto">
                                    <el-form-item label="账号">
                                          <el-input v-model="account" placeholder="2-10位字符长度"/>
                                    </el-form-item>
                                    <el-form-item label="密码">
                                          <el-input v-model="password" type="password" placeholder="6-12位英文/数字密码" />
                                    </el-form-item>
                                    <el-form-item label="验证码">
                                          <el-input v-model="account" placeholder="2-10位字符长度"/>
                                    </el-form-item>
                                    <el-form-item>
                                          <el-button type="primary" @click="onSubmit">注册</el-button>
                                    </el-form-item>
                              </el-form>
                        </div>
                  </div>
            </div>

            <CommonFooter />
      </div>
</template>

<style scoped>
</style>
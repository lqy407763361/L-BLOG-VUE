<script setup>
import { ref, defineExpose } from 'vue';

const name = ref('');
const password = ref('');
const rememberPassword = ref();

// 登录弹窗
const loginPopupStatus = ref(true);
const loginTypeTab = ref();
const loginPopus = (status, loginType) => {
      loginPopupStatus.value = !status;
      loginTypeTab.value = loginType;
}
const changeLoginType = (loginType) => {
      loginTypeTab.value = loginType;
}

// 暴露方法给父组件
defineExpose({
      loginPopus
});
</script>

<template>
      <div class="login-popup" :class="{'fade':loginPopupStatus}">
            <ul class="login-popup-tab">
                  <li class="login-tab" :class="(loginTypeTab=='login') ? 'active':''"><a href="javascript:void(0);" @click="changeLoginType('login')"><h3>登录</h3></a></li>
                  <li class="register-tab" :class="(loginTypeTab=='register') ? 'active':''"><a href="javascript:void(0);" @click="changeLoginType('register')"><h3>注册</h3></a></li>
                  <div style="clear:both;"></div>
            </ul>
            <div class="login-popup-body">
                  <div class="login-content" :class="(loginTypeTab=='login') ? 'active':'fade'">
                        <el-form :model="form" label-width="auto">
                              <el-form-item label="账号">
                                    <el-input v-model="name" placeholder="2-10位字符长度"/>
                              </el-form-item>
                              <el-form-item label="密码">
                                    <el-input v-model="password" type="password" placeholder="6-12位英文/数字密码" show-password autocomplete="new-password"/>
                              </el-form-item>
                              <el-checkbox-group v-model="rememberPassword">
                                    <el-checkbox label="30天内自动登录" value="1" />
                                    <div style="clear:both;"></div>
                              </el-checkbox-group>
                              <el-form-item>
                                    <el-button type="primary" @click="onSubmit">登录</el-button>
                              </el-form-item>
                        </el-form>
                  </div>
                  <div class="register-content" :class="(loginTypeTab=='register') ? 'active':'fade'">
                        <el-form :model="form" label-width="auto">
                              <el-form-item label="账号">
                                    <el-input v-model="name" placeholder="2-10位字符长度" />
                              </el-form-item>
                              <el-form-item label="密码">
                                    <el-input v-model="password" type="password" placeholder="6-12位英文/数字密码" show-password autocomplete="new-password"/>
                              </el-form-item>
                              <el-form-item label="验证码">
                                    <el-input v-model="verifyCode"/>
                              </el-form-item>
                              <el-form-item>
                                    <el-button type="primary" @click="onSubmit">注册</el-button>
                              </el-form-item>
                        </el-form>
                  </div>
            </div>
      </div>
</template>

<style scoped>
</style>
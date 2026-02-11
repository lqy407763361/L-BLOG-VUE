<script setup>
import { ref, defineExpose, onMounted } from 'vue';
import JSEncrypt from 'jsencrypt'
import { authStore } from '@/util/authUtil'
import { userApi } from '@/api/userApi'
import { captchaApi } from '@/api/captchaApi'

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

const name = ref('');
const password = ref('');
const captchaCode = ref('');
const captchaImage = ref('');
const userRsaPublicKey = ref('');
const authStoreInstance = authStore();

//获取验证码
const refreshCaptcha = async () =>{
      const generateCaptcha = await captchaApi.generateCaptcha();
      captchaImage.value = 'data:image/png;base64,' + generateCaptcha.data;
      captchaCode.value = '';
}

//RSA加密密码
const encryptPassword = (password, rsaPublicKey) => {
      const encryptData = new JSEncrypt();
      encryptData.setPublicKey(rsaPublicKey);

      return encryptData.encrypt(password);
}

//提交表单
const submitLoginOrRegister = async (submitType) => {
      if((!name.value.trim()) || (!password.value.trim())){
            alert('请填写完整！');

            return false;
      }

      if(submitType == "login"){
            if(!captchaCode.value.trim()){
                  alert('请输入验证码！');

                  return false;
            }
      }

      try{
            if(submitType == "login"){
                  const formData = {
                        name: name.value,
                        password: encryptPassword(password.value, userRsaPublicKey.value),
                        captchaCode: captchaCode.value,
                  }
                  const authToken = await userApi.login(formData);
                  authStoreInstance.setAuth({
                        name: authToken.data.name,
                        accessToken: authToken.data.accessToken,
                        refreshToken: authToken.data.refreshToken,
                  });
            }else{
                  const formData = {
                        name: name.value,
                        password: encryptPassword(password.value, userRsaPublicKey.value),
                        registerType: 1,
                  }
                  const authToken = await userApi.register(formData);
                  authStoreInstance.setAuth({
                        name: authToken.data.name,
                        accessToken: authToken.data.accessToken,
                        refreshToken: authToken.data.refreshToken,
                  });
            }
            location.reload();
      }catch(error){
            if(error.response.status == 500){
                  alert(error.response.data.message);
            }else{
                  alert("操作失败！");
            }
            await refreshCaptcha();
      }
}

const commonLoginApi = async () => {
      //获取RSA公钥
      const getUserRsaPublicKey = await userApi.getUserRsaPublicKey();
      userRsaPublicKey.value = getUserRsaPublicKey.data;
}
//组件加载完成后再加载接口
onMounted(async () =>{
      //加载接口
      await commonLoginApi();
      await refreshCaptcha();
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
                              <el-form-item label="验证码">
                                    <el-row :gutter="30">
                                          <el-col :span="16">
                                                <el-input v-model="captchaCode"/>
                                          </el-col>
                                          <el-col :span="8">
                                                <a @click="refreshCaptcha"><img :src="captchaImage" alt="" style="width:100px;height:34px;"></a>
                                          </el-col>
                                    </el-row>
                              </el-form-item>
                              <el-form-item>
                                    <el-button type="primary" @click="submitLoginOrRegister('login')">登录</el-button>
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
                              <el-form-item>
                                    <el-button type="primary" @click="submitLoginOrRegister('register')">注册</el-button>
                              </el-form-item>
                        </el-form>
                  </div>
            </div>
      </div>
</template>

<style scoped>
</style>
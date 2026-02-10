<script setup>
import { ref, onMounted } from 'vue'
import CommonHeader from '@/components/common/CommonHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
import { aboutApi } from '@/api/aboutApi'
import { messageApi } from '@/api/messageApi'

const content = ref('');
const messageTitle = ref('');
const messageContent = ref('');

//提交表单
const saveAbout = async () => {
      try{
            const formData = {
                  title: messageTitle.value,
                  content: messageContent.value,
            }
            await messageApi.sendMessage(formData);
            alert('提交成功！');
            location.reload();
      }catch(error){
            if(error.response.status == 500){
                  alert("请先登录！");
            }else{
                  alert("提交失败！");
            }
      }
}

//获取API接口
const aboutDetail = ref({});
//文章接口
const aboutIndexApi = async () => {
      const getAboutDetail = await aboutApi.getAboutDetail();
      aboutDetail.value = getAboutDetail.data;
      content.value = aboutDetail.value.content || '';
}

//组件加载完成后再加载接口
onMounted(async () =>{
      //加载接口
      await aboutIndexApi();
});
</script>

<template>
      <CommonHeader />
      <div class="content">
            <div class="container">
                  <div class="x-placeholder"></div>
                  <div class="content-left">
                        <div class="description-box">
                              <div v-html="content"></div>
                        </div>
                        <el-form :model="form" label-position="auto">
                              <el-form-item label="标题">
                                    <el-input v-model="messageTitle" />
                              </el-form-item>
                              <el-form-item label="正文">
                                    <el-input v-model="messageContent" type="textarea" rows="10"/>
                              </el-form-item>
                              <el-form-item>
                                    <el-button type="primary" @click.prevent="saveAbout">发送</el-button>
                              </el-form-item>
                        </el-form>
                  </div>
                  <div class="content-right">
                        <div class="about-author">
                              <h2>关于作者</h2>
                              <div class="author-portrait">
                                    <a href="http://weibo.com/louqinyu" target="_blank"><img src="http://tvax3.sinaimg.cn/crop.0.0.640.640.180/005tFtr1ly8fii5pclqg2j30hs0hs0ts.jpg" alt=""></a>
                              </div>
                              <div class="author-separate">
                                    <a href="http://weibo.com/louqinyu" target="_blank"><p>废废废废导</p></a>
                                    <wb:follow-button uid="5019062503" type="red_1" style="display:block;"></wb:follow-button>	
                              </div>
                        </div>
                  </div>
                  <div style="clear:both;"></div>
            </div>
      </div>
      <CommonFooter />
</template>

<style scoped>
</style>
import httpRequest from "@/config/axiosConfig";

export const articleCategoryApi = {
    //获取文章分类列表
    async getArticleCategoryList(params = {}){
        return await httpRequest.get('/getArticleCategoryList', {params});
    },

    //获取文章分类详情
    async getArticleCategoryDetail(articleCategoryId){
        return await httpRequest.get('/getArticleCategoryDetail', {params: articleCategoryId});
    },

    //获取文章分类数量
    async getArticleCategoryTotal(){
        return await httpRequest.get('/getArticleCategoryTotal');
    }
}
import httpRequest from "@/config/axiosConfig";

export const articleApi = {
    //获取文章列表
    async getArticleList(params = {}){
        return await httpRequest.get('/getArticleList', {params});
    },

    //获取文章详情
    async getArticleDetail(articleId){
        return await httpRequest.get('/getArticleDetail', {params: articleId});
    },

    //获取文章数量
    async getArticleTotal(){
        return await httpRequest.get('/getArticleTotal');
    }
}
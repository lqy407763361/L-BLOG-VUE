import httpRequest from "@/config/axiosConfig";

export const articleApi = {
    //获取文章列表
    async getArticleList(params = {}){
        return await httpRequest.get('/getArticleList', {params});
    },

    //获取最新文章列表
    async getNewArticleList(){
        return await httpRequest.get('/getNewArticleList');
    },

    //获取热门文章列表
    async getHotArticleList(){
        return await httpRequest.get('/getHotArticleList');
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
import httpRequest from "@/config/axiosConfig";

export const articleCategoryApi = {
    //获取文章分类列表
    async getArticleCategoryList(){
        return await httpRequest.get('/getArticleCategoryList');
    }
}
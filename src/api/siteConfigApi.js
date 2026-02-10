import httpRequest from "@/config/axiosConfig";

export const siteConfigApi = {
    //获取配置详情
    async getSiteConfigDetail(){
        return await httpRequest.get('/getSiteConfigDetail');
    }
}
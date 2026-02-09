import httpRequest from "@/config/axiosConfig";

export const aboutApi = {
    //获取单页详情
    async getAboutDetail(){
        return await httpRequest.get('/getAboutDetail');
    }
}
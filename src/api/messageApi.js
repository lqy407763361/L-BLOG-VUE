import httpRequest from "@/config/axiosConfig";

export const messageApi = {
    //发送消息
    async addMessage(params = {}){
        return await httpRequest.post('/addMessage', params);
    }
}
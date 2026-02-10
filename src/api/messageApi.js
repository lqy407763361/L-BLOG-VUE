import httpRequest from "@/config/axiosConfig";

export const messageApi = {
    //发送消息
    async sendMessage(params = {}){
        return await httpRequest.post('/sendMessage', params);
    }
}
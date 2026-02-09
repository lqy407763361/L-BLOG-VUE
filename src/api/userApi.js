import httpRequest from "@/config/axiosConfig";

export const userApi = {
    //获取用户详情
    async getUserDetail(userId){
        return await httpRequest.get('/getUserDetail', {params: userId});
    },

    //登录
    async login(params = {}){
        return await httpRequest.post('/login', params);
    },

    //退出登录
    async loginOut(){
        return await httpRequest.post('/loginOut');
    },

    //获取RSA公钥
    async getUserRsaPublicKey(){
        return await httpRequest.get('/getUserRsaPublicKey');
    }
}
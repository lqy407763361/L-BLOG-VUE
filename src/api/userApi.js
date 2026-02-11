import httpRequest from "@/config/axiosConfig";

export const userApi = {
    //登录
    async login(params = {}){
        return await httpRequest.post('/login', params);
    },

    //注册
    async register(params = {}){
        return await httpRequest.post('/register', params);
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
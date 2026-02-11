import axios from "axios";

const httpRequest = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    withCredentials: true,
});

//请求拦截器
httpRequest.interceptors.request.use(function(config){
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if(accessToken && accessToken!==''){
        config.headers['accessToken'] = accessToken;
    }
    if(refreshToken && refreshToken!==''){
        config.headers['refreshToken'] = refreshToken;
    }

    return config;
});

//响应拦截器
httpRequest.interceptors.response.use(
    function(response){
        const data = response.data;
        if(data && data.code === 500){
            throw new Error(data.msg);
        }

        return data;
    },

    async function(error){
        const originalRequest = error.config;
        if(originalRequest.url === '/refreshAccessToken') {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            window.location.href = '/login';
            
            return Promise.reject(error);
        }

        //如果身份验证过期，返回401状态码
        if(error.response?.data?.code === 401 && !originalRequest._retry){
            originalRequest._retry = true;

            try{
                //刷新accessToken
                const res = await httpRequest.post('/refreshAccessToken');
                const newAccessToken = res.data;
                localStorage.setItem('accessToken', newAccessToken);

                //重试请求
                originalRequest.headers['accessToken'] = newAccessToken;

                return httpRequest(originalRequest);
            }catch(refreshError){
                //刷新失败，退出登录
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                window.location.href = '/login';

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default httpRequest
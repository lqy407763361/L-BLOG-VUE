import { defineStore } from "pinia";

export const authStore = defineStore('auth', () => {
    const setAuth = (data) => {
        localStorage.setItem('name', data.name);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
    }

    const clearAuth = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }

    const isLoggedIn = () => {
        const token = localStorage.getItem('accessToken');

        return token && token !== 'null';
    }

    return {setAuth, clearAuth, isLoggedIn}
});
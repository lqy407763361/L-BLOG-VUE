import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/components/index/index/IndexPage.vue'
import IndexSearch from '@/components/index/index/IndexSearch.vue'
import ArticleIndex from '@/components/index/article/ArticleIndex.vue'
import ArticleDetail from '@/components/index/article/ArticleDetail.vue'
import AboutIndex from '@/components/index/about/AboutIndex.vue'
import AdminRouter from '@/router/admin.js'

const routes = [
    { 
        path: '/', 
        name: 'Index', 
        component: IndexPage 
    },
    {    
        path: '/search',
        name: 'Search',
        component: IndexSearch 
    },
    { 
        path: '/article',
        name: 'Article',  
        component: ArticleIndex 
    },
    { 
        path: '/article/:id',
        name: 'ArticleDetail',  
        component: ArticleDetail,
        props: true
    },
    { 
        path: '/about',
        name: 'About',  
        component: AboutIndex,
    },
    ...AdminRouter,
]

const router = createRouter({
    history: createWebHistory (),
    routes,
})

export default router
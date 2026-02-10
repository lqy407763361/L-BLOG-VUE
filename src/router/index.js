import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/components/index/IndexPage.vue'
import IndexSearch from '@/components/index/IndexSearch.vue'
import ArticleIndex from '@/components/article/ArticleIndex.vue'
import ArticleDetail from '@/components/article/ArticleDetail.vue'
import AboutPage from '@/components/about/AboutPage.vue'
import CommonNotFound from '@/components/common/CommonNotFound.vue'

const routes = [
    { 
        path: '/', 
        name: 'Index', 
        component: IndexPage,
    },
    {    
        path: '/search',
        name: 'Search',
        component: IndexSearch,
    },
    { 
        path: '/article',
        name: 'ArticleIndex',  
        component: ArticleIndex,
    },
    { 
        path: '/article/:id',
        name: 'ArticleDetail',  
        component: ArticleDetail,
        props: true
    },
    { 
        path: '/about',
        name: 'AboutPage',  
        component: AboutPage,
    },
    { 
        path: '/:pathMatch(.*)*',
        name: 'CommonNotFound',  
        component: CommonNotFound,
    },
]

const router = createRouter({
    history: createWebHistory (),
    routes,
})

export default router
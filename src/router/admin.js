const routes = [
    { 
        path: '/admin/index',
        name: 'AdminIndex',  
        component: import('@/components/admin/index/IndexPage.vue'),
    },
    { 
        path: '/admin/test',
        name: 'AdminTest',  
        component: import('@/components/admin/index/TestPage.vue'),
    },
]

export default routes
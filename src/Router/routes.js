//import views

export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home/Home.vue')
    },
    {
        path: '/works/flyers&logos',
        name: 'Flyers',
        component: () => import('@/views/Works/Flyers/Flyers.vue')
    },
    {
        path: '/works/user-interface',
        name: 'User-Interface',
        component: () => import('@/views/Works/UI/UI.vue')
    }
    // {
    //     path: '/blog',
    //     name: 'Blog',
    //     component: () => import('@/views/Blog/Blog.vue')
    // }
]
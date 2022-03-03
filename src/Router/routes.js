//import views

export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home/Home.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About/About.vue')
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/views/Projects/Projects.vue')
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('@/views/Contacts/Contacts.vue')
    }
    // {
    //     path: '/blog',
    //     name: 'Blog',
    //     component: () => import('@/views/Blog/Blog.vue')
    // }
]
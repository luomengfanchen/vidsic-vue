import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('../views/Search.vue')
    },
    {
        path: '/video',
        name: 'Video',
        component: () => import('../views/Video.vue')
    },
    {
        path: '/video/:id',
        name: 'videoPlayer',
        component: () => import('../views/VideoPlayer.vue')
    },
    {
        path: '/music',
        name: 'Music',
        component: () => import('../views/Music.vue')
    },
    {
        path: '/music/:id',
        name: 'MusicPlayer',
        component: () => import('../views/MusicPlayer.vue')
    },
    {
        path: '/article',
        name: 'Article',
        component: () => import('../views/Article.vue')
    },
    {
        path: '/article/:id',
        name: 'ArticleRender',
        component: () => import('../views/ArticleRender.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue')
    },
    // 404页面
    {
        path: '/:w+',
        name: 'NotFound',
        component: () => import('../views/error/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

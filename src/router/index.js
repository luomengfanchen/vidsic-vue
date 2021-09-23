import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index.vue'

const routes = [
    // 公共页面
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/search/:value',
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
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue')
    },
    // 用户的页面
    {
        path: '/user/index',
        name: 'UserIndex',
        component: () => import('../views/user/Index.vue')
    },
    {
        path: '/user/upload',
        name: 'UserUpload',
        component: () => import('../views/user/Upload.vue')
    },
    {
        path: '/user/upload/article',
        name: 'UploadArticle',
        component: () => import('../views/user/UploadArticle.vue')
    },
    {
        path: '/user/upload/video',
        name: 'UploadVideo',
        component: () => import('../views/user/UploadVideo.vue')
    },
    {
        path: '/user/upload/music',
        name: 'UploadMusic',
        component: () => import('../views/user/UploadMusic.vue')
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

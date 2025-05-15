import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    meta: {
                        breadcrumb: ['Dashboard']
                    },
                    component: () => import('@/views/dashboards/Dashboard.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                },
                {
                    path: '/cms/stranky',
                    name: 'cms-stranky',
                    meta: {
                        breadcrumb: ['CMS', 'Stranky']
                    },
                    component: () => import('@/views/cms/Pages.vue')
                },
                {
                    path: '/cms/subory',
                    name: 'cms-subory',
                    meta: {
                        breadcrumb: ['CMS', 'Subory']
                    },
                    component: () => import('@/views/cms/Files.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        },
        {
            path: '/auth/register',
            name: 'register',
            component: () => import('@/views/pages/auth/Register.vue')
        },
        {
            path: '/auth/forgotpassword',
            name: 'forgotpassword',
            component: () => import('@/views/pages/auth/ForgotPassword.vue')
        },
        {
            path: '/auth/newpassword',
            name: 'newpassword',
            component: () => import('@/views/pages/auth/NewPassword.vue')
        },
        {
            path: '/auth/verification',
            name: 'verification',
            component: () => import('@/views/pages/auth/Verification.vue')
        },
        {
            path: '/auth/lockscreen',
            name: 'lockscreen',
            component: () => import('@/views/pages/auth/LockScreen.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        }
    ],
    scrollBehavior() {
        return { left: 0, top: 0 };
    }
});

export default router;

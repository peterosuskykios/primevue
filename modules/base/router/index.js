import AppLayout from '@/base/layout/AppLayout.vue';
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
                    component: () => import('@/dashboard/pages/Dashboard.vue')
                },
                {
                    path: '/cms/stranky',
                    name: 'cms-stranky',
                    meta: {
                        breadcrumb: ['CMS', 'Stránky']
                    },
                    component: () => import('@/cms/pages/Pages.vue')
                },
                {
                    path: '/cms/subory',
                    name: 'cms-subory',
                    meta: {
                        breadcrumb: ['CMS', 'Súbory']
                    },
                    component: () => import('@/cms/pages/Files.vue')
                }
            ]
        }
    ],
    scrollBehavior() {
        return { left: 0, top: 0 };
    }
});

export default router;

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
                    component: () => import('@/dashboard/pages/Dashboard.vue')
                },              
                {
                    path: '/cms/',
                    name: 'cms',
                    redirect: '/cms/stranky',
                    component: () => import('@/cms/pages/Pages.vue')
                },
                {
                    path: '/cms/stranky',
                    name: 'cms-stranky',
                    meta: {
                        breadcrumb: [
                          { label: 'CMS', path: '/cms' },
                          { label: 'Stránky', path: '/cms/stranky' }
                        ]
                    },
                    component: () => import('@/cms/pages/Pages.vue')
                },
                {
                    path: '/cms/stranky/:id',
                    name: 'cms-stranky-detail',
                    meta: {
                        breadcrumb: route => ['CMS', 'Stránky', route.params.id]
                    },
                    component: () => import('@/cms/pages/PageDetail.vue')
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

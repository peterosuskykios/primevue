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
                    name: 'e-commerce',
                    meta: {
                        breadcrumb: ['E-Commerce Dashboard']
                    },
                    component: () => import('@/views/dashboards/Ecommerce.vue')
                },
                {
                    path: '/dashboard-banking',
                    name: 'dashboard-banking',
                    meta: {
                        breadcrumb: ['Banking Dashboard']
                    },
                    component: () => import('@/views/dashboards/Banking.vue')
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
                    path: '/ecommerce/product-overview',
                    name: 'product-overview',
                    meta: {
                        breadcrumb: ['E-Commerce', 'Product Overview']
                    },
                    component: () => import('@/views/e-commerce/ProductOverview.vue')
                },
                {
                    path: '/ecommerce/product-list',
                    name: 'product-list',
                    meta: {
                        breadcrumb: ['E-Commerce', 'Product List']
                    },
                    component: () => import('@/views/e-commerce/ProductList.vue')
                },
                {
                    path: '/ecommerce/new-product',
                    name: 'new-product',
                    meta: {
                        breadcrumb: ['E-Commerce', 'New Product']
                    },
                    component: () => import('@/views/e-commerce/NewProduct.vue')
                },
                {
                    path: '/ecommerce/shopping-cart',
                    name: 'shopping-cart',
                    meta: {
                        breadcrumb: ['E-Commerce', 'Shopping Cart']
                    },
                    component: () => import('@/views/e-commerce/ShoppingCart.vue')
                },
                {
                    path: '/ecommerce/checkout-form',
                    name: 'checkout-form',
                    meta: {
                        breadcrumb: ['E-Commerce', 'Checkout Form']
                    },
                    component: () => import('@/views/e-commerce/CheckoutForm.vue')
                },
                {
                    path: '/ecommerce/order-history',
                    name: 'order-history',
                    meta: {
                        breadcrumb: ['E-Commerce', 'Order History']
                    },
                    component: () => import('@/views/e-commerce/OrderHistory.vue')
                },
                {
                    path: '/ecommerce/order-summary',
                    name: 'order-summary',
                    meta: {
                        breadcrumb: ['E-Commerce', 'Order Summary']
                    },
                    component: () => import('@/views/e-commerce/OrderSummary.vue')
                },
                {
                    path: '/profile/create',
                    name: 'user-create',
                    meta: {
                        breadcrumb: ['User Management', 'Create']
                    },
                    component: () => import('@/views/user-management/UserCreate.vue')
                },
                {
                    path: '/profile/list',
                    name: 'user-list',
                    meta: {
                        breadcrumb: ['User Management', 'List']
                    },
                    component: () => import('@/views/user-management/UserList.vue')
                },
                {
                    path: '/pages/aboutus',
                    name: 'aboutus',
                    meta: {
                        breadcrumb: ['Pages', 'About']
                    },
                    component: () => import('@/views/pages/AboutUs.vue')
                },
                {
                    path: '/pages/contact',
                    name: 'contact',
                    component: () => import('@/views/pages/ContactUs.vue')
                },
                {
                    path: '/pages/faq',
                    name: 'faq',
                    meta: {
                        breadcrumb: ['Pages', 'FAQ']
                    },
                    component: () => import('@/views/pages/Faq.vue')
                },
                {
                    path: '/pages/help',
                    name: 'help',
                    component: () => import('@/views/pages/Help.vue')
                },
                {
                    path: '/pages/invoice',
                    name: 'invoice',
                    component: () => import('@/views/pages/Invoice.vue')
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

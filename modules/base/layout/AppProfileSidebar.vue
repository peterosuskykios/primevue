<script setup>
import { useLayout } from '@/base/layout/composables/layout';

const { layoutState } = useLayout();
</script>

<template>
    <Drawer v-model:visible="layoutState.profileSidebarVisible" position="right" class="layout-profile-sidebar w-full sm:w-[25rem]">
        <div class="flex flex-col mx-auto md:mx-0">
            <span class="mb-2 font-semibold">Welcome</span>
            <span class="text-surface-500 dark:text-surface-400 font-medium mb-8">Isabella Andolini</span>

            <ul class="list-none m-0 p-0">
                <li>
                    <a class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150">
                        <span>
                            <i class="pi pi-user text-xl text-primary"></i>
                        </span>
                        <div class="ml-4">
                            <span class="mb-2 font-semibold">Profile</span>
                            <p class="text-surface-500 dark:text-surface-400 m-0">Lorem ipsum date visale</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150">
                        <span>
                            <i class="pi pi-money-bill text-xl text-primary"></i>
                        </span>
                        <div class="ml-4">
                            <span class="mb-2 font-semibold">Billing</span>
                            <p class="text-surface-500 dark:text-surface-400 m-0">Amet mimin mıollit</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150">
                        <span>
                            <i class="pi pi-cog text-xl text-primary"></i>
                        </span>
                        <div class="ml-4">
                            <span class="mb-2 font-semibold">Settings</span>
                            <p class="text-surface-500 dark:text-surface-400 m-0">Exercitation veniam</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150">
                        <span>
                            <i class="pi pi-power-off text-xl text-primary"></i>
                        </span>
                        <div class="ml-4">
                            <span class="mb-2 font-semibold">Sign Out</span>
                            <p class="text-surface-500 dark:text-surface-400 m-0">Sed ut perspiciatis</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <div class="flex flex-col mt-8 mx-auto md:mx-0">
            <span class="mb-2 font-semibold">Notifications</span>
            <span class="text-surface-500 dark:text-surface-400 font-medium mb-8">You have 3 notifications</span>

            <ul class="list-none m-0 p-0">
                <li>
                    <a class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150">
                        <span>
                            <i class="pi pi-comment text-xl text-primary"></i>
                        </span>
                        <div class="ml-4">
                            <span class="mb-2 font-semibold">Your post has new comments</span>
                            <p class="text-surface-500 dark:text-surface-400 m-0">5 min ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150">
                        <span>
                            <i class="pi pi-trash text-xl text-primary"></i>
                        </span>
                        <div class="ml-4">
                            <span class="mb-2 font-semibold">Your post has been deleted</span>
                            <p class="text-surface-500 dark:text-surface-400 m-0">15min ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150">
                        <span>
                            <i class="pi pi-folder text-xl text-primary"></i>
                        </span>
                        <div class="ml-4">
                            <span class="mb-2 font-semibold">Post has been updated</span>
                            <p class="text-surface-500 dark:text-surface-400 m-0">3h ago</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <div class="flex flex-col mt-8 mx-auto md:mx-0">
            <span class="mb-2 font-semibold">Messages</span>
            <span class="text-surface-500 dark:text-surface-400 font-medium mb-8">You have new messages</span>

            <ul class="list-none m-0 p-0">
                <li>
                    <a class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150">
                        <span> <img src="/demo/images/avatar/circle/avatar-m-8.png" alt="Avatar" class="w-8 h-8" /> </span>
                        <div class="ml-4">
                            <span class="mb-2 font-semibold">James Robinson</span>
                            <p class="text-surface-500 dark:text-surface-400 m-0">10 min ago</p>
                        </div>
                        <Badge value="3" class="ml-auto"></Badge>
                    </a>
                </li>
                <li>
                    <a class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150">
                        <span> <img src="/demo/images/avatar/circle/avatar-f-8.png" alt="Avatar" class="w-8 h-8" /> </span>
                        <div class="ml-4">
                            <span class="mb-2 font-semibold">Mary Watson</span>
                            <p class="text-surface-500 dark:text-surface-400 m-0">15min ago</p>
                        </div>
                        <Badge value="1" class="ml-auto"></Badge>
                    </a>
                </li>
                <li>
                    <a class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150">
                        <span> <img src="/demo/images/avatar/circle/avatar-f-4.png" alt="Avatar" class="w-8 h-8" /> </span>
                        <div class="ml-4">
                            <span class="mb-2 font-semibold">Aisha Webb</span>
                            <p class="text-surface-500 dark:text-surface-400 m-0">3h ago</p>
                        </div>
                        <Badge value="2" class="ml-auto"></Badge>
                    </a>
                </li>
            </ul>
        </div>
    </Drawer>
</template>

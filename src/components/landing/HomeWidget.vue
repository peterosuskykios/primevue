<script setup>
import { useLayout } from '@/layout/composables/layout';

const { isDarkTheme } = useLayout();
</script>

<template>
    <div id="home" class="grid grid-cols-12 gap-4 grid-nogutter justify-between items-center mb-12 py-12 md:mb-20 md:py-20">
        <div class="col-span-12 md:col-span-4 flex flex-col gap-6 order-1 md:order-none items-center md:items-start text-center md:text-left">
            <span class="block text-surface-900 dark:text-surface-0 font-bold text-4xl">Modern, stylish and clean</span>
            <span class="block text-surface-700 dark:text-surface-100 text-lg">The ultimate collection of design-agnostic, flexible and accessible UI Components.</span>
            <ul class="flex flex-wrap gap-8 list-none p-0">
                <li class="flex items-center">
                    <div class="p-1 rounded-full bg-green-400 inline-block mr-2"></div>
                    <span class="text-surface-900 dark:text-surface-0 font-semibold">Javascript</span>
                </li>
                <li class="flex items-center">
                    <div class="p-1 rounded-full bg-green-400 inline-block mr-2"></div>
                    <span class="text-surface-900 dark:text-surface-0 font-semibold">TypeScript</span>
                </li>
                <li class="flex items-center">
                    <div class="p-1 rounded-full bg-green-400 inline-block mr-2"></div>
                    <span class="text-surface-900 dark:text-surface-0 font-semibold">Vue</span>
                </li>
            </ul>
            <Button type="button" label="Live Preview" icon="pi pi-arrow-right" iconPos="right" class="w-48" outlined></Button>
        </div>

        <div class="col-span-12 md:col-span-7 order-none md:order-1 mb-12 md:mb-0 rounded">
            <img :src="`/demo/images/landing/${isDarkTheme ? 'dashboard-dark' : 'dashboard-light'}.png`" alt="" class="w-full h-full rounded shadow animate-duration-1000 animate-fadeinright" />
        </div>
    </div>
</template>

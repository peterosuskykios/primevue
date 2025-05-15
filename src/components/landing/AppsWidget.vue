<script setup>
import { useLayout } from '@/layout/composables/layout';

const { isDarkTheme } = useLayout();
</script>

<template>
    <div id="apps" class="my-12 md:my-20">
        <span class="text-surface-900 dark:text-surface-0 block font-bold text-5xl mb-6 text-center">Apps</span>
        <span class="text-surface-700 dark:text-surface-100 block text-xl mb-20 text-center leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</span>

        <div class="flex flex-col lg:flex-row items-center justify-between mt-20 gap-20">
            <div class="flex flex-col items-center">
                <img :src="`/demo/images/landing/${isDarkTheme ? 'chat-dark' : 'chat-light'}.png`" alt="chat" class="w-full h-full rounded border-surface-200 dark:border-surface-700 shadow animate-duration-500 animate-scalein origin-top" />
                <span class="block text-surface-900 dark:text-surface-0 text-lg font-semibold mt-6">Chat</span>
            </div>
            <div class="flex flex-col items-center">
                <img :src="`/demo/images/landing/${isDarkTheme ? 'mail-dark' : 'mail-light'}.png`" alt="chat" class="w-full h-full rounded border-surface-200 dark:border-surface-700 shadow animate-duration-500 animate-scalein origin-top" />
                <span class="block text-surface-900 dark:text-surface-0 text-lg font-semibold mt-6">Mail</span>
            </div>
        </div>
    </div>
</template>

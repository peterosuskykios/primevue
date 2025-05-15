<script setup>
import { computed } from 'vue';

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
});

const lastmessage = computed(() => {
    return props.user.messages[props.user.messages.length - 1].text;
});
</script>

<template>
    <div
        class="flex flex-nowrap flex-shrink-0 justify-between items-center border border-surface-200 dark:border-surface-700 rounded p-4 cursor-pointer select-none hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
        tabindex="0"
    >
        <div class="flex items-center">
            <div class="relative md:mr-4 flex-shrink-0">
                <img :src="'/demo/images/avatar/' + user.image" alt="user" class="w-12 h-12 rounded-full shadow-lg" />
                <span
                    class="w-4 h-4 rounded-full border-2 border-surface-200 dark:border-surface-700 absolute"
                    :class="{ 'bg-green-400': user.status === 'active', 'bg-red-400': user.status === 'busy', 'bg-yellow-400': user.status === 'away' }"
                    style="bottom: 2px; right: 2px"
                ></span>
            </div>
            <div class="flex-col hidden md:flex">
                <span class="text-surface-900 dark:text-surface-0 font-semibold block">{{ user.name }}</span>
                <span class="block text-surface-600 dark:text-surface-200 text-ellipsis overflow-hidden whitespace-nowrap w-40 text-sm">{{ lastmessage }}</span>
            </div>
        </div>
        <span class="text-surface-700 dark:text-surface-100 font-semibold ml-auto hidden md:inline">{{ user.lastSeen }}</span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import AppSubMenu from './AppSubMenu.vue';

const model = ref([
    {
        label: 'Domov',
        icon: 'pi pi-home',
        items: [
            {
                label: 'Dashboard',
                icon: 'pi pi-fw pi-home',
                to: '/'
            }
        ]
    },
    {
        label: 'CMS',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Stránky',
                icon: 'pi pi-fw pi-list',
                to: '/cms/stranky'
            },
            {
                label: 'Súbory',
                icon: 'pi pi-fw pi-plus',
                to: '/cms/subory'
            }
        ]
    }
]);
</script>

<template>
    <AppSubMenu :model="model" />
</template>

<style lang="scss" scoped></style>

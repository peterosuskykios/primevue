<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const breadcrumbRoutes = ref([]);

function setBreadcrumbRoutes() {
    const metaCrumbs = route.meta.breadcrumb;

    if (Array.isArray(metaCrumbs)) {
        breadcrumbRoutes.value = metaCrumbs.map(item =>
            typeof item === 'string'
                ? { label: item, path: '/' + item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') }
                : { label: item.label, path: item.path }
        );
    } else if (typeof metaCrumbs === 'function') {
        const crumbs = metaCrumbs(route);
        breadcrumbRoutes.value = crumbs.map((label, index) => ({
            label,
            path: '/' + crumbs.slice(0, index + 1)
                .map(c => c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
                .join('/')
        }));
    } else {
        // fallback
        breadcrumbRoutes.value = route.fullPath
            .split('/')
            .filter((item) => item !== '')
            .map((item, index, array) => ({
                label: item.charAt(0).toUpperCase() + item.slice(1),
                path: '/' + array.slice(0, index + 1).join('/')
            }));
    }
}

watch(
    route,
    () => {
        setBreadcrumbRoutes();
    },
    { immediate: true }
);
</script>

<template>
    <nav class="layout-breadcrumb">
        <ol class="flex gap-2 items-center">
            <template v-for="(breadcrumb, i) in breadcrumbRoutes" :key="breadcrumb.path">
                <li v-if="i !== breadcrumbRoutes.length - 1">
                    <RouterLink :to="breadcrumb.path" class="text-blue-600 hover:underline">
                        {{ breadcrumb.label }}
                    </RouterLink>
                </li>
                <li v-else class="font-semibold text-gray-900">
                    {{ breadcrumb.label }}
                </li>
                <li v-if="i !== breadcrumbRoutes.length - 1" class="layout-breadcrumb-chevron">/</li>
            </template>
        </ol>
    </nav>
</template>

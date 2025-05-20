<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const breadcrumbRoutes = ref([]);

function setBreadcrumbRoutes() {
    const metaCrumbs = route.meta.breadcrumb;

    if (typeof metaCrumbs === 'function') {
        breadcrumbRoutes.value = metaCrumbs(route);
    } else if (Array.isArray(metaCrumbs)) {
        breadcrumbRoutes.value = metaCrumbs.map((item) => {
            return item === 'Detail' && route.params.id ? route.params.id : item;
        });
    } else {
        // fallback – generate breadcrumbs from path
        breadcrumbRoutes.value = route.fullPath
            .split('/')
            .filter((item) => item !== '')
            .filter((item) => isNaN(Number(item)))
            .map((item) => item.charAt(0).toUpperCase() + item.slice(1));
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
        <ol>
            <template v-for="(breadcrumbRoute, i) in breadcrumbRoutes" :key="breadcrumbRoute">
                <li>{{ breadcrumbRoute }}</li>
                <li v-if="i !== breadcrumbRoutes.length - 1" class="layout-breadcrumb-chevron">/</li>
            </template>
        </ol>
    </nav>
</template>

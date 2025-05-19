<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import pagesJson from '@/assets/pages.json';

const route = useRoute();
const page = ref(null);

onMounted(() => {
    page.value = pagesJson.find(p => p.url === route.params.id);
});
</script>

<template>
    <div class="p-4">
        <h2 class="text-2xl font-bold mb-4">Detail stránky</h2>
        <div v-if="page">
            <p><strong>Názov:</strong> {{ page.title }}</p>
            <p><strong>URL:</strong> {{ page.url }}</p>
            <p><strong>Typ:</strong> {{ page.type }}</p>
            <p><strong>Nadradená stránka:</strong> {{ page.parent }}</p>
            <p><strong>Koncept:</strong> {{ page.draft ? 'Áno' : 'Nie' }}</p>
        </div>
        <div v-else>
            <p>Stránka nebola nájdená.</p>
        </div>
    </div>
</template>

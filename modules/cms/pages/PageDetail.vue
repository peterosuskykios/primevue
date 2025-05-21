<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
// import { Editor } from '@/assets/layout/Configurations';
import pagesJson from '@/assets/pages.json';

defineProps<{ id: string }>();

// Reaktívne hodnoty
const router = useRouter();
const route = useRoute();
const page = ref(pagesJson.find(p => p.url === route.params.id) ?? {});
const textSk = ref(page.value.textSk || '');
const textEn = ref(page.value.textEn || '');

onMounted(() => {
  if (route.params.id === 'new') {
    page.value = {
      url: '',
      title: '',
      type: '',
      parent: '',
      textSk: '',
      textEn: '',
      draft: false
    };
  } else {
    const existing = pagesJson.find(p => p.url === route.params.id);
    page.value = existing ?? {};
    textSk.value = page.value.textSk || '';
    textEn.value = page.value.textEn || '';
  }
});

function onCancel() {
  router.back();
}

function onSave() {
  // Sem by išla logika na uloženie
  console.log('Ukladám stránku:', {
    ...page.value,
    textSk: textSk.value,
    textEn: textEn.value
  });
  router.back(); // alebo toast notifikácia atď.
}
</script>
<template>
    <div class="page-header flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Detail stránky</h1>
      <div class="flex gap-2">
        <Button label="Zrušiť" class="secondary" @click="onCancel" />
        <Button label="Uložiť" class="primary" @click="onSave" />
      </div>
    </div>
  
    <div class="page-content">
      <div class="grid gap-4">
        <div class="col-12">
          <label class="block font-semibold mb-1">Názov</label>
          <InputText v-model="page.title" class="w-full" />
        </div>
  
        <div class="col-12">
          <label class="block font-semibold mb-1">URL</label>
          <InputText v-model="page.url" class="w-full" />
        </div>
  
        <div class="col-12">
          <label class="block font-semibold mb-1">Typ</label>
          <InputText v-model="page.type" class="w-full" />
        </div>
  
        <div class="col-12">
          <label class="block font-semibold mb-1">Nadradená stránka</label>
          <InputText v-model="page.parent" class="w-full" />
        </div>
  
        <div class="col-12">
          <label class="block font-semibold mb-1">Text SK</label>
          <InputText v-model="page.parent" class="w-full" />
        </div>
  
        <div class="col-12">
          <label class="block font-semibold mb-1">Text EN</label>
          <InputText v-model="page.parent" class="w-full" />
        </div>
      </div>
    </div>
  </template>
  
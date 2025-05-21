<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import pagesJson from '@/assets/test_CmsPageDto.json';

const router = useRouter();
const route = useRoute();

const page = ref<any>({});
const textSk = ref('');
const textEn = ref('');
const showAudit = ref(false);

const PAGE_TYPES = [
  { label: 'Manuály', value: 'MANUALS' },
  { label: 'Ochrana súkromia', value: 'PRIVACY' },
  { label: 'Prístupnosť', value: 'ACCESSIBILITY' },
  { label: 'Kontakt', value: 'CONTACT' }
];

onMounted(() => {
  if (route.params.id === 'new') {
    page.value = {
      url: '',
      titleSk: '',
      titleEn: '',
      pageType: 'MANUALS',
      textSk: '',
      textEn: '',
      audit: {}
    };
  } else {
    const existing = pagesJson.find(p => p.id === Number(route.params.id));
    page.value = existing ?? {};
    textSk.value = page.value.textSk || '';
    textEn.value = page.value.textEn || '';
  }
});

function onCancel() {
  router.back();
}

function onSave() {
  console.log('Ukladám stránku:', {
    ...page.value,
    textSk: textSk.value,
    textEn: textEn.value
  });
  router.back();
}

function formatDate(iso: string | undefined): string {
  if (!iso) return '—';
  const date = new Date(iso);
  return date.toLocaleString('sk-SK', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

</script>

<template>
    <div class="page-header flex justify-between items-center mb-4">
      <div class="flex items-center gap-2">
        <h1 class="text-2xl font-bold">Detail stránky</h1>
        <Button icon="pi pi-info-circle" severity="secondary" text rounded @click="showAudit = true" />
      </div>
      <div class="flex gap-2">
        <Button label="Zrušiť" class="secondary" @click="onCancel" />
        <Button label="Uložiť" class="primary" @click="onSave" />
      </div>
    </div>
  
    <div class="page-content">
      <div class="grid gap-4">
        <div class="col-12">
          <label class="block font-semibold mb-1">Názov SK</label>
          <InputText v-model="page.titleSk" class="w-full" />
        </div>
  
        <div class="col-12">
          <label class="block font-semibold mb-1">Názov EN</label>
          <InputText v-model="page.titleEn" class="w-full" />
        </div>
  
        <div class="col-12">
          <label class="block font-semibold mb-1">URL</label>
          <InputText v-model="page.url" class="w-full" />
        </div>
  
        <div class="col-12">
          <label class="block font-semibold mb-1">Typ stránky</label>
          <Select v-model="page.pageType" :options="PAGE_TYPES" optionLabel="label" optionValue="value" class="w-full" />
        </div>
  
        <div class="col-12">
          <label class="block font-semibold mb-1">Text SK</label>
          <Textarea v-model="textSk" autoResize class="w-full" rows="5" />
        </div>
  
        <div class="col-12">
          <label class="block font-semibold mb-1">Text EN</label>
          <Textarea v-model="textEn" autoResize class="w-full" rows="5" />
        </div>
      </div>
    </div>
  
    <!-- Dialóg s audit informáciami -->
    <Dialog v-model:visible="showAudit" header="Audit informácie" modal>
      <div class="space-y-2">
        <p><strong>Vytvoril:</strong> {{ page.audit?.createdBy || '—' }}</p>
        <p><strong>Dátum vytvorenia:</strong> {{ formatDate(page.audit?.created) || '—' }}</p>
        <p><strong>Upravil:</strong> {{ page.audit?.modifiedBy || '—' }}</p>
        <p><strong>Dátum úpravy:</strong> {{ formatDate(page.audit?.modified) || '—' }}</p>
      </div>
    </Dialog>
  </template>
  
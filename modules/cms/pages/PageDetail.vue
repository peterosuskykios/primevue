<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
// @ts-ignore
import pagesJson from '@/assets/test_CmsPageDto.json';
// @ts-ignore
import AuditPanel from '@/cms/components/AuditOverlayPanel.vue';

const router = useRouter();
const route = useRoute();

const page = ref<any>({});
const textSk = ref('');
const textEn = ref('');

const auditPanelRef = ref<InstanceType<typeof AuditPanel>>();

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

function onShowAudit(event: Event) {
  auditPanelRef.value?.toggle(event);
}
</script>

<template>
    <div class="page-header flex justify-between items-center mb-4">
      <div class="flex items-center gap-2">
        <h1 class="text-2xl font-bold">Detail stránky</h1>
        <Button icon="pi pi-info-circle" severity="secondary" text rounded @click="onShowAudit" />
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
    <AuditPanel ref="auditPanelRef" :audit="page.audit" />
  </template>
  
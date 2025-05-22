  <script setup lang="ts">
  import { computed, ref, watch, defineExpose } from 'vue';
  import InputText from 'primevue/inputtext';
  
  const props = defineProps<{
    audit: {
      createdBy?: string;
      created?: string;
      modifiedBy?: string;
      modified?: string;
    } | undefined;
  }>();
  
  const panel = ref<InstanceType<typeof OverlayPanel>>();
  const contentLength = ref('20rem');
  
  const createdDate = computed(() =>
    props.audit?.created ? new Date(props.audit.created) : undefined
  );
  const modifiedDate = computed(() =>
    props.audit?.modified ? new Date(props.audit.modified) : undefined
  );
  
  watch(() => props.audit, (audit) => {
    if (!audit) return;
  
    const values = [audit.createdBy, audit.modifiedBy, audit.created, audit.modified]
      .filter(Boolean)
      .map((v) => String(v));
  
    const longest = values.reduce((a, b) => (a.length > b.length ? a : b), '');
  
    const span = document.createElement('span');
    span.style.position = 'absolute';
    span.style.whiteSpace = 'nowrap';
    span.innerText = longest;
    document.body.appendChild(span);
    contentLength.value = `${span.clientWidth + 75}px`;
    document.body.removeChild(span);
  });
  
  function toggle(event: Event) {
    panel.value?.toggle(event);
  }

  defineExpose({ toggle });

  </script>

<template>
    <Popover ref="panel" :dismissable="true" :base-z-index="1004" :style="{ width: contentLength }">
      <h3 class="mb-2 text-lg font-semibold">Audit informácie</h3>
      <div class="flex flex-col gap-3">
        <div>
          <label class="font-medium">Vytvoril</label>
          <InputText :model-value="audit?.createdBy || '—'" class="w-full" disabled readonly />
        </div>
        <div>
          <label class="font-medium">Dátum vytvorenia</label>
          <DatePicker :model-value="createdDate" class="w-full" show-time disabled readonly />
        </div>
        <div>
          <label class="font-medium">Upravil</label>
          <InputText :model-value="audit?.modifiedBy || '—'" class="w-full" disabled readonly />
        </div>
        <div>
          <label class="font-medium">Dátum úpravy</label>
          <DatePicker :model-value="modifiedDate" class="w-full" show-time disabled readonly />
        </div>
      </div>
    </Popover>
  </template>
  
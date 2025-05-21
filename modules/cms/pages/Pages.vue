<script setup>
import { FilterMatchMode } from '@primevue/core/api';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';
import pagesJson from '@/assets/pages.json'

import { useRouter } from 'vue-router';
const router = useRouter();

function editProduct(prod) {
    router.push({ name: 'cms-stranky-detail', params: { id: prod.url } });
}

onMounted(() => {
    products.value = pagesJson.map((page) => ({
    id: page.url,
    name: page.title,
    url: page.url,
    type: page.type,
    parent: page.parent,
    draft: page.draft
    }));
});

const dt = ref();
const products = ref();
const selectedProducts = ref();
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});

function openNew() {
    router.push({ name: 'cms-stranky-detail', params: { id: 'new' } });
}

</script>

<template>
    <div>
        <div class="page-header flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold">Detail stránky</h1>
            <div class="flex gap-2">
                <Button label="Novy" class="secondary" @click="openNew" />
        </div>
    </div>
        <div class="card">
            <DataTable
                ref="dt"
                v-model:selection="selectedProducts"
                :value="products"
                dataKey="id"
                :paginator="true"
                :rows="10"
                :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            >
                <template #header>
                    <div class="flex flex-wrap gap-2 items-center justify-between">
                        <h1 class="m-0">Manage Products</h1>
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </IconField>
                    </div>
                </template>

                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column field="name" header="Názov stránky" sortable style="min-width: 12rem"></Column>
                <Column field="url" header="URL" sortable style="min-width: 16rem"></Column>
                <Column field="type" header="Typ stránky" sortable style="min-width: 16rem"></Column>
                <Column field="parent" header="Nadradená stránka" sortable style="min-width: 16rem"></Column>
                <Column field="draft" header="Koncept" sortable style="min-width: 16rem"></Column>
                <Column :exportable="false" style="min-width: 12rem">
                    <template #body="slotProps">
                        <Button outlined rounded class="mr-2" @click="editProduct(slotProps.data)">Upraviť</Button>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

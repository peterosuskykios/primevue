<script setup>
import { ProductService } from '@/service/ProductService';
import { FilterMatchMode } from '@primevue/core/api';
import { onMounted, ref } from 'vue';

const products = ref([]);

const salesTableRef = ref(null);

const filterSalesTable = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});

function formatCurrency(value) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function exportCSV() {
    salesTableRef.value.exportCSV();
}

function getBadgeSeverity(inventoryStatus) {
    switch (inventoryStatus.toLowerCase()) {
        case 'instock':
            return 'success';
        case 'lowstock':
            return 'warn';
        case 'outofstock':
            return 'danger';
        default:
            return 'info';
    }
}

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
});
</script>

<template>
    <div class="card">
        <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-4 md:mb-0">Recent Sales</div>
            <div class="inline-flex items-center">
                <IconField>
                    <InputIcon class="pi pi-search" />
                    <InputText type="text" v-model="filterSalesTable.global.value" placeholder="Search" :style="{ borderRadius: '2rem' }" class="w-full" />
                </IconField>
                <Button icon="pi pi-upload" class="mx-4 export-target-button" rounded v-tooltip="'Export'" @click="exportCSV"></Button>
            </div>
        </div>
        <DataTable ref="salesTableRef" :value="products" dataKey="id" paginator :rows="5" v-model:filters="filterSalesTable">
            <template #empty> No products found.</template>
            <Column field="name" header="Name" sortable :headerStyle="{ minWidth: '12rem' }">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
            </Column>
            <Column field="category" header="Category" sortable :headerStyle="{ minWidth: '10rem' }">
                <template #body="{ data }">
                    {{ data.category }}
                </template>
            </Column>
            <Column field="price" header="Price" sortable :headerStyle="{ minWidth: '10rem' }">
                <template #body="{ data }">
                    {{ formatCurrency(data.price) }}
                </template>
            </Column>
            <Column field="inventoryStatus" header="Status" sortable :headerStyle="{ minWidth: '10rem' }">
                <template #body="{ data }">
                    <Tag :severity="getBadgeSeverity(data.inventoryStatus)">{{ data.inventoryStatus }}</Tag>
                </template>
            </Column>
            <Column class="text-center">
                <template #body>
                    <Button type="button" icon="pi pi-search" outlined rounded></Button>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ProductService } from '@/service/ProductService';
import { onMounted, ref } from 'vue';

const products = ref([]);

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
});
</script>

<template>
    <div class="card h-full">
        <div class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-4">Top Products</div>
        <ul class="list-none p-0 m-0">
            <template v-for="(product, i) in products" :key="{ i }">
                <li v-if="i < 6" class="flex items-center justify-between p-4">
                    <div class="inline-flex items-center">
                        <img :src="`/demo/images/product/${product.image}`" :alt="product.name" width="75" class="shadow flex-shrink-0" />
                        <div class="flex flex-col ml-4">
                            <span class="font-medium text-lg mb-1">{{ product.name }}</span>
                            <Rating v-model="product.rating" readonly :cancel="false"></Rating>
                        </div>
                    </div>
                    <span class="ml-auto font-semibold text-xl p-text-secondary">${{ product.price }}</span>
                </li>
            </template>
        </ul>
    </div>
</template>

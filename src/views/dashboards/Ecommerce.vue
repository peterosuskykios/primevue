<script setup>
import RecentSalesWidget from '@/components/dashboard/ecommerce/RecentSalesWidget.vue';
import RevenueOverviewWidget from '@/components/dashboard/ecommerce/RevenueOverviewWidget.vue';
import SalesByCategoryWidget from '@/components/dashboard/ecommerce/SalesByCategoryWidget.vue';
import StatsEcommerceWidget from '@/components/dashboard/ecommerce/StatsEcommerceWidget.vue';
import TopProductsWidget from '@/components/dashboard/ecommerce/TopProductsWidget.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-8">
        <StatsEcommerceWidget />
        <div class="col-span-12 xl:col-span-9">
            <RevenueOverviewWidget />
        </div>
        <div class="col-span-12 xl:col-span-3">
            <SalesByCategoryWidget />
        </div>
        <div class="col-span-12 lg:col-span-7">
            <RecentSalesWidget />
        </div>
        <div class="col-span-12 lg:col-span-5">
            <TopProductsWidget />
        </div>
    </div>
</template>

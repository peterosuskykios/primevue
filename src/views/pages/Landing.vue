<script setup>
import AppsWidget from '@/components/landing/AppsWidget.vue';
import FeaturesWidget from '@/components/landing/FeaturesWidget.vue';
import FooterWidget from '@/components/landing/FooterWidget.vue';
import HomeWidget from '@/components/landing/HomeWidget.vue';
import PricingWidget from '@/components/landing/PricingWidget.vue';
import TopbarWidget from '@/components/landing/TopbarWidget.vue';
import AppConfig from '@/layout/AppConfig.vue';
</script>

<template>
    <div class="relative overflow-hidden flex flex-col justify-center">
        <div class="bg-circle opacity-50" :style="{ top: '-200px', left: '-700px' }"></div>
        <div class="bg-circle hidden lg:flex" :style="{ top: '50px', right: '-800px', transform: 'rotate(60deg)' }"></div>
        <div class="landing-wrapper">
            <TopbarWidget />
            <div class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 z-20">
                <HomeWidget />
                <AppsWidget />
                <PricingWidget />
                <FeaturesWidget />
                <FooterWidget />
            </div>
        </div>
    </div>
    <AppConfig simple />
</template>

<style scoped>
.bg-circle {
    width: 1000px;
    height: 1000px;
    border-radius: 50%;
    background-image: linear-gradient(140deg, var(--primary-color), var(--surface-ground) 80%);
    position: absolute;
    opacity: 0.25;
    z-index: -1;
}
</style>

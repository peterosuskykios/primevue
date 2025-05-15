<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ref } from 'vue';

const { layoutConfig } = useLayout();

const name = ref('');
const email = ref('');
const message = ref('');
const content = ref([
    { icon: 'pi pi-fw pi-phone', title: 'Phone', info: '1 (833) 597-7538' },
    { icon: 'pi pi-fw pi-map-marker', title: 'Our Head Office', info: 'Churchill-laan 16 II, 1052 CD, Amsterdam' },
    { icon: 'pi pi-fw pi-print', title: 'Fax', info: '3 (833) 297-1548' }
]);
</script>

<template>
    <div class="grid grid-cols-12 gap-4 card grid-nogutter" style="column-gap: 2rem; row-gap: 2rem">
        <div class="col-span-12">
            <p class="text-surface-900 dark:text-surface-0 font-bold">Contact Us</p>
        </div>
        <div class="col-span-12 mt-4 h-80 border border-surface-200 dark:border-surface-700 p-0 w-full bg-cover rounded" :style="{ backgroundImage: `url('/demo/images/contact/map-${layoutConfig.darkTheme ? 'dark' : 'light'}.svg')` }"></div>
        <div class="col-span-12 mt-8">
            <div class="flex gap-4 px-2 flex-col md:flex-row" :style="{ columnGap: '2rem', rowGap: '2rem' }">
                <div v-for="(item, i) in content" :key="i" class="md:w-1/3 flex flex-col justify-center text-center items-center border border-surface-200 dark:border-surface-700 py-8 px-6 rounded">
                    <i class="pi pi-fw !text-2xl text-primary" :class="item.icon"></i>
                    <span class="text-surface-900 dark:text-surface-0 font-bold mt-6 mb-1">{{ item.title }}</span>
                    <span class="text-surface-500 dark:text-surface-300">{{ item.info }}</span>
                </div>
            </div>
        </div>

        <div class="col-span-12 mt-8">
            <p class="text-surface-900 dark:text-surface-0 font-bold">Send Us Email</p>
            <div class="grid gap-4 flex-col md:flex-row grid-nogutter mt-12" :style="{ rowGap: '2rem', columnGap: '2rem' }">
                <div class="col-span-6 flex flex-col">
                    <label for="name" class="block text-surface-500 font-bold"> Name </label>
                    <IconField class="mt-2" :style="{ height: '3.5rem' }">
                        <InputIcon class="pi pi-user" :style="{ left: '1.5rem' }" />
                        <InputText id="name" type="text" v-model="name" placeholder="Name" class="w-full !pl-16 text-surface-900 dark:text-surface-0 font-semibold" :style="{ height: '3.5rem' }" />
                    </IconField>
                </div>

                <div class="col-span-6 flex flex-col">
                    <label for="email" class="block text-surface-500 font-bold"> Email Address </label>
                    <IconField class="mt-2" :style="{ height: '3.5rem' }">
                        <InputIcon class="pi pi-envelope" :style="{ left: '1.5rem' }" />
                        <InputText type="text" v-model="email" placeholder="Email" class="w-full !pl-16 text-surface-900 dark:text-surface-0 font-semibold" :style="{ height: '3.5rem' }" />
                    </IconField>
                </div>

                <div class="col-span-12 flex flex-col">
                    <label for="message" class="block text-surface-500 font-bold"> Message </label>
                    <Textarea id="message" :rows="5" :cols="30" v-model="message" class="mt-2 text-surface-900 dark:text-surface-0 font-semibold" />
                    <Button class="ml-auto mt-4 rounded" label="Send Message"></Button>
                </div>
            </div>
        </div>
    </div>
</template>

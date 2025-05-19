<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'dashboard'
});

const text = ref('hello dashboard');

console.log('Dashboard mounted');


</script>

<template>
    <div class="card">
        <h1>Hello user, this is dashboard from modules folder</h1>
        <input v-model="text" class="p-inputtext p-component mb-3" />
    
        <p class="text-base text-color-secondary mb-3 line-height-3 p-3 border-round surface-100">
        {{ text }}
        </p>
    </div>
</template>

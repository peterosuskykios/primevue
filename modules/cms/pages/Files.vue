<script setup>
import { ref } from 'vue';


defineOptions({
  name: 'files'
});

const text = ref('hello files');
</script>

<template>
    <div class="card">
        <h1>Files</h1>
        <p>Here you can manage your files.</p>
        <p>Upload, delete, and organize your files as needed.</p>
        <p>Use the sidebar to navigate through different sections.</p>


        <input v-model="text" />
        <p>{{ text }}</p>
    </div>
</template>

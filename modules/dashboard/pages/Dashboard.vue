<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'dashboard'
});

const text = ref('try to save me');

console.log('Dashboard mounted');


</script>

<template>
    <Card>
      <template #title>Dashboard Card</template>
      <template #subtitle>KeepAlive example</template>
      <template #content>
       <Textarea v-model="text" size="small" placeholder="Small" rows="3" />
        <Textarea v-model="text" placeholder="Normal" rows="3" />
       <Textarea v-model="text" size="large" placeholder="Large" rows="3" />
      </template>

    </Card>
</template>

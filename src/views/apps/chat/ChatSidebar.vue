<script setup>
import { ref, watch } from 'vue';
import UserCard from './UserCard.vue';

const emit = defineEmits(['change:active:user']);

const props = defineProps({
    users: {
        type: Array,
        default: () => []
    }
});

const filteredUsers = ref([]);
const searchedUser = ref('');

watch(
    () => props.users,
    (newUsers) => {
        filteredUsers.value = newUsers;
    },
    { immediate: true }
);

function onChangeActiveUser(user) {
    emit('change:active:user', user);
}

async function filter() {
    if (searchedUser.value === '') {
        filteredUsers.value = props.users;

        return;
    }

    const filteredArr = filteredUsers.value.filter((user) => user.name.toLowerCase().includes(searchedUser.value.toLowerCase()));

    filteredUsers.value = [...filteredArr];
}
</script>

<template>
    <div class="flex flex-col items-center border-b border-surface-200 dark:border-surface-700 p-12">
        <img src="/demo/images/avatar/circle/avatar-f-1@2x.png" class="w-24 h-24 rounded-full shadow-lg" alt="Asiya Javayant" />
        <span class="text-surface-900 dark:text-surface-0 text-xl font-semibold mt-6">Asiya Javayant</span>
    </div>
    <div class="w-full flex gap-y-6 flex-col border-surface-200 dark:border-surface-700 p-6">
        <IconField class="w-full">
            <InputIcon class="pi pi-search" />
            <InputText id="search" type="text" placeholder="Search" class="w-full" v-model="searchedUser" @input="filter" />
        </IconField>
        <div class="flex gap-6 md:flex-col overflow-x-auto md:overflow-x-visible">
            <UserCard v-for="user in filteredUsers" :key="user" :user="user" @click="onChangeActiveUser(user)"></UserCard>
        </div>
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import ChatBox from './ChatBox.vue';
import ChatSidebar from './ChatSidebar.vue';

const activeUserId = ref(1);
const users = ref([]);

onMounted(async () => {
    users.value = await getUserData();
    scrollToLastMessage();
});

async function getUserData() {
    const response = await fetch('/demo/data/chat.json');
    const { data } = await response.json();

    return data;
}

function changeActiveUser(user) {
    activeUserId.value = user.id;
    scrollToLastMessage();
}

function sendMessage(message) {
    const activeUser = findActiveUser();
    activeUser.messages.push(message);
    scrollToLastMessage();
}

function findActiveUser() {
    return users.value.find((user) => user.id === activeUserId.value) || {};
}

async function scrollToLastMessage() {
    const element = document.querySelector('.user-message-container');

    await nextTick(() => {
        element.scroll({ top: element.scrollHeight });
    });
}
</script>

<template>
    <div class="flex flex-col md:flex-row gap-8" style="min-height: 81vh">
        <div class="md:w-[25rem] card p-0">
            <ChatSidebar @change:active:user="changeActiveUser" :users="users"></ChatSidebar>
        </div>
        <div class="flex-1 card p-0">
            <ChatBox @send:message="sendMessage" :user="findActiveUser()"></ChatBox>
        </div>
    </div>
</template>

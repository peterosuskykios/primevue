<script setup>
import { ref } from 'vue';

const emit = defineEmits(['checkbox:change', 'delete:task', 'open:edit:dialog']);
defineProps({
    title: {
        type: String,
        required: true
    },
    taskList: {
        type: Array,
        required: true
    }
});
const menu = ref(null);
const clickedTask = ref(null);
const menuItems = ref([
    {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: function () {
            onEdit();
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: function () {
            handleDelete();
        }
    }
]);

function onEdit() {
    emit('open:edit:dialog', clickedTask.value);
}

function handleDelete() {
    emit('delete:task', clickedTask.value);
}

function parseDate(timestamp) {
    return new Date(timestamp).toTimeString().split(':').slice(0, 2).join(':');
}

function onCheckboxChange(task) {
    emit('checkbox:change', task);
}

function toggleMenu(event, i, task) {
    clickedTask.value = task;

    menu.value[i].toggle(event);
}
</script>

<template>
    <div class="text-surface-900 dark:text-surface-0 font-semibold text-lg mt-8 mb-4 border-b border-surface-200 dark:border-surface-700 py-4">{{ title }}</div>
    <ul class="list-none p-0 m-0">
        <li v-for="(task, i) in taskList" :key="task" class="flex flex-col gap-4 md:flex-row md:items-center p-2 border-b border-surface-200 dark:border-surface-700">
            <div class="flex items-center flex-1">
                <Checkbox binary @change="onCheckboxChange(task)" v-model="task.completed" :inputId="task.id?.toString()"></Checkbox>
                <label class="font-medium whitespace-nowrap text-ellipsis overflow-hidden ml-2" :class="{ 'line-through': task.completed }" style="max-width: 500px">{{ task.name }}</label>
            </div>
            <div class="flex flex-1 gap-4 flex-col sm:flex-row sm:justify-between">
                <div class="flex items-center">
                    <span v-if="task.comments" class="flex items-center font-semibold mr-4"><i class="pi pi-comment mr-2"></i>{{ task.comments }}</span>
                    <span v-if="task.attachments" class="flex items-center font-semibold mr-4"><i class="pi pi-paperclip mr-2"></i>{{ task.attachments }}</span>
                    <span class="flex items-center font-semibold whitespace-nowrap" v-if="task.startDate"><i class="pi pi-clock mr-2"></i>{{ parseDate(task.startDate) }}</span>
                </div>
                <div class="flex items-center sm:justify-end">
                    <div class="mr-4">
                        <AvatarGroup v-if="task.members?.length > 0">
                            <Avatar v-for="member in task.members.slice(0, 4)" :key="member" :image="'/demo/images/avatar/' + member.image" size="large" shape="circle"></Avatar>
                            <Avatar
                                v-if="task && task.members && task.members.length > 4"
                                :label="`+${task.members.length - 4}`"
                                shape="circle"
                                size="large"
                                class="bg-blue-500"
                                :style="{ color: '#212121', border: '2px solid var(--surface-border)' }"
                            ></Avatar>
                        </AvatarGroup>
                    </div>
                    <Button type="button" icon="pi pi-ellipsis-v" class="z-30 ml-auto sm:ml-0" text rounded @click="toggleMenu($event, i, task)"></Button>
                    <Menu ref="menu" popup :model="menuItems" class="w-32"></Menu>
                </div>
            </div>
        </li>
    </ul>
</template>

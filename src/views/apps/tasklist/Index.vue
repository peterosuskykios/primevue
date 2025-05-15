<script setup>
import { useToast } from 'primevue/usetoast';
import { onBeforeMount, ref } from 'vue';
import CreateTaskDialog from './CreateTaskDialog.vue';
import List from './List.vue';

const toast = useToast();

const taskList = ref([]);
const todo = ref([]);
const completed = ref([]);
const dialogConfig = ref({
    visible: false,
    task: null
});
const selectedTask = ref(null);

onBeforeMount(async () => {
    taskList.value = await getTasks();

    categorize(taskList.value);
});

async function getTasks() {
    const response = await fetch('/demo/data/tasks.json');
    const { data } = await response.json();

    return data;
}

function categorize(tasks) {
    todo.value = tasks.filter((task) => task.completed !== true);
    completed.value = tasks.filter((task) => task.completed);
}

function onCheckboxChange(updatedTask) {
    taskList.value.find((task) => task.id === updatedTask.id).completed = updatedTask.completed;

    categorize(taskList.value);
}

function onDeleteTask(deletedTask) {
    taskList.value = taskList.value.filter((task) => task.id !== deletedTask.id);

    categorize(taskList.value);
}

function openEditDialog(task) {
    dialogConfig.value.visible = true;
    dialogConfig.value.header = 'Edit Task';

    selectedTask.value = task;
}

function openCreateDialog() {
    dialogConfig.value.visible = true;
    dialogConfig.value.header = 'Create Task';

    selectedTask.value = null;
}

function onCloseDialog() {
    dialogConfig.value.visible = false;
}

function onSaveDialog(task) {
    if (task) {
        taskList.value = taskList.value.filter((t) => t.id !== task.id);

        taskList.value.push(task);
        toast.add({ severity: 'success', summary: 'Edited', detail: `Task "${task.name}" edited successfully.`, life: 3000 });
    } else {
        taskList.value.push(task);
        toast.add({ severity: 'success', summary: 'Success', detail: `Task "${task.name}" created successfully.`, life: 3000 });
    }

    categorize(taskList.value);

    dialogConfig.value.visible = false;
}
</script>

<template>
    <div class="card">
        <div class="flex justify-between items-center mb-8">
            <span class="text-surface-900 dark:text-surface-0 text-xl font-semibold">Task List</span>
            <Button class="font-semibold" outlined icon="pi pi-plus" label="Create Task" @click="openCreateDialog()"></Button>
        </div>
        <List :task-list="todo" title="ToDo" @checkbox:change="onCheckboxChange" @delete:task="onDeleteTask" @open:edit:dialog="openEditDialog"></List>
        <List :task-list="completed" title="Completed" @checkbox:change="onCheckboxChange" @delete:task="onDeleteTask" @open:edit:dialog="openEditDialog"></List>
    </div>

    <Dialog :header="dialogConfig.header || ''" v-model:visible="dialogConfig.visible" modal class="mx-4 sm:mx-0 sm:w-full md:w-8/12 lg:w-6/12" contentClass="rounded-b border-t border-surface-200 dark:border-surface-700 p-0">
        <CreateTaskDialog :selected-task="selectedTask" @close="onCloseDialog()" @save="onSaveDialog"></CreateTaskDialog>
    </Dialog>
</template>

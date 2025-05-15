<script setup>
import { onMounted, ref } from 'vue';

const emit = defineEmits(['close', 'save']);

const props = defineProps({
    selectedTask: {
        type: Object,
        default: null
    }
});
const task = ref({});
const filteredMembers = ref([]);

onMounted(() => {
    if (props.selectedTask) {
        task.value = props.selectedTask;
    }
});

async function getMembers() {
    const response = await fetch('/demo/data/members.json');
    const { data } = await response.json();

    return data;
}

function onHide() {
    emit('close', task.value);
}

function onSave() {
    emit('save', task.value);
}

async function filterMembers(event) {
    const members = await getMembers();

    if (!event.query) return [];

    filteredMembers.value = members.filter((member) => member.name.toLowerCase().indexOf(event.query.toLowerCase()) === 0);
}
</script>

<template>
    <div class="p-6">
        <Fluid class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
                <label for="name" class="text-surface-900 dark:text-surface-0 font-semibold block mb-2">Task Name</label>
                <InputText id="name" type="text" placeholder="Title" v-model="task.name" />
            </div>
            <div class="col-span-12">
                <label for="description" class="text-surface-900 dark:text-surface-0 font-semibold block mb-2">Description</label>
                <Editor
                    v-model="task.description"
                    :pt="{
                        root: { style: { height: '150px' }, class: 'mb-16' }
                    }"
                ></Editor>
            </div>
            <div class="col-span-6">
                <label for="start" class="text-surface-900 dark:text-surface-0 font-semibold block mb-2">Start Date</label>
                <DatePicker dateFormat="yy-mm-dd" :show-time="false" inputId="start" placeholder="Start Date" v-model="task.startDate"></DatePicker>
            </div>
            <div class="col-span-6">
                <label for="end" class="text-surface-900 dark:text-surface-0 font-semibold block mb-2">Due Date</label>
                <DatePicker dateFormat="yy-mm-dd" :show-time="false" inputId="end" placeholder="End Date" v-model="task.endDate"></DatePicker>
            </div>
            <div class="col-span-12">
                <label for="members" class="text-surface-900 dark:text-surface-0 font-semibold block mb-2">Add Team Member</label>
                <AutoComplete inputId="members" v-model="task.members" :suggestions="filteredMembers" optionLabel="name" multiple @complete="filterMembers($event)" :inputStyle="{ height: '2.5rem' }">
                    <template #chip="{ value }">
                        <div class="flex items-center">
                            <img :src="'/demo/images/avatar/' + value.image" :alt="value.name" class="h-8 w-8 mr-2" />
                            <span class="text-surface-900 dark:text-surface-0 font-medium">{{ value.name }}</span>
                        </div>
                    </template>
                    <template #option="{ option }">
                        <div class="flex items-center">
                            <img :src="'/demo/images/avatar/' + option.image" :alt="option.name" class="h-8 w-8 mr-2" />
                            <span class="text-surface-900 dark:text-surface-0 font-medium">{{ option.name }}</span>
                        </div>
                    </template>
                </AutoComplete>
            </div>

            <div class="col-span-12 flex justify-end mt-6">
                <Button class="w-32 mr-4" outlined icon="pi pi-times" label="Cancel" @click="onHide()"></Button>
                <Button class="w-32" icon="pi pi-check" label="Save" @click="onSave()"></Button>
            </div>
        </Fluid>
    </div>
</template>

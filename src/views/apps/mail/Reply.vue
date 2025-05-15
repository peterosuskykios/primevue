<script setup>
import { onMounted, ref, watch } from 'vue';

const content = ref({});
const newMail = ref({});

const emit = defineEmits(['save', 'update:dialogVisible']);
const props = defineProps({
    dialogVisible: {
        type: Boolean,
        default: false
    },
    mailDetail: {
        type: Object,
        default: null
    }
});

const displayMessage = ref(false);
const localDialogVisible = ref(false);

onMounted(() => {
    updateContent();
});

watch(
    () => props.mailDetail,
    () => {
        updateContent();
    }
);

function updateContent() {
    content.value = { ...props.mailDetail };
}

function sendMail() {
    const replyMail = setMailAction();

    emit('save', replyMail);
}

function setMailAction() {
    return {
        ...content.value,
        ...newMail.value,
        id: generateId(),
        to: props.mailDetail.to || props.mailDetail.from,
        sent: true,
        archived: false,
        trash: false,
        spam: false,
        starred: false,
        important: false,
        date: generateDate()
    };
}

function toggleMessage() {
    displayMessage.value = !displayMessage.value;
}

function generateId() {
    let text = '';
    let possible = '0123456789';

    for (let i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function generateDate() {
    return new Date().toDateString().split(' ').slice(1, 4).join(' ');
}

watch(
    () => props.dialogVisible,
    (newValue) => {
        localDialogVisible.value = newValue;
    }
);
watch(
    () => localDialogVisible.value,
    (newValue) => {
        emit('update:dialogVisible', newValue);
    }
);
</script>

<template>
    <Dialog v-model:visible="localDialogVisible" header="New Message" modal class="mx-4 sm:mx-0 sm:w-full md:w-8/12 lg:w-6/12" contentClass="rounded-b border-t border-surface-200 dark:border-surface-700 p-0">
        <div class="p-0 m-0">
            <div class="bg-surface-0 dark:bg-surface-950 grid grid-cols-12 grid-nogutter flex-col md:flex-row gap-12 p-8 rounded">
                <div class="col-span-6">
                    <label for="to" class="block text-surface-900 dark:text-surface-0 font-semibold mb-4">To</label>
                    <IconField class="w-full" style="height: 3.5rem">
                        <InputIcon class="pi pi-user" style="left: 1.5rem" />
                        <InputText id="to" type="text" fluid class="!pl-16 text-surface-900 dark:text-surface-0 font-semibold" style="height: 3.5rem" v-model="content.from" />
                    </IconField>
                </div>
                <div class="col-span-6">
                    <label for="Subject" class="block text-surface-900 dark:text-surface-0 font-semibold mb-4">Subject</label>
                    <IconField class="w-full" style="height: 3.5rem">
                        <InputIcon class="pi pi-pencil" style="left: 1.5rem" />
                        <InputText id="subject" type="text" fluid placeholder="Subject" class="!pl-16 text-surface-900 dark:text-surface-0 font-semibold" style="height: 3.5rem" v-model="content.title" />
                    </IconField>
                </div>
                <div v-if="displayMessage" class="col-span-12">
                    <div class="border border-surface-200 dark:border-surface-700 rounded p-6">{{ content.message }}</div>
                </div>
                <div class="col-span-12">
                    <span class="bg-surface-50 dark:bg-surface-950 cursor-pointer rounded px-2" @click="toggleMessage()" v-tooltip="displayMessage ? 'Hide content' : 'Show content'"><i class="pi pi-ellipsis-h"></i></span>
                    <Editor :editorStyle="{ height: '250px' }" class="mt-4" v-model="newMail.message"></Editor>
                </div>
            </div>
            <div class="flex gap-x-4 justify-end p-8 border-t border-surface-200 dark:border-surface-700">
                <Button type="button" outlined icon="pi pi-image"></Button>
                <Button type="button" outlined icon="pi pi-paperclip"></Button>
                <Button type="button" class="h-12" icon="pi pi-send" label="Send" @click="sendMail()"></Button>
            </div>
        </div>
    </Dialog>
</template>

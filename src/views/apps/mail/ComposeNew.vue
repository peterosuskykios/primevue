<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
    inheritAttrs: false
});

const emit = defineEmits(['new:mail']);
const router = useRouter();
const newMail = ref({});

function goBack() {
    router.push({ name: 'mail-inbox' });
}

function sendMail() {
    const mail = {
        ...newMail.value,
        id: generateId(),
        sent: true,
        archived: false,
        trash: false,
        spam: false,
        starred: false,
        important: false,
        date: generateDate(),
        image: 'avatar.png'
    };

    emit('new:mail', mail);
    router.push({ name: 'mail-inbox' });
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
</script>

<template>
    <div class="flex items-center px-6 md:px-0 border-t border-surface-200 dark:border-surface-700 md:border-0 pt-6 md:pt-0">
        <Button type="button" icon="pi pi-chevron-left" class="border-surface-200 dark:border-surface-700 text-surface-900 dark:text-surface-0 w-12 h-12 mr-4" outlined severity="secondary" @click="goBack()"></Button>
        <span class="block text-surface-900 dark:text-surface-0 font-bold text-xl">Compose Message</span>
    </div>
    <div class="bg-surface-0 dark:bg-surface-950 grid gap-4 mt-6 grid-nogutter p-6 md:border-surface-200 dark:md:border-surface-700 md:border rounded">
        <div class="col-span-12">
            <label for="to" class="text-surface-900 dark:text-surface-0 font-semibold">To</label>
            <IconField style="height: 3.5rem" class="mt-4">
                <InputIcon class="pi pi-user" style="left: 1.5rem" />
                <InputText id="to" type="text" v-model="newMail.to" class="!pl-16 text-surface-900 dark:text-surface-0 font-semibold" fluid style="height: 3.5rem" />
            </IconField>
        </div>
        <div class="col-span-12">
            <label for="Subject" class="text-surface-900 dark:text-surface-0 font-semibold">Subject</label>
            <IconField style="height: 3.5rem" class="mt-4">
                <InputIcon class="pi pi-pencil" style="left: 1.5rem" />
                <InputText id="subject" type="text" v-model="newMail.title" placeholder="Subject" class="!pl-16 text-surface-900 dark:text-surface-0 font-semibold" fluid style="height: 3.5rem" />
            </IconField>
        </div>
        <div class="col-span-12">
            <Editor v-model="newMail.message" editorStyle=" height: 250px "></Editor>
        </div>
        <div class="col-span-12 flex gap-x-4 justify-end mt-16">
            <Button type="button" class="h-12 w-full sm:w-auto" icon="pi pi-send" label="Send Message" @click="sendMail()"></Button>
        </div>
    </div>
</template>

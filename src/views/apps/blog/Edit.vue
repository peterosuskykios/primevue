<script setup>
import { ref } from 'vue';

const tags = ref(['Software', 'Web']);
const fileUploaderRef = ref(null);
const uploadFiles = ref([]);

function onChooseUploadFiles() {
    fileUploaderRef.value.choose();
}

function onSelectedFiles(event) {
    uploadFiles.value = event.files;
}

function onRemoveFile(removeFile) {
    uploadFiles.value = uploadFiles.value.filter((file) => file.name !== removeFile.name);
}
</script>

<template>
    <div class="card">
        <span class="block text-surface-900 dark:text-surface-0 font-bold text-xl mb-6">Create a new post</span>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 lg:col-span-8">
                <FileUpload
                    ref="fileUploaderRef"
                    name="demo[]"
                    accept="image/*"
                    customUpload
                    multiple
                    auto
                    :maxFileSize="1000000"
                    @select="onSelectedFiles"
                    :pt="{
                        root: { class: 'border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 p-0 rounded mb-6' },
                        buttonbar: { class: 'hidden' },
                        removeButton: { class: 'flex' }
                    }"
                >
                    <template v-if="uploadFiles.length > 0" #content>
                        <div class="h-80 m-1 rounded">
                            <div v-for="file in uploadFiles" :key="file.name" class="w-full h-full relative rounded p-0" :style="{ cursor: 'copy' }">
                                <div class="remove-file-wrapper h-full relative border-4 border-transparent rounded hover:bg-primary hover:text-primary-contrast duration-100 cursor-auto" :style="{ padding: '1px' }">
                                    <img :src="file.objectURL" :alt="file.name" class="w-full h-full rounded" />
                                    <Button icon="pi pi-times" class="remove-button text-sm absolute justify-center items-center cursor-pointer" rounded :style="{ top: '-10px', right: '-10px', display: 'none' }" @click="onRemoveFile(file)"></Button>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template #empty>
                        <div v-if="uploadFiles.length < 1" class="h-80 m-1 rounded">
                            <div @click="onChooseUploadFiles" class="flex flex-col w-full h-full justify-center items-center cursor-pointer" :style="{ cursor: 'copy' }">
                                <i class="pi pi-fw pi-file text-4xl text-primary"></i>
                                <span class="block font-semibold text-surface-900 dark:text-surface-0 text-lg mt-4">Drop or select a cover image</span>
                            </div>
                        </div>
                    </template>
                </FileUpload>
                <Fluid class="flex flex-col">
                    <div class="mb-6 mt-4">
                        <InputText type="text" placeholder="Title" />
                    </div>
                    <div class="mb-6">
                        <Textarea rows="6" placeholder="Content" autoResize></Textarea>
                    </div>

                    <Editor editorStyle="height: 320px"></Editor>
                </Fluid>
            </div>
            <div class="col-span-12 lg:col-span-4">
                <div class="border border-surface-200 dark:border-surface-700 rounded mb-6">
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Publish</span>
                    <div class="p-4">
                        <div class="bg-surface-100 dark:bg-surface-700 p-4 flex items-center rounded">
                            <span class="text-surface-900 dark:text-surface-0 font-semibold mr-4">Status:</span>
                            <span class="font-medium">Draft</span>
                            <Button type="button" icon="pi pi-fw pi-pencil" class="ml-auto" text rounded></Button>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="bg-surface-100 dark:bg-surface-700 p-4 flex items-center rounded">
                            <span class="text-surface-900 dark:text-surface-0 font-semibold mr-4">Visibility:</span>
                            <span class="font-medium">Private</span>
                            <Button type="button" icon="pi pi-fw pi-pencil" class="ml-auto" text rounded></Button>
                        </div>
                    </div>
                </div>
                <div class="border border-surface-200 dark:border-surface-700 rounded mb-6">
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Tags</span>
                    <div class="p-4 flex gap-2"><Chip v-for="(tag, i) in tags" :key="i" :label="tag"></Chip></div>
                </div>
                <Fluid class="border border-surface-200 dark:border-surface-700 rounded mb-6">
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Meta</span>
                    <div class="p-4">
                        <div class="mb-6">
                            <InputText type="text" placeholder="Title" />
                        </div>
                        <div><Textarea rows="6" placeholder="Description" autoResize></Textarea></div>
                    </div>
                </Fluid>
                <div class="flex justify-between gap-4">
                    <Button class="flex-1" severity="danger" outlined label="Discard" icon="pi pi-fw pi-trash"></Button>
                    <Button class="flex-1" label="Publish" icon="pi pi-fw pi-check"></Button>
                </div>
            </div>
        </div>
    </div>
</template>

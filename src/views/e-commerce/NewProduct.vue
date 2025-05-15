<script setup>
import { ref } from 'vue';

const colorOptions = ref([
    { name: 'Black', background: 'bg-gray-900' },
    { name: 'Orange', background: 'bg-orange-500' },
    { name: 'Navy', background: 'bg-blue-500' }
]);
const product = ref({
    name: '',
    price: '',
    code: '',
    sku: '',
    status: 'Draft',
    tags: ['Nike', 'Sneaker'],
    category: 'Sneakers',
    colors: [],
    stock: 'Sneakers',
    inStock: true,
    description: '',
    images: []
});
const selectedCategory = ref(null);
const selectedStock = ref(null);
const categoryOptions = ['Sneakers', 'Apparel', 'Socks'];
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

function toggleColor(color) {
    const index = product.value.colors.indexOf(color);
    if (index > -1) {
        product.value.colors.splice(index, 1);
    } else {
        product.value.colors.push(color);
    }
}

function onRemoveTags(tag) {
    product.value.tags = product.value.tags.filter((t) => t !== tag);
}
</script>

<template>
    <div class="card">
        <span class="block text-surface-900 dark:text-surface-0 font-bold text-xl mb-6">Create Product</span>
        <Fluid class="grid grid-cols-12 gap-4 flex-wrap">
            <div class="col-span-12 lg:col-span-8">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12">
                        <InputText type="text" placeholder="Product Name" v-model="product.name" />
                    </div>
                    <div class="col-span-12 lg:col-span-4">
                        <InputText type="text" placeholder="Price" label="Price" v-model="product.price" />
                    </div>
                    <div class="col-span-12 lg:col-span-4">
                        <InputText type="text" placeholder="Product Code" label="Product Code" v-model="product.code" />
                    </div>
                    <div class="col-span-12 lg:col-span-4">
                        <InputText type="text" placeholder="Product SKU" label="SKU" v-model="product.sku" />
                    </div>
                    <div class="col-span-12">
                        <Editor editorStyle="height: 320px" />
                    </div>
                    <div class="col-span-12 mt-4">
                        <FileUpload
                            ref="fileUploaderRef"
                            id="files-fileupload"
                            name="demo[]"
                            accept="image/*"
                            customUpload
                            multiple
                            auto
                            class="border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 p-0 rounded"
                            :maxFileSize="1000000"
                            @select="onSelectedFiles"
                            :pt="{
                                header: { class: '!hidden' },
                                root: { style: { backgroundColor: 'rgba(255, 255, 255, 0.05)' } }
                            }"
                        >
                            <template v-if="uploadFiles.length > 0" #content>
                                <div class="h-80 m-1 rounded">
                                    <div v-for="file in uploadFiles" :key="file.name" class="w-full h-full relative rounded p-0" :style="{ cursor: 'copy' }">
                                        <div class="remove-file-wrapper h-full relative border-4 border-transparent rounded duration-100 cursor-auto">
                                            <img :src="file.objectURL" :alt="file.name" class="w-full h-full rounded object-contain" />
                                            <Button icon="pi pi-times" class="remove-button !text-sm absolute cursor-pointer" rounded :style="{ top: '-10px', right: '-10px', display: 'none' }" @click="onRemoveFile(file)" />
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template #empty>
                                <div v-if="uploadFiles.length < 1" class="h-80 m-1 rounded">
                                    <div @click="onChooseUploadFiles" class="flex flex-col w-full h-full justify-center items-center cursor-pointer" :style="{ cursor: 'copy' }">
                                        <i class="pi pi-fw pi-file text-4xl text-primary" />
                                        <span class="block font-semibold text-surface-900 dark:text-surface-0 text-lg mt-4">Drop or select a cover image</span>
                                    </div>
                                </div>
                            </template>
                        </FileUpload>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-4 flex flex-col gap-y-4">
                <div class="border border-surface-200 dark:border-surface-700 rounded">
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Publish</span>
                    <div class="p-4">
                        <div class="bg-surface-100 py-2 px-4 flex items-center rounded">
                            <span class="text-black/90 font-bold mr-4">Status:</span>
                            <span class="text-black/60 font-semibold">Draft</span>
                            <Button type="button" icon="pi pi-fw pi-pencil" class="ml-auto" text rounded />
                        </div>
                    </div>
                </div>

                <div class="border border-surface-200 dark:border-surface-700 rounded">
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Tags</span>
                    <div class="p-4 flex flex-wrap gap-1">
                        <Chip
                            v-for="(tag, i) in product.tags"
                            :key="i"
                            :label="tag"
                            class="mr-2 py-2 px-4 text-surface-900 dark:text-surface-0 font-bold bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700"
                            style="border-radius: 20px"
                        >
                            <span class="mr-4">{{ tag }}</span>
                            <span class="flex items-center justify-center border border-surface-200 dark:border-surface-700 bg-gray-100 rounded-full cursor-pointer" :style="{ width: '1.5rem', height: '1.5rem' }" @click="onRemoveTags(tag)">
                                <i class="pi pi-fw pi-times text-black/60" :style="{ fontSize: '9px' }" /> </span
                        ></Chip>
                    </div>
                </div>

                <div class="border border-surface-200 dark:border-surface-700 rounded">
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Category</span>
                    <div class="p-4">
                        <Select :options="categoryOptions" v-model="selectedCategory" placeholder="Select a category" />
                    </div>
                </div>

                <div class="border border-surface-200 dark:border-surface-700 rounded">
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Colors</span>
                    <div class="p-4 flex">
                        <div
                            v-for="(color, i) in colorOptions"
                            :key="i"
                            class="w-8 h-8 mr-2 border border-surface-200 dark:border-surface-700 rounded-full cursor-pointer flex justify-center items-center"
                            :class="color.background"
                            @click="toggleColor(color.name)"
                        >
                            <i v-if="product.colors.includes(color.name)" :key="i" class="pi pi-check text-sm text-white z-50" />
                        </div>
                    </div>
                </div>

                <div class="border border-surface-200 dark:border-surface-700 rounded">
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Stock</span>
                    <div class="p-4">
                        <Select :options="categoryOptions" v-model="selectedStock" placeholder="Select stock" />
                    </div>
                </div>
                <div class="border border-surface-200 dark:border-surface-700 flex justify-between items-center px-4 rounded">
                    <span class="text-surface-900 dark:text-surface-0 font-bold p-4">In stock</span>
                    <ToggleSwitch v-model="product.inStock" />
                </div>
                <div class="flex justify-between gap-4">
                    <Button class="flex-1" severity="danger" outlined label="Discard" icon="pi pi-fw pi-trash" />
                    <Button class="flex-1" label="Publish" icon="pi pi-fw pi-check" />
                </div>
            </div>
        </Fluid>
    </div>
</template>

<style scoped lang="scss">
.remove-file-wrapper:hover {
    .remove-button {
        display: flex !important;
    }
}
</style>

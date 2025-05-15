<script setup>
import { ref } from 'vue';

const countries = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);
const selectedCountry = ref(null);
</script>

<template>
    <div class="card">
        <span class="text-surface-900 dark:text-surface-0 text-xl font-bold mb-6 block">Create User</span>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 lg:col-span-2">
                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-4">Profile</div>
                <p class="m-0 p-0 text-surface-600 dark:text-surface-200 leading-normal mr-4">Odio euismod lacinia at quis risus sed vulputate odio.</p>
            </div>
            <div class="col-span-12 lg:col-span-10">
                <div class="grid grid-cols-12 gap-4">
                    <div class="mb-6 col-span-12">
                        <label for="nickname" class="font-medium text-surface-900 dark:text-surface-0"> Nickname </label>
                        <InputText id="nickname" type="text" fluid />
                    </div>
                    <div class="mb-6 col-span-12 flex flex-col items-start">
                        <label for="avatar" class="font-medium text-surface-900 dark:text-surface-0"> Avatar </label>
                        <FileUpload mode="basic" name="avatar" customUpload accept="image/*" :maxFileSize="1000000" chooseLabel="Upload Image" class="p-button-outlined p-button-plain w-unset"></FileUpload>
                    </div>
                    <div class="mb-6 col-span-12">
                        <label for="bio" class="font-medium text-surface-900 dark:text-surface-0"> Bio </label>
                        <Textarea id="bio" type="text" :rows="5" autoResize fluid></Textarea>
                    </div>
                    <div class="mb-6 col-span-12 md:col-span-6">
                        <label for="email" class="font-medium text-surface-900 dark:text-surface-0"> Email </label>
                        <InputText id="email" type="text" fluid />
                    </div>
                    <div class="mb-6 col-span-12 md:col-span-6">
                        <label for="country" class="font-medium text-surface-900 dark:text-surface-0"> Country </label>
                        <Select v-model="selectedCountry" :options="countries" optionLabel="name" filter fluid placeholder="Select a Country" showClear>
                            <template #value="slotProps">
                                <div class="flex items-center" v-if="slotProps.value">
                                    <span :class="`mr-2 flag flag-${selectedCountry.code.toLowerCase()}`" style="width: 18px; height: 12px" />
                                    <div>{{ slotProps.value.name }}</div>
                                </div>
                                <span v-else>
                                    {{ slotProps.placeholder }}
                                </span>
                            </template>
                            <template #option="slotProps">
                                <div class="flex items-center">
                                    <span :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px; height: 12px" />
                                    <div>{{ slotProps.option.name }}</div>
                                </div>
                            </template>
                        </Select>
                    </div>
                    <div class="mb-6 col-span-12 md:col-span-6">
                        <label for="city" class="font-medium text-surface-900 dark:text-surface-0"> City </label>
                        <InputText id="city" type="text" fluid />
                    </div>
                    <div class="mb-6 col-span-12 md:col-span-6">
                        <label for="state" class="font-medium text-surface-900 dark:text-surface-0"> State </label>
                        <InputText id="state" type="text" fluid />
                    </div>
                    <div class="mb-6 col-span-12">
                        <label for="website" class="font-medium text-surface-900 dark:text-surface-0"> Website </label>
                        <InputGroup>
                            <InputGroupAddon> www </InputGroupAddon>
                            <InputText id="website" type="text" fluid />
                        </InputGroup>
                    </div>
                    <div class="col-span-12">
                        <Button label="Create User" class="w-auto mt-4"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CountryService } from '@/service/CountryService';
import { onMounted, ref } from 'vue';

const value = ref('');
const quantities = ref([1, 1, 1]);
const checked = ref(true);
const checked2 = ref(true);
const selectedCountry = ref(null);
const countries = ref([]);

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});
</script>

<template>
    <div class="card">
        <div class="grid grid-cols-12 gap-4 grid-nogutter">
            <div class="col-span-12 px-6 mt-6 md:mt-12 md:px-12">
                <span class="text-surface-900 dark:text-surface-0 block font-bold text-xl">Checkout</span>
            </div>
            <div class="col-span-12 lg:col-span-6 h-full px-6 py-6 md:px-12">
                <ul class="flex list-none flex-wrap p-0 mb-12">
                    <li class="flex items-center text-primary mr-2">Cart <i class="pi pi-chevron-right text-surface-500 dark:text-surface-300 text-xs ml-2"></i></li>
                    <li class="flex items-center text-surface-500 dark:text-surface-300 mr-2">Information<i class="pi pi-chevron-right text-surface-500 dark:text-surface-300 text-xs ml-2"></i></li>
                    <li class="flex items-center text-surface-500 dark:text-surface-300 mr-2">Shipping<i class="pi pi-chevron-right text-surface-500 dark:text-surface-300 text-xs ml-2"></i></li>
                    <li class="flex items-center text-surface-500 dark:text-surface-300 mr-2">Payment</li>
                </ul>
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12 mb-12">
                        <span class="text-surface-900 dark:text-surface-0 text-2xl block font-medium mb-8">Contact Information</span>
                        <input id="email" placeholder="Email" type="text" class="p-inputtext w-full mb-6" />
                        <div class="flex items-center">
                            <Checkbox name="checkbox-1" v-model="checked" binary inputId="checkbox-1"></Checkbox>
                            <label class="ml-2" for="checkbox-1">Email me with news and offers</label>
                        </div>
                    </div>
                    <div class="col-span-12 mb-6">
                        <span class="text-surface-900 dark:text-surface-0 text-2xl block font-medium mb-8">Shipping</span>
                        <Select :options="countries" v-model="selectedCountry" placeholder="Country / Region" optionLabel="name" showClear class="w-full"></Select>
                    </div>
                    <div class="col-span-12 lg:col-span-6 mb-6">
                        <input id="name" placeholder="Name" type="text" class="p-inputtext w-full" />
                    </div>
                    <div class="col-span-12 lg:col-span-6 mb-6">
                        <input id="lastname" placeholder="Last Name" type="text" class="p-inputtext w-full" />
                    </div>
                    <div class="col-span-12 mb-6">
                        <input id="address" placeholder="Address" type="text" class="p-inputtext w-full" />
                    </div>
                    <div class="col-span-12 mb-6">
                        <input id="address2" placeholder="Apartment, suite, etc" type="text" class="p-inputtext w-full" />
                    </div>
                    <div class="col-span-12 lg:col-span-6 mb-6">
                        <input id="pc" placeholder="Postal Code" type="text" class="p-inputtext w-full" />
                    </div>
                    <div class="col-span-12 lg:col-span-6 mb-6">
                        <input id="city" placeholder="City" type="text" class="p-inputtext w-full" />
                    </div>
                    <div class="col-span-12 lg:col-span-6 mb-6">
                        <div class="flex items-center">
                            <Checkbox name="checkbox-2" v-model="checked2" binary inputId="checkbox-2"></Checkbox>
                            <label class="ml-2" for="checkbox-2">Save for next purchase</label>
                        </div>
                    </div>
                    <div class="col-span-12 flex flex-col lg:flex-row justify-center items-center lg:justify-end my-12">
                        <Button class="mt-4 lg:mt-0 w-full lg:w-auto order-2 lg:order-1 lg:mr-6" severity="secondary" outlined label="Return to Cart" icon="pi pi-fw pi-arrow-left"></Button>
                        <Button class="w-full lg:w-auto order-1 lg:order-2" label="Continue to Shipping" icon="pi pi-fw pi-check"></Button>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-6 px-6 py-6 md:px-12">
                <div class="pb-4 border-surface-200 dark:border-surface-700">
                    <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">Your Cart</span>
                </div>
                <div class="flex flex-col lg:flex-row flex-wrap lg:items-center py-2 mt-4 border-surface-200 dark:border-surface-700">
                    <img src="/demo/images/ecommerce/shop/shop-1.png" class="w-32 h-32 flex-shrink-0 mb-4" alt="product" />
                    <div class="flex-auto lg:ml-4">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-surface-900 dark:text-surface-0 font-bold">Product Name</span>
                            <span class="text-surface-900 dark:text-surface-0 font-bold">$123.00</span>
                        </div>
                        <div class="text-surface-600 dark:text-surface-200 text-sm mb-4">Black | Large</div>
                        <div class="flex flex-auto justify-between items-center">
                            <InputNumber showButtons buttonLayout="horizontal" :min="0" inputClass="w-10 text-center" v-model="quantities[0]" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></InputNumber>
                            <Button icon="pi pi-trash" text rounded></Button>
                        </div>
                    </div>
                </div>
                <div class="py-2 mt-4 border-surface-200 dark:border-surface-700">
                    <InputGroup class="mt-4">
                        <InputText type="text" v-model="value" placeholder="Promo code" class="w-full" />
                        <Button type="button" label="Apply" :disabled="!value"></Button>
                    </InputGroup>
                </div>
                <div class="py-2 mt-4">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-surface-900 dark:text-surface-0 font-medium">Subtotal</span>
                        <span class="text-surface-900 dark:text-surface-0">$123.00</span>
                    </div>
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-surface-900 dark:text-surface-0 font-medium">Shipping</span>
                        <span class="text-primary font-bold">Free</span>
                    </div>
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-surface-900 dark:text-surface-0 font-bold">Total</span>
                        <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">$123.00</span>
                    </div>
                </div>
                <div class="py-2 mt-4 bg-yellow-100 flex items-center justify-center rounded">
                    <img src="/demo/images/ecommerce/shop/flag.png" class="mr-2" alt="Country Flag" />
                    <span class="text-black/90 font-medium">No additional duties or taxes.</span>
                </div>
            </div>
        </div>
    </div>
</template>

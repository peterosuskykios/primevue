<template>
    <div class="col-span-12">
        <div class="flex flex-col sm:flex-row items-center gap-6">
            <div class="flex flex-col sm:flex-row items-center gap-4">
                <img alt="avatar" src="/demo/images/avatar/circle/avatar-f-1.png" class="w-16 h-16 flex-shrink-0" />
                <div class="flex flex-col items-center sm:items-start">
                    <span class="text-surface-900 dark:text-surface-0 font-bold text-4xl">Welcome Isabel</span>
                    <p class="text-surface-600 dark:text-surface-200 m-0">Your last login was on 04/05/2022 at 10:24 am</p>
                </div>
            </div>
            <div class="flex gap-2 sm:ml-auto">
                <Button type="button" v-tooltip.bottom="'Exchange'" icon="pi pi-arrows-h" outlined rounded></Button>
                <Button type="button" v-tooltip.bottom="'Withdraw'" icon="pi pi-download" outlined rounded></Button>
                <Button type="button" v-tooltip.bottom="'Send'" icon="pi pi-send" rounded></Button>
            </div>
        </div>
    </div>
</template>

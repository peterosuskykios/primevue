<script setup>
import { useLayout } from '@/base/layout/composables/layout';
import AppBreadcrumb from './AppBreadcrumb.vue';

const { toggleMenu, layoutState, toggleConfigSidebar } = useLayout();

function showProfileSidebar() {
    layoutState.profileSidebarVisible = !layoutState.profileSidebarVisible;
}
</script>

<template>
    <div class="layout-topbar">
        <div class="topbar-start">
            <Button type="button" class="topbar-menubutton p-trigger" @click="toggleMenu">
                <i class="pi pi-bars"></i>
            </Button>

            <AppBreadcrumb class="topbar-breadcrumb"></AppBreadcrumb>
        </div>

        <div class="topbar-end">
            <ul class="topbar-menu">
                <li class="topbar-profile">
                    <Button type="button" class="topbar-sidebarbutton" @click="showProfileSidebar">
                        <img src="/demo/images/avatar/avatar.png" alt="Profile" />
                    </Button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

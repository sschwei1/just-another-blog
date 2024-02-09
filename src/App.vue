<script setup lang="ts">

import { useUserStore } from '@store/userStore';
const userStore = useUserStore();

</script>

<template>
    <div id="app-wrapper" class="surface-ground p-4">
        <div id="app-wrapper-inner" class="p-3 surface-section border-round flex flex-column">
            {{ userStore.user.username }}
        </div>
        <div id="app-wrapper-inner" class="p-3 surface-section border-round flex flex-column">
            <router-view />
        </div>
    </div>
</template>

<style scoped>
    #app-wrapper {
        height: 100vh;
        width: 100vw;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    #app-wrapper-inner {
        width: 100%;
    }
</style>

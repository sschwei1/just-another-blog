<script setup lang='ts'>

import IconButton from '@components/IconButton.vue';
import { useSettingsStore } from '@store/settingsStore';
import { useUserStore } from '@store/userStore';
import { computed } from 'vue';

const settingStore = useSettingsStore();
const userStore = useUserStore();

const handleThemeChange = () => {
    settingStore.toggleTheme();
}

const themeIcon = computed(() => {
    return settingStore.page.theme === 'light' ? 'SUN' : 'MOON';
});

</script>

<template>
    <div class='w-full surface-section p-3 flex justify-content-between'>
        <div>
            <router-link to='/profile'>
                <IconButton icon='USER' />
            </router-link>
            <template v-if='!userStore.isAuthExpired'>
                <router-link to='/create-blog'>
                    <IconButton icon='PLUS_CIRCLE' />
                </router-link>
                <router-link to='/following'>
                    <IconButton icon='STAR' />
                </router-link>
                <router-link to='/liked-blogs'>
                    <IconButton icon='HEART' />
                </router-link>
            </template>
        </div>
        <div>
            <IconButton @on-click='handleThemeChange' :icon='themeIcon' />
        </div>
    </div>
</template>
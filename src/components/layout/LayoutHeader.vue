<script setup lang='ts'>

import IconButton from '@components/IconButton.vue';
import { useSettingsStore } from '@store/settingsStore';
import { useUserStore } from '@store/userStore';
import { computed } from 'vue';
import ThemeColorPicker from '@components/theme/ThemeColorPicker.vue'

const settingStore = useSettingsStore();
const userStore = useUserStore();

const handleThemeChange = () => {
    settingStore.toggleThemeType();
}

const themeIcon = computed(() => {
    return settingStore.page.theme.type === 'light' ? 'SUN' : 'MOON';
});

</script>

<template>
    <div class='w-full surface-section p-3 flex justify-content-between'>
        <div>
            <RouterLink to='/profile'>
                <IconButton icon='USER' />
            </RouterLink>
            <template v-if='!userStore.isAuthExpired'>
                <RouterLink to='/create-blog'>
                    <IconButton icon='PLUS_CIRCLE' />
                </RouterLink>
                <RouterLink to='/following'>
                    <IconButton icon='STAR' />
                </RouterLink>
                <RouterLink to='/liked-blogs'>
                    <IconButton icon='HEART' />
                </RouterLink>
            </template>
        </div>
        <div>
            <ThemeColorPicker />
            <IconButton @on-click='handleThemeChange' :icon='themeIcon' />
        </div>
    </div>
</template>
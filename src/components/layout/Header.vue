<script setup lang='ts'>

import IconButton from '@components/IconButton.vue';
import { useSettingsStore } from '@src/store/settingsStore';

const settings = useSettingsStore();

const handleThemeChange = () => {
    settings.toggleTheme();
}

</script>

<template>
    <div class='w-full surface-section p-3 flex justify-content-between'>
        <div>
            <router-link to='/profile'>
                <IconButton icon='USER' />
            </router-link>
            <router-link to='/create-blog'>
                <IconButton icon='PLUS_CIRCLE' />
            </router-link>
            <router-link to='/following'>
                <IconButton icon='STAR' />
            </router-link>
            <router-link to='/liked-blogs'>
                <IconButton icon='HEART' />
            </router-link>
        </div>
        <div>
            <IconButton @on-click='handleThemeChange' icon='MOON' />
        </div>
    </div>
</template>
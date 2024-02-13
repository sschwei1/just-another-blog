<script setup lang='ts'>

import IconButton from '@components/IconButton.vue';
import { useSettingsStore } from '@store/settingsStore';
import { useUserStore } from '@store/userStore';
import { computed } from 'vue';
import ThemeColorPicker from '@components/theme/ThemeColorPicker.vue'
import { RouteNames, getNamedRoute } from '@src/router';

const settingStore = useSettingsStore();
const userStore = useUserStore();

const handleThemeChange = () => {
    settingStore.toggleThemeType();
}

const themeIcon = computed(() => {
    return settingStore.page.theme.type === 'light' ? 'SUN' : 'MOON';
});

const profilePath = computed(() => {
    return userStore.isAuthExpired ?
        getNamedRoute(RouteNames.Login) :
        getNamedRoute(RouteNames.Profile, { username: userStore.user?.username });
});

</script>

<template>
    <div class='w-full surface-section p-3 flex justify-content-between'>
        <div>
            <RouterLink :to='profilePath'>
                <IconButton icon='USER' />
            </RouterLink>
            <template v-if='!userStore.isAuthExpired'>
                <RouterLink :to='getNamedRoute(RouteNames.CreateBlog)'>
                    <IconButton icon='PLUS_CIRCLE' />
                </RouterLink>
                <RouterLink :to='getNamedRoute(RouteNames.Following)'>
                    <IconButton icon='STAR' />
                </RouterLink>
                <RouterLink :to='getNamedRoute(RouteNames.LikedBlogs)'>
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
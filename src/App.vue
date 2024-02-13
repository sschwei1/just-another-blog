<script setup lang="ts">

import LayoutPage from '@components/layout/LayoutPage.vue';
import { watch } from 'vue';
import { useSettingsStore } from './store/settingsStore';
import { usePrimeVue } from 'primevue/config';
import { Theme, getThemeString } from '@services/colorService';


const settingsStore = useSettingsStore();
const primeVue = usePrimeVue();

const updateTheme = (newTheme: Theme, oldTheme: Theme) => {
    primeVue.changeTheme(
        getThemeString(oldTheme),
        getThemeString(newTheme),
        'prime-theme-link'
    );
}

watch(
    () => settingsStore.page.theme,
    updateTheme
);

/**
 * Update theme on first load, to overrite the default theme in case theme was loaded from localStorage
 */
updateTheme(settingsStore.page.theme, settingsStore.default.page.theme);

</script>

<template>
    <LayoutPage>
        <RouterView />
    </LayoutPage>
</template>

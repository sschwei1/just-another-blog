<script setup lang="ts">

import LayoutPage from '@components/layout/LayoutPage.vue';
import { watch } from 'vue';
import { useSettingsStore, Theme } from './store/settingsStore';
import { usePrimeVue } from 'primevue/config';


const settings = useSettingsStore();
const primeVue = usePrimeVue();

watch(
    () => settings.page.theme,
    (newTheme, oldTheme) => {
        const themeStr = (theme: Theme) => `aura-${theme}-purple`;
        primeVue.changeTheme(
            themeStr(oldTheme),
            themeStr(newTheme),
            'prime-theme-link'
        );
    }  
);

</script>

<template>
    <LayoutPage>
        <RouterView />
    </LayoutPage>
</template>

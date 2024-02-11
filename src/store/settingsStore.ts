import { defineStore } from 'pinia';
import { computed, readonly, ref } from 'vue';

export type Theme = 'dark' | 'light';

interface PageSettings {
    theme: Theme;
}

export const useSettingsStore = defineStore('settings', () => {
    const pageSettings = ref<PageSettings>({
        theme: 'dark'
    });

    const toggleTheme = () => {
        const newTheme = pageSettings.value.theme === 'dark' ? 'light' : 'dark';
        pageSettings.value.theme = newTheme;
    };

    const readonlyPageSettings = computed(() => {
        return readonly(pageSettings.value);
    });

    return {
        page: readonlyPageSettings,
        toggleTheme
    };
});
import { defineStore } from 'pinia';
import { computed, readonly, ref } from 'vue';
import { Theme, ThemeColor } from '@services/colorService';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '@services/localStorageService';
import { DeepReadonly } from 'vue';

interface PageSettings {
    theme: Theme;
}

const defaultPageSettings: DeepReadonly<PageSettings> = {
    theme: {
        type: 'dark',
        color: 'purple'
    }
};

const storageKeys = {
    page: 'settings.page'
} as const;

export const useSettingsStore = defineStore('settings', () => {
    const pageSettings = ref<PageSettings>(getDataFromLocalStorage(storageKeys.page) ?? defaultPageSettings);

    const toggleThemeType = () => {
        const newTheme = pageSettings.value.theme.type === 'dark' ? 'light' : 'dark';
        pageSettings.value.theme = {
            ...pageSettings.value.theme,
            type: newTheme
        };
        saveDataToLocalStorage(storageKeys.page, pageSettings.value);
    };

    const setThemeColor = (themeColor: ThemeColor) => {
        pageSettings.value.theme = {
            ...pageSettings.value.theme,
            color: themeColor
        };
        saveDataToLocalStorage(storageKeys.page, pageSettings.value);
    }

    const readonlyPage = computed(() => {
        return readonly(pageSettings.value);
    });

    return {
        page: readonlyPage,
        toggleThemeType,
        setThemeColor,
        default: {
            page: defaultPageSettings
        }
    };
});
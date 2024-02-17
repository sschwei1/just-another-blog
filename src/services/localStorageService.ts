import { toRaw } from 'vue';

enum LocalStorageKeyEnum {
    PAGE = 'settings.page'
}

type LocalStorageKeyValue = `${LocalStorageKeyEnum}`;
type LocalStorageKey = LocalStorageKeyEnum|LocalStorageKeyValue;

export const saveDataToLocalStorage = <T,>(key: LocalStorageKey, data: T) => {
    console.log({
        type: 'write',
        key: key,
        data: toRaw(data)
    });
    localStorage.setItem(key, JSON.stringify(data));
}

export const getDataFromLocalStorage = <T,>(key: LocalStorageKey): T|null => {
    const data = localStorage.getItem(key);
    console.log({
        type: 'read',
        key: key,
        data: data
    });
    return data ? JSON.parse(data) : null;
}
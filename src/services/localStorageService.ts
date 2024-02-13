import { toRaw } from 'vue';

export const saveDataToLocalStorage = <T,>(key: string, data: T) => {
    console.log({
        type: 'write',
        key: key,
        data: toRaw(data)
    });
    localStorage.setItem(key, JSON.stringify(data));
}

export const getDataFromLocalStorage = <T,>(key: string): T|null => {
    const data = localStorage.getItem(key);
    console.log({
        type: 'read',
        key: key,
        data: data
    });
    return data ? JSON.parse(data) : null;
}
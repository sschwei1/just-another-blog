import { defineStore } from 'pinia';
import { computed, readonly, ref } from 'vue';

export interface UserData {
    id: number;
    username: string;
}

export interface AuthData {
    token: string;
    validUntil: number;
}

export const useUserStore = defineStore('user', () => {
    const user = ref<UserData|undefined>(undefined);
    const auth = ref<AuthData|undefined>(undefined);
    const isLoading = ref<boolean>(false);

    const setUser = (newUser: UserData) => {
        user.value = newUser;
    };

    const setAuth = (newAuth: AuthData) => {
        auth.value = newAuth;
    }

    const clearLogin = () => {
        user.value = undefined;
        auth.value = undefined;
    }

    const isAuthExpired = computed(() => {
        // return auth?.value ? auth.value.validUntil < Date.now() : true;
        // TODO: remove static return value when auth is implemented
        return false;
    });

    const readonlyUser = computed(() => {
        return user.value ? readonly(user.value) : undefined;    
    });

    const readonlyAuth = computed(() => {
        return auth.value ? readonly(auth.value) : undefined;
    });

    return {
        user: readonlyUser,
        auth: readonlyAuth,
        isAuthExpired,
        isLoading: isLoading.value,
        setUser,
        setAuth,
        clearLogin
    };
});
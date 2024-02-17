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
    const user = ref<UserData|null>(null);
    const auth = ref<AuthData|null>(null);
    const isLoading = ref<boolean>(false);

    const setUser = (newUser: UserData) => {
        user.value = newUser;
    };

    const setAuth = (newAuth: AuthData) => {
        auth.value = newAuth;
    }

    const login = (user: UserData, auth: AuthData) => {
        setUser(user);
        setAuth(auth);
    }

    const clearLogin = () => {
        user.value = null;
        auth.value = null;
    }

    const isAuthExpired = computed(() => {
        return auth?.value ? auth.value.validUntil < Date.now() : true;
    });

    const readonlyUser = computed(() => {
        return user.value ? readonly(user.value) : null;    
    });

    const readonlyAuth = computed(() => {
        return auth.value ? readonly(auth.value) : null;
    });

    return {
        user: readonlyUser,
        auth: readonlyAuth,
        isAuthExpired,
        isLoading: isLoading.value,
        setUser,
        setAuth,
        login,
        clearLogin
    };
});
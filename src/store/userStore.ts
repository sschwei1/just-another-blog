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

const mockedUser = {
    id: 1,
    username: 'testuser'
};

const mockedAuth = {
    token: 'testtoken',
    validUntil: Date.now() + 1000 * 60 * 60
};

export const useUserStore = defineStore('user', () => {
    const user = ref<UserData|null>(mockedUser);
    const auth = ref<AuthData|null>(mockedAuth);
    const isLoading = ref<boolean>(false);

    const setUser = (newUser: UserData) => {
        user.value = newUser;
    };

    const setAuth = (newAuth: AuthData) => {
        auth.value = newAuth;
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
        clearLogin
    };
});
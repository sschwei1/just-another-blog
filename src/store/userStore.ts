import { defineStore } from 'pinia';
import { computed, readonly, ref } from 'vue';

interface UserData {
    id: number;
    username: string;
}

interface AuthData {
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

    const readonlyUser = computed(() => {
        return user.value ? readonly(user.value) : undefined;    
    });

    const readonlyAuth = computed(() => {
        return auth.value ? readonly(auth.value) : undefined;
    });

    return {
        user: readonlyUser,
        auth: readonlyAuth,
        isLoading: isLoading.value,
        setUser,
        setAuth,
        clearLogin
    };
});
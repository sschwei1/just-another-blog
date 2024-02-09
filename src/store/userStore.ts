import { defineStore } from 'pinia';
import { computed, isReadonly, ref } from 'vue';

interface User {
    id: number;
    username: string;
}

export const useUserStore = defineStore('user', () => {
    const user = ref<User>({
        id: 1,
        username: 'Test'
    });

    const updateUser = (newUser: User) => {
        user.value = newUser;
    };

    return {
        user,
        updateUser,
    };
});
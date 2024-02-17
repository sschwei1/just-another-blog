<script setup lang='ts'>

import IconInput from '@components/form/IconInput.vue';
import LoadingButton from '@components/LoadingButton.vue';
import PasswordInput from '@components/form/PasswordInput.vue';

import { useRouter } from 'vue-router';
import { useUserStore } from '@src/store/userStore';

import { computed, ref } from 'vue';

const router = useRouter();
const userStore = useUserStore();

const isLoading = ref(false);
const username = ref('');
const password = ref('');

const isFormValid = computed(() => {
    return username.value.length > 0 && password.value.length > 0;
});

const handleLogin = () => {
    isLoading.value = true;

    setTimeout(() => {
        isLoading.value = false;

        const user = {
            id: 1,
            username: username.value,
        };

        const auth = {
            token: '',
            validUntil: Date.now() + 1000 * 60 * 60,
        };

        userStore.login(user, auth);

        router.push('/');
    }, 2000);
};

</script>

<template>
    <div class='w-full flex flex-column'>
        <IconInput
            icon='pi pi-user'
            iconGroupClasses='pb-3'
            placeholder='Username'
            v-model='username'
        />

        <PasswordInput
            class='pb-5'
            placeholder='Password'
            v-model='password'
        />

        <LoadingButton
            class='w-full flex justify-content-center'
            :is-disabled='!isFormValid'
            :is-loading='isLoading'
            label='Login'
            @click='handleLogin'
        />
    </div>
</template>
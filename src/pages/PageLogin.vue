<script setup lang='ts'>

import Divider from 'primevue/divider';
import LoginForm from '@components/login/FormLogin.vue';
import { RouterLink } from 'vue-router';

</script>

<template>
    <LoginForm />
    <Divider class='p-3' />
    <div>Don't have an account?</div>
    <RouterLink to='/register' class='pt-2'>Sign Up</RouterLink>
</template>
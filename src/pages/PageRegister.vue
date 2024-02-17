<script setup lang="ts">

import Divider from 'primevue/divider';
import RegisterForm from '@components/login/FormRegister.vue';

</script>

<template>
    <RegisterForm />
    <Divider class='p-3' />
    <div>Already have an account?</div>
    <RouterLink to='/login' class='pt-2'>Login</RouterLink>
</template>
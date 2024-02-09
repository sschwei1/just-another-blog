<script setup lang='ts'>

import { useUserStore } from '@src/store/userStore';
const userStore = useUserStore();

const onLoginPress = () => {
    userStore.user.username = 'John Doe';
}

</script>

<template>
    <div class='flex gap-3 justify-content-between'>
        <Button @click='onLoginPress' label='Login' class='w-full' />
        <Button label='Sign Up' class='w-full' />
    </div>
</template>
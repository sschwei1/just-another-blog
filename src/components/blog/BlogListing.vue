<script setup lang='ts'>

import { useUserStore } from '@src/store/userStore';
const userStore = useUserStore();

</script>

<template>
    <div>
        {{ userStore.isLoading }}
    </div>
</template>
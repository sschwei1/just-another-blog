<script setup lang='ts'>
import { useRoute } from 'vue-router';


const route = useRoute();

</script>

<template>
    <div>
        {{ route.fullPath }}
    </div>
    <div>
        {{ route.params }}
    </div>
</template>
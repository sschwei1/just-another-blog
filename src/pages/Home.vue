<script setup lang='ts'>

import BlogListing from '@components/blog/Listing.vue';
import BlogSearch from '@components/blog/Search.vue';
import LoginButtons from '@components/home/LoginButtons.vue';

</script>

<template>
    <BlogSearch />
    <BlogListing />
    <Divider />
    <LoginButtons />
</template>

<style scoped lang='scss'>

</style>
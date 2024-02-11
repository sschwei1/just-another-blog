<script setup lang='ts'>

import Header from '@components/layout/Header.vue';

</script>

<template>
    <div id="app-wrapper" class="surface-ground">
        <Header />
        
        <div class='w-full p-4 flex-grow-1'>
            <div id="app-wrapper-inner" class="p-3 w-full h-full surface-section border-round flex flex-column">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #app-wrapper {
        height: 100vh;
        width: 100vw;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    #app-wrapper-inner {
        width: 100%;
    }
</style>
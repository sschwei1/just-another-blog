<script setup lang='ts'>

import PrimeMenu from 'primevue/menu';
import { computed, ref } from 'vue';
import IconButton from '../IconButton.vue';
import { availableColors, getColorCode } from '@services/colorService';
import { ButtonProps } from 'primevue/button';
import { useSettingsStore } from '@store/settingsStore';

const settingsStore = useSettingsStore();

const menu = ref();

const items = computed(() => availableColors.map(color => {
    return {
        label: color.charAt(0).toUpperCase() + color.slice(1),
        icon: 'fa-solid fa-square',
        style: {
            color: getColorCode(color, settingsStore.page.theme.type)
        },
        command: () => {
            settingsStore.setThemeColor(color);
        }
    }
}));

const toggle = (event: any) => {
    menu.value.toggle(event);
};

const buttonProps: ButtonProps = {
    link: true,
    'aria-haspopup': 'true',
    'aria-controls': 'overlay_menu'
};

</script>

<template>
    <IconButton icon='PALETTE' @on-click='toggle' :button-props='buttonProps' />
    <PrimeMenu ref='menu' id='overlay_manu' :model='items' :popup='true'>
        <template #itemicon='{ item }'>
            <i :style='item.style' :class='item.icon' class='mr-2' />
        </template>
    </PrimeMenu>
</template>
<script setup lang='ts'>

import PrimeMenu from 'primevue/menu';
import { computed, ref } from 'vue';
import IconButton from '../IconButton.vue';
import { availableColors, getColorCode } from '@services/colorService';
import { ButtonProps } from 'primevue/button';
import { useSettingsStore } from '@store/settingsStore';
import { MenuItem } from 'primevue/menuitem';

const settingsStore = useSettingsStore();

const menu = ref();

const items = computed(() => {
    const items: MenuItem[] = availableColors.map(color => {
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
    });

    /**
     * The fist item is focused by default, this is used to hide this effect
     * This might get refactored or changanged later since its a kinda hackish abroach,
     * however it was easy to implement and works for now
     */
    items.unshift({
        label: 'Hidden Element',
        style: {
            display: 'none'
        }
    });

    return [{
        label: 'Theme Colors',
        items: items
    }]
});

const toggle = (event: MouseEvent) => {
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
    <PrimeMenu ref='menu' id='overlay_menu' :model='items' :popup='true'>
        <template #itemicon='{ item }'>
            <i :style='item.style' :class='item.icon' class='mr-2' />
        </template>
    </PrimeMenu>
</template>
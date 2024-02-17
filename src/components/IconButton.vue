<script setup lang='ts'>

import PrimeButton, { ButtonProps } from 'primevue/button';
import { PrimeIcons } from 'primevue/api';
import { computed } from 'vue';

type PrimeIconString = keyof typeof PrimeIcons;

interface IconButtonProps {
    icon: PrimeIconString,
    iconCentered?: boolean,
    padding?: number,
    spinningIcon?: boolean,

    buttonProps?: ButtonProps
}

type IconButtonEmits = {
    onClick: [event: MouseEvent]
}

const props = withDefaults(defineProps<IconButtonProps>(), {
    spinningIcon: false,
    iconCentered: true,
    padding: 2,
    buttonProps: () => ({
        link: true
    })
});

const emit = defineEmits<IconButtonEmits>();

const classString = computed(() => {
    const iconClass =  PrimeIcons[props.icon];
    const useIconClasses = {
        'pi-spin': props.spinningIcon,
        [`p-${props.padding}`]: true,
        [iconClass]: true
    };

    return Object.keys(useIconClasses)
        .filter(key => useIconClasses[key])
        .join(' ')
});

const handleClick = (event: MouseEvent) => {
    emit('onClick', event);
}

</script>

<template>
    <PrimeButton
        class='p-0'
        v-bind='props.buttonProps'
        @click='handleClick'
    >
        <i :class='classString' />
    </PrimeButton>
</template>
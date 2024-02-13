<script setup lang='ts'>

import PrimeButton, { ButtonProps } from 'primevue/button';
import { PrimeIcons } from 'primevue/api';
import { computed } from 'vue';


type PrimeIconString = keyof typeof PrimeIcons;

interface IconButtonProps {
    icon: PrimeIconString,
    spinningIcon?: boolean,
    iconCentered?: boolean,

    buttonProps?: ButtonProps
}

type IconButtonEmits = {
    onClick: ['event']
}

const props = withDefaults(defineProps<IconButtonProps>(), {
    spinningIcon: false,
    iconCentered: true,
    buttonProps: () => ({
        link: true
    })
});

const emit = defineEmits<IconButtonEmits>();

const classString = computed(() => {
    const iconClass =  PrimeIcons[props.icon];
    const useIconClasses = {
        'pi-spin': props.spinningIcon,
        [iconClass]: true
    };

    return Object.keys(useIconClasses)
        .filter(key => useIconClasses[key])
        .join(' ')
});

const handleClick = (event: any) => {
    emit('onClick', event);
}

</script>

<template>
    <PrimeButton
        class='p-2'
        v-bind='props.buttonProps'
        @click='handleClick'
    >
        <i :class='classString' />
    </PrimeButton>
</template>
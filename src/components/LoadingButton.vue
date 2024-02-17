<script setup lang='ts'>

import Button, { ButtonProps } from 'primevue/button';

interface LoadingButtonProps {
    class?: string;
    isDisabled: boolean;
    isLoading: boolean;
    label: string;
    buttonProps?: ButtonProps;
}

type LoadingButtonEmits = {
    onClick: [event: MouseEvent]
}

const props = withDefaults(defineProps<LoadingButtonProps>(), {
    isDisabled: false
});
const emit = defineEmits<LoadingButtonEmits>();

const handleClick = (event: MouseEvent) => {
    emit('onClick', event);
}

</script>

<template>
    <Button
        :class='props.class'
        :disabled='props.isDisabled'
        :label='props.label'
        :loading='props.isLoading'
        :pt="{
            label: { style: 'flex: none' }
        }"
        v-bind='props.buttonProps'
        @click='handleClick'
    />
</template>
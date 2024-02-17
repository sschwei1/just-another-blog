<script setup lang='ts'>

import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';

interface IconInputProps {
    icon: string;
    iconGroupClasses: string;
    placeholder: string;
    type?: string;
}

const props = withDefaults(defineProps<IconInputProps>(), {
    inputGroupClasses: '',
    placeholder: '',
    type: 'text'
});

const model = defineModel<string>();

</script>

<template>
    <InputGroup :class='props.iconGroupClasses'>
        <slot name='before'></slot>

        <InputGroupAddon>
            <i :class='props.icon' />
        </InputGroupAddon>
        <InputText
            :placeholder='props.placeholder'
            :type='props.type'
            v-model='model'
        />

        <slot name='after'></slot>
    </InputGroup>
</template>
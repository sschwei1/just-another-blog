<script setup lang='ts'>

import IconButton from '@components/IconButton.vue';
import IconInput from './IconInput.vue';
import InputGroupAddon from 'primevue/inputgroupaddon';

import { computed, ref } from 'vue';

interface PasswordInputProps {
    icon?: string;
    inputGroupClasses?: string;
    placeholder: string;
}

const props = withDefaults(defineProps<PasswordInputProps>(), {
    icon: 'pi pi-unlock',
    inputGroupClasses: '',
    placeholder: ''
});

const model = defineModel<string>();

const showPassword = ref(false);

const eyeIcon = computed(() => {
    return showPassword.value ? 'EYE' : 'EYE_SLASH';
});

const inputType = computed(() => {
    return showPassword.value ? 'text' : 'password';
});

const handleToggleView = () => {
    showPassword.value = !showPassword.value;
};

const iconButtonProps = {
    class: 'p-0 h-full w-full flex justify-content-center align-items-center',
    link: true
}

</script>

<template>
    <IconInput
        :icon='props.icon'
        :iconGroupClasses='props.inputGroupClasses'
        :placeholder='props.placeholder'
        :type='inputType'
        v-model='model'
    >
        <template #after>
            <InputGroupAddon class='p-0'>
                <IconButton
                    :buttonProps='iconButtonProps'
                    :icon='eyeIcon'
                    :padding='0'
                    @click='handleToggleView'
                />
            </InputGroupAddon>
        </template>
    </IconInput>
</template>
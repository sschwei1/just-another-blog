import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

import 'primevue/resources/themes/aura-dark-purple/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import './main.css';

//#region Setup
const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
//#endregion

//#region UI
app.use(PrimeVue);
app.component('Button', Button);
app.component('Divider', Divider);
//#endregion

app.mount('#app');
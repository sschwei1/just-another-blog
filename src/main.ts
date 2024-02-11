import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

import PrimeVue from 'primevue/config';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import './main.css';

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(PrimeVue);

app.mount('#app');
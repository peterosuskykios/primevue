import { createApp } from 'vue';
import App from './App.vue';
import router from './base/router';

import BlockViewer from './base/BlockViewer.vue';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import './assets/styles.scss';
import { MyBluePreset } from './base/layout/composables/presets';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: MyBluePreset,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);

app.component('BlockViewer', BlockViewer);

app.mount('#app');

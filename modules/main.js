import { createApp } from 'vue';
import App from './App.vue';
import router from './base/router';

import BlockViewer from './base/BlockViewer.vue';

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';

import Button from 'primevue/button';
import Card from 'primevue/card';
import Textarea from 'primevue/textarea';
import Badge from 'primevue/badge';
import Drawer from 'primevue/drawer';
import Tooltip from 'primevue/tooltip'; 

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Toast from 'primevue/toast';
import DatePicker from 'primevue/datepicker';

import './assets/styles.scss';
import { MyBluePreset } from './base/layout/composables/presets';

const app = createApp(App);

// PrimeVue setup
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

// Komponenty ktoré používaš
app.component('BlockViewer', BlockViewer);
app.component('Button', Button);
app.component('Card', Card);
app.component('Textarea', Textarea);
app.component('Badge', Badge);
app.component('Drawer', Drawer);
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('InputText', InputText)
app.component('Select', Select);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('Toast', Toast);
app.component('DatePicker', DatePicker);

// Tooltip ako direktíva
app.directive('tooltip', Tooltip);

// Router a mount
app.use(router);
app.mount('#app');

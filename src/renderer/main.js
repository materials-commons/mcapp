import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';
import store from './store';
import '@/assets/app.scss';
import fontawesome from '@fortawesome/fontawesome';
import regular from '@fortawesome/fontawesome-free-regular';
import solid from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(regular);
fontawesome.library.add(solid);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

import {remote} from 'electron';
import currentWindowTracker from './services/current-window';

currentWindowTracker.currentWindow = remote.getCurrentWindow();


/* eslint-disable no-new */
new Vue({
    components: {App},
    router,
    store,
    template: '<App/>'
}).$mount('#app');

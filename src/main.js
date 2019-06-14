import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify'
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAMaqWKOB46fenB-taPsaY5O3_WKzWHEjw',
        libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)

        //// If you want to set the version, you can do so:
        // v: '3.26',
    },
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

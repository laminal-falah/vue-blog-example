import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import jQuery from 'jquery'

window.$ = jQuery

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all'

import '@/assets/css/styles.css'
import '@/assets/js/scripts'

createApp(App).use(router).mount('#app')

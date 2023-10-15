import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import pinia from './pinia/index.js'
import Vant from 'vant'

import 'vant/lib/index.css';

createApp(App).use(Vant).use(pinia).use(router).mount('#app')

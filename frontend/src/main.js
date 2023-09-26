import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import pinia from './pinia/index.js'

createApp(App).use(pinia).use(router).mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/router.js'

import App from './App.vue'

import "./assets/main.css"
const app = createApp(App)

app
    .use(createPinia())
    .use(router)
    .mount('#app')


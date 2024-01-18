import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 載入 axios 跟 vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')

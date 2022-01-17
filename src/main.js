import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import axios from 'axios';
import './assets/main.css'
const app = createApp(App)
app.config.globalProperties.$axios = axios

app.mount('#app')

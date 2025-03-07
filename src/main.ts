import App from './App.vue'
import Antd from "ant-design-vue";
import router from './router'
import "ant-design-vue/dist/reset.css";
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


const app = createApp(App)
app.use(Antd);
app.use(createPinia())
app.use(router)

app.mount('#app')

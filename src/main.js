import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'
import './assets/styles/sass/index.sass'

createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import './styles/general.scss'

import App from './App.vue'
import { router } from './route'

createApp(App).use(router).mount('#app')

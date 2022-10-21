import App from './App.vue'
import { createApp } from 'vue'
import Section from './packet'
import Router from './router'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import './style/scrollbar.css'


createApp(App).use(Router).use(Section).mount('#app')

import App from './App.vue'
import { createApp } from 'vue'
import Section from './pecket'
import Markdown from './section/markdown'
import Router from './router'
import 'virtual:windi.css'
import 'virtual:windi-devtools';
import './asset/icon.js'
import './style/markdown/markdown.css'


createApp(App).use(Router).use(Section).use(Markdown).mount('#app')

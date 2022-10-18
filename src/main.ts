import App from './App.vue'
import { createApp } from 'vue'
import Section from './packet'
import Markdown from './section/markdown'
import Router from './router'
import I18n from './locale'
import 'virtual:windi.css'
import 'virtual:windi-devtools';
import './style/markdown/markdown.css'



createApp(App).use(Router).use(Section).use(Markdown).use(I18n).mount('#app')

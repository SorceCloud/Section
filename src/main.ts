import App from './App.vue'
import Section from './pecket'
import Router from './router'
import 'virtual:windi.css'
import 'virtual:windi-devtools';
import './asset/icon.js'
import './style/markdown/markdown-light.css'


createApp(App).use(Router).use(Section).mount('#app')

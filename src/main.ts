// register vue composition api globally
import { createApp } from 'vue'
import App from './App.vue'
import './common/styles/css/main.css'
import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

// install all modules under `/**/modules/`
const app = createApp(App)

Object.values(import.meta.globEager('./**/modules/*.ts')).forEach((i) => {
  return i.install?.({ app })
})

app.mount('#app')

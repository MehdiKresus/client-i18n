// register vue composition api globally
import { createApp } from 'vue'
import App from './App.vue'
import './common/styles/css/main.css'
import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import type { UserModule } from './types'

// install all modules under `/**/modules/`
const app = createApp(App)

Object.values(import.meta.glob<{ install: UserModule }>('./**/modules/*.ts', { eager: true })).forEach((i) => {
  // @ts-expect-error : route and router are already imported inside router.ts module
  return i.install?.({ app })
})

app.mount('#app')

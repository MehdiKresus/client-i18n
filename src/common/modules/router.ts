import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import type { UserModule } from '~/types'
// Setup vue router
export const install: UserModule = ({ app }) => {
  const routes = setupLayouts(generatedRoutes)
  const router = createRouter({ history: createWebHistory(), routes })

  app.use(router)
}

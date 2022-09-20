import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { useAuthenticationStore } from '../../authentication/stores/auth'
import type { UserModule } from '~/types'
// Setup vue router
export const install: UserModule = ({ app }) => {
  const routes = setupLayouts(generatedRoutes)
  const router = createRouter({ history: createWebHistory(), routes })

  // authentication route guard
  router.beforeEach((to, _, next) => {
    const auth = useAuthenticationStore()

    if (to.meta.requiresAuth && !auth.token)
      next('/login')

    next()
  })
  app.use(router)
}

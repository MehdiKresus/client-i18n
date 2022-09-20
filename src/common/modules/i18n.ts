import { createI18n } from 'vue-i18n'
import intlify from '@intlify/vite-plugin-vue-i18n'
import { type UserModule } from '~/types'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import

// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: intlify.messages,
  })

  app.use(i18n)
}

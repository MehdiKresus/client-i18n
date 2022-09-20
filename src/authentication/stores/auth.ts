import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAuthenticationStore = defineStore('authentication', {
  state: () => ({ token: localStorage.getItem('token') }),

  actions: {
    login(token: string) {
      this.token = token
      localStorage.setItem('token', token)
    },
    logout() {
      this.token = ''
      localStorage.removeItem('token')
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthenticationStore, import.meta.hot))

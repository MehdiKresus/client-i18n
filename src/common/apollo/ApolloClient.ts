import { ApolloClient, ApolloLink, InMemoryCache, concat, createHttpLink, from } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { logErrorMessages } from '@vue/apollo-util'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: import.meta.env.VITE_APP_API_TARGET as string,
})

const errorLink = onError((error) => {
  if (error.graphQLErrors && error.graphQLErrors[0].message === 'Unauthorized') {
    localStorage.removeItem('token')
    // vue router is not ready at this moment
    window.location.reload()
  }
  logErrorMessages(error)
})
// const httpLink = new HttpLink({ uri: process.env.VUE_APP_API_TARGET });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem('token')
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  })
  return forward(operation)
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: from([
    errorLink,
    concat(authMiddleware, httpLink),
  ]),
  cache,
})

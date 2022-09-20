<script setup lang="ts">
import { provideApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './common/apollo/ApolloClient'

// https://v4.apollo.vuejs.org/
provideApolloClient(apolloClient)
</script>

<template>
  <router-view />
</template>

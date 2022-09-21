<script lang="ts" setup>
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <section class="flex items-center justify-center w-full h-screen bg-white">
    <h1 class="text-blue-600 text-6xl font-bold">
      {{ t('title.home') }}
    </h1>
    <button class="icon-btn mx-2 !outline-none bg-blue-500 p-4 rounded-md ml-4" @click="toggleLocales">
      <carbon-language />
    </button>
  </section>
</template>

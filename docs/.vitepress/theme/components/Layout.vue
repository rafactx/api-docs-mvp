<script setup lang="ts">
import { inBrowser, useData, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { watchEffect } from 'vue';
import LanguageSwitcher from './LanguageSwitcher.vue'; // <-- 1. IMPORTAR

const route = useRoute()
const { lang } = useData()

watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-content-after>
      <LanguageSwitcher /> </template>

    <template #layout-top>
      </template>

    </DefaultTheme.Layout>
</template>

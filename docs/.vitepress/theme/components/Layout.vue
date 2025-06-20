<script setup lang="ts">
import { inBrowser, useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { watchEffect } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

const route = useRoute()
const { lang } = useData()

// Define ou atualiza o cookie nf_lang apenas se necessário
watchEffect(() => {
  if (!inBrowser) return

  const cookies = Object.fromEntries(
    document.cookie.split('; ').map((c) => c.split('='))
  )

  const cookieLang = cookies['nf_lang']
  if (cookieLang !== lang.value) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
})
</script>

<template>
  <DefaultTheme.Layout>
    <!-- Switch de idioma ao lado da navbar -->
    <template #nav-bar-content-after>
      <LanguageSwitcher />
    </template>

    <!-- Slot para conteúdo extra acima do layout (se precisar) -->
    <template #layout-top>
      <!-- conteúdo adicional opcional -->
    </template>
  </DefaultTheme.Layout>
</template>

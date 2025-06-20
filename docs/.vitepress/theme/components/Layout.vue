<script setup lang="ts">
import { inBrowser, useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { watchEffect } from 'vue'

const route = useRoute()
const { lang } = useData()

// Define ou atualiza o cookie nf_lang apenas se necessário
watchEffect(() => {
  if (!inBrowser) return

  try {
    const cookies = Object.fromEntries(
      document.cookie.split('; ').map((c) => c.split('='))
    )

    const cookieLang = cookies['nf_lang']
    if (cookieLang !== lang.value) {
      document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
    }
  } catch (error) {
    console.warn('Erro ao manipular cookies:', error)
  }
})
</script>

<template>
  <DefaultTheme.Layout>
    <!-- Slot para conteúdo extra acima do layout (se precisar) -->
    <template #layout-top>
      <!-- conteúdo adicional opcional -->
    </template>
  </DefaultTheme.Layout>
</template>

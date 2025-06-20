<template>
  <div v-if="isMounted" class="scalar-api-container">
    <ApiReference
      :configuration="{
        spec: {
          url: specUrl,
        },
        theme: isDark ? 'dark' : 'light',
        layout: 'modern',
        showSidebar: true,
      }"
      @error="handleError"
    >
      <template #footer>
        <!-- Footer pode ser customizado aqui se necessário -->
      </template>
    </ApiReference>
  </div>
  <div v-else class="loading">
    <p>Carregando documentação da API...</p>
  </div>
</template>

<script setup>
import { ApiReference } from '@scalar/api-reference'
import { inBrowser, useData } from 'vitepress'
import { nextTick, onMounted, ref } from 'vue'

const props = defineProps({
  specUrl: {
    type: String,
    default: '/openapi.scalar.yaml',
  },
})

const { isDark } = useData()
const isMounted = ref(false)

const handleError = (err) => {
  console.error('Erro no ScalarApi:', err)
}

onMounted(() => {
  if (!inBrowser) return

  nextTick(() => {
    isMounted.value = true
    console.log('ScalarApi.vue montado. Tema escuro:', isDark.value)
  })
})
</script>

<style>
/* Reset de estilos para o container do Scalar */
.scalar-api-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh; /* Ocupa a altura total da tela */
  margin: 0;
  padding: 0;
}

/* Garante que o conteúdo da página não tenha padding extra */
.VPDoc {
  padding: 0 !important;
}

.VPDoc .container {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* Opcional: esconde o footer padrão do VitePress nesta página */
.VPDocFooter {
  display: none;
}

/* Estilo para a mensagem de carregamento */
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
}

/* Ajustes de variáveis de tema para o Scalar */
:root {
  --scalar-font: var(--vp-font-family-base);
  --scalar-color-1: var(--vp-c-text-1);
  --scalar-color-2: var(--vp-c-text-2);
  --scalar-background-1: var(--vp-c-bg);
  --scalar-background-2: var(--vp-c-bg-alt);
}

.dark {
  --scalar-color-1: var(--vp-c-text-1);
  --scalar-color-2: var(--vp-c-text-2);
  --scalar-background-1: var(--vp-c-bg);
  --scalar-background-2: var(--vp-c-bg-alt);
}
</style>

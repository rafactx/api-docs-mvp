---
layout: page
title: Redirecionando...
---
<script setup>
import { useRouter } from 'vitepress'
import { onMounted } from 'vue'

onMounted(() => {
  const { go } = useRouter()
  go('/pt-br/')
})
</script>

<style>
/* Opcional: Esconde a página enquanto redireciona */
:root {
  visibility: hidden;
}
</style>

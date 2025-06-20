---
layout: page
title: Redirecionando...
---

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const browserLang = (navigator.language || '').toLowerCase();
  let locale = 'pt';

  if (browserLang.startsWith('en')) {
    locale = 'en';
  } else if (browserLang.startsWith('es')) {
    locale = 'es';
  } else if (browserLang.startsWith('fr')) {
    locale = 'fr';
  }

  // Constrói o caminho absoluto, considerando a base do seu site VitePress.
  // `${import.meta.env.BASE_URL}` garante que funcione mesmo se o site estiver em um subdiretório.
  const newPath = `${import.meta.env.BASE_URL}${locale}/`;

  // Usa window.location.replace() para um redirecionamento "limpo",
  // que não adiciona a página de redirecionamento ao histórico do navegador.
  window.location.replace(newPath);
});
</script>

<style>
:root {
  visibility: hidden;
}
</style>

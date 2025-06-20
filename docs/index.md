---
layout: page
title: Redirecionando...
---

<script setup>
if (typeof window !== 'undefined') {
  const supported = ['pt', 'en', 'es', 'fr']
  const lang = navigator.language?.toLowerCase() || 'pt'
  const match = supported.find(l => lang.startsWith(l)) || 'pt'
  window.location.replace(`/${match}/`)
}
</script>

<p>Redirecionando para o idioma mais apropriado...</p>

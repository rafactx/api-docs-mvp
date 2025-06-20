---
layout: page
title: Redirecionando...
---
<script>
  // Este script só é relevante para o ambiente de desenvolvimento local.
  // Na Vercel, o middleware.ts faz o redirecionamento antes desta página carregar.
  (() => {
    if (typeof window === 'undefined') return;

    const supportedLocales = ['pt', 'en', 'es', 'fr'];
    const browserLang = (navigator.language || 'pt').toLowerCase();

    // Encontra o melhor idioma suportado ou usa 'pt' como padrão
    let locale = 'pt';
    for (const lang of supportedLocales) {
      if (browserLang.startsWith(lang)) {
        locale = lang;
        break;
      }
    }

    // Redireciona para a página inicial do idioma detectado
    window.location.replace(`/${locale}/`);
  })();
</script>
<style>
  :root { visibility: hidden; }
</style>

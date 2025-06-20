<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { theme, page, lang } = useData()

// Pega a lista de idiomas disponíveis, exceto o atual
const availableLocales = computed(() => {
  const currentLangIndex = theme.value.locales[lang.value]?.index
  return Object.values(theme.value.locales).filter(
    (locale) => locale.index !== currentLangIndex,
  )
})

/**
 * Gera o link correto para a página atual em um novo idioma.
 * @param locale O objeto do idioma de destino (ex: { lang: 'en', link: '/en/' })
 */
function getSwitchLink(locale) {
  // Pega o caminho da página atual e remove o prefixo do idioma atual
  // Ex: de 'pt/intro.md' vira 'intro.md'
  const pathWithoutLang = page.value.relativePath.replace(new RegExp(`^${lang.value}/`), '')

  // Retorna o link absoluto para a mesma página no novo idioma
  // Ex: '/en/' + 'intro.md' -> '/en/intro.md'
  return `${locale.link}${pathWithoutLang}`
}
</script>

<template>
  <div v-if="availableLocales.length" class="language-switcher">
    <div class="current-lang">
      <span class="globe-icon" aria-hidden="true">🌐</span>
      <span class="lang-label">{{ theme.locales[lang].label }}</span>
      <span class="arrow-down"></span>
    </div>
    <ul class="lang-dropdown">
      <li v-for="locale in availableLocales" :key="locale.lang">
        <a :href="getSwitchLink(locale)" class="lang-link">
          {{ locale.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.language-switcher {
  position: relative;
  margin: 0 16px;
  cursor: pointer;
}

.current-lang {
  display: flex;
  align-items: center;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.language-switcher:hover .current-lang {
  color: var(--vp-c-brand);
}

.globe-icon {
  margin-right: 8px;
  font-size: 18px;
}

.arrow-down {
  margin-left: 4px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #ccc;
  transition: transform 0.25s;
}

.language-switcher:hover .arrow-down {
  transform: rotate(180deg);
}

.lang-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px;
  padding: 8px;
  list-style: none;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: var(--vp-shadow-2);
  min-width: 160px;
}

.language-switcher:hover .lang-dropdown {
  display: block;
}

.lang-link {
  display: block;
  padding: 6px 12px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.25s, color 0.25s;
}

.lang-link:hover {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-mute);
}
</style>

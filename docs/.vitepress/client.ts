export default function ({ router }: any) {
  if (typeof window === 'undefined') return

  // --- Tema dinâmico de acordo com o sistema operacional ---
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
  const html = document.documentElement

  const applyTheme = (isDark: boolean) => {
    html.classList.toggle('dark', isDark)
  }

  applyTheme(prefersDark.matches)

  // Garante que o listener só é adicionado uma vez por sessão (evita duplicidade com HMR)
  if (!(window as any).__vp_dark_listener) {
    prefersDark.addEventListener('change', (e) => applyTheme(e.matches))
    ;(window as any).__vp_dark_listener = true
  }

  // --- Idiomas suportados e idioma padrão ---
  const supportedLocales = ['pt', 'en', 'es', 'fr']
  const defaultLocale = 'pt'

  const getLocaleRedirect = (pathname: string): string | null => {
    // Se já está em um locale, não faz nada
    if (supportedLocales.some(locale => pathname.startsWith(`/${locale}`))) return null

    // Detecta o idioma do navegador
    const browserLang = navigator.language.toLowerCase()
    let redirectLocale = defaultLocale
    if (browserLang.startsWith('pt')) redirectLocale = 'pt'
    else if (browserLang.startsWith('en')) redirectLocale = 'en'
    else if (browserLang.startsWith('es')) redirectLocale = 'es'
    else if (browserLang.startsWith('fr')) redirectLocale = 'fr'

    // Retorna path correto com locale
    return `/${redirectLocale}${pathname === '/' ? '/' : pathname}`
  }

  // --- Navegação SPA: autodetecta idioma caso o user tente acessar rota sem locale ---
  router.onBeforeRouteChange((to: string) => {
    const localeRedirect = getLocaleRedirect(to)
    if (localeRedirect) return localeRedirect
  })
}

export default function ({ router }: any) {
  if (typeof window === 'undefined') return

  // Configuração de tema automático baseado no sistema operacional
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
  const html = document.documentElement

  // Função para aplicar o tema
  const applyTheme = (isDark: boolean) => {
    if (isDark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  // Aplicar tema inicial
  applyTheme(prefersDark.matches)

  // Escutar mudanças no tema do sistema
  prefersDark.addEventListener('change', (e) => {
    applyTheme(e.matches)
  })

  // Configuração de redirecionamento de idioma
  const supportedLocales = ['pt-br', 'en', 'es', 'fr']
  const defaultLocale = 'pt-br'

  router.onBeforeRouteChange((to: string) => {
    // Se a rota já começa com um locale suportado, não faz nada
    if (supportedLocales.some(locale => to.startsWith(`/${locale}`))) {
      return
    }

    // Obtém o idioma do navegador e faz o mapeamento necessário
    const browserLang = navigator.language.toLowerCase()
    let redirectLocale = defaultLocale

    // Mapeia o idioma do navegador para os locales suportados
    if (browserLang.startsWith('pt')) {
      redirectLocale = 'pt-br'
    } else if (browserLang.startsWith('en')) {
      redirectLocale = 'en'
    } else if (browserLang.startsWith('es')) {
      redirectLocale = 'es'
    } else if (browserLang.startsWith('fr')) {
      redirectLocale = 'fr'
    }

    // Redireciona para o idioma apropriado
    return `/${redirectLocale}${to}`
  })
}

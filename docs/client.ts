export default function () {
  // Garante que só roda no client (evita erros no SSR)
  if (typeof window === 'undefined') return

  const html = document.documentElement
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

  // Aplica/remover classe `dark` no <html> baseado na preferência
  const applyTheme = (isDark: boolean) => {
    html.classList.toggle('dark', isDark)
  }

  // Aplica imediatamente ao carregar
  applyTheme(prefersDark.matches)

  // Garante que só adiciona o listener uma vez (evita duplicações com HMR)
  const listenerFlag = '__vp_dark_listener'
  if (!(window as any)[listenerFlag]) {
    prefersDark.addEventListener('change', (e) => applyTheme(e.matches))
    ;(window as any)[listenerFlag] = true
  }
}

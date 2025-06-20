import { resolve } from 'path'
import { defineConfig } from 'vitepress'

// Reutilizáveis
const sharedLogo = {
  light: '/logo-involves-dark.png',
  dark: '/logo-involves-light.png',
  alt: 'Logo Involves'
}

const sharedFooter = {
  copyright: `
    Involves © 2025 · made with care by
    <a href="https://github.com/rafactx" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 4px;">
    <span>rafactx</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="vertical-align: text-bottom;">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.94.58.1.79-.25.79-.56v-2.15c-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.72 1.27 3.38.97.1-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.5.11-3.12 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.62.23 2.82.11 3.12.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.41-5.28 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A10.5 10.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/>
      </svg>

    </a>`
}

export default defineConfig({
  base: '/',
  title: 'Involves Stage API Reference',
  description: 'Documentação Oficial do Involves Stage',
  lang: 'pt',
  cleanUrls: true,
  lastUpdated: false,

  head: [
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],

  // Configurações para melhor compatibilidade com Vercel
  ignoreDeadLinks: true,

  locales: {
    pt: {
      label: 'Português (Brasil)',
      lang: 'pt',
      link: '/pt/',
      themeConfig: {
        siteTitle: false,
        logo: sharedLogo,
        nav: [
          { text: 'Home', link: '/pt/' },
          { text: 'Guia da API', link: '/pt/intro' },
          { text: 'API Reference', link: '/pt/api-reference' },
          {
            text: 'Recursos',
            items: [
              { text: 'Central de Ajuda', link: 'https://help.involves.com/' },
              { text: 'Suporte', link: 'https://help.involves.com/hc/pt-br/requests/new' }
            ]
          }
        ],
        sidebar: [
          {
            text: 'Guia da API',
            items: [
              { text: '🚀 Introdução', link: '/pt/intro' },
              { text: '🔐 Autenticação', link: '/pt/auth-ambiente' },
              { text: '🚦 Limites', link: '/pt/boas-praticas' },
              { text: '💡 Exemplos', link: '/pt/exemplos-api-aux' },
            ]
          },
          {
            text: 'Referência',
            items: [
              { text: '🔗 HATEOAS', link: '/pt/navegacao-dados' },
              { text: '📜 Respostas & Erros', link: '/pt/respostas-erros' }
            ]
          }
        ],
        search: {
          provider: 'local',
          options: {
            locales: {
              pt: {
                translations: {
                  button: {
                    buttonText: 'Buscar documentos',
                    buttonAriaLabel: 'Buscar documentos'
                  },
                  modal: {
                    noResultsText: 'Nenhum resultado encontrado',
                    resetButtonTitle: 'Limpar busca',
                    footer: {
                      selectText: 'para selecionar',
                      navigateText: 'para navegar',
                      closeText: 'para fechar'
                    }
                  }
                }
              }
            }
          }
        },
        outline: {
          level: [2, 3],
          label: 'Nesta página'
        },
        footer: sharedFooter,
        docFooter: {
          prev: 'Página anterior',
          next: 'Próxima página'
        },
        socialLinks: [
          { icon: 'instagram', link: 'https://www.instagram.com/ainvolves' },
          { icon: 'youtube', link: 'https://www.youtube.com/@involves' },
          { icon: 'linkedin', link: 'https://www.linkedin.com/company/involves' },

        ]
      }
    },

    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        siteTitle: false,
        logo: sharedLogo,
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'API Guide', link: '/en/intro' },
          { text: 'API Reference', link: '/en/api-reference' }
        ],
        sidebar: [
          {
            text: 'API Guide',
            items: [
              { text: '🚀 Introduction', link: '/en/intro' },
              { text: '🔐 Authentication', link: '/en/auth-ambiente' },
              { text: '🚦 Rate Limits', link: '/en/boas-praticas' },
              { text: '💡 Examples', link: '/en/exemplos-api-aux' },
            ]
          },
          {
            text: 'Reference',
            items: [
              { text: '🔗 HATEOAS', link: '/en/navegacao-dados' },
              { text: '📜 Responses & Errors', link: '/en/respostas-erros' }
            ]
          }
        ],
        outline: {
          level: [2, 3],
          label: 'On this page'
        },
        footer: sharedFooter,
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        socialLinks: [
          { icon: 'instagram', link: 'https://www.instagram.com/ainvolves' },
          { icon: 'youtube', link: 'https://www.youtube.com/@involves' },
          { icon: 'linkedin', link: 'https://www.linkedin.com/company/involves' },

        ]
      }
    },

    es: {
      label: 'Español',
      lang: 'es',
      themeConfig: {
        siteTitle: false,
        logo: sharedLogo,
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Guía de la API', link: '/es/intro' },
          { text: 'Referencia API', link: '/es/api-reference' }
        ],
        sidebar: [
          {
            text: 'Guía de la API',
            items: [
              { text: '🚀 Introducción', link: '/es/intro' },
              { text: '🔐 Autenticación', link: '/es/auth-ambiente' },
              { text: '🚦 Límites', link: '/es/boas-praticas' },
              { text: '💡 Ejemplos', link: '/es/exemplos-api-aux' },
            ]
          },
          {
            text: 'Referencia',
            items: [
              { text: '🔗 HATEOAS', link: '/es/navegacao-dados' },
              { text: '📜 Respuestas y Errores', link: '/es/respostas-erros' }
            ]
          }
        ],
        outline: {
          level: [2, 3],
          label: 'En esta página'
        },
        footer: sharedFooter,
        docFooter: {
          prev: 'Página anterior',
          next: 'Siguiente página'
        },
        socialLinks: [
          { icon: 'instagram', link: 'https://www.instagram.com/ainvolves' },
          { icon: 'youtube', link: 'https://www.youtube.com/@involves' },
          { icon: 'linkedin', link: 'https://www.linkedin.com/company/involves' },

        ]
      }
    },

    fr: {
      label: 'Français',
      lang: 'fr',
      themeConfig: {
        siteTitle: false,
        logo: sharedLogo,
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: "Guide de l'API", link: '/fr/intro' },
          { text: "Référence API", link: '/fr/api-reference' }
        ],
        sidebar: [
          {
            text: "Guide de l'API",
            items: [
              { text: '🚀 Introduction', link: '/fr/intro' },
              { text: '🔐 Authentification', link: '/fr/auth-ambiente' },
              { text: '🚦 Limites', link: '/fr/boas-praticas' },
              { text: '💡 Exemples', link: '/fr/exemplos-api-aux' },
            ]
          },
          {
            text: 'Référence',
            items: [
              { text: '🔗 HATEOAS', link: '/fr/navegacao-dados' },
              { text: '📜 Réponses & Erreurs', link: '/fr/respostas-erros' }
            ]
          }
        ],
        outline: {
          level: [2, 3],
          label: 'Sur cette page'
        },
        footer: sharedFooter,
        docFooter: {
          prev: 'Page précédente',
          next: 'Page suivante'
        },
        socialLinks: [
          { icon: 'instagram', link: 'https://www.instagram.com/ainvolves' },
          { icon: 'youtube', link: 'https://www.youtube.com/@involves' },
          { icon: 'linkedin', link: 'https://www.linkedin.com/company/involves' },

        ]
      }
    }
  },

  vite: {
    ssr: {
      noExternal: ['@scalar/api-reference', '@vueuse/motion', '@vueuse/core', 'motion-v']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'scalar-api': ['@scalar/api-reference'],
            'vueuse': ['@vueuse/core', '@vueuse/motion']
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './theme')
      }
    }
  }
})

import { resolve } from 'path'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Involves Stage API Reference",
  description: "Documentação Oficial do Involves Stage",
  lang: 'pt',
  cleanUrls: true,
  lastUpdated: false,

  head: [
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],

  locales: {
    // PT-BR root
    root: {
      label: 'Português (Brasil)',
      lang: 'pt',
      themeConfig: {
        siteTitle: false,
        logo: {
          light: '/logo-involves-dark.png',
          dark: '/logo-involves-light.png',
          alt: 'Logo Involves'
        },
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
              'pt': {
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
        footer: {
          copyright: 'Involves © 2025 · made with care by <a href="https://github.com/rafactx" target="_blank" rel="noopener noreferrer">rafactx</a>'
        },
        docFooter: {
          prev: 'Página anterior',
          next: 'Próxima página'
        }
      }
    },

    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        siteTitle: false,
        logo: {
          light: '/logo-involves-dark.png',
          dark: '/logo-involves-light.png',
          alt: 'Involves Logo'
        },
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
        footer: {
          copyright: 'Involves © 2025 · made with care by <a href="https://github.com/rafactx" target="_blank" rel="noopener noreferrer">rafactx</a>'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        }
      }
    },

    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      themeConfig: {
        siteTitle: false,
        logo: {
          light: '/logo-involves-dark.png',
          dark: '/logo-involves-light.png',
          alt: 'Logo Involves'
        },
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
        footer: {
          copyright: 'Involves © 2025 · made with care by <a href="https://github.com/rafactx" target="_blank" rel="noopener noreferrer">rafactx</a>'
        },
        docFooter: {
          prev: 'Página anterior',
          next: 'Siguiente página'
        }
      }
    },

    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      themeConfig: {
        siteTitle: false,
        logo: {
          light: '/logo-involves-dark.png',
          dark: '/logo-involves-light.png',
          alt: 'Logo Involves'
        },
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
        footer: {
          copyright: 'Involves © 2025 · made with care by <a href="https://github.com/rafactx" target="_blank" rel="noopener noreferrer">rafactx</a>'
        },
        docFooter: {
          prev: 'Page précédente',
          next: 'Page suivante'
        }
      }
    }
  },

  vite: {
    ssr: {
      noExternal: ['@scalar/api-reference', '@vueuse/motion', '@vueuse/core', 'motion-v']
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './theme')
      }
    }
  }
})

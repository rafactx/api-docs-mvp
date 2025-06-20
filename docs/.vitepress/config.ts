import { resolve } from 'path'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "Involves Stage API Reference",
  description: "Documentação Oficial do Involves Stage",

  // Configurações do site
  lang: 'pt-BR',
  cleanUrls: true,
  lastUpdated: false,

  // Meta tags personalizadas
  head: [
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  // Configuração do markdown
  markdown: {
    // Removido temporariamente o plugin de ícones
  },

  // Configuração do Vite
  vite: {
    ssr: {
      noExternal: ['@scalar/api-reference', '@vueuse/motion', '@vueuse/core', 'motion-v']
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './theme')
      }
    }
  },

  themeConfig: {
    siteTitle: false,
    logo: {
      light: '/logo-involves-dark.png',
      dark: '/logo-involves-light.png',
      alt: 'Logo Involves'
    },

    // Configuração do botão de aparência - segue o tema do sistema
    darkModeSwitchLabel: 'Tema',
    darkModeSwitchTitle: 'Alternar tema claro/escuro',

    // Navegação
    nav: [
      { text: 'Home', link: '/pt-br/' },
      { text: 'Guia da API', link: '/pt-br/intro' },
      { text: 'API Reference', link: '/pt-br/api-reference' },
      {
        text: 'Recursos',
        items: [
          { text: 'Exemplos', link: '/pt-br/exemplos-api-aux' },
          { text: 'Boas Práticas', link: '/pt-br/boas-praticas' }
        ]
      }
    ],

    // Barra lateral
    sidebar: [
      {
        text: 'Guia da API',
        items: [
          { text: '🚀 Introdução', link: '/pt-br/intro' },
          { text: '🔐 Autenticação e Cabeçalhos', link: '/pt-br/auth-ambiente' },
          { text: '🚦 Limites e boas práticas', link: '/pt-br/boas-praticas' },
          { text: '💡 Exemplos & APIs Auxiliriares', link: '/pt-br/exemplos-api-aux' },
          { text: '🔗 Navegação de Dados', link: '/pt-br/navegacao-dados' },
          { text: '📜 Respostas & Erros', link: '/pt-br/respostas-erros' },
        ]
      },
    ],

    // Links sociais
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/involves' },
      { icon: 'instagram', link: 'https://www.instagram.com/ainvolves' },
      { icon: 'youtube', link: 'https://www.youtube.com/@InvolvesOficial' }
    ],

    // Configurações de busca
    search: {
      provider: 'local',
      options: {
        locales: {
          'pt-BR': {
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

    // Configuração do índice da página
    outline: {
      level: [2, 3],
      label: 'Nesta página'
    },

    // Rodapé
    footer: {
      copyright: 'Involves © 2025 · made with care by <a href="https://github.com/rafactx" target="_blank" rel="noopener noreferrer">rafactx</a>'
    },

    // Configurações adicionais
    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página'
    }
  }
})

/// <reference types="vite/client" />

declare module '*.vue' {
  const component: any
  export default component
}

declare module 'vitepress/theme' {
  import type { Theme } from 'vitepress'
  const theme: Theme
  export default theme
}

declare module '*.ts' {
  const value: any
  export default value
}

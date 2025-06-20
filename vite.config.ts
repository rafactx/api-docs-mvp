import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  optimizeDeps: {
    include: [
      '@vueuse/core',
      '@vueuse/motion',
      'motion-v',
      'clsx',
      'tailwind-merge',
      'class-variance-authority'
    ]
  },
  ssr: {
    noExternal: ['@vueuse/core', '@vueuse/motion', 'motion-v']
  }
})

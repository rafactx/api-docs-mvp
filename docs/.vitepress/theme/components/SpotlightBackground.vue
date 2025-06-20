<template>
  <div class="spotlight-container" ref="containerRef">
    <!-- Background com spotlight -->
    <div class="spotlight-glow" ref="glowRef" />

    <!-- Slot para conteúdo -->
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inBrowser } from 'vitepress'
import { onMounted, onUnmounted, ref } from 'vue'

const containerRef = ref<HTMLElement | null>(null)
const glowRef = ref<HTMLElement | null>(null)

let cleanup: (() => void) | null = null

onMounted(() => {
  if (!inBrowser) return

  const updateSpotlight = (e: MouseEvent) => {
    if (!glowRef.value || !containerRef.value) return

    const { left, top } = containerRef.value.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    glowRef.value.style.setProperty('--x', `${x}px`)
    glowRef.value.style.setProperty('--y', `${y}px`)
  }

  window.addEventListener('mousemove', updateSpotlight)

  cleanup = () => {
    window.removeEventListener('mousemove', updateSpotlight)
  }
})

onUnmounted(() => {
  cleanup?.()
})
</script>

<style scoped>
.spotlight-container {
  position: relative;
  min-height: 100vh;
  background: var(--vp-c-bg);
  overflow: hidden;
}

.spotlight-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  --x: 50vw;
  --y: 50vh;
  /* Novo gradiente: centro claro, azul brand, depois púrpura */
  background: radial-gradient(
    600px circle at var(--x, 50vw) var(--y, 50vh),
    rgba(255, 255, 255, 0.33) 0%,
    rgba(70, 147, 248, 0.18) 18%,
    rgba(147, 51, 234, 0.10) 50%,
    transparent 85%
  );
  filter: blur(32px);  /* Difusão real da luz */
  transition: background 0.25s cubic-bezier(.42,0,.58,1), filter 0.21s;
}

/* Gradient overlay para depth */
.spotlight-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(70, 147, 248, 0.03) 0%,
    transparent 60%,
    rgba(147, 51, 234, 0.04) 100%
  );
  z-index: 0;
  pointer-events: none;
}

:root.dark .spotlight-glow {
  background: radial-gradient(
    700px circle at var(--x, 50vw) var(--y, 50vh),
    rgba(70, 147, 248, 0.12) 0%,
    rgba(147, 51, 234, 0.09) 50%,
    transparent 85%
  );
  filter: blur(24px);
}

:root.dark .spotlight-container::before {
  background: linear-gradient(
    135deg,
    rgba(70, 147, 248, 0.08) 0%,
    transparent 60%,
    rgba(147, 51, 234, 0.12) 100%
  );
}

/* Conteúdo sempre acima */
.spotlight-container > :slotted(*) {
  position: relative;
  z-index: 2;
}
</style>

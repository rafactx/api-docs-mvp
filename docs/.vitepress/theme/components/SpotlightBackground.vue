<template>
  <div class="spotlight-container" ref="containerRef">
    <!-- Background com spotlight -->
    <div class="spotlight-glow" ref="glowRef" />

    <!-- Slot para conteúdo -->
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const containerRef = ref<HTMLElement | null>(null)
const glowRef = ref<HTMLElement | null>(null)

let cleanup: (() => void) | null = null

onMounted(() => {
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
  background: radial-gradient(
    800px circle at var(--x, 50vw) var(--y, 50vh),
    rgba(59, 130, 246, 0.08),
    rgba(147, 51, 234, 0.03) 40%,
    transparent 70%
  );
  transition: background 0.15s ease;
}

/* Gradient overlay para depth */
.spotlight-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.02) 0%,
    transparent 50%,
    rgba(147, 51, 234, 0.02) 100%
  );
  z-index: 0;
  pointer-events: none;
}

/* Conteúdo sempre acima */
.spotlight-container > :slotted(*) {
  position: relative;
  z-index: 2;
}
</style>

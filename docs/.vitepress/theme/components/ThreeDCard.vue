<template>
  <div class="card-container" ref="containerRef">
    <div
      class="card-body"
      :style="cardStyle"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <div
        class="card-item"
        :style="{ transform: `translateZ(${translateZ}px)` }"
      >
        <slot name="title"></slot>
      </div>

      <div
        class="card-item"
        :style="{ transform: `translateZ(${translateZ + 10}px)` }"
      >
        <slot name="description"></slot>
      </div>

      <div
        class="card-item"
        :style="{ transform: `translateZ(${translateZ + 50}px)` }"
      >
        <slot name="image"></slot>
      </div>

      <div class="card-actions">
        <div
          class="card-item"
          :style="{ transform: `translateZ(${translateZ + 20}px)` }"
        >
          <slot name="action-left"></slot>
        </div>
        <div
          class="card-item"
          :style="{ transform: `translateZ(${translateZ + 20}px)` }"
        >
          <slot name="action-right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  translateZ?: number
  perspective?: number
}

const props = withDefaults(defineProps<Props>(), {
  translateZ: 50,
  perspective: 1000
})

const containerRef = ref<HTMLElement | null>(null)
const isHovered = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)

const cardStyle = computed(() => {
  if (!isHovered.value) {
    return {
      transform: 'rotateX(0deg) rotateY(0deg)'
    }
  }

  const rect = containerRef.value?.getBoundingClientRect()
  if (!rect) return {}

  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  const rotateX = (mouseY.value - centerY) / 20
  const rotateY = (centerX - mouseX.value) / 20

  return {
    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }
})

const handleMouseMove = (event: MouseEvent) => {
  isHovered.value = true
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

const handleMouseLeave = () => {
  isHovered.value = false
}
</script>

<style scoped>
.card-container {
  perspective: v-bind(perspective + 'px');
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
}

.card-body {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 24px;
  position: relative;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  will-change: transform;
}

.card-body:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.dark .card-body {
  background: var(--vp-c-bg-elv);
  border-color: rgba(255, 255, 255, 0.2);
}

.dark .card-body:hover {
  box-shadow: 0 20px 40px rgba(16, 185, 129, 0.1);
}

.card-item {
  transition: transform 0.3s ease;
  transform-style: preserve-3d;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
}

/* Responsividade */
@media (max-width: 640px) {
  .card-container {
    max-width: 100%;
  }

  .card-body {
    padding: 16px;
  }

  .card-actions {
    margin-top: 40px;
  }
}
</style>

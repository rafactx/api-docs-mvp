<template>
  <SpotlightBackground>
    <section class="features" id="features">
      <div class="container">
        <div
          class="section-header"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }"
        >
          <h2 class="section-title">Recursos Poderosos</h2>
          <p class="section-subtitle">
            Tecnologia de ponta para uma experiência excepcional
          </p>
        </div>

        <div class="features-grid">
          <article
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card"
            :ref="el => cardRefs[index] = el"
            @mousemove="(e) => handleCardMouseMove(e, index)"
            @mouseleave="() => handleCardMouseLeave(index)"
            v-motion
            :initial="{ opacity: 0, y: 50, rotateX: 10 }"
            :enter="{
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: { delay: index * 0.15, duration: 1, ease: 'easeOut' }
            }"
          >
            <!-- Spotlight individual do card -->
            <div class="card-spotlight" :ref="el => spotlightRefs[index] = el"></div>

            <!-- Background glass effect -->
            <div class="card-glass"></div>

            <!-- Conteúdo do card -->
            <div class="card-content">
              <div class="feature-icon-container">
                <div class="feature-icon" :style="{ background: feature.gradient }">
                  <component :is="feature.icon" class="icon" />
                </div>
                <div class="icon-reflection"></div>
              </div>

              <div class="card-text">
                <h3 class="feature-title">{{ feature.title }}</h3>
                <p class="feature-description">{{ feature.description }}</p>
              </div>

              <!-- Subtle indicator -->
              <div class="card-indicator">
                <div class="indicator-dot"></div>
              </div>
            </div>

            <!-- Border gradient -->
            <div class="card-border"></div>
          </article>
        </div>
      </div>
    </section>
  </SpotlightBackground>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, h } from 'vue'
import { useMotion } from '@vueuse/motion'
import SpotlightBackground from './SpotlightBackground.vue'

// Refs para cards e spotlights
const cardRefs = ref<(HTMLElement | null)[]>([])
const spotlightRefs = ref<(HTMLElement | null)[]>([])
const cardStates = reactive<{ [key: number]: { isHovered: boolean, mouseX: number, mouseY: number } }>({})

// Ícones usando SVG components
const RocketIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  h('path', { d: 'm9 9 3-3 3 3' }),
  h('path', { d: 'm6 6 3 3 3-3' }),
  h('path', { d: 'M6 18h12' }),
  h('path', { d: 'M9 21v-6' }),
  h('path', { d: 'M15 21v-6' })
])

const SparklesIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  h('path', { d: 'm9 11 3 3L22 4' }),
  h('path', { d: 'm21 3-6.5 18a.55.55 0 0 1-1 0L7 14h-3a.5.5 0 0 1-.48-.64l5.5-16a.5.5 0 0 1 .95-.05z' })
])

const SearchIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  h('circle', { cx: '11', cy: '11', r: '8' }),
  h('path', { d: 'm21 21-4.35-4.35' })
])

const DeviceIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  h('rect', { x: '2', y: '3', width: '20', height: '14', rx: '2', ry: '2' }),
  h('line', { x1: '8', y1: '21', x2: '16', y2: '21' }),
  h('line', { x1: '12', y1: '17', x2: '12', y2: '21' })
])

const MoonIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  h('path', { d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' })
])

const ZapIcon = () => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}, [
  h('polygon', { points: '13,2 3,14 12,14 11,22 21,10 12,10' })
])

const features = [
  {
    icon: RocketIcon,
    title: 'Performance Extrema',
    description: 'Carregamento instantâneo com otimizações avançadas e cache inteligente.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    icon: SparklesIcon,
    title: 'Design Intuitivo',
    description: 'Interface limpa e moderna seguindo os padrões de design da Apple.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    icon: SearchIcon,
    title: 'Busca Inteligente',
    description: 'Encontre o que precisa rapidamente com nossa busca contextual avançada.',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    icon: DeviceIcon,
    title: 'Totalmente Responsivo',
    description: 'Experiência perfeita em qualquer dispositivo, do mobile ao desktop.',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    icon: MoonIcon,
    title: 'Modo Escuro',
    description: 'Alterne facilmente entre temas claro e escuro para maior conforto.',
    gradient: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)'
  },
  {
    icon: ZapIcon,
    title: 'Tempo Real',
    description: 'Atualizações instantâneas e sincronização em tempo real.',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  }
]

// Handlers para efeito de mouse nos cards
const handleCardMouseMove = (e: MouseEvent, index: number) => {
  const card = cardRefs.value[index]
  const spotlight = spotlightRefs.value[index]

  if (!card || !spotlight) return

  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  // Atualiza spotlight do card
  spotlight.style.setProperty('--x', `${x}px`)
  spotlight.style.setProperty('--y', `${y}px`)
  spotlight.style.opacity = '1'

  // Atualiza estado do card
  cardStates[index] = {
    isHovered: true,
    mouseX: x,
    mouseY: y
  }

  // Efeito de inclinação 3D
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = (y - centerY) / 20
  const rotateY = (centerX - x) / 20

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.02)`
}

const handleCardMouseLeave = (index: number) => {
  const card = cardRefs.value[index]
  const spotlight = spotlightRefs.value[index]

  if (!card || !spotlight) return

  spotlight.style.opacity = '0'
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)'

  cardStates[index] = {
    isHovered: false,
    mouseX: 0,
    mouseY: 0
  }
}

onMounted(() => {
  // Inicializa estados dos cards
  features.forEach((_, index) => {
    cardStates[index] = {
      isHovered: false,
      mouseX: 0,
      mouseY: 0
    }
  })
})
</script>

<style scoped>
/* === Layout Base ======================================================= */
.features {
  padding: 120px 0 140px;
  position: relative;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

/* === Header Section ==================================================== */
.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin-bottom: 16px;
  background: linear-gradient(180deg, var(--vp-c-text-1) 0%, var(--vp-c-text-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: clamp(1.125rem, 2.5vw, 1.375rem);
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* === Grid Layout ======================================================= */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 32px;
  perspective: 1000px;
}

/* === Card Styling (Apple HIG) ========================================== */
.feature-card {
  position: relative;
  min-height: 320px;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  will-change: transform;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  transform-style: preserve-3d;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* === Card Spotlight Effect ============================================= */
.card-spotlight {
  position: absolute;
  inset: 0;
  opacity: 0;
  background: radial-gradient(
    400px circle at var(--x, 0px) var(--y, 0px),
    rgba(59, 130, 246, 0.15),
    rgba(147, 51, 234, 0.08) 40%,
    transparent 70%
  );
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;
}

/* === Glass Effect ====================================================== */
.card-glass {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.02) 100%
  );
  pointer-events: none;
  z-index: 2;
}

/* === Card Content ====================================================== */
.card-content {
  position: relative;
  z-index: 3;
  padding: 40px 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* === Icon Styling ====================================================== */
.feature-icon-container {
  position: relative;
  margin-bottom: 32px;
}

.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-1);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.15),
    0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.feature-icon .icon {
  width: 28px;
  height: 28px;
  color: white;
  stroke-width: 2.5;
}

.icon-reflection {
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  height: 30%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  border-radius: 14px 14px 0 0;
  pointer-events: none;
}

/* === Text Content ====================================================== */
.card-text {
  flex: 1;
}

.feature-title {
  font-size: 22px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 12px;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.feature-description {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  font-size: 15px;
  margin: 0;
}

/* === Card Indicator ==================================================== */
.card-indicator {
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  opacity: 0.4;
  transition: all 0.3s ease;
}

/* === Border Effect ===================================================== */
.card-border {
  position: absolute;
  inset: 0;
  border-radius: 24px;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.3),
    rgba(147, 51, 234, 0.2),
    transparent 50%,
    rgba(59, 130, 246, 0.1)
  );
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 4;
}

/* === Hover Effects ===================================================== */
.feature-card:hover .card-border {
  opacity: 1;
}

.feature-card:hover .feature-icon {
  transform: translateY(-2px);
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.15);
}

.feature-card:hover .indicator-dot {
  opacity: 1;
  transform: scale(1.2);
}

/* === Responsive Design ================================================= */
@media (max-width: 1200px) {
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .features {
    padding: 80px 0 100px;
  }

  .container {
    padding: 0 20px;
  }

  .section-header {
    margin-bottom: 60px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .feature-card {
    min-height: 280px;
  }

  .card-content {
    padding: 32px 24px;
  }

  /* Disable 3D effects on mobile */
  .feature-card {
    transform: none !important;
  }
}

@media (max-width: 480px) {
  .features {
    padding: 60px 0 80px;
  }

  .container {
    padding: 0 16px;
  }

  .card-content {
    padding: 28px 20px;
  }

  .feature-icon {
    width: 56px;
    height: 56px;
  }

  .feature-icon .icon {
    width: 24px;
    height: 24px;
  }
}

/* === Accessibility ===================================================== */
@media (prefers-reduced-motion: reduce) {
  .feature-card {
    transition: none;
  }

  .feature-card:hover {
    transform: none;
  }
}

/* === Dark mode adjustments ============================================= */
@media (prefers-color-scheme: dark) {
  .feature-card {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.08);
  }
}
</style>

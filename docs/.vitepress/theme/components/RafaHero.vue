<template>
  <section class="hero-stars">
    <!-- Falling Stars Background -->
    <canvas
      ref="starsCanvas"
      class="stars-canvas"
    ></canvas>

    <!-- Animated Gradient Overlay -->
    <div class="gradient-overlay"></div>

    <!-- Dark Overlay -->
    <div class="dark-overlay"></div>

    <!-- Main Content with Blur Reveal -->
    <div class="hero-content" :class="{ 'content-visible': isVisible }">
      <div class="content-wrapper">
        <!-- Main Title with Flip Words and Letter Animation -->
        <h1 class="main-title">
          <span class="title-line">
            <span class="static-text">
              <span
                v-for="(letter, index) in 'Building'.split('')"
                :key="index"
                class="letter"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                {{ letter }}
              </span>
            </span>
            <span class="flip-words-container">
              <span
                v-for="(word, index) in words"
                :key="word"
                class="flip-word"
                :class="{ 'word-active': index === currentWordIndex }"
              >
                <span
                  v-for="(letter, letterIndex) in word.split('')"
                  :key="letterIndex"
                  class="flip-letter"
                  :style="{ animationDelay: `${letterIndex * 0.05}s` }"
                >
                  {{ letter }}
                </span>
              </span>
            </span>
          </span>
          <span class="title-line">
            <span
              v-for="(letter, index) in 'web experience'.split('')"
              :key="index"
              class="letter"
              :style="{ animationDelay: `${(index + 8) * 0.1}s` }"
            >
              {{ letter === ' ' ? '\u00A0' : letter }}
            </span>
          </span>
        </h1>

        <!-- Subtitle with Typewriter Effect -->
        <p class="subtitle" :class="{ 'subtitle-visible': isVisible }">
          <span class="typewriter-text">{{ displayedSubtitle }}</span>
        </p>

        <!-- Action Buttons with Stagger Animation -->
        <div class="action-buttons">
          <button
            class="btn btn-primary"
            @click="getStarted"
            :style="{ animationDelay: '2s' }"
          >
            <span class="btn-text">Get Started</span>
            <span class="btn-shine"></span>
          </button>
          <button
            class="btn btn-secondary"
            @click="learnMore"
            :style="{ animationDelay: '2.2s' }"
          >
            <span class="btn-text">Learn More</span>
            <span class="btn-glow"></span>
          </button>
        </div>

        <!-- MacBook Preview with Enhanced Border Beam -->
        <div
          class="macbook-container"
          :style="{ animationDelay: '2.5s' }"
        >
          <div class="macbook-wrapper">
            <img
              src="/macbook.png"
              alt="MacBook Preview"
              class="macbook-image"
              @load="onImageLoad"
            />
            <!-- Enhanced Border Beam with Multiple Colors -->
            <div class="border-beam">
              <div class="beam-gradient beam-1"></div>
              <div class="beam-gradient beam-2"></div>
            </div>
            <!-- Reflection Effect -->
            <div class="macbook-reflection"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Particles -->
    <div class="floating-particles">
      <div
        v-for="i in 20"
        :key="i"
        class="particle"
        :style="{
          left: Math.random() * 100 + '%',
          animationDelay: Math.random() * 10 + 's',
          animationDuration: (Math.random() * 10 + 10) + 's'
        }"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Component state
const isVisible = ref(false)
const starsCanvas = ref<HTMLCanvasElement | null>(null)
const currentWordIndex = ref(0)
const displayedSubtitle = ref('')

// Content
const words = ['beautiful', 'stunning', 'amazing']
const fullSubtitle = 'Inspira UI is the new way to build beautiful website'

// Stars animation
interface Star {
  x: number
  y: number
  z: number
  speed: number
}

let stars: Star[] = []
let animationId: number = 0
let ctx: CanvasRenderingContext2D | null = null
let perspective: number = 0

// Animation intervals
let flipWordsInterval: number = 0
let typewriterTimeout: number = 0

onMounted(() => {
  // Show content with delay
  setTimeout(() => {
    isVisible.value = true
    startTypewriter()
  }, 800)

  // Initialize stars
  initStars()

  // Start flip words animation with delay
  setTimeout(() => {
    startFlipWords()
  }, 3000)

  // Handle resize
  window.addEventListener('resize', resizeCanvas)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  if (flipWordsInterval) {
    clearInterval(flipWordsInterval)
  }
  if (typewriterTimeout) {
    clearTimeout(typewriterTimeout)
  }
  window.removeEventListener('resize', resizeCanvas)
})

// Typewriter Effect
const startTypewriter = () => {
  let currentIndex = 0
  const type = () => {
    if (currentIndex < fullSubtitle.length) {
      displayedSubtitle.value = fullSubtitle.slice(0, currentIndex + 1)
      currentIndex++
      typewriterTimeout = setTimeout(type, 50)
    }
  }
  setTimeout(type, 1500) // Start after title animation
}

// Enhanced Stars Animation
const initStars = () => {
  const canvas = starsCanvas.value
  if (!canvas) return

  resizeCanvas()
  ctx = canvas.getContext('2d')
  if (!ctx) return

  perspective = canvas.width / 2
  stars = []

  // Create stars with varied properties
  for (let i = 0; i < 300; i++) {
    stars.push({
      x: (Math.random() - 0.5) * 3 * canvas.width,
      y: (Math.random() - 0.5) * 3 * canvas.height,
      z: Math.random() * canvas.width,
      speed: Math.random() * 8 + 1
    })
  }

  animate()
}

const resizeCanvas = () => {
  const canvas = starsCanvas.value
  if (!canvas) return

  canvas.width = canvas.clientWidth
  canvas.height = canvas.clientHeight
}

const drawStar = (star: Star) => {
  const canvas = starsCanvas.value
  if (!canvas || !ctx) return

  const scale = perspective / (perspective + star.z)
  const x2d = canvas.width / 2 + star.x * scale
  const y2d = canvas.height / 2 + star.y * scale
  const size = Math.max(scale * 4, 0.5)

  // Skip if outside viewport
  if (x2d < -50 || x2d > canvas.width + 50 || y2d < -50 || y2d > canvas.height + 50) {
    return
  }

  // Previous position for trail
  const prevScale = perspective / (perspective + star.z + star.speed * 20)
  const xPrev = canvas.width / 2 + star.x * prevScale
  const yPrev = canvas.height / 2 + star.y * prevScale

  // Color based on speed and distance
  const alpha = Math.min(scale * 2, 1)
  const speedFactor = star.speed / 8

  // Draw glowing trail
  ctx.save()
  ctx.strokeStyle = `rgba(${255 * speedFactor}, ${200 + 55 * speedFactor}, 255, ${alpha * 0.3})`
  ctx.lineWidth = size * 3
  ctx.shadowBlur = 40
  ctx.shadowColor = `rgba(${255 * speedFactor}, ${200 + 55 * speedFactor}, 255, ${alpha * 0.8})`
  ctx.beginPath()
  ctx.moveTo(x2d, y2d)
  ctx.lineTo(xPrev, yPrev)
  ctx.stroke()
  ctx.restore()

  // Draw sharp core
  ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.8})`
  ctx.lineWidth = size
  ctx.beginPath()
  ctx.moveTo(x2d, y2d)
  ctx.lineTo(xPrev, yPrev)
  ctx.stroke()

  // Draw bright star point
  ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
  ctx.beginPath()
  ctx.arc(x2d, y2d, size / 3, 0, Math.PI * 2)
  ctx.fill()
}

const animate = () => {
  const canvas = starsCanvas.value
  if (!canvas || !ctx) return

  // Fade out previous frame for trail effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  stars.forEach((star) => {
    drawStar(star)

    star.z -= star.speed

    if (star.z <= 0) {
      star.z = canvas.width
      star.x = (Math.random() - 0.5) * 3 * canvas.width
      star.y = (Math.random() - 0.5) * 3 * canvas.height
      star.speed = Math.random() * 8 + 1
    }
  })

  animationId = requestAnimationFrame(animate)
}

// Flip Words Animation
const startFlipWords = () => {
  flipWordsInterval = setInterval(() => {
    currentWordIndex.value = (currentWordIndex.value + 1) % words.length
  }, 3000)
}

// Image load handler
const onImageLoad = () => {
  // Image loaded successfully
}

// Button handlers
const getStarted = () => {
  // Navigate to components
  console.log('Get Started clicked')
}

const learnMore = () => {
  // Navigate to blocks
  console.log('Learn More clicked')
}
</script>

<style scoped>
/* === Base Layout =================================================== */
.hero-stars {
  position: relative;
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #000000 100%);
  overflow: hidden;
}

/* === Background Effects ========================================= */
.stars-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.gradient-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 30% 70%,
    rgba(59, 130, 246, 0.1) 0%,
    transparent 50%
  ), radial-gradient(
    circle at 70% 30%,
    rgba(147, 51, 234, 0.08) 0%,
    transparent 50%
  );
  z-index: 1;
  animation: gradientShift 20s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% {
    opacity: 0.8;
    transform: scale(1) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.1) rotate(1deg);
  }
}

.dark-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
}

/* === Floating Particles ========================================= */
.floating-particles {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: float-particle linear infinite;
}

@keyframes float-particle {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: scale(1);
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) scale(0);
    opacity: 0;
  }
}

/* === Main Content =============================================== */
.hero-content {
  position: relative;
  z-index: 3;
  display: flex;
  max-width: 48rem;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  filter: blur(10px);
  transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1);
}

.hero-content.content-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  padding: 0 2rem;
}

/* === Enhanced Typography ======================================== */
.main-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #ffffff, #e5e5e5, #9ca3af);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

.title-line {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

/* === Letter Animation ========================================== */
.letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(50px) rotateX(90deg);
  animation: letterReveal 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes letterReveal {
  0% {
    opacity: 0;
    transform: translateY(50px) rotateX(90deg);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
    filter: blur(0);
  }
}

/* === Enhanced Flip Words ======================================= */
.flip-words-container {
  position: relative;
  display: inline-block;
  width: 15rem;
  height: 1.3em;
  overflow: hidden;
  perspective: 1000px;
}

.flip-word {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
  transform: translateY(100%) rotateX(90deg) scale(0.8);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  animation: gradientShimmer 3s ease-in-out infinite;
}

.flip-word.word-active {
  opacity: 1;
  transform: translateY(0) rotateX(0deg) scale(1);
}

.flip-letter {
  display: inline-block;
  animation: letterPop 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes letterPop {
  0% {
    transform: scale(0.8) rotateY(-20deg);
    opacity: 0;
  }
  100% {
    transform: scale(1) rotateY(0deg);
    opacity: 1;
  }
}

@keyframes gradientShimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* === Enhanced Subtitle ========================================== */
.subtitle {
  text-align: center;
  font-size: clamp(1.125rem, 3vw, 1.375rem);
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 2.5rem 0;
  line-height: 1.7;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.subtitle.subtitle-visible {
  opacity: 1;
  transform: translateY(0);
}

.typewriter-text::after {
  content: '|';
  color: #3b82f6;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* === Enhanced Action Buttons ==================================== */
.action-buttons {
  margin: 0.5rem 0 3rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  transform: translateY(30px);
  opacity: 0;
  animation: buttonReveal 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes buttonReveal {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8, #7c3aed);
  color: white;
  box-shadow:
    0 8px 25px rgba(59, 130, 246, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

.btn-primary:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow:
    0 15px 35px rgba(59, 130, 246, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px) scale(1.05);
  border-color: rgba(255, 255, 255, 0.3);
}

/* === Button Effects ============================================= */
.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s;
}

.btn-primary:hover .btn-shine {
  left: 100%;
}

.btn-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
}

.btn-secondary:hover .btn-glow {
  opacity: 0.3;
}

.btn-text {
  position: relative;
  z-index: 2;
}

/* === Enhanced MacBook Container ================================= */
.macbook-container {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 800px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 3px;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2));
  transform: translateY(40px);
  opacity: 0;
  animation: macbookReveal 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes macbookReveal {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

.macbook-wrapper {
  position: relative;
  width: 100%;
  border-radius: 0.75rem;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
}

.macbook-image {
  width: 100%;
  border-radius: 0.75rem;
  display: block;
  transition: transform 0.3s ease;
}

.macbook-wrapper:hover .macbook-image {
  transform: scale(1.02);
}

/* === Enhanced Border Beam ====================================== */
.border-beam {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
}

.beam-gradient {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  animation: beamRotate 10s linear infinite;
}

.beam-1 {
  background: radial-gradient(circle, #3b82f6, transparent 70%);
  animation-delay: 0s;
}

.beam-2 {
  background: radial-gradient(circle, #8b5cf6, transparent 70%);
  animation-delay: -5s;
}

@keyframes beamRotate {
  0% {
    transform: rotate(0deg) translateX(300px) rotate(0deg);
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
  100% {
    transform: rotate(360deg) translateX(300px) rotate(-360deg);
    opacity: 0;
  }
}

/* === MacBook Reflection ========================================= */
.macbook-reflection {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 30%,
    rgba(255, 255, 255, 0.05) 70%,
    transparent 100%
  );
  border-radius: inherit;
  pointer-events: none;
  z-index: 3;
  animation: reflectionShift 8s ease-in-out infinite;
}

@keyframes reflectionShift {
  0%, 100% {
    opacity: 0.5;
    transform: translateX(-20px) translateY(-20px);
  }
  50% {
    opacity: 0.8;
    transform: translateX(20px) translateY(20px);
  }
}

/* === Responsive Design ========================================== */
@media (max-width: 768px) {
  .main-title {
    font-size: clamp(2rem, 10vw, 3.5rem);
  }

  .action-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .btn {
    width: 100%;
    max-width: 250px;
  }

  .content-wrapper {
    gap: 0.25rem;
    padding: 0 1rem;
  }

  .flip-words-container {
    width: 12rem;
  }

  .title-line {
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .hero-content {
    max-width: 100%;
    padding: 0 1rem;
  }

  .flip-words-container {
    width: 10rem;
  }

  .macbook-container {
    max-width: 100%;
  }

  .main-title {
    margin-bottom: 1.5rem;
  }

  .subtitle {
    margin-bottom: 2rem;
  }
}

/* === Accessibility & Performance ============================ */
@media (prefers-reduced-motion: reduce) {
  .hero-content,
  .flip-word,
  .btn,
  .letter,
  .gradient-overlay,
  .beam-gradient,
  .macbook-reflection,
  .particle {
    animation: none;
    transition: none;
  }

  .hero-content.content-visible {
    opacity: 1;
    transform: none;
    filter: none;
  }
}

/* === Performance Optimizations ================================= */
.macbook-image,
.flip-word,
.beam-gradient,
.particle {
  will-change: transform;
}

.stars-canvas {
  will-change: auto;
}

/* === Dark Mode Support ========================================= */
@media (prefers-color-scheme: light) {
  .hero-stars {
    background: radial-gradient(ellipse at center, #f8fafc 0%, #e2e8f0 50%, #64748b 100%);
  }

  .main-title {
    background: linear-gradient(to bottom, #1e293b, #475569, #64748b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    color: rgba(15, 23, 42, 0.8);
  }
}
</style>

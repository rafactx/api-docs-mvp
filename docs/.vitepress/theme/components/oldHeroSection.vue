<template>
  <div class="hero-container">


    <!-- Decorative borders -->
    <div class="border-left">
      <div class="gradient-top"></div>
    </div>
    <div class="border-right">
      <div class="gradient-right"></div>
    </div>
    <div class="border-bottom">
      <div class="gradient-bottom"></div>
    </div>

    <!-- Main content -->
    <div class="main-content">
      <!-- Animated headline -->
      <h1 class="headline">
        <span
          v-for="(word, index) in headlineWords"
          :key="index"
          class="word-span"
          v-motion
          :initial="{ opacity: 0, filter: 'blur(4px)', y: 10 }"
          :enter="{
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
              duration: 0.3,
              delay: index * 0.1,
              ease: 'easeInOut'
            }
          }"
        >
          {{ word }}
        </span>
      </h1>

      <!-- Animated paragraph -->
      <p
        class="subtitle"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{
          opacity: 1,
          transition: {
            duration: 0.3,
            delay: 0.8
          }
        }"
      >
      A nova documentação da API do Involves Stage foi feita para desenvolvedores que querem clareza, organização e agilidade. Cada endpoint agora é explicado com contexto, exemplos reais e uma estrutura que facilita a integração do começo ao fim.
      </p>

      <!-- Animated buttons -->
      <div
        class="buttons-container"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{
          opacity: 1,
          transition: {
            duration: 0.3,
            delay: 1
          }
        }"
      >
        <button class="primary-button">Conheça a API</button>
        <button class="secondary-button">Central de Ajuda</button>
      </div>

      <!-- Animated image preview -->
      <div
        class="image-preview"
        v-motion
        :initial="{ opacity: 0, y: 10 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            delay: 1.2
          }
        }"
      >
        <div class="image-container">
          <img
            src="/scalar.png"
            alt="Landing page preview"
            class="preview-image"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Split headline into words for animation
const headlineWords = computed(() => {
  return "Involves Stage API ".split(" ")
})
</script>

<style scoped>
.hero-container {
  position: relative;
  margin: 2.5rem auto;
  display: flex;
  max-width: 1280px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

/* Navbar */
.navbar {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(163, 163, 163, 0.3);
  border-bottom: 1px solid rgba(163, 163, 163, 0.3);
  padding: 1rem;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-gradient {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
}

.brand-title {
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: var(--vp-c-text-1);
}

.login-button {
  width: 6rem;
  transform: translateY(0);
  border-radius: 0.5rem;
  background: var(--vp-c-text-1);
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  color: var(--vp-c-bg);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-button:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

/* Decorative borders */
.border-left {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 1px;
  background: rgba(163, 163, 163, 0.3);
}

.gradient-top {
  position: absolute;
  top: 0;
  height: 10rem;
  width: 1px;
  background: linear-gradient(to bottom, transparent, #3b82f6, transparent);
}

.border-right {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 1px;
  background: rgba(163, 163, 163, 0.3);
}

.gradient-right {
  position: absolute;
  height: 10rem;
  width: 1px;
  background: linear-gradient(to bottom, transparent, #3b82f6, transparent);
}

.border-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 100%;
  background: rgba(163, 163, 163, 0.3);
}

.gradient-bottom {
  position: absolute;
  margin: 0 auto;
  height: 1px;
  width: 10rem;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(to right, transparent, #3b82f6, transparent);
}

/* Main content */
.main-content {
  padding: 2.5rem 1rem;
  text-align: center;
}

.headline {
  position: relative;
  z-index: 10;
  margin: 0 auto;
  max-width: 56rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.word-span {
  margin-right: 0.5rem;
  display: inline-block;
}

.subtitle {
  position: relative;
  z-index: 10;
  margin: 0 auto;
  max-width: 36rem;
  padding: 1rem 0;
  text-align: center;
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--vp-c-text-2);
  line-height: 1.75;
}

.buttons-container {
  position: relative;
  z-index: 10;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.primary-button {
  width: 15rem;
  transform: translateY(0);
  border-radius: 0.5rem;
  background: var(--vp-c-text-1);
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  color: var(--vp-c-bg);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.secondary-button {
  width: 15rem;
  transform: translateY(0);
  border-radius: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  transform: translateY(-2px);
  background: var(--vp-c-bg-soft);
}

.image-preview {
  position: relative;
  z-index: 10;
  margin-top: 5rem;
  border-radius: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.image-container {
  width: 100%;
  overflow: hidden;
  border-radius: 0.75rem;
  border: 1px solid var(--vp-c-divider);
}

.preview-image {
  aspect-ratio: 16/9;
  height: auto;
  width: 100%;
  object-fit: cover;
  display: block;
}

/* Responsive design */
@media (min-width: 768px) {
  .main-content {
    padding: 2.5rem 5rem;
  }

  .headline {
    font-size: 2.25rem;
  }

  .brand-title {
    font-size: 1.5rem;
  }

  .login-button {
    width: 8rem;
  }
}

@media (min-width: 1024px) {
  .headline {
    font-size: 4.5rem;
  }
}

@media (max-width: 768px) {
  .buttons-container {
    flex-direction: column;
    width: 100%;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
    justify-content: center;
  }

  .hero-container {
    margin: 1rem auto;
  }

  .main-content {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding: 1rem 0.75rem;
  }

  .headline {
    font-size: 1.875rem;
  }

  .brand-title {
    font-size: 1rem;
  }

  .login-button {
    width: 6rem;
    padding: 0.375rem 1rem;
  }
}

/* Dark mode adjustments */
.dark .navbar {
  border-top-color: rgba(82, 82, 82, 0.8);
  border-bottom-color: rgba(82, 82, 82, 0.8);
}

.dark .border-left,
.dark .border-right,
.dark .border-bottom {
  background: rgba(82, 82, 82, 0.8);
}

.dark .image-preview {
  border-color: rgba(82, 82, 82, 0.8);
  background: rgba(31, 31, 31, 1);
}

.dark .image-container {
  border-color: rgba(113, 113, 113, 1);
}
</style>

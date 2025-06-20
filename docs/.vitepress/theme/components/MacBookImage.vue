<template>
  <div class="macbook-container">
    <div class="macbook-image" :class="{ 'is-visible': isVisible }">
      <img
        src="/macbook.png"
        alt="MacBook com Involves Stage"
        @load="onImageLoad"
        class="macbook-img"
      />
      <div class="macbook-glow"></div>
      <div class="macbook-reflection"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const onImageLoad = () => {
  // Pequeno delay para garantir que a imagem foi carregada
  setTimeout(() => {
    isVisible.value = true
  }, 100)
}

onMounted(() => {
  // Fallback caso a imagem já esteja em cache
  setTimeout(() => {
    isVisible.value = true
  }, 500)
})
</script>

<style scoped>
.macbook-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
  perspective: 1000px;
}

.macbook-image {
  position: relative;
  transform: translateY(50px) scale(0.9);
  opacity: 0;
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
}

.macbook-image.is-visible {
  transform: translateY(0) scale(1);
  opacity: 1;
}

.macbook-img {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 2;
}

.macbook-img:hover {
  transform: scale(1.02) rotateY(2deg);
}

/* Efeito de brilho */
.macbook-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(0, 122, 255, 0.1) 0%,
    rgba(88, 86, 214, 0.05) 30%,
    transparent 70%
  );
  border-radius: 30px;
  z-index: 1;
  animation: glow 4s ease-in-out infinite;
  opacity: 0;
  transition: opacity 1s ease;
}

.macbook-image.is-visible .macbook-glow {
  opacity: 1;
}

@keyframes glow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

/* Efeito de reflexo */
.macbook-reflection {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    transparent 100%
  );
  border-radius: 20px;
  z-index: 3;
  pointer-events: none;
  animation: reflection 6s ease-in-out infinite;
}

@keyframes reflection {
  0%, 100% {
    opacity: 0.3;
    transform: translateX(-10px) translateY(-10px);
  }
  50% {
    opacity: 0.6;
    transform: translateX(10px) translateY(10px);
  }
}

/* Animação de flutuação */
.macbook-image.is-visible {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-15px) scale(1.02);
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .macbook-container {
    margin: 2rem 0;
  }

  .macbook-img {
    max-width: 90%;
  }

  .macbook-glow {
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
  }
}

@media (max-width: 480px) {
  .macbook-img {
    max-width: 85%;
  }

  .macbook-image {
    transform: translateY(30px) scale(0.85);
  }

  .macbook-image.is-visible {
    transform: translateY(0) scale(0.85);
  }
}

/* Efeito de entrada com stagger */
.macbook-image.is-visible .macbook-img {
  animation: slideInUp 0.8s ease-out 0.2s both;
}

.macbook-image.is-visible .macbook-glow {
  animation: fadeIn 1s ease-out 0.4s both, glow 4s ease-in-out infinite 1s;
}

.macbook-image.is-visible .macbook-reflection {
  animation: fadeIn 1s ease-out 0.6s both, reflection 6s ease-in-out infinite 1s;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Efeito de hover mais elaborado */
.macbook-image:hover .macbook-img {
  transform: scale(1.03) rotateY(3deg);
  filter: brightness(1.05);
}

.macbook-image:hover .macbook-glow {
  animation: glow 2s ease-in-out infinite;
}

.macbook-image:hover .macbook-reflection {
  animation: reflection 3s ease-in-out infinite;
}
</style>

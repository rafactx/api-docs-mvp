<template>
  <section class="features-section">
    <div class="container">
      <h2 class="section-title">Recursos Principais</h2>
      <div class="cards-grid">
        <ThreeDCard :translate-z="60" :perspective="1200">
          <template #title>
            <h3 class="feature-title">Documentação Intuitiva</h3>
          </template>

          <template #description>
            <p class="feature-description">
              Interface moderna e responsiva que torna a documentação da API fácil de navegar e entender.
            </p>
          </template>

          <template #image>
            <div class="feature-image">
              <img
                src="/logo-involves-light.png"
                class="h-48 w-full object-contain rounded-xl"
                alt="Interface intuitiva"
              />
            </div>
          </template>

          <template #action-left>
            <a
              href="/pt-br/intro"
              class="feature-link"
            >
              Saiba mais →
            </a>
          </template>

          <template #action-right>
            <button class="feature-button">
              Começar
            </button>
          </template>
        </ThreeDCard>

        <ThreeDCard :translate-z="50" :perspective="1000">
          <template #title>
            <h3 class="feature-title">Exemplos Práticos</h3>
          </template>

          <template #description>
            <p class="feature-description">
              Código de exemplo em múltiplas linguagens para facilitar a integração com sua aplicação.
            </p>
          </template>

          <template #image>
            <div class="feature-image">
              <div class="code-preview h-48 w-full bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                <span class="text-gray-500 dark:text-gray-400">📝 Código de exemplo</span>
              </div>
            </div>
          </template>

          <template #action-left>
            <a
              href="/pt-br/exemplos-api-aux"
              class="feature-link"
            >
              Ver exemplos →
            </a>
          </template>

          <template #action-right>
            <button class="feature-button">
              Testar API
            </button>
          </template>
        </ThreeDCard>

        <ThreeDCard :translate-z="70" :perspective="1100">
          <template #title>
            <h3 class="feature-title">Autenticação Segura</h3>
          </template>

          <template #description>
            <p class="feature-description">
              Sistema de autenticação robusto com múltiplas opções de segurança para proteger seus dados.
            </p>
          </template>

          <template #image>
            <div class="feature-image">
              <div class="auth-preview h-48 w-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span class="text-white font-semibold">🔐 Segurança</span>
              </div>
            </div>
          </template>

          <template #action-left>
            <a
              href="/pt-br/auth-ambiente"
              class="feature-link"
            >
              Configurar →
            </a>
          </template>

          <template #action-right>
            <button class="feature-button">
              Documentação
            </button>
          </template>
        </ThreeDCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ThreeDCard from './ThreeDCard.vue'
</script>

<style scoped>
.features-section {
  padding: 80px 0;
  background: var(--vp-c-bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 60px;
  background: linear-gradient(180deg, var(--vp-c-text-1) 0%, var(--vp-c-text-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-top: 40px;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}

.feature-description {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  font-size: 0.95rem;
}

.feature-image {
  margin-top: 16px;
}

.feature-link {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: all 0.2s ease;
}

.feature-link:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.feature-button {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.feature-button:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
}

/* Responsividade */
@media (max-width: 768px) {
  .features-section {
    padding: 60px 0;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .container {
    padding: 0 16px;
  }
}
</style>

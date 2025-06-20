<template>
  <div class="app">
    <!-- Hero Section com spotlight background -->
    <HeroSection1 />

    <!-- Feature Cards com spotlight background -->
    <FeatureCards />

    <!-- Outras seções podem usar o SpotlightBackground -->
    <SpotlightBackground>
      <section class="demo-section">
        <div class="container">
          <h2>Outra Seção</h2>
          <p>Esta seção também usa o mesmo background com spotlight!</p>
        </div>
      </section>
    </SpotlightBackground>
  </div>
</template>

<script setup lang="ts">
import HeroSection from './components/oldHeroSection.vue'
import FeatureCards from './components/FeatureCards.vue'
import SpotlightBackground from './components/SpotlightBackground.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
}

.demo-section {
  padding: 120px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.demo-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.demo-section p {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
}
</style>

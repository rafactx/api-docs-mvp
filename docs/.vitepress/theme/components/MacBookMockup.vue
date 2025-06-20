<template>
  <div class="macbook-container">
    <img
      src="/Macbook Air (2022).png"
      alt="MacBook com Involves Stage"
      class="macbook-img"
    />
  </div>
</template>

<script setup lang="ts">
// Componente simplificado sem animações
</script>

<style scoped>
.macbook-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
}

.macbook-img {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
}

/* Responsividade */
@media (max-width: 768px) {
  .macbook-container {
    margin: 2rem 0;
  }

  .macbook-img {
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  .macbook-img {
    max-width: 85%;
  }
}
</style>

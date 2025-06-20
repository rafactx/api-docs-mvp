<template>
  <ThreeDCard :translate-z="50" :perspective="1000">
    <template #title>
      <h3 class="text-xl font-bold text-neutral-600 dark:text-white">
        Make things float in air
      </h3>
    </template>

    <template #description>
      <p class="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Hover over this card to unleash the power of CSS perspective
      </p>
    </template>

    <template #image>
      <div class="w-full mt-4">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="h-60 w-full object-cover rounded-xl group-hover:shadow-xl"
          alt="thumbnail"
        />
      </div>
    </template>

    <template #action-left>
      <a
        href="https://twitter.com/mannupaaji"
        target="_blank"
        class="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        Try now →
      </a>
    </template>

    <template #action-right>
      <button class="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:opacity-90 transition-opacity">
        Sign up
      </button>
    </template>
  </ThreeDCard>
</template>

<script setup lang="ts">
import ThreeDCard from './ThreeDCard.vue'
</script>

<style scoped>
/* Estilos específicos para a demonstração */
.group-hover {
  transition: box-shadow 0.3s ease;
}

.group-hover:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
</style>

<template>
  <Transition
    name="vp-page-fade"
    mode="out-in"
    appear
  >
    <slot />
  </Transition>
</template>

<style scoped>
.vp-page-fade-enter-active,
.vp-page-fade-leave-active {
  transition: opacity 0.33s cubic-bezier(.42,0,.58,1);
}
.vp-page-fade-enter-from,
.vp-page-fade-leave-to {
  opacity: 0;
}
.vp-page-fade-enter-to,
.vp-page-fade-leave-from {
  opacity: 1;
}
</style>

<template>
  <div class="api-card">
    <div class="api-card-header">
      <div class="api-card-buttons">
        <div class="api-card-button api-card-button-red">
          <div class="button-inner"></div>
        </div>
        <div class="api-card-button api-card-button-yellow">
          <div class="button-inner"></div>
        </div>
        <div class="api-card-button api-card-button-green">
          <div class="button-inner"></div>
        </div>
      </div>
      <span class="api-card-title">{{ title }}</span>
    </div>

    <div class="api-card-content">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="api-card-item"
      >
        <span class="api-card-key" :class="item.color">{{ item.key }}</span>
        <span class="api-card-value">
          <span v-html="item.description"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'request.headers'
  },
  items: {
    type: Array,
    required: true,
    // Cada item deve ter: { key, description, color }
  }
})
</script>

<style scoped>
.api-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  overflow: hidden;
  margin: 1.5rem 0;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 4px 12px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  backdrop-filter: blur(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.api-card:hover {
  transform: translateY(-2px);
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.12),
    0 8px 24px rgba(0, 0, 0, 0.12),
    0 0 0 1px rgba(255, 255, 255, 0.15) inset;
}

.api-card-header {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0.4) 100%
  );
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
}

.api-card-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  pointer-events: none;
}

.api-card-buttons {
  display: flex;
  gap: 8px;
  position: relative;
  z-index: 1;
}

.api-card-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.api-card-button:hover {
  transform: scale(1.1);
}

.button-inner {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.api-card-button:hover .button-inner {
  opacity: 1;
}

.api-card-button-red {
  background: linear-gradient(135deg, #ff5f57 0%, #ff4444 100%);
  box-shadow: 0 1px 2px rgba(255, 95, 87, 0.3);
}

.api-card-button-yellow {
  background: linear-gradient(135deg, #ffbd2e 0%, #ffb300 100%);
  box-shadow: 0 1px 2px rgba(255, 189, 46, 0.3);
}

.api-card-button-green {
  background: linear-gradient(135deg, #28ca42 0%, #22c55e 100%);
  box-shadow: 0 1px 2px rgba(40, 202, 66, 0.3);
}

.api-card-title {
  font-size: 13px;
  color: var(--vp-c-text-1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 500;
  margin-left: 8px;
  position: relative;
  z-index: 1;
  letter-spacing: -0.01em;
}

.api-card-content {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 14px;
  background: var(--vp-c-bg);
}

.api-card-item {
  display: flex;
  gap: 16px;
  padding: 14px 20px;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.api-card-item:last-child {
  border-bottom: none;
}

.api-card-item:hover {
  background: rgba(0, 0, 0, 0.02);
  transform: translateX(2px);
}

.api-card-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #007AFF 0%, #5856D6 100%);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.api-card-item:hover::before {
  opacity: 1;
}

.api-card-key {
  font-weight: 600;
  min-width: 140px;
  flex-shrink: 0;
  font-size: 13px;
  letter-spacing: -0.01em;
}

.api-card-key.blue {
  color: #007AFF;
}

.api-card-key.purple {
  color: #5856D6;
}

.api-card-key.pink {
  color: #FF2D92;
}

.api-card-value {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  font-size: 13px;
}

/* Dark mode adjustments */
:root.dark .api-card {
  background: rgba(28, 28, 30, 0.8);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

:root.dark .api-card:hover {
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.4),
    0 8px 24px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.08) inset;
}

:root.dark .api-card-header {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

:root.dark .api-card-item {
  border-bottom-color: rgba(255, 255, 255, 0.06);
}

:root.dark .api-card-item:hover {
  background: rgba(255, 255, 255, 0.03);
}

:root.dark .api-card-key.blue {
  color: #0A84FF;
}

:root.dark .api-card-key.purple {
  color: #5E5CE6;
}

:root.dark .api-card-key.pink {
  color: #FF375F;
}

/* Animação de entrada */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.api-card {
  animation: slideInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Efeito de glassmorphism para modo claro */
@media (prefers-color-scheme: light) {
  .api-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px) saturate(180%);
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .api-card {
    margin: 1rem 0;
    border-radius: 8px;
  }

  .api-card-header {
    padding: 12px 16px;
  }

  .api-card-item {
    padding: 12px 16px;
    flex-direction: column;
    gap: 8px;
  }

  .api-card-key {
    min-width: auto;
  }
}
</style>

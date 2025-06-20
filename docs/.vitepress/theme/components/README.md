# Componente ThreeDCard

Um componente Vue 3 que replica o efeito 3D do React com perspectiva e transformações CSS.

## Características

- ✅ Efeito 3D com perspectiva CSS
- ✅ Tracking de mouse para rotação
- ✅ Slots nomeados para conteúdo flexível
- ✅ Responsivo e acessível
- ✅ Suporte a tema claro/escuro
- ✅ TypeScript nativo

## Uso Básico

```vue
<template>
  <ThreeDCard :translate-z="50" :perspective="1000">
    <template #title>
      <h3>Título do Card</h3>
    </template>

    <template #description>
      <p>Descrição do conteúdo</p>
    </template>

    <template #image>
      <img src="/imagem.jpg" alt="Descrição" />
    </template>

    <template #action-left>
      <a href="/link">Link</a>
    </template>

    <template #action-right>
      <button>Botão</button>
    </template>
  </ThreeDCard>
</template>

<script setup>
import ThreeDCard from '@/components/ThreeDCard.vue'
</script>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `translateZ` | `number` | `50` | Profundidade Z dos elementos |
| `perspective` | `number` | `1000` | Distância da perspectiva CSS |

## Slots

| Slot | Descrição |
|------|-----------|
| `title` | Título principal do card |
| `description` | Descrição ou texto explicativo |
| `image` | Imagem ou conteúdo visual |
| `action-left` | Ação do lado esquerdo (link, botão) |
| `action-right` | Ação do lado direito (link, botão) |

## Exemplo Completo

Veja `ThreeDCardExample.vue` para um exemplo completo de uso em uma seção de features.

## Integração com VitePress

Para usar em páginas VitePress:

1. Importe o componente no arquivo da página
2. Use dentro do template Vue
3. Personalize os estilos conforme necessário

```vue
---
title: Recursos
---

<script setup>
import ThreeDCard from '../.vitepress/theme/components/ThreeDCard.vue'
</script>

<template>
  <div class="features">
    <ThreeDCard>
      <!-- Conteúdo do card -->
    </ThreeDCard>
  </div>
</template>
```

## Personalização

O componente usa variáveis CSS do VitePress para temas:

- `--vp-c-bg-soft`: Background do card
- `--vp-c-border`: Borda do card
- `--vp-c-text-1`: Cor do texto principal
- `--vp-c-text-2`: Cor do texto secundário

## Performance

- Usa `will-change: transform` para otimização
- Transições suaves com `ease` timing
- Responsivo com breakpoints CSS
- Lazy loading de imagens suportado

---
title: Limites e boas práticas
---

## 🚦 Limites e boas práticas

A API não impõe um limite rígido de requisições por minuto, mas implementa mecanismos automáticos de proteção contra uso abusivo.

Para garantir estabilidade e performance, recomendamos as seguintes práticas:

- Evite múltiplas requisições simultâneas desnecessárias.

- Mantenha um volume médio de até **60 requisições por minuto por ambiente**.

- Sempre implemente controle de retry com backoff exponencial em integrações contínuas.

::: tip Dica
Implemente cache para dados que não mudam frequentemente e monitore o uso de sua integração.
:::

## 💰 Cobrança

Atualmente, a API é totalmente gratuita.
Caso isso mude futuramente, você será informado com antecedência.

## ⚙️ Métodos HTTP usados

A API segue os métodos HTTP padrão para indicar o tipo de operação desejada:

<script setup>
import ApiCard from '../.vitepress/theme/components/ApiCard.vue'

const methodsTable = [
  { key: 'GET', description: 'Consultar dados', color: 'blue' },
  { key: 'POST', description: 'Criar novos dados ou executar ações', color: 'green' },
  { key: 'PUT', description: 'Atualizar integralmente dados existentes', color: 'purple' },
  { key: 'PATCH', description: 'Atualizar parcialmente dados existentes', color: 'yellow' },
  { key: 'DELETE', description: 'Excluir dados existentes', color: 'red' }
]
</script>

<ApiCard
  title="Métodos HTTP"
  :items="methodsTable"
/>

::: tip Referência
Para mais detalhes sobre os métodos HTTP, consulte a [RFC 7231 - HTTP/1.1 Semantics and Content](https://datatracker.ietf.org/doc/html/rfc7231){target="_blank" rel="noopener"}.
:::

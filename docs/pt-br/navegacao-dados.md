---
title: Navegação de Dados
---

## 🔗 HATEOAS

Utilizamos o padrão HATEOAS para indicar ações ou recursos relacionados em respostas JSON:

Exemplo prático:

```json
{
  "id": 123,
  "_link": "https://exemplo.involves.com/webservices/api/v3/chain/123"
}
```

- Utilize sempre a URL indicada em `_link` para acessar recursos relacionados.
- URLs podem mudar futuramente, mas garantimos sempre a retrocompatibilidade do recurso retornado.

---

## 📑 Paginação

Resultados grandes são paginados. Envie parâmetros como `page` (página atual) e `size` (tamanho da página).

Exemplo de URL com paginação:

```json
https://exemplo.involves.com/webservices/api/v3/environments/{environmentId}/resource?page=2&size=20
```

---

## 🔄 Sincronização de bases

::: warning
A API não é indicada para sincronizações em tempo real ou em larga escala. Para esse tipo de
operação, utilize o serviço dedicado **Data Integration**.

Em caso de dúvidas ou para contratar, [abra um ticket com o Suporte](https://help.involves.com/hc/pt-br/requests/new){target="_blank" rel="noopener"}.
:::

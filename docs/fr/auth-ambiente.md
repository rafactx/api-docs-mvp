---
title: 'Autenticação e Cabeçalhos'
---

## 🔧 Cabeçalhos HTTP obrigatórios

Todas as requisições para a API devem incluir os seguintes cabeçalhos:

<ApiCard
  title="request.headers"
  :items="[
    {
      key: 'Authorization',
      description: 'Basic base64(usuario:senha) — autenticação do usuário.',
      color: 'blue'
    },
    {
      key: 'X-AGILE-CLIENT',
      description: '<code>EXTERNAL_APP</code> — indica que a requisição é externa.',
      color: 'purple'
    },
    {
      key: 'Accept-Version',
      description: '<code>2020-02-26</code> — define a versão da API v3 a ser usada.',
      color: 'pink'
    }
  ]"
/>

## 📅 Versionamento via cabeçalho

A API v3 usa **versionamento por data** através do cabeçalho `Accept-Version`. Isso significa que você escolhe explicitamente qual versão da API usar, garantindo que sua integração nunca quebre inesperadamente.

### Como funciona

<ApiCard
  title="Accept-Version header"
  :items="[
    {
      key: 'Versão atual:',
      description: '<code>2020-02-26</code>',
      color: 'green'
    },
    {
      key: 'Formato:',
      description: '<code>YYYY-MM-DD</code> (data de lançamento)',
      color: 'blue'
    },
    {
      key: 'Obrigatório:',
      description: 'Sim, em todas as requisições v3',
      color: 'purple'
    }
  ]"
/>

### Por que usar versionamento?

**Exemplo prático do dia a dia:**

```bash
# Sua integração atual (funcionando perfeitamente):
Accept-Version: 2020-02-26

# Se a API lançar uma nova versão com mudanças:
Accept-Version: 2021-05-14  # Nova versão com novos campos

# Sua integração antiga continua funcionando:
Accept-Version: 2020-02-26  # Sempre funciona!
```

### Migrando entre versões

Quando quiser usar novos recursos:

::: code-group

```js [JavaScript]
const stage = require('@involves/stage-sdk');

stage.configure({
  apiVersion: '2020-02-26',
  credentials: {
    username: 'usuario',
    password: 'senha'
  }
});
```

```python [Python]
from involves import stage

stage.configure(
    api_version='2020-02-26',
    credentials={
        'username': 'usuario',
        'password': 'senha'
    }
)
```

```shell [cURL]
curl -H "Accept-Version: 2020-02-26" \
     -H "X-AGILE-CLIENT: EXTERNAL_APP" \
     -u usuario:senha \
     https://api.involves.com/webservices/api/v3/...
```

:::

::: tip Benefícios do versionamento

- **Zero downtime:** Sua integração nunca quebra
- **Migração gradual:** Teste novas versões sem afetar produção
- **Controle total:** Você decide quando atualizar
- **Compatibilidade:** Versões antigas sempre funcionam
:::

::: warning ⚠️ Importante

- **v1 e v2:** Não precisam do header `Accept-Version`
- **v3+:** O header é **obrigatório** em todas as requisições
- **Versão padrão:** Sempre use `2020-02-26` a menos que precise de recursos específicos
:::

## 🔐 Autenticação

A API oferece **duas formas** de autenticação. Você pode escolher a que preferir:

### Opção 1: Credenciais diretas (Recomendado para desenvolvimento)

Use seu **usuário e senha** do Involves Stage diretamente:

<ApiCard
  title="Authorization header - Credenciais diretas"
  :items="[
    {
      key: 'Usuário:',
      description: '<code>seuUsuarioDoInvolvesStage</code>',
      color: 'blue'
    },
    {
      key: 'Senha:',
      description: '<code>suaSenhaDoInvolvesStage</code>',
      color: 'purple'
    },
    {
      key: 'Header completo:',
      description: '<code>Authorization: Basic base64(usuario:senha)</code>',
      color: 'pink'
    }
  ]"
/>

**Exemplo prático:**

```bash
# Seu usuário: "joao.silva"
# Sua senha: "minhaSenha123"

# No terminal:
echo -n "joao.silva:minhaSenha123" | base64
# Resultado: am9hby5zaWx2YTptaW5oYVNlbmhhMTIz

# Header final:
Authorization: Basic am9hby5zaWx2YTptaW5oYVNlbmhhMTIz
```

### Opção 2: Credenciais pré-codificadas

Use credenciais já codificadas em Base64 (útil para ambientes de produção):

<ApiCard
  title="Authorization header - Credenciais pré-codificadas"
  :items="[
    {
      key: 'Header completo:',
      description: '<code>Authorization: Basic YWdpbGl0bzppbnZvbHZlcw==</code>',
      color: 'pink'
    }
  ]"
/>

::: tip 💡 Dicas para desenvolvedores

- **Para testes:** Use a Opção 1 com suas credenciais reais
- **Para produção:** Use a Opção 2 com credenciais específicas do ambiente
- **No JavaScript:** `btoa('usuario:senha')` gera o Base64 automaticamente
- **No Python:** `base64.b64encode('usuario:senha'.encode()).decode()`
- **No cURL:** Use `-u usuario:senha` e o cURL faz o Base64 automaticamente
:::

::: warning ⚠️ Segurança

- Nunca commite credenciais no código
- Use variáveis de ambiente para armazenar senhas
- Em produção, considere usar tokens de API quando disponíveis
:::

## 🌍 Identificação do Ambiente (Environment ID)

A maioria dos endpoints exige o `environmentId`. A URL completa fica assim:

```json
https://exemplo.involves.com/webservices/api/v3/environments/{environmentId}
```

Para obter o ID correto:

1. Vá até **Administração de Ambientes** no Involves Stage.
2. Selecione o ambiente desejado e clique em **Editar**.
3. Copie o ID do ambiente exibido na URL do navegador.

::: tip 💡 Dica Pro

- Use o atalho **Ctrl + K → Administração de Ambientes** para encontrar a tela rapidamente.
:::

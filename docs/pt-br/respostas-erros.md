---
title: Respostas & Erros
description: 'Códigos de status HTTP, formatos de resposta e tratamento de erros da API do Involves Stage.'
---

## 📜 Respostas HTTP

A API retorna sempre um status HTTP e, geralmente, um objeto JSON com detalhes específicos.

| Código | Status | Descrição |
|--------|--------|-----------|
| **200** | OK | Requisição bem-sucedida |
| **400** | Bad Request | Erro na requisição (verifique formato e parâmetros) |
| **401** | Unauthorized | Erro de autenticação |
| **403** | Forbidden | Permissões insuficientes |
| **404** | Not Found | Recurso ou URL inexistente |
| **406** | Not Acceptable | Versão do endpoint inválida ou cabeçalho incorreto |
| **412** | Precondition Failed | Cabeçalhos obrigatórios ausentes ou incorretos |
| **500** | Internal Server Error | Erro interno no servidor (entre em contato com suporte técnico) |

::: tip Verificação de Status
Para verificar o status de uma requisição:

```bash
curl -I https://api.involves.com/v3/endpoint | grep HTTP
```

:::

## ⚠️ Tratamento de erros

Caso ocorra erro, retornamos um objeto detalhado com informações úteis:

### Exemplo de erro (API v3)

```json
{
  "status": 400,
  "term": "ID_INVALIDO",
  "message": "O ID informado é inválido.",
  "details": [
    {
      "field": "id",
      "message": "O ID deve ser um número inteiro válido."
    }
  ]
}
```

### Estrutura do objeto de erro

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `status` | number | Código de status HTTP |
| `term` | string | Identificador único do erro |
| `message` | string | Mensagem descritiva do erro |
| `details` | array | Lista de detalhes específicos do erro |

### Códigos de erro comuns

| Termo | Status | Descrição |
|-------|--------|-----------|
| `AUTHENTICATION_FAILED` | 401 | Credenciais inválidas |
| `INSUFFICIENT_PERMISSIONS` | 403 | Permissões insuficientes |
| `RESOURCE_NOT_FOUND` | 404 | Recurso não encontrado |
| `INVALID_REQUEST` | 400 | Requisição malformada |
| `MISSING_HEADERS` | 412 | Cabeçalhos obrigatórios ausentes |

::: warning Atenção
Para erros de código **404**, verifique se o recurso existe ou se o endereço está correto (incluindo HTTPS e environmentId, quando aplicável).
:::

## 📊 Exemplos de resposta

### Resposta de sucesso

```json
{
  "success": true,
  "data": {
    "id": 123,
    "name": "Exemplo de Dados",
    "created_at": "2024-01-15T10:30:00Z"
  },
  "message": "Operação realizada com sucesso"
}
```

### Resposta com paginação

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Item 1"
    },
    {
      "id": 2,
      "name": "Item 2"
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 100,
    "total_pages": 5
  }
}
```

::: tip Dica
Sempre verifique o campo `success` na resposta antes de processar os dados.
Em caso de erro, o campo `error` conterá informações detalhadas sobre o problema.
:::

## 🔧 Tratamento de erros em diferentes linguagens

::: code-group

```javascript [JavaScript]
try {
  const response = await fetch('https://api.involves.com/v3/endpoint', {
    headers: {
      'Authorization': `Basic ${token}`,
      'X-AGILE-CLIENT': 'EXTERNAL_APP',
      'Accept-Version': '2020-02-26'
    }
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error(`Erro ${errorData.status}: ${errorData.message}`);
    return;
  }

  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error('Erro na requisição:', error);
}
```

```python [Python]
import requests

try:
    response = requests.get('https://api.involves.com/v3/endpoint', headers={
        'Authorization': f'Basic {token}',
        'X-AGILE-CLIENT': 'EXTERNAL_APP',
        'Accept-Version': '2020-02-26'
    })

    response.raise_for_status()
    data = response.json()
    print(data)

except requests.exceptions.HTTPError as e:
    error_data = e.response.json()
    print(f"Erro {error_data['status']}: {error_data['message']}")
except Exception as e:
    print(f"Erro na requisição: {e}")
```

```php [PHP]
<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.involves.com/v3/endpoint");
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Basic " . $token,
    "X-AGILE-CLIENT: EXTERNAL_APP",
    "Accept-Version: 2020-02-26"
));

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 400) {
    $errorData = json_decode($response, true);
    echo "Erro {$errorData['status']}: {$errorData['message']}";
} else {
    $data = json_decode($response, true);
    print_r($data);
}
?>
```

:::

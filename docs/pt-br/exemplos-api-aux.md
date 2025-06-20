---
title: Exemplos & APIs Auxiliares
description: Exemplos práticos de uso da API do Involves Stage em diferentes linguagens de programação.
---

## 💡 Exemplos práticos

Aqui estão exemplos de como fazer requisições para a API do Involves Stage usando diferentes linguagens de programação:

::: code-group

```javascript [JavaScript (axios)]
import axios from 'axios';

const token = btoa('seuUsuario:suaSenha');

const response = await axios.get('https://exemplo.involves.com/webservices/api/v3', {
  headers: {
    Authorization: `Basic ${token}`,
    'X-AGILE-CLIENT': 'EXTERNAL_APP',
    'Accept-Version': '2020-02-26'
  }
});

console.log(response.data);
```

```python [Python (requests)]
import requests
from requests.auth import HTTPBasicAuth

response = requests.get(
  'https://exemplo.involves.com/webservices/api/v3',
  auth=HTTPBasicAuth('seuUsuario', 'suaSenha'),
  headers={
    'X-AGILE-CLIENT': 'EXTERNAL_APP',
    'Accept-Version': '2020-02-26'
  }
)

print(response.json())
```

```bash [cURL]
curl -X GET "https://exemplo.involves.com/webservices/api/v3" \
  -H "Authorization: Basic $(echo -n 'seuUsuario:suaSenha' | base64)" \
  -H "X-AGILE-CLIENT: EXTERNAL_APP" \
  -H "Accept-Version: 2020-02-26"
```

```php [PHP]
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://exemplo.involves.com/webservices/api/v3");
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Authorization: Basic " . base64_encode("seuUsuario:suaSenha"),
  "X-AGILE-CLIENT: EXTERNAL_APP",
  "Accept-Version: 2020-02-26"
));

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
```

:::

## 📸 API de Fotos de Pesquisa

A extração de fotos via API está disponível apenas mediante liberação específica.

Para acessar os endpoints de fotos de pesquisa, é necessário solicitar autorização ao nosso time de Suporte.

::: tip Informação importante
Este recurso não está disponível publicamente na documentação por padrão.

Para solicitar acesso, [abra um ticket com o Suporte](https://help.involves.com/hc/pt-br/requests/new){target="_blank" rel="noopener"} informando o ambiente desejado para validação.
:::

## 🔧 Exemplos de Autenticação

### Autenticação Básica

::: code-group

```javascript [JavaScript]
// Usando fetch nativo
const credentials = btoa('usuario:senha');
const response = await fetch('https://exemplo.involves.com/webservices/api/v3', {
  headers: {
    'Authorization': `Basic ${credentials}`,
    'X-AGILE-CLIENT': 'EXTERNAL_APP',
    'Accept-Version': '2020-02-26'
  }
});
```

```python [Python]
import requests
import base64

credentials = base64.b64encode('usuario:senha'.encode()).decode()
headers = {
    'Authorization': f'Basic {credentials}',
    'X-AGILE-CLIENT': 'EXTERNAL_APP',
    'Accept-Version': '2020-02-26'
}

response = requests.get('https://exemplo.involves.com/webservices/api/v3', headers=headers)
```

:::

### Headers Obrigatórios

Todos os endpoints da API requerem os seguintes headers:

| Header | Valor | Descrição |
|--------|-------|-----------|
| `Authorization` | `Basic <token>` | Token de autenticação em Base64 |
| `X-AGILE-CLIENT` | `EXTERNAL_APP` | Identificador do cliente |
| `Accept-Version` | `2020-02-26` | Versão da API |

::: warning Atenção
Nunca compartilhe suas credenciais de acesso ou as inclua em código que será versionado.
Sempre use variáveis de ambiente para armazenar informações sensíveis.
:::

## 📊 Exemplos de Resposta

### Resposta de Sucesso

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

### Resposta de Erro

```json
{
  "success": false,
  "error": {
    "code": "AUTHENTICATION_FAILED",
    "message": "Credenciais inválidas",
    "details": "Usuário ou senha incorretos"
  }
}
```

::: tip Dica
Sempre verifique o campo `success` na resposta antes de processar os dados.
Em caso de erro, o campo `error` conterá informações detalhadas sobre o problema.
:::

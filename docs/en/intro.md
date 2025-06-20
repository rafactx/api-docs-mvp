---

title: Overview
description: Best practices for securely connecting to the Involves Stage API.
------------------------------------------------------------------------------

## 🚀 Introduction

The **Involves Stage** API allows you to easily integrate external systems, automating processes and simplifying operations.
Developed following REST principles, our API is intuitive, easy to use, and fully compatible with standard HTTP clients, requiring no special development.

---

The base URL for all requests is:

\::: code-group

```bash [Base URL]
https://exemplo.involves.com/webservices/api/v3
```

```javascript [Basic Example]
const baseUrl = 'https://exemplo.involves.com/webservices/api/v3';
const headers = {
  'Authorization': 'Basic ' + btoa('user:password'),
  'X-AGILE-CLIENT': 'EXTERNAL_APP',
  'Accept-Version': '2020-02-26'
};

fetch(baseUrl, { headers })
  .then(response => response.json())
  .then(data => console.log(data));
```

```python [Basic Example]
import requests

base_url = 'https://exemplo.involves.com/webservices/api/v3'
headers = {
    'Authorization': 'Basic ' + base64.b64encode('user:password'.encode()).decode(),
    'X-AGILE-CLIENT': 'EXTERNAL_APP',
    'Accept-Version': '2020-02-26'
}

response = requests.get(base_url, headers=headers)
data = response.json()
print(data)
```

\:::

\::: tip Tip
Never run tests directly in the production environment.

Create a dedicated sandbox environment with test-specific users.

If you need help setting this up, [open a support ticket](https://help.involves.com/hc/en-us/requests/new){target="\_blank" rel="noopener"}.
\:::

## 📚 About this documentation

This documentation is kept in sync with the latest version of the Involves Stage API.<br />
However, small differences may occur if your instance is running an earlier version.
Whenever possible, check the version header (`Accept-Version`) or contact support if you have any questions.

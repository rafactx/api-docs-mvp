---

title: Visión General
description: Buenas prácticas para conectarse de forma segura a la API de Involves Stage.
-----------------------------------------------------------------------------------------

## 🚀 Introducción

La API de **Involves Stage** permite integrar fácilmente sistemas externos, automatizando procesos y simplificando sus operaciones.
Desarrollada siguiendo los principios REST, nuestra API es intuitiva, fácil de usar y totalmente compatible con clientes HTTP comunes, sin necesidad de desarrollos especiales.

---

La URL base para todas las solicitudes es:

\::: code-group

```bash [URL Base]
https://exemplo.involves.com/webservices/api/v3
```

```javascript [Ejemplo básico]
const baseUrl = 'https://exemplo.involves.com/webservices/api/v3';
const headers = {
  'Authorization': 'Basic ' + btoa('usuario:contraseña'),
  'X-AGILE-CLIENT': 'EXTERNAL_APP',
  'Accept-Version': '2020-02-26'
};

fetch(baseUrl, { headers })
  .then(response => response.json())
  .then(data => console.log(data));
```

```python [Ejemplo básico]
import requests

base_url = 'https://exemplo.involves.com/webservices/api/v3'
headers = {
    'Authorization': 'Basic ' + base64.b64encode('usuario:contraseña'.encode()).decode(),
    'X-AGILE-CLIENT': 'EXTERNAL_APP',
    'Accept-Version': '2020-02-26'
}

response = requests.get(base_url, headers=headers)
data = response.json()
print(data)
```

\:::

\::: tip Consejo
Nunca realices pruebas directamente en el entorno de producción.

Crea un entorno específico (sandbox) con usuarios exclusivos para pruebas.

Si necesitas ayuda para configurarlo, [abre un ticket con el Soporte](https://help.involves.com/hc/es/requests/new){target="\_blank" rel="noopener"}.
\:::

## 📚 Sobre esta documentación

Esta documentación está sincronizada con la versión más reciente de la API de Involves Stage.<br />
Sin embargo, pueden existir pequeñas diferencias si tu instancia está en una versión anterior.
Siempre que sea posible, verifica el encabezado de versión (`Accept-Version`) o contacta al soporte si tienes dudas.

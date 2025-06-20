---

title: Vue d’ensemble
description: Bonnes pratiques pour se connecter en toute sécurité à l'API d'Involves Stage.
-------------------------------------------------------------------------------------------

## 🚀 Introduction

L’API **Involves Stage** permet d’intégrer facilement des systèmes externes, en automatisant les processus et en simplifiant vos opérations.
Développée selon les principes REST, notre API est intuitive, facile à utiliser et entièrement compatible avec les clients HTTP standards, sans nécessiter de développement particulier.

---

L’URL de base pour toutes les requêtes est :

\::: code-group

```bash [URL de base]
https://exemplo.involves.com/webservices/api/v3
```

```javascript [Exemple basique]
const baseUrl = 'https://exemplo.involves.com/webservices/api/v3';
const headers = {
  'Authorization': 'Basic ' + btoa('utilisateur:motdepasse'),
  'X-AGILE-CLIENT': 'EXTERNAL_APP',
  'Accept-Version': '2020-02-26'
};

fetch(baseUrl, { headers })
  .then(response => response.json())
  .then(data => console.log(data));
```

```python [Exemple basique]
import requests

base_url = 'https://exemplo.involves.com/webservices/api/v3'
headers = {
    'Authorization': 'Basic ' + base64.b64encode('utilisateur:motdepasse'.encode()).decode(),
    'X-AGILE-CLIENT': 'EXTERNAL_APP',
    'Accept-Version': '2020-02-26'
}

response = requests.get(base_url, headers=headers)
data = response.json()
print(data)
```

\:::

\::: tip Astuce
Ne faites jamais de tests directement dans l’environnement de production.

Créez un environnement spécifique (sandbox) avec des utilisateurs dédiés aux tests.

Si vous avez besoin d’aide pour la configuration, [ouvrez un ticket auprès du support](https://help.involves.com/hc/fr/requests/new){target="\_blank" rel="noopener"}.
\:::

## 📚 À propos de cette documentation

Cette documentation est synchronisée avec la dernière version de l’API Involves Stage.<br />
Cependant, de légères différences peuvent apparaître si votre instance utilise une version antérieure.
Dans la mesure du possible, vérifiez l’en-tête de version (`Accept-Version`) ou contactez le support en cas de doute.

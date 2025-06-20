# Documentação da API - Involves Stage

Este é o repositório para a documentação da API do Involves Stage, construído com [VitePress](https://vitepress.dev/).

## Configuração Local

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/installation)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/rafactx/api-docs-mvp
   cd api-docs-mvp
   ```

2. Instale as dependências:

   ```bash
   pnpm install
   ```

### Rodando em Desenvolvimento

Para iniciar o servidor de desenvolvimento local, execute:

```bash
pnpm dev
```

O site estará disponível em `http://localhost:5173`.

## Deploy na Vercel

O deploy deste projeto na Vercel é simples e rápido.

1. **Conecte seu repositório Git** na Vercel.
2. **Use as seguintes configurações de build**:

   - **Build Command**: `pnpm docs:build`
   - **Output Directory**: `docs/.vitepress/dist`
   - **Install Command**: `pnpm install`

A Vercel irá automaticamente detectar que é um projeto VitePress e aplicar as configurações corretas na maioria dos casos.

---

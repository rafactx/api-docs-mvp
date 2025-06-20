<template>
  <div class="api-layout">
    <!-- Navbar personalizada -->
    <header class="navbar">
      <div class="navbar-content">
        <div class="logo">
          <a href="/">
            <img class="logo-light" src="/logo-involves-dark.png" alt="Logo Involves" />
            <img class="logo-dark" src="/logo-involves-light.png" alt="Logo Involves" />
          </a>
        </div>
        <nav class="nav-links">
          <a href="/pt-br">Home</a>
          <a href="/pt-br/intro">Guia da API</a>
          <a href="/pt-br/api-reference" class="active">API Reference</a>
          <div class="dropdown">
            <button class="dropdown-trigger">Recursos</button>
            <div class="dropdown-content">
              <a href="/pt-br/exemplos-api-aux">Exemplos</a>
              <a href="/pt-br/boas-praticas">Boas Práticas</a>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- Conteúdo principal -->
    <main class="main-content">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
// Componente não precisa de lógica adicional por enquanto
</script>

<style scoped>
.api-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  z-index: 100;
}

.navbar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 40px;
}

.logo img {
  height: 100%;
}

.logo-light {
  display: block;
}

.logo-dark {
  display: none;
}

:root.dark .logo-light {
  display: none;
}

:root.dark .logo-dark {
  display: block;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-links a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--vp-c-brand);
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  background: none;
  border: none;
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 12px;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 8px 0;
  min-width: 160px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  display: block;
  padding: 8px 16px;
}

.main-content {
  margin-top: 60px;
  flex: 1;
}
</style>

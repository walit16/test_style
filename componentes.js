function header() {
  return `
    <header class="header-bg header-text p-5 text-center">
      <h1 class="text-2xl font-bold">Header</h1>
      <nav class="mt-2 space-x-4">
        <a href="/" class="header-link">Inicio</a>
        <a href="/acerca" class="header-link">Acerca</a>
      </nav>
    </header>
  `;
}

function footer() {
  return `
    <footer class="footer-bg footer-text p-4 text-center text-sm mt-8">
      <p class="footer-acento">Footer</p>
    </footer>
  `;
}

window.Componentes = {
  headerHTML: header(),
  footerHTML: footer(),
};

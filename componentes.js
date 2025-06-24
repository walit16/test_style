function header() {
  return `
    <header class="header-bg header-text p-6 text-center shadow-md">
      <h1 class="text-3xl font-extrabold tracking-wide uppercase">Sidetours</h1>
      <nav class="mt-3">
        <a href="/" class="header-link">Inicio</a>
        <a href="/acerca" class="header-link">Acerca</a>
        <a href="/contacto" class="header-link">Contacto</a>
      </nav>
    </header>
  `;
}

function footer() {
  const year = new Date().getFullYear();
  return `
    <footer class="footer-bg footer-text p-5 text-center text-sm mt-10">
      <p>© ${year} <span class="footer-acento">Sidetours</span>. Todos los derechos reservados.</p>
    </footer>
  `;
}

window.Componentes = {
  headerHTML: header(),
  footerHTML: footer(),
};

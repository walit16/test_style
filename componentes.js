// componentes.js

function header() {
  return `
      <header>
        <h1>header</h1>
        <nav>
          <a href="/">Inicio</a>
          <a href="/acerca">Acerca</a>
        </nav>
      </header>
    `;
}

function footer() {
  return `
      <footer>
        <p>Footer</p>
      </footer>
    `;
}

window.Componentes = {
  headerHTML: header(),
  footerHTML: footer(),
};

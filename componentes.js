// componentes.js

function header() {
  return `
      <header>
        <h1>Hola desde header()</h1>
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
        <p>Pie de página desde footer()</p>
      </footer>
    `;
}

window.Componentes = {
  headerHTML: header(),
  footerHTML: footer(),
  headerFn: header, // si quieres exponer la función también
  footerFn: footer,
};

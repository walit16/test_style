function header() {
  return `
    <header class="bg-green-600 text-white p-5 text-center">
      <h1 class="text-2xl font-bold">header</h1>
      <nav class="mt-2 space-x-4">
        <a href="/" class="text-white hover:underline">Inicio</a>
        <a href="/acerca" class="text-white hover:underline">Acerca</a>
      </nav>
    </header>
  `;
}

function footer() {
  return `
    <footer class="bg-gray-800 text-white p-4 text-center text-sm mt-8">
      <p>Footer</p>
    </footer>
  `;
}

window.Componentes = {
  headerHTML: header(),
  footerHTML: footer(),
};

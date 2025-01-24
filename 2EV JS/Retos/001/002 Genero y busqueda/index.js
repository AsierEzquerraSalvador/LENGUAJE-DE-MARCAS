// Referencias a elementos del DOM
const contenedorPeliculas = document.getElementById('contenedor-peliculas');
const contenedorTitulos = document.getElementById('contenedor-titulos');
const botonMostrarTitulos = document.getElementById('mostrar-titulos');
const botonFiltrarGenero = document.getElementById('filtrar-genero');

// Cargar el JSON y mostrar las películas
fetch('index.json')
  .then((response) => response.json())
  .then((data) => {
    // Guardar el JSON en una variable global para reutilizar
    window.peliculas = data;

    // Mostrar todas las películas
    let htmlContent = '';
    for (let i = 0; i < data.length; i++) {
      htmlContent += `<p><strong>${data[i].titulo}</strong> - Año: ${data[i].año}, Género: ${data[i].genero}</p>`;
    }
    contenedorPeliculas.innerHTML = htmlContent;
  });

// Mostrar solo los títulos de las películas
botonMostrarTitulos.addEventListener('click', () => {
  if (!window.peliculas) return;

  let htmlContent = '';
  for (let i = 0; i < window.peliculas.length; i++) {
    htmlContent += `<p>${window.peliculas[i].titulo}</p>`;
  }
  contenedorTitulos.innerHTML = htmlContent;
});

// Filtrar las películas por género
botonFiltrarGenero.addEventListener('click', () => {
  if (!window.peliculas) return;

  // Pedir al usuario el género a filtrar
  const genero = prompt('Ingresa el género por el cual deseas filtrar (Ejemplo: Animación, Ciencia Ficción, Acción):');

  // Verificar si se ingresó un género
  if (!genero) {
    alert("Por favor, ingresa un género válido.");
    return;
  }

  // Filtrar las películas según el género ingresado
  const peliculasFiltradas = window.peliculas.filter(pelicula => pelicula.genero.toLowerCase() === genero.toLowerCase());

  // Mostrar las películas filtradas
  let htmlContent = '';
  if (peliculasFiltradas.length > 0) {
    for (let i = 0; i < peliculasFiltradas.length; i++) {
      htmlContent += `<p><strong>${peliculasFiltradas[i].titulo}</strong> - Año: ${peliculasFiltradas[i].año}, Género: ${peliculasFiltradas[i].genero}</p>`;
    }
  } else {
    htmlContent = '<p>No se encontraron películas para ese género.</p>';
  }
  contenedorPeliculas.innerHTML = htmlContent;
});

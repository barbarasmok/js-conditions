// Seleccionar la imagen por su id
const imgBorde = document.getElementById('imgBorde');

// Agregar el evento click a la imagen
imgBorde.addEventListener('click', function () {
  // Alternar la clase que agrega/quita el borde
  imgBorde.classList.toggle('bordeRed');

  setTimeout(() => {
    window.location.href = '../../stickers.html'; // Redirigir a la página password
  }, 2000); // Espera 2 segundos antes de redirigir
});

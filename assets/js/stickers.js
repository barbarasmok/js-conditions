function calcularStickers() {
  // Se obtiene los valores de los inputs
  const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
  const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
  const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;

  // Se crea la const totalStickers para sumar la cantidad de stickers
  const totalStickers = sticker1 + sticker2 + sticker3;

  // Se crea la const resultado para obtener el párrafo donde se mostrará el resultado
  const resultado = document.getElementById('resultado');

  // Se utiliza una condicion if else para mostrar los mensajes dependiendo si el valor del resultado es mayor o menor que 10
  if (totalStickers > 10) {
    // muestra si el valor es menor que 10
    resultado.textContent = 'Lo siento, llevas demasiados stickers'; // muestra el valor de la clase .result
    resultado.className = 'result alerta-too-many'; // se cambia los colores del texto de la clase .result
  } else {
    resultado.textContent = `Llevas ${totalStickers} stickers`; // muestra el valor de la clase .result
    resultado.className = 'result alerta-ok'; // se cambia los colores del texto de la clase .result
    setTimeout(() => {
      window.location.href = '../../password.html'; // Redirigir a la página password
    }, 2000); // Espera 2 segundos antes de redirigir
  }
}

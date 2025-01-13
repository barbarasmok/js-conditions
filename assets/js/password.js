function checkPassword() {
  // Obtener los valores seleccionados de los select
  const digito1 = document.getElementById('digito1').value;
  const digito2 = document.getElementById('digito2').value;
  const digito3 = document.getElementById('digito3').value;

  // Se crea la const password para sumar la cantidad de stickers
  const password = digito1 + digito2 + digito3;

  // Se crea la const resultado para obtener el párrafo donde se mostrará el resultado
  const resultadoPassword = document.getElementById('resultadoPassword');

  // Se utiliza una condicion if else para mostrar los mensajes dependiendo si el valor del resultado es mayor o menor que 10
  if (password === '911') {
    resultadoPassword.textContent = 'Password 1 correcto';
    resultadoPassword.className = 'resultadoPassword correct1'; //se cambia los colores del texto de la clase .resultadoPassword
    setTimeout(() => {
      window.location.href = '../../gracias.html'; // Redirigir a la página password
    }, 2000); // Espera 2 segundos antes de redirigir
  } else if (password === '714') {
    resultadoPassword.textContent = 'Password 2 correcto';
    resultadoPassword.className = 'resultadoPassword correct2'; //se cambia los colores del texto de la clase .resultadoPassword
    setTimeout(() => {
      window.location.href = '../../gracias.html'; // Redirigir a la página password
    }, 2000); // Espera 2 segundos antes de redirigir
  } else {
    resultadoPassword.textContent = 'Password incorrecto';
    resultadoPassword.className = 'resultadoPassword incorrect'; //se cambia los colores del texto de la clase .resultadoPassword
  }
}

// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


// Event Listeners
eventListener();

function eventListener() {
     formulario.addEventListener('submit', agregarTweet);
}

// Funciones

function agregarTweet(e) {
     e.preventDefault() 
     
     // Textarea donde el usuario escribe
     const tweet = document.querySelector('#tweet').value;

     // Validacion
     if(tweet === '') {
          mostrarError('Un mensaje no puede ir vacio');
          return; // Evita que se ejecuten mas lineas de codigo esto funciona siempre una funcion
     }

     console.log('Agregando tweets');
}

// Mostrar mensaje de error

function mostrarError(error) {
     const mensajeError = document.createElement('p');
     mensajeError.textContent = error;
     mensajeError.classList.add('error');

     // Insertarlo en el contenido

     const contenido = document.querySelector('#contenido');
     contenido.appendChild(mensajeError);

     // Elimina la alerta despues de 3 segundos
     setTimeout(() => {
          mensajeError.remove();
     }, 3000); // 3s
}
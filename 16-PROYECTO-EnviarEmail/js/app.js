document.addEventListener('DOMContentLoaded', function(){ // Esto se va ejecutar cuando todo el codigo de html ya sea descargado

    // Seleccionar los elementos de la interfaz (id)
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    // Asignar eventos
    inputEmail.addEventListener('blur', validar); // cuando el evento ocurra (blur) se ejectua la funcion o mejor dicho callback
    
    inputAsunto.addEventListener('blur', validar);
    
    inputMensaje.addEventListener('blur', validar);


    function validar(e) { // e es para encontrar informacion del evento
        if(e.target.value.trim() === '') { // trim es para eliminar los espacios en blanco
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        }else {
            console.log('Si hay algo');
        }
    }


    function mostrarAlerta(mensaje, referencia) {
        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta) {
            alerta.remove();
        }

        // Generar aletar en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2','text-center'); // agregano clases 
        // Inyectar el error al formulario
        referencia.appendChild(error);
    }
});
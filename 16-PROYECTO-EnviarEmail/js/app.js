document.addEventListener('DOMContentLoaded', function(){ // Esto se va ejecutar cuando todo el codigo de html ya sea descargado

    // Seleccionar los elementos de la interfaz (id)
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar); // cuando el evento ocurra (blur) se ejectua la funcion o mejor dicho callback
    
    inputAsunto.addEventListener('blur', validar);
    
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        if(e.target.value.trim() === '') { // trim es para eliminar los espacios en blanco
            console.log('Esta vacio');
        }else {
            console.log('Si hay algo');
        }
    }
});
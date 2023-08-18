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
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El Email no es valido', e.target.parentElement );
            return;
        }

        limpiarAlerta(e.target.parentElement);
    }


    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

        // Generar aletar en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2','text-center'); // agregano clases 
        // Inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ // Expression regular
        const resultado = regex.test(email);
        // console.log(resultado);
        return resultado;
    }
});
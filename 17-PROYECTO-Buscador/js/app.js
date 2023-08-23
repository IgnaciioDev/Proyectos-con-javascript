// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;

// console.log(min);
// console.log(max);
// Eventos
document.addEventListener('DOMContentLoaded', () => { // recuerda que esto carga al final del html
    mostrarAutos(); // Muestra los autos al cargar

    // Llena las opciones de anhos
    llenarSelect();
})

// Funciones
function mostrarAutos() {
    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color } = auto; // destructuring
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        
        `;
        // insertar en el html
        resultado.appendChild(autoHTML);
    })
    
}

// Genera los anhos del select
function llenarSelect() {
    for( let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones del anho al select
    }
}
// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la busqueda
const datosBusqueda =  {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
}
// Eventos
document.addEventListener('DOMContentLoaded', () => { // recuerda que esto carga al final del html
    mostrarAutos(autos); // Muestra los autos al cargar

    // Llena las opciones de anhos
    llenarSelect();
})

// Event listener para los select de busqueda
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;

    filtrarAutos();
});

year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAutos();
});

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;

});

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;

});

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = e.target.value;

});

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;

});

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
});

// Funciones
function mostrarAutos(autos) {
    limpiarHTML(); // Elimina el HTML previo
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
// limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}


// Genera los años del select
function llenarSelect() {
    for( let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones del anho al select
    }
}


// Funcion que filtra en base a a la busqueda
function filtrarAutos() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);

    // console.log(resultado);
    mostrarAutos(resultado);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if( marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const  { year } = datosBusqueda;
    if(year) {
        return auto.year === year;
    }
    return auto;
}   


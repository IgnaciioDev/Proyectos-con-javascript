// Variables, En div se utiliza mas const que let
// Porque quereSelector, Porque solo tenemos un solo elemento

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = []; // Porque let? porque esto va a ir agregar y quitando elementos del carrito

cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

}

// funciones
function agregarCurso(e) {
    e.preventDefault(); // Esto es para prevenir que el scroll suba siempre cuando hagamos click en los enlaces
    
    
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado =  e.target.parentElement.parentElement; // parenElement es para seleccionar el padres de css al poner dos veces selecciona el card 
        leerDatosCurso(cursoSeleccionado);
    }
}

// Lee el contenido del html al que dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
    // console.log(curso);

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    // Revisa si un elemento ya existe en el carrito 
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if(existe) {
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => { // El .map va a ir iterando sobre todo los elementos del carrito
            if( curso.id === infoCurso.id ) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        })
    } else {
        // Agregamos el curso al carrito
        articulosCarrito = [...articulosCarrito, infoCurso]; // Esto es para crear una copia
    }

    console.log(articulosCarrito);

    carritoHtml(); // Aqui estamos llamando a la funcion
}


// Muestra el carrito de compras en el html
function carritoHtml() {

    // Limpiar el html
    limpiarHTML();

    // Recorre el carrito y genera el html
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso; // Aqui estamos haciendo destructuring
        console.log(curso);
        const row = document.createElement('tr');
        // ` Esto es un template en string o template literal`
        //Recuerda que antes era curso.titulo etc. Para mejorar el codigo estamos haciendo destructuring de objetos
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td> 
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso"  data-id="${id}"> X </a>
            </td>
        `;

        // Agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row)
    })
}

// Elimina los cursos del tbody

function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';
    
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
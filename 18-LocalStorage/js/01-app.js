// Recuerda que en localStorage solo se puede almacenar string,
// No se puede guardar arreglos y objetos

// localStorage.setItem('nombre', 'Ignacio');

// es una llave un valor, la llave es como vamos a tomar esos valores
// y el valor lo que se puede cambiar

// sessionStorage.setItem('Nombre', 'Juan');



// Una manera de almacenar un objeto


const producto = {
    nombre: 'Monitor 24 Pulgadas',
    precio: 300
}

const productoString = JSON.stringify(producto);

console.log(typeof productoString);


localStorage.setItem('Nombre', productoString);

// Una manera de almacenar un arreglo

const meses = ['Enero', 'Febrero', 'Marzo'];

const mesesString = JSON.stringify(meses);

console.log(typeof mesesString);

localStorage.setItem('meses', mesesString);
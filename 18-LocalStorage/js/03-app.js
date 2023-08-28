// Eliminar y actualizar elementos en localStorage


// Para remover o quitar
localStorage.removeItem('Nombre');


// Actualizar un registro

const mesesArrays = JSON.parse(localStorage.getItem('meses'));
// console.log(JSON.parse(mesesArrays));

console.log(mesesArrays);

mesesArrays.push('Nuevo Mes');

// rescribir el valor actual

localStorage.setItem('meses', JSON.stringify(mesesArrays));


// Y para limpiar

localStorage.clear();
//comentario de una línea
/*
cometarios
de
varias
líneas
*/

//Código Frontend
function parImpar() {
  let numero = prompt('Ingresa un número'),
    modulo = numero % 2,
    par = `El número: ${numero} es Par`,
    impar = `El número: ${numero} es Impar`

  /* if ( condición ) {
    true
  } else {
    false
  } */

  // operador ternario
  // ( condición ) ? true : false
  return ( modulo === 0 ) ? par : impar
}

console.log( parImpar() )

// Comentario de una línea

/*
  Comentario
  de
  varias
  líneas
*/

//Es buena práctica comenzar tu archivo con un punto y coma
;

//Declaración y asignación de variables primitivas
//Para declarar una variable en JS se utilizaba la palabra 'var. Ahora usamos 'const' o 'let'

//let cadena = "<a href=\"http://centroadm.com\">Enlace</a>"
//let cadena = '<a href="http://centroadm.com">Enlace</a>'
let cadena = 'Hola mundo',
  numero = 19.11,
  booleano = true,
  nulo

console.log(
  'Tipos primitivos',
  cadena,
  numero,
  booleano,
  nulo
)

cadena  = 'Hello world'
numero = 20
booleano = false
nulo = null

console.log(
  cadena,
  numero,
  booleano,
  nulo
)

//Diferencia entre let y const
//Cuando usamos const forzozamente hay que asignar un valor a la variable
const PI = 3.1415926535897932384
const libro = {
  titulo: 'Ready Player One',
  autor: 'Ernest Cline',
  anio: 2011,
  editorial: 'Ediciones B',
  citar: function () {
    //template string
    return `Ficha bibliográfica: ${this.titulo}. ${this.autor}. Editorial ${this.editorial}, ${this.anio}.`
  }
}

console.log(
  PI,
  libro.titulo,
  libro.anio,
  libro.citar(),
  libro.autor
)

//Una vez que una variable de tipo const se le asigna valor, éste no podrá cambiar
//PI = 19.19
//libro = { titulo: 'Ready Player One' }

//Un objeto es una colección de atributos y valores, por lo que internamente con la notación del punto, se le pueden agregar propiedades, pero sigue siendo el mismo objeto por eso puede declararse con const
libro.autor = {
  nombre: 'Ernest',
  apellido: 'Cline'
}

console.log(
  libro.autor,
  libro.autor.apellido,
  libro
)

/* console.log(
  PI,
  libro
)
 */

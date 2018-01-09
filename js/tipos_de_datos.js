// Comentario de una línea

/*
  Comentario
  de
  varias
  líneas
*/

//Es buena práctica comenzar tu archivo con un punto y coma
;


//https://ed.team/blog/ecmascript-el-estandar-de-javascript
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

//Declaración de funciones
function saludar ( nombre = 'Desconocido' ) {
  //concatenación de variables
  console.log( 'Hola, ' + nombre + ', ¿cómo estás?' )
  //interpolación de variables
  console.log( `Hola, ${nombre}, ¿cómo estás?` )
}

//Invocación o ejecución de funciones
saludar('Jonathan')
saludar()

//Declaración de arreglos
const perros = [
  'Husky',
  'Labrador',
  'Boxer',
  'Pastor Alemán',
  'Gran Danés',
  'Maltés'
]

console.log(
  perros,
  perros.length,
  perros[2],
  perros[5],
  perros[0],
  perros[10]
)

const otroArreglo = [
  'cadena',
  1,
  true,
  { nombre: 'Jon', edad: 33 },
  [ 'blanco', 'negro', 'naranja' ]
]

console.log(
  otroArreglo[4][1],
  otroArreglo[0],
  otroArreglo[3].edad
)


//Funciones anónimas auto invocadas
;(function (c, d, w, n) {
  c('Hola consola')
  c('Hola consola')
  c(w, d, n)
  c(n.userAgent)
  c(n.geolocation)
  const perros = ['Dálmata', 'Beagle', 'Bulldog', 'Border Collie', 'Doberman']
  c(perros)
})(console.log, document, window, navigator);


console.log(perros)

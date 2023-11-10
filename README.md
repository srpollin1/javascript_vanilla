# Javascript Vanilla
## lo necesario para poder utilizar un framework de JS
## (paradigma programación funcional)

- Funciones de Javascript: permite reutilizar lógica, tambien retorna
valores (string, int, bool), algo interesante de JS es que las funciones pueden retornar
otra funcion.

- Parametros de Funciones: valores que nuestra función puede esperar para procesarlos, se pueden llamar 
de cualquier manera (name, age, x, y, apellido, etc)


- Parametros por defecto: permiten que los parámetros con nombre se inicien con valores predeterminados si no se pasa ningún valor o undefined.


- Objetos de Javascript: Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos.


- Shorthand property names: es una lista delimitada por comas de cero o más pares de nombres de propiedades y valores asociados de un objeto, encerrados entre llaves ( {}).


- Manipulacion del DOM: Javascript puede crear elementos, guardarlos en constantes, puede añadir escuchas o eventos que el usuario puede hacer con nuestra interfaz, se pueden actualizar valores o ejecutar lógica como puede ser una alerta.

- Event Handler / Manejadores de eventos: Se puede seleccionar un elemento, puedo dar click, arrastrar 
elementos, todo evento que el navegador puede escuchar, todos los elementos html pueden detectar todo lo
que hacemos hasta ejecutar otra lógica.


- Objetos como parametros:  implica pasar estructuras de datos completas como argumentos. Esto permite agrupar propiedades relacionadas, como nombre, edad y otros detalles, en un solo objeto. 


- Destructuring de Objetos: es una técnica que permite desempaquetar propiedades de un objeto directamente en variables individuales. Al combinar esta técnica con el uso de objetos como parámetros en funciones, se simplifica la extracción de valores específicos, mejorando la claridad del código. Esto facilita el acceso a propiedades del objeto en la misma línea en que se declaran los parámetros, haciendo que el código sea más conciso y legible.

- Funciones anonimas: se utilizan como argumentos para procesar directamente los datos del objeto, eliminando la necesidad de declarar funciones separadas.

- Arrow functions: son especialmente útiles para funciones anónimas, proporcionando una forma más compacta de expresar la lógica de procesamiento.

- Inline arrow functions: Esto simplifica aún más el código, especialmente cuando la lógica es breve y se puede expresar de manera concisa en una sola línea.

- return: En JavaScript, return se utiliza en funciones para especificar el valor que la función debe devolver cuando es llamada o invocada. La instrucción return finaliza la ejecución de la función y devuelve el valor proporcionado. Esto es esencial para que una función produzca resultados que puedan ser utilizados en otras partes del código.

- String literals: son una forma de representar cadenas de texto de manera más concisa y legible. Se introdujeron en ECMAScript 6 (también conocido como ES6) para mejorar la forma en que se crean y manejan las cadenas en el código. Los literales de cadena permiten incluir variables y expresiones directamente dentro de las cadenas sin la necesidad de concatenación o manipulación complicada. Hay dos tipos principales de literales de cadena en JavaScript: Template literals (literales de plantilla) y String interpolation (interpolación de cadena).


- metodos de arrays (map, filter, foreach, concat): Estos métodos son poderosos y forman parte de las herramientas esenciales en el trabajo con arrays en JavaScript. Son fundamentales para realizar operaciones de transformación, filtrado y manipulación de datos de manera eficiente.


- spread operator:  se representa con tres puntos (...). Este operador se utiliza para expandir elementos de un array, objeto u otra estructura iterable en lugares donde se esperan múltiples elementos. Puede ser utilizado en diferentes contextos para realizar diversas operaciones.


- Ecmascript modules:  son una forma de organizar y dividir el código en piezas más pequeñas y manejables. Esto se hace mediante la exportación de partes específicas de un archivo (como variables, funciones o clases) para que puedan ser utilizadas en otros archivos, y mediante la importación de esas partes en los lugares donde se necesitan.


- optional Chaining:  proporciona una forma segura y conveniente de acceder a las propiedades de un objeto sin tener que verificar manualmente si cada nivel de la cadena de propiedades existe. Esta característica ayuda a evitar errores de referencia indefinida cuando se trabaja con objetos anidados.


- Async/await:  es una manera de trabajar con operaciones asíncronas de manera más legible y estructurada. async se utiliza en la definición de funciones para indicar que la función devuelve una promesa, mientras que await se utiliza para esperar que una promesa se resuelva antes de continuar con la ejecución del código. En términos simples, async/await hace que el código asíncrono se vea y se comporte de manera más similar al código síncrono tradicional.



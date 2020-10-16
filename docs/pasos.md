# Pasos a seguir para desarrollar el proyecto.
## Resumen pasos Hito 0.
En el hito 0, lo primero que hicimos fue una toma de contacto con git. Siguiendo los pasos, según los objetivos pedidos, aprendimos a:
 -  Crear un repositorio para nuestro proyecto.
 -  Hacer un fork de un repositorio, necesitamos tener un fork del repositorio de la asignatura para realizar las entregas.
 - Crear claves públicas y privadas, y subirlas a GitHub.
 - Hacer como es debido la configuración del usuario.
 - Conceptos como:
    - ¿Qué es un repositorio?
    - ¿Cuáles son ficheros importantes en su creación? README, .gitignore, y la licencia. Además, la utilidad de cada uno.
- Actualizar nuestro repositorio y el de clase.
- Dos cosas **importantísimas**
    - ¡No abrir nunca dos pull request del mismo tema a la vez!
    - ¡No cerrar jamás un PR!

## Resumen pasos Hito 1.
Para este hito yo he seguido una serie de pasos que he dejado indicados en los issues del milestone "Hito 1":
 - Arreglar faltas en la documentación (Corresponde al issue #1)
 - Incluir el fichero iv.yaml, en este fichero vamos a especificar algunos ficheros y parámetros, necesario para pasar los test. Será colocado en el fichero principal. (Corresponde al issue #2)
 - Editar el fichero .gitignore, para evitar archivos que no deben estar, **buena práctica**. (Corresponde al issue #3)
 - Avance de código. Como se pedía en este hito, era necesario empezar a construir al menos una clase, he implentado algunas funciones básicas de la clase **Serie**, la cual podemos encontrar en la carpeta src/. He hecho una serie de pruebas para comprobar dichas funcionalidades. (Corresponde al issue #4)
 - Completar herramientas. Teníamos que investigar sobre herramientas que vamos a necesitar, yo además he hecho una "preselección"  de algunas de ellas, las que más encajaban entre ellas, y más satisfacían mis necesidades. Toda la documentación la podemos encontrar en el fichero docs/herramientas.md. (Corresponde al issue #5 y #10 por equivocación decidi hacer el de inicio y el de actualización)
 - Crear una historia de usuario, con el formato correcto, e incorporarla al README. Era imprescindible hacer una historia de usuario aunque fuera algo muy básico, para tener conocimiento de qué son y para qué sirven. (Corresponde al issue #12).
    - HU01: Consultar sinopsis de una serie de nuestro catálogo.
 - Actualizar el README, explicando claramente el proyecto elegido y el por qué. Además he enlazado cosas necesarias como estos pasos o la HU. (Corresponde al issue #11).


 ## Resumen pasos Hito 2
 Para este hito he seguido una serie de pasos que he dejado indicados en los issues del milestone ["Hito 2"](https://github.com/sarasolera/proyectoSeries/milestone/2)
 - Añadir la carpeta de los tests y los ficheros correspondiendtes a los test. En estos ficheros se testea la correcta funcionalidad de cada una de las clases que he creado. (Corresponde al issue #13)
 - Añadir clase y comletar el código de ambas.(Corresponde al issue #14)
    - En mi caso mi proyecto se basa en series, en recapitular información sobre ellas y ser capaz de mostrarlo para ello he creado:
    - **La clase Serie** ~ Nos permite crear un objeto serie y después captar la información.
         - Aributos el nombre, las temporadas, la sinopis, el género al que pertenece, el reparto, la fecha de proximo estreno de la temporada, y la puntuación que luego usaremos como parametro para ordenar. 
         - Funciones: Entre sus funciones podemos encontrar la devolución de los valores de los atributos de un objeto serie, devolver el reparto con un formato especifico así como la fecha de estreno, modificar el valor de los distintos atributos y calcular la media de puntuaciones de la serie.
   - **La clase Catálogo** ~  Además de la clase Serie, he necesitado una clase que contenga un conjunto de series, ya que el usuario interactuará con el catalogo primero y con la serie despues.
      - Atributos un array de series.
      - Funciones: entre ellas podemos encontrar, añadir serie a un catalogo, obtener el array de series, asi como un metodo para mostrar una serie con un formato concreto pasando el indice como parametro, mostrar series de un genero concreto y mostrar series con el orden de puntuación de mayor a menor.
- Incorporar package.json, es el archivo necesario en nodejs que contiene información importante sobre el proyecto, entre ella las dependencias para ejecutarlo y para realizar los test, así camino para ejecutarlos.(Corresponde al issue #15)
- Actualizar herramientas, para explicar la herramienta de construcción que he elegido, la justificación y la configuración. (Corresponde al issue #16)
- Actualizar Readme como ultimo paso, para incorporar alfgunas directrices nuevas del proyecto, y algunos enlaces. (Corresponde al issue #17)
- Además he añadido funcionalidades que deberia poder hacer el usario, en forma de historias de usuario:
   - HU01:Consultar serie de nuestro catálogo (Corresponde a issue #7)
   - HU02:Consultar catálogo (Corresponde a issue #18)
   - HU03:Consultar catálogo según puntuación (Corresponde a issue #19)
   - HU04:Consultar catálogo según género (Corresponde a issue #20)

 

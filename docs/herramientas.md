# HERRAMIENTAS

**Lenguaje de programación** ~
Realizaré el proyecto en **Javascript**, más concretamete vamos a utilizar **Node.js** como entorno de ejecución, con él se recomienda la utilización de **NPM** como gestor de paquetes.

Justificación lenguaje:
- Dispone de una documentación amplia --> [Guía de JavaSccript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide).
- Es uno de los más valorados hoy en día, todo lo que aprenda será util en mi futuro.
- Lo conozco, aunque no tanto como me gustaría, por eso espero aprender algo más.

**HERRMIENTA DE CONSTRUCCIÓN ACTUAL**

Actualmente he elegido *NPM*, aunque este realmente sea un gestor de paquetes, se puede "considerar" una herramienta de construcción muy simple. Para ello además, he creado  el fichero **package.json** que se puede encontrar en la carpeta raiz.

*Justificación y configuración*

¿Por qué?
  - Su funcionalidad por el momento me basta, simplemente necesito instalar algunas dependencias y ejecutar test. Más abajo podemos consultar que pasará en un futuro.
  - Es fácil y simple, con una sencilla línea de código, nos permite agregar dependencias, distributir paquetes y administrar eficazmente los módulos.


¿Cómo es su correcta configuración?
  - NPM gestiona todos los detalles del proyecto a través de package.json, un fichero que contiene principalmente:
    - El nombre del proyecto.
    - Versión.
    - Descripción (que se nos mostrará si ejecutamos **nmp search**).
    - Dentro de scripts:contiene comandos de prueba. Para consultarlos podemos usar **nmp-scripts**
    - El repositorio de git: indicamos el lugar donde vive nuestro código.
    - Algo de información personal, como el nombre del autor o autora, Sara Solera en mi caso.
    - Licencia del proyecto. 
    - La URL de la página de inicio.
    - Las dependencias, se especifica un nombre del paquete y un rango de versiones. Es necesario instalar las dependencias antes de ejecutar el test o lanzar el programa, para ello debemos hacer antes que todo **npm install**.

¿En el futuro?

Como ya he comentado, NPM cubre todas mis necesidades por el momento, pero en hitos posteriores tendré que hacer uso de una herramienta de construcción más elavorada, pero NPM serguirá estando presente. 
Hoy en día la cosa está entre **Gulp** u **Grunt**, tras este hito me informaré sobre cual de los dos cubre más mis necesidades y lo elegiré con herramienta de construcción principal.

**Base de datos** ~ 
Necesitamos una base de datos para almacenar las series que tendremos en nuestro catálogo, con toda su información.
  Dudaba entre MongoDB (noSql) y MariaDB (sql) pero he decicido utilizar **MariaDB**, razones:
 - Ya he trabajado con sql en otros proyectos, así que tengo algo de base.
 - Consultas directamente en nuestra base de datos.
 - Almacenamiento organizado.


**Test** ~ 
Un buen código siempre debe ser testeado, debemos garantizar que nuestros programas son fiables, y hacen realmente lo que queremos. Testear garantiza la calidad de nuestro programa. 

En este caso buscando marcos de prueba he encontrado que hay dos grandes utilizados con node.js. Mocha y Jest, sin embargo la recomendación es utilizar Mocha para proyectos grandes y Jest para proyectos más pequeños, por lo que, utilizaré **Jest**.
Jest tiene una buena documentación, y ejemplos de como testear en nodejs.


**Sistema de log** ~ 
También necesitaremos un registro de tareas de nuestro sistema, para guardar incidencias, errores, accesos, etc.
He encontrado Bunyan, Morgan y Winston. 
Voy a utilizar **Winston** porque 2 razones:
  1. Es un registrador de casi todo. Es muy completo.
  2. Al estar tan utilizado, hay bastante información, y si ante cualquier error, puedo encontrar solución más rápidamente.

  *Intalación:*

    - npm i -s winston

**Framework Web** ~
Se aconseja también la utilización de un framework web que nos pueda servir de ayuda, ya que, permite la reutilización de código y agilizará el desarollo de nuestro proyecto.
Consultando información sobre framework web favoritos podemos encontrar Express.js, Hapi.js, Meteor.js y Koa.js.

Voy a utilizar **HapiJS**, ya que, aporta flexibilidad pero también tiene plugins creados por ellos y algunas librerias que resuelve problemas comunes, está entre express y meteor.
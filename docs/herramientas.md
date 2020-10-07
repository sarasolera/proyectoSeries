# HERRAMIENTAS

**Lenguaje de programación** ~
Realizaré el proyecto en **Javascript**, más concretamete vamos a utilizar **Node.js** como entorno de ejecución, con él se recomienda la utilización de **NPM** como gestor de versiones.

Justificación lenguaje:
- Dispone de una documentación amplia --> [Guía de JavaSccript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide).
- Es uno de los más valorados hoy en día, todo lo que aprenda será util en mi futuro.
- Lo conozco, aunque no tanto como me gustaría, por eso espero aprender algo más.

**Base de datos** ~ 
Necesitamos una base de datos para almacenar las series que tendremos en nuestro catálogo, con toda su información.
  Dudaba entre MongoDB (noSql) y MariaDB (sql) pero he decicido utilizar **MariaDB**, razones:
 - Ya he trabajado con sql en otros proyectos, así que tengo algo de base.
 - Consultas directamente en nuestra base de datos.
 - Almacenamiento organizado.

**Framework Web** ~
Se aconseja también la utilización de un framework web que nos pueda servir de ayuda, ya que, permite la reutilización de código y agilizará el desarollo de nuestro proyecto.
Consultando información sobre framework web favoritos podemos encontrar Express.js, Hapi.js, Meteor.js y Koa.js.

Voy a utilizar **HapiJS**, ya que, aporta flexibilidad pero también tiene plugins creados por ellos y algunas librerias que resuelve problemas comunes, está entre express y meteor.


**Test** ~ 
Un buen código siempre debe ser testeado, debemos garantizar que nuestros programas son fiables, y hacen realmente lo que queremos. Testear garantiza la calidad de nuestro programa. 

En este caso buscando marcos de prueba he encontrado que hay dos grandes utilizados con node.js. Mocha y Jest, sin embargo la recomendación es utilizar Mocha para proyectos grandes y Jest para proyectos más pequeños, por lo que, utilizaré **Jtest**.
Jest tiene una buena documentación, y ejemplos de como testear en nodejs.


**Sistema de log** ~ 
También necesitaremos un registro de tareas de nuestro sistema, para guardar incidencias, errores, accesos, etc.
He encontrado Bunyan, Morgan y Winston. 
Voy a utilizar **Winston** porque 2 razones:
  1. Es un registrador de casi todo. Es muy completo.
  2. Al estar tan utilizado, hay bastante información, y si ante cualquier error, puedo encontrar solución más rápidamente.

  *Intalación:*

    - npm i -s winston
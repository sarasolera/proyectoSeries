# HERRAMIENTAS

**Lenguaje de programación** ~
Realizaré el proyecto en **Javascript**, más concretamete vamos a utilizar **Node.js** como entorno de ejecución, con él se recomienda la utilización de **NPM** como gestor de versiones.
Al iniciar npm tendremos el fichero *package.json* que almacena información sobre le proyecto, se irá completando.

  *Generando package.json:*

    - npm init 

Justificación lenguaje:
- Dispone de una documentación amplia --> [Guía de JavaSccript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide).
- Es uno de los más valorados hoy en día, todo lo que aprenda será util en mi futuro.
- Lo conozco, aunque no tanto como me gustaría, por eso espero aprender algo más.

**Base de datos** ~ 
  Dudaba entre MongoDB (noSql) y MariaDB (sql) pero he decicido utilizar **MariaDB**, razones:
 - Ya he trabajado con sql en otros proyectos, así que tengo algo de base.
 - Consultas directamente en nuestra base de datos.
 - Almacenamiento organizado.

**Framework Web** ~
Consultando información sobre framework web favoritos podemos encontrar Express.js, Meteor.js y Koa.js.

Me decantaré por **Express.js** porque hay bastante información, y es bastante utilizado, así que si tengo alguna duda o error será más fácil encontrar solución.



**Test** ~ 
En busca de la realización de test, también hay dos grandes utilizados con node.js. Mocha y Jest, sin embargo la recomendación es utilizar Mocha para proyectos grandes y Jest para proyectos más pequeños, por lo que, utilizaré **Jtest**.


**Sistema de log** ~ 
He encontrado Bunyan, Morgan y Winston. 
Voy a utilizar **Winston** porque  es el más utilizado, más fácil para buscar ayuda.Además, es un registrador para casi todo. 

  *Intalación:*

    - npm i -s winston
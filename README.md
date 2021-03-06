# proyectoSeries :movie_camera:

## OBJETIVO  :dart:
Cuando eres seguidor de varias series, a veces cuesta estar informado de cuándo empieza la nueva temporada de cada una,  de eventos de tus actores y actrices favoritos, etc. Con este proyecto estaremos al día de todo eso sin la necesidad de recorrer Google.

El objetivo es crear un microservicio que almacene información sobre series, como puede ser la sinopsis, los actores y actrices, las temporadas, y algunas noticias relacionadas con ellas. Además, éste enviará notificaciones a los clientes para mantenerlos informados de los próximos estrenos.

## MICROSERVICIOS
- Justiciación del [framework elegido](https://github.com/sarasolera/proyectoSeries/blob/master/docs/frameworks.md).
    - [Fichero](https://github.com/sarasolera/proyectoSeries/blob/master/src/ejemploBasico.js) de ejemplo básico con HapiJS
- Diseño general de la API.
    - [Documentación](https://github.com/sarasolera/proyectoSeries/blob/master/docs/uso_hapijs.md) que incluye explicación rutas, test, middleware y log. Además de buenas prácticas e historias de usuario enlazadas.
    - Fichero añadidos y necesarios:
        - [rutas.js](https://github.com/sarasolera/proyectoSeries/blob/master/src/rutas/rutas.js) 
        - [api.test.js](https://github.com/sarasolera/proyectoSeries/blob/master/tests/api.test.js)

        - [controladorSeries.js](https://github.com/sarasolera/proyectoSeries/blob/master/src/controlador/controladorSeries.js)
        - [controladorSeries.test.js](https://github.com/sarasolera/proyectoSeries/blob/master/tests/controladorSeries.test.js)

        - [catalogo.js](https://github.com/sarasolera/proyectoSeries/blob/master/src/catalogo.js)
        - [catalogo.test.js](https://github.com/sarasolera/proyectoSeries/blob/master/tests/catalogo.test.js)

        - [serie.js](https://github.com/sarasolera/proyectoSeries/blob/master/src/serie.js)
        - [serie.test.js](https://github.com/sarasolera/proyectoSeries/blob/master/tests/serie.test.js)

## FUNCIONES SERVERLESS
- Despliegue correcto y funcionando junto con implementación de una función de mi proyecto.
    - [Documentación](https://github.com/sarasolera/proyectoSeries/blob/master/docs/vercel.md).
    - [Código fuente ](https://github.com/sarasolera/proyectoSeries/blob/master/api/funcion_genero.js)de la función común al bot y a la función principal.
    - [Fichero código de la función serverless](https://github.com/sarasolera/proyectoSeries/blob/master/api/genero.js).
    - La url de prueba la encontramos en [iv.yaml](https://github.com/sarasolera/proyectoSeries/blob/master/iv.yaml).
    - Resultado esperado en [5.json](https://github.com/sarasolera/proyectoSeries/blob/master/5.json).

- Función serverles con azure:
    - [Documentación](https://github.com/sarasolera/proyectoSeries/blob/master/docs/azure.md).
    - [Carpeta proyecto azure](https://github.com/sarasolera/proyectoSeries/tree/master/azure).
    - [Fichero index.js](https://github.com/sarasolera/proyectoSeries/blob/master/azure/porPuntuaciones/index.js) contiene la función nueva integrada con mi proyecto.
    
- Bot de telegram:
    - [Documentación con imágenes](https://github.com/sarasolera/proyectoSeries/blob/master/docs/botSeries.md).
    - [Enlace hacia botSeries](https://t.me/xGenero_bot).
    - [Código fuente](https://github.com/sarasolera/proyectoSeries/blob/master/api/xGenero.js).

## INTEGRACIÓN CONTINUA
- El primer sistema que he utilizado es Travis y aquí podemos encontrar su [explicación y justificación](https://github.com/sarasolera/proyectoSeries/blob/master/docs/integracion_continua.md)
 - Como sistema adicional he optado por "AppVeyor", también tenemos su [explicación y justificación](https://github.com/sarasolera/proyectoSeries/blob/master/docs/sistema_adicional.md)
 - Utilizamos grunt para ejecutar los test en todo momento, tanto con docker como sin docker, abajo encontraremos el enlace a los ficheros de configuración.
 - [Aprovechando docker para CI](https://github.com/sarasolera/proyectoSeries/blob/master/docs/aprovechando_docker.md).
 - APPVEYOR 
    - [Fichero inicial de configuración sin docker](https://github.com/sarasolera/proyectoSeries/blob/master/docs/ficheros_originales/appveyor_sin_docker.yml)
    - [Fichero de configuración con docker](https://github.com/sarasolera/proyectoSeries/blob/master/appveyor.yml)
 


## INSTALACIÓN :construction:
Antes de realizar los test es imprescindible instalar las dependencias, para ello ejecutamos:

    - npm install

## TEST :heavy_check_mark:
Una vez instaladas las dependencias necesarias, para realizar los test ejecutamos:

    - grunt test

- [Explicación test](https://github.com/sarasolera/proyectoSeries/blob/master/docs/jest.md)

- [Explicación task runner Grunt](https://github.com/sarasolera/proyectoSeries/blob/master/docs/task_runner.md)

- [Fichero de configuración de Grunt](https://github.com/sarasolera/proyectoSeries/blob/master/Gruntfile.js)



## DOCKER
 - Elección correcta de [contenedor base](https://github.com/sarasolera/proyectoSeries/blob/master/docs/contenedorBase.md).
 - Fichero de configuración docker: [Dockerfile](https://github.com/sarasolera/proyectoSeries/blob/master/Dockerfile).
 - Documentación [buenas prácticas](https://github.com/sarasolera/proyectoSeries/blob/master/docs/buenas_practicas.md)
 - Comparación de tiempos/velocidad de las distintas [imágenes](https://github.com/sarasolera/proyectoSeries/blob/master/docs/comparando_tiempos.md)

## DOCKER HUB
 - Explicación [inicio](https://github.com/sarasolera/proyectoSeries/blob/master/docs/docker_hub.md)  y actualización automática de DockerHub.
 - Contenedor en dockerhub: [https://hub.docker.com/r/sarasolera/proyectoseries](https://hub.docker.com/r/sarasolera/proyectoseries)

## ¿CÓMO EJECUTAR TEST USANDO CONTENEDOR DOCKER HUB?
 - Descargamos el repositorio.
 - Ejecutar:
    *docker run -t -v `pwd`:/test sarasolera/proyectoseries*

## GITHUB CONTAINER REGISTRY
 - Documentación explicativa de [GHCR](https://github.com/sarasolera/proyectoSeries/blob/master/docs/github_container_registry.md)
 - [Contenedor Github](https://github.com/users/sarasolera/packages/container/package/proyectoseries_github_registry).
 - Ejecutar:
    - *docker run -t -v `pwd`:/test ghcr.io/sarasolera/proyectoseries_github_registry*

## HERRAMIENTA DE CONSTRUCCIÓN :wrench:
 - La justificación y configuración de la herramienta de construcción que he elegido se encuentra en el fichero de [herramientas](https://github.com/sarasolera/proyectoSeries/blob/master/docs/herramientas.md)
 - El [fichero con información del proyecto](https://github.com/sarasolera/proyectoSeries/blob/master/package.json) lo encontramos en la carpeta raíz.

## ENLACES CÓDIGO :link:
- [CÓDIGO DE CLASES](https://github.com/sarasolera/proyectoSeries/tree/master/src)
- [CÓDIGO DE TESTEO](https://github.com/sarasolera/proyectoSeries/tree/master/tests)


## HISTORIAS DE USUARIO,  MILESTONES E ISSUES CERRADOS
- [Historias de usuario](https://github.com/sarasolera/proyectoSeries/issues?q=is%3Aissue+is%3Aopen+label%3Auser-stories) 
- [Milestones](https://github.com/sarasolera/proyectoSeries/milestones)
- [Issues cerrados](https://github.com/sarasolera/proyectoSeries/issues?q=is%3Aissue+is%3Aclosed) 

## DOCUMENTACIÓN ADICIONAL :heavy_plus_sign:
En la carpeta docs he incluido:
- Explicación de la configuración inicial de [github](https://github.com/sarasolera/proyectoSeries/blob/master/docs/inicio_git.md).
- [Detalles](https://github.com/sarasolera/proyectoSeries/blob/master/docs/md_manual.md) de dónde estoy consultando la sintaxis de Markdown.
- [Pasos actualizados](https://github.com/sarasolera/proyectoSeries/blob/master/docs/pasos.md), incluyen la descripción de los códigos.



### AUTORA :girl:
Sara Solera Linares
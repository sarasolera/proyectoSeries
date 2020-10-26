# proyectoSeries :movie_camera:

## OBJETIVO  :dart:
Cuando eres seguidor de varias series, a veces cuesta estar informado de cuándo empieza la nueva temporada de cada una,  de eventos de tus actores y actrices favoritos, etc. Con este proyecto estaremos al día de todo eso sin la necesidad de recorrer Google.

El objetivo es crear un microservicio que almacene información sobre series, como puede ser la sinopsis, los actores y actrices, las temporadas, y algunas noticias relacionadas con ellas. Además, éste enviará notificaciones a los clientes para mantenerlos informados de los próximos estrenos.

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

## HISTORIAS DE USUARIO :boy: :computer:
¿Qué debe poder hacer un usuario por ahora?
 - [HU01:Consultar serie de nuestro catálogo](https://github.com/sarasolera/proyectoSeries/issues/7)
 - [HU02:Consultar catálogo](https://github.com/sarasolera/proyectoSeries/issues/18)
 - [HU03:Consultar catálogo según puntuación](https://github.com/sarasolera/proyectoSeries/issues/19)
 - [HU04:Consultar catálogo según género](https://github.com/sarasolera/proyectoSeries/issues/20)

## MILESTONES E ISSUES CERRADOS 
- [Milestones](https://github.com/sarasolera/proyectoSeries/milestones)
- [Issues cerrados](https://github.com/sarasolera/proyectoSeries/issues?q=is%3Aissue+is%3Aclosed) 

## DOCUMENTACIÓN ADICIONAL :heavy_plus_sign:
En la carpeta docs he incluido:
- Explicación de la configuración inicial de [github](https://github.com/sarasolera/proyectoSeries/blob/master/docs/inicio_git.md).
- [Detalles](https://github.com/sarasolera/proyectoSeries/blob/master/docs/md_manual.md) de dónde estoy consultando la sintaxis de Markdown.
- [Pasos actualizados](https://github.com/sarasolera/proyectoSeries/blob/master/docs/pasos.md), incluyen la descripción de los códigos.



### AUTORA :girl:
Sara Solera Linares
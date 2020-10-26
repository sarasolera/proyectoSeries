# Elección correcta y justificada del contenedor base.
Cuando empezamos a trabajar con docker, lo inicial es elegir un contenedor base. Hay muchas imágenes, además dockerhub permite que cada usuario públique sus propias imágenes. Opciones que encontramos:
 - Contenedores oficiales del lenguaje en mi caso Javascript con el entorno de ejecución Nodejs.
 - Contenedores de sistema operativo sobre el que vamos a instalar el lenguaje.

De ambos tipos podemos encontrar en la página [Docker Hub](https://hub.docker.com/search?q=&type=image). 

## Por **sistema operativo** encontramos:
    - ubuntu
    - alpine
    - centos
    - debian
    - etc
Para compararlas estuve investignado, y pense sobretodo en mi entorno de ejecución node, los dos grandes elegidos estaban entre alpine y debian. 

¿Qué ventajas encontramos en Alpine?
    - La más importante, ligereza. Alpine Linux es una distribución ligera, sencilla y segura, ordientada a la seguridad.
    - Ademas alpine es rápido.
    - Crea unas imagenes muy pequeñas.
    - Seguridad

¿Qué ventajas encontramos en Debian?
    - Cantidad y calidad del software compatible. Alpina de no ser por docker se habria quedado al marge de las distribucion Linux, Debian ha sido mas desarolladas.
    - Más y mejor documentación.
    - Seguridad.
    - Compatibilidad con software existente.

Aunque Debian está mas desarrollado, y tiene grandes ventajas. Creo que es una buena opción alpine por el tamaño, no queremos imágenes pesadas.

## Propias del lenguaje: 
En la misma página de docker hub citada anteriormente si buscamos node, podemos encontrar variantes de la imagen:

    - node:<version> ~ Es la imagen de facto, cuando no estamos seguros de que elegir, esta puede ser una opción correcta. Está diseñado tanto para usarse de contenedor base como de contenedor desechable.
Si nuestra aplicación necesita unas dependencias más allá de las que trae la imágen, lo más adecuado será la imagen con las etiquetas buildpack-deps.


    - node:<version>-alpine Esta imágen se basa en el ya citado Alpine Linux. Alpine es mucho más pequeño que las imagenes base, como ya hemos dicho, y genera imágenes mucho menos pesadas en general.
Es la imagen recomendable cuando deseamos que el tamaño final de la imágen sea lo más pequeño posible.

    - node:<version>-slim  Esta imágen solo contiene los paquetes mínimos necesarios para ejecutarse node.


## Elección y por qué
node:< version >-alpine. 
En un principio parece una buena decisión que incluye mi entorno de ejecución por lo que no debo especificar en Dockerfile que es necesario node y npm, y alpine permite unas imágenes de poco tamaño, además mi proyecto no necesita muchas dependencias.

Pero... ¿Y si comparamos los tiempos de cada uno de las imagenes ejecutando mis tests?
En otro fichero indicado en el README veremos la comparación de tiempos.



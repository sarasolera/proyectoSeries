# Aprovechando docker para CI
Con appveyor la configuración inicial la hice para ejecutar los test de la misma manera que travis, y así mostrar como sería en ambos. 

Dado que con travis dejo definitivamente las pruebas de las versiones y la ejecución de los test, con AppVeyor voy a ejecutar mi contenedor.
 
Aun así para no perder el fichero de configuración incial de appveyor lo he metido en un
[fichero](https://github.com/sarasolera/proyectoSeries/blob/master/docs/ficheros_originales/appveyor_sin_docker.yml).

Fichero de configuración aprovechando docker:

![](pic/appveyor-docker.png)

Como vemos en Appveyor es muy simple, indicamos el entorno en el que queremos ejecutarlo, descargamos la imagen subida en dockerHub y ejecutamos docker run.


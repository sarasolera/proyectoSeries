# ¿Qué es GitHub Container Registry?
Se considera una alternativa a docker, con algunas ventajas. Es un registro de contenedores con soporte para imágenes de Docker, este permite configurar quién puede administrar y acceder a los paquetes mediante permisos detallados.
Con el registro de contenedores podemos:

- Almacenar imágenes de contenedores en nuestrar organización y cuenta de usuario, en lugar de almacenar el repositorio.
- Podemos establecer los permisos de visibilidad de una manera detallada.
- Podemos acceder a imágenes de conenedores públicos de forma anónima.


## ¿Cómo se usa?
Si consultamos la [documentacion proporcionada por GitHub](https://docs.github.com/es/free-pro-team@latest/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images) encontramos una serie de pasos para migrar la imágen de docker a github container registry.
En mi caso no he utilizado el registro de docker de paquetes de github por lo que realmente no debo migrar, los 2 primeros pasos no son necesarios.

- Lo primero que he hecho es crearme la imágen oficial que quiero deplegar.

- Tras crear la imágen, debemos etiquetarla correctamente para poder desplegarla, para ello importante que al inicio pongamos ghcr.io (iniciales de github container registry, en docker está docker.io) y el nombre de nuestra imágen. Así se queda la imágen etiquetada con el nuevo dominio.
Aquí  hay más documentación sobre 
    [etiquetas](https://docs.docker.com/engine/reference/commandline/tag/).

- Con el nuevo nombre de nuestra imágen, iniciamos sesión en el nuevo registro de contenedores, indicamos nuestra imágen, nuestro nombre, y el password.

- Finalmente desplegamos esta imágen haciendo *docker push ghcr.io/propietario/nombre_imagen:version*.

## PRUEBA

Tras esto en nuestra cuenta de repositorio vamos a packages y tenemos la imágen subida.
![](pic/packages.png)

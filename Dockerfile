#node y alpine
FROM node:10-alpine
# indicando autor
LABEL maintainer="Sara Solera"

# Creo un directorio de node_modules al que vamos a dar permisos
RUN mkdir /node_modules 

## De forma predeterminada si instalamos paquetes con npm instenta instalarlos en
## usr local lib node_modules y jest y grunt los encontramos en bin 
## por lo que voy a darle permisos al usuario por defecto node
# Dando los permisos adecuados
RUN chown -R node /node_modules && chown -R node /usr/local/lib/node_modules && chown -R node /usr/local/bin

#Copiamos el fichero de configuración de grunt, su documentación se encuentra enlazada en el readme
COPY  Gruntfile.js ./
# copiamos los archivos package.json y packege-lock.json que son necesarios para node
COPY   package.json ./

#Damos permisos a package.json para que pueda ser eliminado
RUN chmod -R 777 ./package.json


# A partir de aqui todo se ejecutara sin permisos de super usuario
USER node

# ejecutamos npm install que ejecuta el package.json e
# instala las dependencias
# usamos RUN para ejecutar comandos 
# al hacer install se genera la carpeta node_modules
# instalo jest y grunt que son herramientas que necesito y elimino package porque ya lo he utilizado
RUN npm install && npm install -g jest-cli && npm install -g grunt-cli && rm -rf packae.json


# Marcamos que test va a ser un directorio que se va a montar
# cuando ejecutemos -v, para saber mas leer apuntes tema 3
VOLUME /test
WORKDIR /test


# En node es necesario node_modules para que se reconozca grunt
# Pero al montar montar el volumen, se sobreescribe, por lo que 
# es necesario esto. 
# Se explicará en la documentacion de Dockerfile enlazada también
ENV PATH /node_modules/.bin:$PATH 

# para ejecutar los test
CMD ["grunt","test"]

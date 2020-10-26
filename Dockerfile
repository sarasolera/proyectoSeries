#node y alpine
FROM node:10-alpine
# indicando autor
LABEL maintainer="Sara Solera"


# copiamos los archivos package.json y packege-lock.json que son necesarios para node
COPY package*.json ./

# Copiamos el fichero de configuración de grunt, su documentación se encuentra enlazada en el readme
COPY Gruntfile.js ./

# ejecutamos npm install que ejecuta el package.json e
# instala las dependencias
# usamos RUN para ejecutar comandos 
# al hacer install se genera la carpeta node_modules
# instalo jest y grunt que son herramientas que necesito
RUN npm install && npm install -g jest-cli && npm install -g grunt-cli

# Pra ejecutar los test no hace falta permisos superusuario
USER seriessara

# Marcamos que test va a ser un directorio que se va a montar
# cuando ejecutemos -v, para saber mas leer apuntes tema 3
VOLUME /test
WORKDIR /test

# En node es necesario node_modules para que se reconozca grunt
# Pero al montar montar el volumen, se sobreescribe, por lo que 
# es necesario esto. 
# Se explicará en la documentacion de Dockerfile enlazada también
ENV PATH=/proyecto/node_modules/.bin:$PATH


# para ejecutar los test
CMD ["grunt","test"]

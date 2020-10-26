#node y alpine
FROM node:10-alpine
# indicando autor
LABEL maintainer="Sara Solera"


# copiamos los archivos package.json y packege-lock.json que son necesarios para node
COPY package*.json ./

COPY Gruntfile.js ./

# ejecutamos npm install que ejecuta el package.json e
# instala las dependencias
# usamos RUN para ejecutar comandos 
# al hacer install se genera la carpeta node_modules
RUN apt-get update -y && npm install && npm install -g jest-cli && npm install -g grunt-cli

VOLUME /test
WORKDIR /test

# La carpeta se sobrescribe con el volumen y no es más accesible e el contenedor.
ENV PATH=/proyecto/node_modules/.bin:$PATH
# para ejecutar los test


CMD ["grunt","test"]

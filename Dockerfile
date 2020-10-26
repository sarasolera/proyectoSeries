#node y alpine
FROM node:10-alpine
# indicando autor
LABEL maintainer="Sara Solera"
WORKDIR /proyecto

# copiamos los archivos package.json y packege-lock.json que son necesarios para node
COPY package*.json /proyecto/

COPY Gruntfile.js /proyecto/

# ejecutamos npm install que ejecuta el package.json e
# instala las dependencias
# usamos RUN para ejecutar comandos 
# al hacer install se genera la carpeta node_modules
RUN npm install && npm install -g jest-cli && npm install -g grunt-cli

# La carpeta se sobrescribe con el volumen y no es más accesible e el contenedor.
ENV PATH=/proyecto/node_modules/.bin:$PATH
# para ejecutar los test
VOLUME /test
WORKDIR /test

CMD ["grunt","test"]

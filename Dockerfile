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
# instalo jest y grunt que son herramientas que necesito
RUN npm install && npm install -g jest-cli && npm install -g grunt-cli

# Pra ejecutar los test no hace falta permisos superusuario
USER node


VOLUME /test
WORKDIR /test

# La carpeta se sobrescribe con el volumen y no es más accesible e el contenedor.
ENV PATH=/proyecto/node_modules/.bin:$PATH


# para ejecutar los test
CMD ["grunt","test"]

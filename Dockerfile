#node y alpine
FROM node:10-alpine
# indicando autor
LABEL maintainer="Sara Solera"
WORKDIR /test

# copiamos los archivos package.json y packege-lock.json que son necesarios para node
COPY package*.json /test/

COPY Gruntfile.js /test/

# ejecutamos npm install que ejecuta el package.json e
# instala las dependencias
# usamos RUN para ejecutar comandos 
# al hacer install se genera la carpeta node_modules
RUN npm install && npm install -g grunt && npm install -g jest-cli

# Node modules es un directorio que se crea al instalar las dependencias, sin embargo no deberia estar en nuestro repositorio
# por lo que se introduce en gitignore. 
# Esta carpeta nos permite importar paquetes extenos instalados mediante npm a nuestro proyecto local
# si no lo tenemos no se encontrará grunt 
# Cuando se monta lo elimina 
# Por lo que debemos reubica nodemodules  para que pueda desarrollar node fuera y dentro

ENV PATH /test/node_modules/.bin:$PATH
# para ejecutar los test
CMD ["grunt","test"]

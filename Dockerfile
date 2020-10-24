#node y alpine
FROM node:10-alpine
# indicando autor
LABEL maintainer="Sara Solera"

WORKDIR /test
WORKDIR /series

# copiamos los archivos package.json y packege-lock.json que son necesarios para node
COPY package*.json ./series/


# Instalamos jest para ejecutar los test
RUN npm install 


# ejecutamos npm install que ejecuta el package.json e
# instala las dependencias
# usamos RUN para ejecutar comandos 
# al hacer install se genera la carpeta node_modules
#RUN npm install 

# copiamos codigo fuente de las clases
COPY src/* ./test/series/
# copiamos codigo test
COPY tests/* ./test/series/






# con copy . ./app copia todos los archivos directamente

# para ejecutar los test
CMD ["npm","test"]

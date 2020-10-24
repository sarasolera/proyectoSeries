#node y alpine
FROM node:10-alpine
# indicando autor
LABEL maintainer="Sara Solera"

# copiamos los archivos package.json y packege-lock.json que son necesarios para node
COPY package*.json ./


# Instalamos jest para ejecutar los test
RUN npm install 


# ejecutamos npm install que ejecuta el package.json e
# instala las dependencias
# usamos RUN para ejecutar comandos 
# al hacer install se genera la carpeta node_modules
#RUN npm install 

# copiamos codigo fuente de las clases
COPY src/* ./src/
# copiamos codigo test
COPY tests/* ./tests/


WORKDIR /test







# con copy . ./app copia todos los archivos directamente

# para ejecutar los test
CMD ["npm","test"]

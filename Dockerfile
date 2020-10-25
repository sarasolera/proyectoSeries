#node y alpine
FROM node:10-alpine
# indicando autor
LABEL maintainer="Sara Solera"
WORKDIR /proyectoSeries

# copiamos los archivos package.json y packege-lock.json que son necesarios para node
COPY package*.json ./

# ejecutamos npm install que ejecuta el package.json e
# instala las dependencias
# usamos RUN para ejecutar comandos 
# al hacer install se genera la carpeta node_modules
RUN npm install 

# para ejecutar los test
CMD ["npm","test"]

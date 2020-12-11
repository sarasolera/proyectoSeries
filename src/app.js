const Hapi = require('hapi')
const rutas = require("./rutas/rutas")

//Creamos el servidor, para ello simplemente establecemos el puerto, y el host
//son atributos obligatorios
const server = Hapi.server({
    port: process.env.PORT || 8000 ,
    host: 'localhost'
});

const iniciarServer = async () => {
    try {
      await server.register(rutas);
      await server.start();
      console.log(`Servidor corriendo en: ${server.info.uri}`);
    } catch (err) {
      console.log('Error al iniciar el servidor Hapi');
      //throw Boom.badRequest(err)
    }
};
  
iniciarServer();

module.exports = server
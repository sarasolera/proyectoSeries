const Controlador = require("../controlador/controladorSeries");
const Boom = require('@hapi/boom');
const controlador_s = new Controlador();

module.exports = {
    name: 'ApiRutas',
    register: async(server,options) => {
        //generamos el complemento que sera lanzado antes de enviar la respuesta
        server.ext('onPreResponse', function (request, reply){
            var res = request.response;
            var req = request.raw.req;
            //Si el objeto request.response es tipo boom significa que ocurrió un error
            //Captamos el mensaje y el codigo (generados a con mis clase error)
            if(res.isBoom){
                console.log(res)
                if(res.mensaje){
                    //si existe mensaje, es que la excepcion fue mandada a traves de mi clase error asi que captamos mensaje y codigo
                    return reply.response(res.mensaje).code(res.codigo);
                }
                else{
                    //si no podemos coger del cuerpo que proporciona res
                    return reply.response(res.output.payload.message).code(res.output.statusCode);
                }
                
            }
            //si no es boom podemos continuar
            else{
                return reply.continue;
            }
        });
        server.route([
            {
                method: 'GET',
                path: '/',
                handler:async(req,res) => {
                    return "Comenzamos con nuestra Api";
                }
            },
            {
                method: 'GET',
                path: '/catalogo',
                handler:async(req,res) => {
                    
                        datos = {}
                        datos.series = controlador_s.obtenerSeries();
                        response = res.response(datos);
                        response.code(200);
                        return response;
                
                    
                   
                }
            }

        ]);

        // Añadimos server.events.on ara escuchar los eventos evento de petición
        server.events.on('request', (request, event, tags) => {
            //pasamos de timestam a hora minutos y segundos
            //timestamp lo captamos de event
            var fecha = new Date(event.timestamp).toDateString("en-US")
            var horas = new Date(event.timestamp).toLocaleTimeString("en-US")
            // Si hay un error, en tag se pone el booleano error a true
            if(tags.error){
                console.log('<--' + fecha + " " + horas + ` Server error: ${event.error ? event.error.message : 'unknown'} `);
                
            }
            else{
                // Si no hay error se muestra el mensaje que generamos a través de req.log
                mensaje  = event.data
                console.log("<-- " + fecha + " " + horas + " " + " "+ mensaje); 
                
            } 
            
        });

        //Añadimos server.events.on para escuchar el evento tras la respuesta al cliente,
        //de el podemos captar el localhost, metodo usado, la ruta y el código generado
        server.events.on('response', function (request) {
            local = request.info.remoteAddress;
            metodo = request.method.toUpperCase();
            ruta = request.path;
            codigo = request.response.statusCode
            console.log(local + ': ' + metodo + ' ' + ruta + ' --> ' + codigo);
        });


    }
}




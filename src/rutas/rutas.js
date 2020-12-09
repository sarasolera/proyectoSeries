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

    }
}




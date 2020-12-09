const Controlador = require("../controlador/controladorSeries");
const Boom = require('@hapi/boom');
const controlador_s = new Controlador();

module.exports = {
    name: 'ApiRutas',
    register: async(server,options) => {
       
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




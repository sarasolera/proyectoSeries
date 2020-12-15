const Controlador = require("../controlador/controladorSeries");
const Boom = require('@hapi/boom');
const controlador_s = new Controlador();
const Hapi = require('hapi')

//Creamos el servidor, para ello simplemente establecemos el puerto, y el host
//son atributos obligatorios
const server = Hapi.server({
    host: 'localhost',
    port: process.env.PORT || 8000
});



//para el fichero de log
//var fs = require('fs');
// module.exports = {
//     name: 'ApiRutas',
//     register: async(server,options) => {
        //generamos el complemento que sera lanzado antes de enviar la respuesta
        server.ext('onPreResponse', function (request, reply){
            var res = request.response;
            var req = request.raw.req;
            //Si el objeto request.response es tipo boom significa que ocurrió un error
            //Captamos el mensaje y el codigo (generados a con mis clase error)
            if(res.isBoom){
                if(res.mensaje){
                    error = {"Error":res.mensaje}
                    //si existe mensaje, es que la excepcion fue mandada a traves de mi clase error asi que captamos mensaje y codigo
                    return reply.response(error).code(res.codigo);
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
                        //AÑADIMOS EL EVENTO DE PETICIÓN
                        req.log("Consulta","Consultando series disponibles en el catalogo")
                        datos = {}
                        datos.series = controlador_s.obtenerSeries();
                        response = res.response(datos);
                        response.code(200);
                        return response;
                
                    
                   
                }
            },

            {
                method: 'GET',
                path:'/catalogo/{nombre_serie}',
                handler:function(req,res){
                    //generamos log para esa consulta
                    req.log("Consulta","Consultando serie de catalogo")
                    n_serie = req.params.nombre_serie
                    datos = {}
                    datos.serie = controlador_s.obtenerSerie(n_serie);
                    response = res.response(datos);
                    response.code(200);
                    return response 
                                   
                }
            },
            {
                method:'GET',
                path:'/catalogo/porPuntuacion',
                handler:function(req,res){
                    //generamos log para esa consulta
                    req.log("Consulta","Consultando series por orden de puntuacion")
                    datos = {}
                    datos.series = controlador_s.obtenerSeriesPuntuación();
                    response = res.response(datos);
                    response.code(200);
                    return response ;
                                   
                }
            },
            {
                method:'POST',
                path:'/catalogo/{nombre}/comentarios/{comentario}',
                handler:function(req,res){
                    //captamos los datos de req
                    req.log("Insertando","Añadiendo comentario a catalogo")
                    const nombre = req.params.nombre;
                    const comentario = req.params.comentario;
                    controlador_s.comentarSerie(nombre,comentario)
                    var mensaje = "Comentario:" + comentario + " añadido a " + nombre ;
                    response = res.response({"Éxito":mensaje})
                    response.code(200);
                    return response;
                }

            },
            {
                method:'GET',
                path:'/catalogo/{nombre}/comentarios',
                handler:function(req,res){
                    //generamos log para esa consulta
                    req.log("Consulta","Consultando comentarios de una serie")
                    const nombre = req.params.nombre;
                    datos = {}
                    datos.comentarios = controlador_s.consultarComentarios(nombre);
                    
                    response = res.response(datos);
                    response.code(200);
                    return response ;
                                   
                }
            },
            {
                method: 'PUT',
                path: '/catalogo/{nombre_s}/comentarios/{indice_comentario}/{comentario_nuevo}',
                handler: async (req, res) => {
                  req.log("Modificando", "Modificando comentario de una serie");
                  serie = req.params.nombre_s
                  indice = req.params.indice_comentario
                  comentarioNuevo = req.params.comentario_nuevo
                  controlador_s.modificarComentario(serie,indice,comentarioNuevo);
                  mensaje = "Comentario actualizado";
                  response = res.response({"Éxito":mensaje});
                  response.code(200);
                  return response;
                }
              },
              {
                  method:'DELETE',
                  path:'/catalogo/{nombre_s}/comentarios/{indice_comentario}',
                  handler: async (req, res) => {
                    req.log("Eliminando", "Eliminando comentario serie");
                    serie = req.params.nombre_s
                    indice = req.params.indice_comentario
                    controlador_s.eliminarComentario(serie,indice);
                    mensaje = "Comentario eliminado";
                    response = res.response({"Éxito":mensaje});
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
                
                log = '<--' + fecha + " " + horas + ` Server error: ${event.error ? event.error.message : 'unknown'} `;
            }
            else{
                // Si no hay error se muestra el mensaje que generamos a través de req.log
                mensaje  = event.data
                console.log("<-- " + fecha + " " + horas + " " + " "+ mensaje); 
                log = "<-- " + fecha + " " + horas + " " + " "+ mensaje;
            }

            // fs.appendFile('./log/log.txt',log + "\n",(err)=>{
            //     if(err)throw err;
               
            // });
            
        });

        //Añadimos server.events.on para escuchar el evento tras la respuesta al cliente,
        //de el podemos captar el localhost, metodo usado, la ruta y el código generado
        server.events.on('response', function (request) {
            local = request.info.remoteAddress;
            metodo = request.method.toUpperCase();
            ruta = request.path;
            codigo = request.response.statusCode
            console.log(local + ': ' + metodo + ' ' + ruta + ' --> ' + codigo);
            log = local + ': ' + metodo + ' ' + ruta + ' --> ' + codigo;
            // fs.appendFile('./log/log.txt',log + "\n",(err)=>{
            //     if(err)throw err;
            //     //console.log('Fichero de log actualizado!')
            // });
        });


//     }
// }


module.exports = server


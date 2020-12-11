//Ejemplo con hapijs
const Hapi = require('hapi')
//Creamos la instancia del servidor
const server = Hapi.server({
    //indicamos el puerto
    port: 3000,
    
    //indicamos el host
    host:'localhost'
});

//Para iniciar
const init = async()=>{
    await server.start();
    // nos muestra los datos de la instacia server
    console.log('Server running on %s ',server.info.uri);


    //Una vez iniciado el servidor, para ver algo debemos añadir las rutas
    //utilizando la instacnia del servidor

    server.route({
        method:'GET',
        path:'/',
        handler:(request,res)=>{
            return "Esto solo es una pequeña prueba, para comprobar como funciona HapiJS";
        }
    });

    //Ya podemos lanzar el servidor y comprobar que obtenemos en http://127.0.0.1:3000
};

//Llamamos a la funcion
init();
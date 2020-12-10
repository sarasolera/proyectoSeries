const server = require('../src/app.js')

// Antes de todo abrimos conexión
beforeAll((done) => {
    server.events.on('start',()=>{
        done();
    })
});

// Tras realizar los test lo adecuado es cerrar la conexion

afterAll((done) => {
    server.events.on('stop',()=>{
        done();
    });
    server.stop();
});

// COMENZAMOS CON LOS TESTEOS
test('Deberia mostrar el catalogo completo', async function () {
    const options = {
        method:'GET',
        url:'/catalogo'
    };

    const data = await server.inject(options);
    //para asegurar de que contiene data hice un consola.log , 
    //en headers encontré: 'content-type': 'application/json; charset=utf-8', por lo que separaré por el ; para filtrar el utf
    //console.log(data)
    tipo = data.headers['content-type'].split(';')
    expect(data.statusCode).toBe(200);
    expect(tipo[0]).toBe('application/json');
    
});

test('Deberia mostrar una serie del catalogo',async function(){
    var options = {
        method:'GET',
        url:'/catalogo/Barry'
    }
    var data = await server.inject(options);
    tipo = data.headers['content-type'].split(';')
    expect(data.statusCode).toBe(200);
    expect(tipo[0]).toBe('application/json');


    //Una serie que no esté en el catalogo, va a devolver error 404
    options = {
        method:'GET',
        url:'/catalogo/No existe'
    }
    data = await server.inject(options);
    tipo = data.headers['content-type'].split(';')
    expect(data.statusCode).toBe(404);

});

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


test('Deberia mostrar las series del catalogo ordenadas por puntuación', async function () {
    const options = {
        method:'GET',
        url:'/catalogo/porPuntuacion'
    };

    const data = await server.inject(options);

    tipo = data.headers['content-type'].split(';')
    expect(data.statusCode).toBe(200);
    expect(tipo[0]).toBe('application/json');
    
});


test("Deberia añadir un comentario a la serie que indiquemos",async function(){
    const options = {
        method:'POST',
        url:'/catalogo/Barry/comentarios/Es muy buena serie'
    };

    const data = await server.inject(options);

    tipo = data.headers['content-type'].split(';')
    expect(data.statusCode).toBe(200);
    expect(tipo[0]).toBe('application/json');
});


test('Deberia editar el comentario de la serie indicada',async function(){
    var options = {
        method: 'PUT',
        url: '/catalogo/Barry/comentarios/0/Realmente es de mis serie favoritas'
    };

    var data = await server.inject(options);
    tipo = data.headers['content-type'].split(';')
    expect(data.statusCode).toBe(200);
    expect(tipo[0]).toBe('application/json');

    // si indicamos un indice de comentarioq que no existe obtenemos codigo 404
    options = {
        method: 'PUT',
        url: '/catalogo/Barry/comentarios/5/Realmente es de mis serie favoritas'
    };
    var data = await server.inject(options);
    tipo = data.headers['content-type'].split(';')
    expect(data.statusCode).toBe(404);
    expect(tipo[0]).toBe('application/json');
});

test('Deberia eliminar el comentario de la serie indicada',async function(){
    //eliminando comentario 0
    var options = {
        method: 'DELETE',
        url: '/catalogo/Barry/comentarios/0'
    };

    var data = await server.inject(options);
    tipo = data.headers['content-type'].split(';')
    expect(data.statusCode).toBe(200);
    expect(tipo[0]).toBe('application/json');

    // si indicamos un indice de comentarioq que no existe obtenemos codigo 404
    options = {
        method: 'DELETE',
        url: '/catalogo/Barry/comentarios/5'
    };
    var data = await server.inject(options);
    tipo = data.headers['content-type'].split(';')
    expect(data.statusCode).toBe(404);
    expect(tipo[0]).toBe('application/json');
});
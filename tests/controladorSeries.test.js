const Controlador = require('../src/controlador/controladorSeries');
const ErrorPropio = require('../src/error');

const controlador = new Controlador();

describe("Testeando clase Controlador", ()=>{
    test("Crea objeto Controlador",()=>{
        expect(new Controlador()).toBeInstanceOf(Controlador);

    });

    test("Metodo obtener lista de series del catálogo",()=>{
        //obtengo  una lista con los nombre de los nombres de todas las series del catalogo
        var lista_Series = controlador.obtenerSeries();
        var num_series = controlador.catalogo.series.length
        expect(lista_Series.length).toBe(num_series);
    });

    test("Metodo para obtener una serie del catalogo, dando su nombre",()=>{
        //Obtenemos los datos de la serie Barry.
        const n_serie = "Barry"
        var listaDatos = controlador.obtenerSerie(n_serie);
        var dic = {"Nombre":controlador.catalogo.series[2].getNombre(),"Sinopsis":controlador.catalogo.series[2].getSinopsis(),"Numero Temporadas":controlador.catalogo.series[2].getNumTemporadas(),"Genero":controlador.catalogo.series[2].getGenero()};
        const listaEsperada = [];
        listaEsperada.push(dic);
        expect(listaDatos).toStrictEqual(listaEsperada);
        var errorObtenido = () => controlador.obtenerSerie("NoExiste")
        var errorEsperado =  new ErrorPropio("Esa serie no existe",404);
        expect(errorObtenido).toThrow(errorEsperado);
        

    });

    test("Método para obtener las series de mayor a menor puntuación",()=>{
        //EN la funcion de catalogo ya comprobamos que ordene bien el vecto
        //comprobamos que esta función devuelve una lista, y que tiene el mismo
        //numero de elementos que series haya en el catalogo.
        var tam_catalogo = controlador.catalogo.series.length;
        var lista = controlador.obtenerSeriesPuntuación();

        expect(lista).toBeInstanceOf(Array);
        expect(lista.length).toBe(tam_catalogo);
    });

    test("Método para añadir comentario a una serie, dado el nombre",()=>{
        //El tamaño de array de comentario es 1
        var tam_antes = controlador.catalogo.series[4].getComentarios().length
        //Comentamos la serie
        controlador.comentarSerie("Barry","Me gusta mucho esta serie");
        var tam_despues =controlador.catalogo.series[4].getComentarios().length
        var esp = tam_antes + 1;
        expect(tam_despues).toBe(esp)
    });

    test("Método para obtener los comentarios de una serie",()=>{
        //Añadimos el comentario
        //Comprobamos que se genera 0:Me gusta mucho esta serie
        var esperado = "0:Me gusta mucho esta serie"
        var coments= controlador.consultarComentarios("Barry")
        var recibido = coments[0];
        expect(recibido).toStrictEqual(esperado);
    });

    test("Método para modificar el comentario de una serie" , ()=>{
        //damos el nombre de la serie, el indice del comentario, y el comentario nuevo
        //anteriormente hemos añadido un comentario a Barry justo en el test anterior
        //vamos a modificar ese comentario
        const nuevoC ="Está perdiendo fuerza por temporadas"
        const nombreSerie = "Barry"
        const indice = 0
        controlador.modificarComentario(nombreSerie,indice,nuevoC);
        comentarios = controlador.catalogo.series[4].getComentarios()

        expect(comentarios[indice]).toBe(nuevoC)
        
        //si modificamos un comentario que no existe, por ejemplo Barry no tiene 10 comentarios, si metemos el indice 10
        var errorObtenido = () => controlador.modificarComentario(nombreSerie,10,nuevoC)
        var errorEsperado =  new ErrorPropio("No existe ese comentario",404);
        expect(errorObtenido).toThrow(errorEsperado);

        
    });

    test("Método para eliminar comentario de una serie" , ()=>{
        //Añado un par de comentarios a la serie de indice 0
        var c1 = "Me encata, tiene accion, comedia, drama, es genial";
        var c2 = "A mi me aburre un poco"
        controlador.catalogo.comentarSerie(c1,0)
        controlador.catalogo.comentarSerie(c2,0)

        //Si eliminamos la 2, al obtener los comentarios solo nos quedará una lista con c1
        var esperado = []
        esperado.push(c2)
        nombre_serie = controlador.catalogo.series[0].getNombre();
        //BOrramos comentario1
        controlador.eliminarComentario(nombre_serie,0)
        recibido = controlador.catalogo.series[0].getComentarios();
       

        expect(recibido).toStrictEqual(esperado);
        
        // //si eliminamos un comentario que no existe, por ejemplo Barry no tiene 10 comentarios, si metemos el indice 10
        // var errorObtenido = () => controlador.eliminarComentario("La casa de papel",10)
        // var errorEsperado =  new ErrorPropio("No existe ese comentario",404);
        // expect(errorObtenido).toThrow(errorEsperado);

        
    })


})
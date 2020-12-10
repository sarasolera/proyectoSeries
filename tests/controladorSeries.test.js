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
    })
})
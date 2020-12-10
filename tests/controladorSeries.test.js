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
        var dic = {"Nombre":controlador.catalogo.series[2].getNombre(),"Sinopsis":controlador.catalogo.series[2].getSinopsis()};
        const listaEsperada = [];
        listaEsperada.push(dic);
        expect(listaDatos).toStrictEqual(listaEsperada);
        var errorObtenido = () => controlador.obtenerSerie("NoExiste")
        var errorEsperado =  new ErrorPropio("Esa serie no existe",404);
        expect(errorObtenido).toThrow(errorEsperado);
        

    })
})
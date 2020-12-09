const Controlador = require('../src/controlador/controladorSeries');

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
})
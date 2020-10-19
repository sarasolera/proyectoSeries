
var Serie = require('../src/serie.js'),



//Creo el objeto serie para testear.
const serie_nueva = new Serie('La casa de papel', 'Una banda organizada de ladrones tiene el objetivo de cometer el atraco del siglo en la Fábrica Nacional de Moneda y Timbre. Cinco meses de preparación quedarán reducidos a once días para poder llevar a cabo con éxito el gran golpe.',4,"ACCION");

//Añadimos datos al objeto para comprobar.
var fecha_eje = new Date(2021,11,19);
var actriz = "Ursula Corberó";
var puntos = 5;
serie_nueva.fecha_prox_temp = fecha_eje;
serie_nueva.reparto.push(actriz);
serie_nueva.puntuacion.push(puntos);

describe('Testeando clase Serie' , ()=>{
    describe('Crea objeto Serie', ()=>{
        test('Crea',()=>{
            expect(serie_nueva.nombre).toBe('La casa de papel');
            expect(serie_nueva.sinopsis).toBe('Una banda organizada de ladrones tiene el objetivo de cometer el atraco del siglo en la Fábrica Nacional de Moneda y Timbre. Cinco meses de preparación quedarán reducidos a once días para poder llevar a cabo con éxito el gran golpe.');
            expect(serie_nueva.temporadas_act).toBe(4);
            expect(serie_nueva.genero).toBe("ACCION");
        });
        
    });


    describe('Testeando funciones get:',()=>{
        
        test('Nombre correcto',() =>{
            expect(serie_nueva.getNombre()).toBe("La casa de papel");
        });

        test('Sinopsis correcta',()=>{
            expect(serie_nueva.getSinopsis()).toBe('Una banda organizada de ladrones tiene el objetivo de cometer el atraco del siglo en la Fábrica Nacional de Moneda y Timbre. Cinco meses de preparación quedarán reducidos a once días para poder llevar a cabo con éxito el gran golpe.');

        });

        test('Temporadas correctas',()=>{
            expect(serie_nueva.getTemporadas()).toBe(4);

        });

        test('Genero correcto',()=>{
            expect(serie_nueva.getGenero()).toBe("ACCION");
        });

        test('Fecha correcta',()=>{
            
            expect(serie_nueva.getFecha_prox().getFullYear()).toBe(2021);
            expect(serie_nueva.getFecha_prox().getMonth()).toBe(11);
            expect(serie_nueva.getFecha_prox().getDate()).toBe(19);

        });

        test('Reparto correcto',()=>{
            expect(serie_nueva.getReparto()[0]).toBe("Ursula Corberó");
        });

        test('Media de puntos correcta',()=>{
            expect(serie_nueva.getMediaPuntuacion()).toBe(5);
        });

    });

    describe('Testeando funciones set:',()=>{
        test('setTemporada',()=>{
            //esta funcion será llamada cuando se confirme fecha de estreno, y incrementa en 1 el nº de temp
            
            serie_nueva.setTemporada();
            expect(serie_nueva.getTemporadas()).toBe(5);
        });

        test('setFechaProxima',()=>{
            var f = new Date(2010,9,7);
            var errorD = () => serie_nueva.setFechaProxima(f);
            

            expect(errorD).toThrow();
            

            var f = new Date(2021,9,9);
            serie_nueva.setFechaProxima(f);
            expect(serie_nueva.getFecha_prox().getFullYear()).toBe(2021);
            expect(serie_nueva.getFecha_prox().getMonth()).toBe(9);
            expect(serie_nueva.getFecha_prox().getDate()).toBe(9);
        });

        test('setGenero',()=>{
            var genC="MIEDO";
            var genI="TERROR";

            serie_nueva.setGenero(genC);
            expect(serie_nueva.getGenero()).toBe("MIEDO");

            var errorD = () => serie_nueva.setGenero(genI);
            expect(errorD).toThrow();

        });
    });

    describe("Testeando resto funciones",()=>{
        test("Incorporar actor o actriz",()=>{
            var actriz = "Ursula Corberó";
            var errorD = () => serie_nueva.incorporarAct(actriz);
            expect(errorD).toThrow();

            serie_nueva.incorporarAct("Jaime Lorente");   
            expect(serie_nueva.getReparto()[0]).toBe("Ursula Corberó");
            expect(serie_nueva.getReparto()[1]).toBe("Jaime Lorente");

        });

        test ("Agregar puntuación a una serie",()=>{
            serie_nueva.sumarPuntos(9);
            expect(serie_nueva.puntuacion[1]).toBe(9);
        });

        test("Formato mostrando fecha es correcto",()=>{
            //devolver fecha con un formato
            var f = new Date(2021,9,9);
            serie_nueva.setFechaProxima(f);

            expect(serie_nueva.mostrarFechaP()).toBe("9/9/2021");
        });

        test("Formato mostrando reparto es correcto",()=>{
            var f_reparto = "Ursula Corberó Jaime Lorente ";
            expect(serie_nueva.mostrarReparto()).toBe(f_reparto);
        });
    });

        
})



 
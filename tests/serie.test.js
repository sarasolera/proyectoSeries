
var Serie = require('../src/serie.js');



//Creo el objeto serie para testear.
const serie_nueva = new Serie('La casa de papel', 'Una banda organizada de ladrones tiene el objetivo de cometer el atraco del siglo en la Fábrica Nacional de Moneda y Timbre. Cinco meses de preparación quedarán reducidos a once días para poder llevar a cabo con éxito el gran golpe.',4,"ACCION");

//Añadimos datos al objeto para comprobar.
var fecha_eje = new Date(2021,11,19);
const actriz = "Ursula Corberó";
var puntos = 5;
serie_nueva.fecha_prox_temp = fecha_eje;
serie_nueva.reparto.push(actriz);
serie_nueva.puntuacion.push(puntos);
const nombre_creado = 'La casa de papel';
const sin_creada ='Una banda organizada de ladrones tiene el objetivo de cometer el atraco del siglo en la Fábrica Nacional de Moneda y Timbre. Cinco meses de preparación quedarán reducidos a once días para poder llevar a cabo con éxito el gran golpe.';
const numero_temporadas = 4;
const genero_creado = "ACCION";

describe('Testeando clase Serie' , ()=>{
    describe('Crea objeto Serie', ()=>{
        test('Crea',()=>{
            //comprobamos que el objeto creado es de la clase correcta
            expect(new Serie()).toBeInstanceOf(Serie);
            
            expect(serie_nueva.nombre).toBe(nombre_creado);
            expect(serie_nueva.sinopsis).toBe(sin_creada);
            expect(serie_nueva.temporadas_act).toBe(numero_temporadas);
            expect(serie_nueva.genero).toBe("ACCION");
        });
        
    });


    describe('Testeando funciones get:',()=>{
        
        test('Nombre correcto',() =>{
            
            expect(serie_nueva.getNombre()).toBe(nombre_creado);
        });

        test('Sinopsis correcta',()=>{
            expect(serie_nueva.getSinopsis()).toBe(sin_creada);

        });

        test('Temporadas correctas',()=>{
            expect(serie_nueva.getTemporadas()).toBe(numero_temporadas);

        });

        test('Genero correcto',()=>{
            expect(serie_nueva.getGenero()).toBe(genero_creado);
        });

        test('Fecha correcta',()=>{
            
            expect(serie_nueva.getFecha_prox().getFullYear()).toBe(2021);
            expect(serie_nueva.getFecha_prox().getMonth()).toBe(11);
            expect(serie_nueva.getFecha_prox().getDate()).toBe(19);

        });

        test('Reparto correcto',()=>{
            expect(serie_nueva.getReparto()[0]).toBe(actriz);
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
            const genC="MIEDO";
            const genI="TERROR";

            serie_nueva.setGenero(genC);
            expect(serie_nueva.getGenero()).toBe(genC);

            var errorD = () => serie_nueva.setGenero(genI);
            expect(errorD).toThrow();

        });
    });

    describe("Testeando resto funciones",()=>{
        test("Incorporar actor o actriz",()=>{
            
            var errorD = () => serie_nueva.incorporarAct(actriz);
            expect(errorD).toThrow();
            const actorNuevo = "Jaime Lorente";
            serie_nueva.incorporarAct(actorNuevo);   
            expect(serie_nueva.getReparto()[0]).toBe(actriz);
            expect(serie_nueva.getReparto()[1]).toBe(actorNuevo);

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
            const f_reparto = "Ursula Corberó Jaime Lorente ";
            expect(serie_nueva.mostrarReparto()).toBe(f_reparto);
        });
    });

        
})



 
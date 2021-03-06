
const Capitulo = require('../src/capitulo.js');
var Serie = require('../src/serie.js');
var Temporada = require('../src/temporada.js');

//Trabajando con constantes
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
const num_temporadas = 4;
const genero_creado = "ACCION";
const comentario1 = "Es una serie escelente, me encanta!";
serie_nueva.aniadirComentario(comentario1);
const comentario2 = "Es un poco subrealista pero muy entretenida.";
var capitulo_prueba = new Capitulo("Capitulo uno:La desaparición de Will Byers",48,"Cuando vuelve en bici a su casa, Will ve algo horroroso.Cerca de allí, un siniestro secreto acecha en las profundidades de un laboratorio estatal");

describe('Testeando clase Serie' , ()=>{
    describe('Crea objeto Serie', ()=>{
        test('Crea',()=>{
            //comprobamos que el objeto creado es de la clase correcta
            expect(new Serie()).toBeInstanceOf(Serie);
            expect(serie_nueva.nombre).toBe(nombre_creado);
            expect(serie_nueva.sinopsis).toBe(sin_creada);
            expect(serie_nueva.numero_temporadas).toBe(num_temporadas);
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
            expect(serie_nueva.getNumTemporadas()).toBe(num_temporadas);

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

        test('Consultar comentario',()=>{
            var esperado = new Array();
            esperado = serie_nueva.getComentarios();
            expect(esperado.length).toBe(1);
            expect(esperado[0]).toBe(comentario1);
        });

    });

    describe('Testeando funciones set:',()=>{
        test('setNumTemporada',()=>{
            //esta funcion será llamada cuando se confirme fecha de estreno, y incrementa en 1 el nº de temp
            
            serie_nueva.setNumTemporada();
            expect(serie_nueva.getNumTemporadas()).toBe(5);
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

        test("Añadiendo comentario a una serie",()=>{
            serie_nueva.aniadirComentario(comentario2);
            const esperado =  new Array();
            esperado.push(comentario1);
            esperado.push(comentario2);

            expect(serie_nueva.getComentarios()).toStrictEqual(esperado);
        });


        test("Añadir capitulo a la temporada de una serie",()=>{
            //Añadimos a la temporada 2, al no esta la 1 creada debe fallar
            var errorD = () => serie_nueva.aniadirCapitulo(capitulo_prueba,2);
            expect(errorD).toThrow();
            // Si añadimos a una temporada que aun no se ha confirmado debe dar error
            //es decir stranger thins tiene 4 temporadas confirmadas, no podemos añadir a la 5 o a la 6
            errorD = () => serie_nueva.aniadirCapitulo(capitulo_prueba,6);
            expect(errorD).toThrow();

            //Si añdimos a la temporada 1 se creará y no habra problema
            serie_nueva.aniadirCapitulo(capitulo_prueba,1);
            expect(serie_nueva.getTemporadas().length).toBe(1);

        });


        test("Obtener lista capitulos de una temporada" , ()=>{
            //si intentamos acceder a los capitulos de una temporada que aun no se ha generado da error
            //por ejemplo en stranger thing tenemos 1 capitulo de la temporada 1 en la temporada 2 no hemos puesto nada
            var errorD = () => serie_nueva.obtenerListaCapitulos(2);
            expect(errorD).toThrow();
            //si intento obtenerlo de una temporada no confirmada tambien dará error
            errorD = ()=> serie_nueva.obtenerListaCapitulos(5);
            var capitulos_obtenidos = serie_nueva.obtenerListaCapitulos(1);
            expect(capitulos_obtenidos[0]).toBe(capitulo_prueba);
        });

        test("Modificar comentario de la lista", () =>{
            //vamos a modificar un comentario que hayamos añadido
            var nuevoComentario = "A mi realmente me gustó";
            serie_nueva.modificarComentario(0,nuevoComentario);
            recibido = serie_nueva.getComentarios();
            expect(recibido[0]).toBe(nuevoComentario);


            errorD = () => serie_nueva.modificarComentario(5,nuevoComentario);
            expect(errorD).toThrow();
        });

        test("Eliminar comentario de la serie", ()=>{
            var tam_coment = serie_nueva.getComentarios().length
            
            serie_nueva.eliminarComentario(0);

            var tam_coment_final = serie_nueva.getComentarios().length 

            expect(tam_coment_final).toBe(tam_coment - 1)
        })

       
    });



        
})



 
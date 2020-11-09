var Temporada = require('../src/temporada.js'),
Capitulo = require('../src/capitulo.js');

//Pruebo a crear una temporada 
const temporadaNueva = new Temporada();
const capitulo1 = new Capitulo("La laguna Estigia", 71 , 'Tras aceptar la petición de su amiga Edurne y animado por su Novia, Caronte viaja a madrid a defender a Javier Sáez');
const capitulo2 = new Capitulo("Insurrección",71,'La buena marcha del juicio contra Javier Sáez hace que Caronte reciba una nueva oferta');

describe('Testeando clase Temporada', ()=>{
    describe('Creando objeto temporada', ()=>{
        test('Crear objeto',()=>{
            expect(new Temporada()).toBeInstanceOf(Temporada);
        });
    });

    describe('Testeando métodos',()=>{
        test('Añadiendo capitulo',()=>{
            temporadaNueva.aniadirCapitulo(capitulo1);

            expect(temporadaNueva.capitulos.length).toBe(1);
        });
        test('getCapitulos',()=>{
            capituloCaptado = temporadaNueva.getCapitulos();

            expect(capituloCaptado[0]).toBe(capitulo1);
        });
        test('eliminarCapitulo',()=>{
            var errorD = () => temporadaNueva.eliminarCapitulo(15);
             expect(errorD).toThrow();

            temporadaNueva.eliminarCapitulo(0);
            expect(temporadaNueva.capitulos.length).toBe(0);

        });

        test('setCapitulos',()=>{
            var conjuntoCapitulos = new Array();
            conjuntoCapitulos.push(capitulo1);
            conjuntoCapitulos.push(capitulo2);
            temporadaNueva.setCapitulos(conjuntoCapitulos);
            expect(temporadaNueva.capitulos[0]).toBe(capitulo1);
            expect(temporadaNueva.capitulos[1]).toBe(capitulo2);


        })
    });

    
});
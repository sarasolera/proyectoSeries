
var Capitulo = require('../src/capitulo.js');
//Creamos un objeto capitulo
//Ejemplo capitulo de la serie Caronte
const capitulo = new Capitulo('La laguna Estigia',71,'Tras aceptar la peticioón  de su amiga Edurne y animado por su novia, Caronte abandona Gijón por unos dias para iniciar la defensa de Javier Sáez en Madrid.')
const nombre_usado = 'La laguna Estigia';
const duracion_usada = 71;
const sinopsis_usada = 'Tras aceptar la peticioón  de su amiga Edurne y animado por su novia, Caronte abandona Gijón por unos dias para iniciar la defensa de Javier Sáez en Madrid.';
describe('Testeando clase Capitulo', ()=>{
    describe('Crea objeto Capitulo',()=>{
        test('Crear',()=>{
            expect(new Capitulo()).toBeInstanceOf(Capitulo);
            
        });
    });
    describe('Testeando funciones get',()=>{
        test('Nombre capitulo correcto',()=>{
            expect(capitulo.getNombre()).toBe(nombre_usado);
        });
        test('Duracion capitulo correcta ' , ()=>{
            expect(capitulo.getDuracion()).toBe(duracion_usada);
        });
        test('Sinopsis capitulo correcta', ()=>{
            expect(capitulo.getSinopsis()).toBe(sinopsis_usada);
        });
    });
    
    describe('Testenado funciones set',()=>{
        test('Modificando nombre capitulo',()=>{
            const nombre = 'La LAGUNA';
            capitulo.setNombre(nombre);

            expect(capitulo.getNombre()).toBe(nombre);
        });

        test('Modificando duracion capitulo', ()=>{
            const d = 70;
            capitulo.setDuracion(d);

            expect(capitulo.getDuracion()).toBe(d);
        });

        test('Modificando sinopsis capitulo', ()=>{
            const sinop = "Caronte porfin se atreve a ejercer de abogado de un viejo conocido, esto le llevará a reunirse con todo lo que dejó atrás";
            capitulo.setSinopsis(sinop);

            expect(capitulo.getSinopsis()).toBe(sinop);
        });
    });
});
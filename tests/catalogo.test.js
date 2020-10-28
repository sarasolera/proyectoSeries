var Catalogo = require('../src/catalogo.js'),
Serie = require('../src/serie.js');


const enumG = ["MIEDO" , "ACCION","COMEDIA","DRAMA"];

var cat = new Catalogo();
var serie_nueva = new Serie('La casa de papel', 'Una banda organizada de ladrones tiene el objetivo de cometer el atraco del siglo en la Fábrica Nacional de Moneda y Timbre. Cinco meses de preparación quedarán reducidos a once días para poder llevar a cabo con éxito el gran golpe.',4,"ACCION");
var serie_nueva_2 = new Serie('Stranger things','La historia arranca durante la década de los 80, en el pueblo ficticio de Hawkins, Indiana, cuando un niño llamado Will Byers desaparece misteriosamente, hecho que destapa los extraños sucesos que tienen lugar en la zona, producto de una serie de experimentos que realiza el gobierno en un laboratorio científico cercano',3, "ACCION");
var serie_nueva_3 = new Serie ('Barry', 'Barry es un asesino a sueldo que descubre su vocación de actor durante una misión en Los Angeles. A partir de ahí tendrá que decidir si debe dedicarse a lo que se le da bien pero no le motiva, o dejarse llevar por su sueño y meterse en el mundillo de la interpretación. (FILMAFFINITY)',2,"COMEDIA");
var serie_nueva_4 = new Serie('La casa de las flores', "Se desenvuelve en torno a varias generaciones de la familia De la Mora, que ha conseguido un aparente éxito gracias a su próspera floristería. Todo parece idílico para los De la Mora hasta que se encuentran con el cadáver de la amante de Ernesto (Arturo Ríos), el padre de familia",4,"COMEDIA");
var serie_nueva_5 = new Serie('La maldición de Hill Haunting',"Un grupo de hermanos que, cuando eran pequeños, crecieron en lo que luego se convertiría en la casa embrujada más famosa del país. Ahora más grandes, y forzados a volver a estar juntos frente a la tragedia, la familia finalmente debe enfrentarse a los fantasmas de su pasado — algunos de los cuales aún acechan en sus mentes, mientras que otros pueden acechar en las sombras.",2,"MIEDO");
var serie_nueva_6 = new Serie('The Walking Dead' , " The Walking Dead tiene lugar después del inicio de un apocalipsis zombi mundial. Los zombis, coloquialmente llamados «caminantes», se arrastran hacia los humanos vivos y otras criaturas para comerlos; se sienten atraídos por el ruido, como los disparos, y por diferentes aromas, por ejemplo humanos. Aunque inicialmente parece que solo los humanos que son mordidos o arañados por los caminantes pueden convertirse en otros caminantes, se revela al principio de la serie que todos los humanos vivos portan el patógeno responsable de la mutación. La mutación se activa después de la muerte del huésped del patógeno, y la única forma de matar permanentemente a un caminante es dañar su cerebro o destruir el cuerpo, como incinerándolo.",10,"MIEDO");
var serie_nueva_7 = new Serie('YOU',"Es una historia de amor ambientada en el siglo XXI sobre un veinteañero obsesivo pero brillante que usa la híper conectividad que ofrece la tecnología moderna para hacer que la mujer de sus sueños se enamore de él.  ",2,"DRAMA");
var serie_nueva_8 = new Serie('Riverdale',"La serie sigue la vida de un grupo de adolescentes en el pequeño pueblo Riverdale y explora la oscuridad oculta detrás de su imagen aparentemente perfecta.",4,"DRAMA");
cat.aniadirSerie(serie_nueva);
cat.aniadirSerie(serie_nueva_2);
cat.aniadirSerie(serie_nueva_3);
cat.aniadirSerie(serie_nueva_4);
cat.aniadirSerie(serie_nueva_5);
cat.aniadirSerie(serie_nueva_6);
cat.aniadirSerie(serie_nueva_7);
cat.aniadirSerie(serie_nueva_8);
//puntuamos
cat.series[0].sumarPuntos(9);
cat.series[0].sumarPuntos(10); //PUNTUACION 9.5
cat.series[1].sumarPuntos(8); 
cat.series[1].sumarPuntos(9); //PUNTUACION 8.5
cat.series[2].sumarPuntos(7);
cat.series[2].sumarPuntos(7); //PUNTUACION 7
cat.series[3].sumarPuntos(8);
cat.series[3].sumarPuntos(8); //PUNTUACION 8
cat.series[4].sumarPuntos(7);
cat.series[4].sumarPuntos(8); //PUNTUACION 7.5
cat.series[5].sumarPuntos(9);
cat.series[5].sumarPuntos(9); //PUNTUACION 9
cat.series[6].sumarPuntos(7);
cat.series[6].sumarPuntos(6); //PUNTUACION 6.5
cat.series[7].sumarPuntos(9);
cat.series[7].sumarPuntos(9); //PUNTUACION 9

describe('Testeando clase Catalogo' , ()=>{
    describe('Crea objeto Serie', ()=>{
        test('Crea',()=>{
        expect(new Catalogo()).toBeInstanceOf(Catalogo);
        });
       
    });

    describe('Añadir una serie al catalog',()=>{
        test('Añadir serie',()=>{
            cat.aniadirSerie(serie_nueva);
            expect(cat.series[0]).toBe(serie_nueva);
        })
    });

    describe('get array Series',()=>{
        test('getSeries',()=>{
            var s = cat.getSeries();
            expect(s[0]).toBe(serie_nueva);
        })
    });

    describe('Existe ese indice',()=>{
        test('existeSerie(indice)',()=>{
            expect(cat.existeSerie(80)).toBe(false);
            expect(cat.existeSerie(0)).toBe(true);
        })
    });

    describe('Mostrar catalogo completo',()=>{
        test("mostrarSeries()",()=>{
            var com = cat.mostrarSeries();  
            var cadenaEsperada="";
            var series_cat = cat.series;
            series_cat.forEach(element => {
                cadenaEsperada+=element.getNombre()+"\n";
            });
        
            expect(cadenaEsperada).toBe(com);

        })
    });


    describe('Consultar serie dando un indice',()=>{
        test('consultarSerie(indice)',()=>{
             var errorD = () => cat.consultarSerie(15);
             expect(errorD).toThrow();
             var indice  = 0;
             // Constantes añadidas
             const esperado = "Nombre Serie: "+ cat.series[indice].getNombre() + "\nSinopsis: "+ cat.series[indice].getSinopsis() +"\nNº Temporadas: "+cat.series[indice].getTemporadas()+ "\nGénero: "+cat.series[indice].getGenero()+"\nFecha proximo estreno: "+cat.series[indice].mostrarFechaP()+"\nReparto: "+cat.series[indice].mostrarReparto() + "\nMedia puntuacion: " + cat.series[indice].getMediaPuntuacion();
 
             expect(cat.consultarSerie(0)).toBe(esperado);
 
        })
    });

    describe('Mostrar series por puntuación (de mayor a menor)',()=>{
        listaOrd = cat.mostrarSeriesPuntuacion();
        for(var i =0 ; i < listaOrd.length ; i++) {
            j = i+1;
            if(j < listaOrd.length){
               
                expect(listaOrd[i].getMediaPuntuacion() >= listaOrd[j].getMediaPuntuacion()).toBe(true);
            }
        }
    });

    describe('Mostrar series según un genero',()=>{
        test('Captando series de un genero',()=>{
            enumG.forEach(element=>{
                var s = cat.mostrarSeriesGenero(element);
                
                s.forEach(ser =>{
                    expect(ser.getGenero()).toBe(element);
                })
                
            })
            
            var errorD = () => cat.mostrarSeriesGenero("TERROR");
            expect(errorD).toThrow();
 
           
        })
    });

    describe('Comentar serie',()=>{
        test('Comentando series',()=>{
            const comentario = "Esta serie es muy divertida, pero a veces se me hace pesada";
            cat.comentarSerie(comentario,0);

            const esperado = cat.series[0].getComentarios();

            expect(esperado[0]).toBe(comentario);
        })
    })
});
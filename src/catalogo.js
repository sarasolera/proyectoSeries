var Serie = require("./serie");

const enumG = ["MIEDO" , "ACCION","COMEDIA","DRAMA"];

function ordenacionBurbuja(lista){
    n=lista.length;
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i].getMediaPuntuacion() < lista[i + 1].getMediaPuntuacion()) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }
    return lista;
}

class Catalogo{
    constructor(){
        this.series = new Array();
    }

    aniadirSerie(serie){
        if(this.series.length == 0){
            this.series.unshift(serie);
        }
        else{
            this.series.push(serie);
        }
    }
    

    getSeries(){
        return this.series;
          
    }

    existeSerie(indice){
        if(indice > this.series.length){
            return false;
        }
        else
            return true;
    }

    consultarSerie(indice){
        var serie_mostrar;
        if(this.existeSerie(indice)){
           
            serie_mostrar = "Nombre Serie: "+ this.series[indice].getNombre() + "\nSinopsis: "+ this.series[indice].getSinopsis() +"\nNº Temporadas: "+this.series[indice].getTemporadas()+ "\nGénero: "+this.series[indice].getGenero()+"\nFecha proximo estreno: "+this.series[indice].mostrarFechaP()+"\nReparto: "+this.series[indice].mostrarReparto() + "\nMedia puntuacion: " + this.series[indice].getMediaPuntuacion();
            
        }
        else{
            serie_mostrar = "No existe indice";
            
        }
        return serie_mostrar;
    }

    /**
     * Devuelve un array de todos los titulos de series de ese genero
     * @param {*} genero 
     */
    mostrarSeriesGenero(genero){
        var seriesGenero = new Array();
        for(var x=0; x < this.series.length;x++){
            if(this.series[x].getGenero() == genero){
                seriesGenero.push(this.series[x]);
            }
        }

        if(seriesGenero.length == 0){
            return false;
        }
        else
            return seriesGenero;
    }
    mostrarSeriesPuntuacion(){
        var listaNueva = new Array();
        listaNueva = ordenacionBurbuja(this.series);
        return listaNueva;
    }

    incorporarAct(nombre_act , ind){
        this.series[ind].incorporarAct(nombre_act);
    }

    mostrarReparto(ind){
        var reparto_seleccionado = this.series[ind].mostrarReparto();
        return reparto_seleccionado;
    }

    
}
/*
var cat = new Catalogo();
var serie_nueva = new Serie('La casa de papel', 'Una banda organizada de ladrones tiene el objetivo de cometer el atraco del siglo en la Fábrica Nacional de Moneda y Timbre. Cinco meses de preparación quedarán reducidos a once días para poder llevar a cabo con éxito el gran golpe.',4,"ACCION");
cat.aniadirSerie(serie_nueva);
cat.series[0].incorporarAct("Ursula Corberó");
console.log(cat.consultarSerie(0));

//Pruebas
var cat = new Catalogo();
//GENERAMOS UNAS CUANTAS SERIES CON NOMBRE SINOPSIS NUMERO TEMP Y GENERO
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

//AÑADIMOS REPARTO
cat.incorporarAct("Ursula corbero",0);
cat.incorporarAct("Jaime Lorente",0);
cat.incorporarAct("Winona Ryder",1);
cat.incorporarAct("David Harbour ",1);
cat.incorporarAct("Bill Hader",2);
cat.incorporarAct("Stephen Root" ,2);
cat.incorporarAct("Veronica Castro",3);
cat.incorporarAct("Cecilia Suárez",3);
cat.incorporarAct("Michiel Huisman",4);
cat.incorporarAct("Carla Gugino",4);
cat.incorporarAct("Andrew Lincoln",5);
cat.incorporarAct("Jon Bernthal",5);
cat.incorporarAct("Penn Badgley",6);
cat.incorporarAct("Elizabeth Lail",6);
cat.incorporarAct("Cole Sprouse",7);
cat.incorporarAct("Camila Mendes",7);

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



//COMPROBAMOS QUE SE HAN GENERADO CORRECTAMENTE.

console.log("Mostramos catalogo:");
console.log("\nCompleto en orden de Insercción:")
var ser = cat.mostrarCatalogo();
for(let step = 0 ; step <ser.length ; step++)
            console.log(step + ":" + ser[step].getNombre());

console.log("\n Por puntuacion: ")
    var lista = cat.mostrarSeriesPuntuacion();
                var i = 0;
                lista.forEach(element => {
                    console.log(i + " " +element.getNombre());
                    i++;
                });
console.log("\nTenemos 4 generos de clasificacion : MIEDO COMEDIA ACCION DRAMA ")
console.log("Por genero: ");
    var encontradas;
    console.log("\nMIEDO: ")
        encontradas = cat.mostrarSeriesGenero(enumG[0]);
            encontradas.forEach(element => {
                console.log(" " + element.getNombre());
            });
        
    
    console.log("\nACCION: ")
        encontradas = cat.mostrarSeriesGenero(enumG[1]);
        encontradas.forEach(element => {
            console.log(" " + element.getNombre());
        });  
    
    console.log("\nCOMEDIA: ")
        encontradas = cat.mostrarSeriesGenero(enumG[2]);
        encontradas.forEach(element => {
            console.log(" " + element.getNombre());
        });  
    console.log("\nDRAMA: ")
        encontradas = cat.mostrarSeriesGenero(enumG[2]);
        encontradas.forEach(element => {
            console.log(" " + element.getNombre());
        });





*/
    module.exports = Catalogo;
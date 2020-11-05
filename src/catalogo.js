var Serie = require("./serie"),
Capitulo = require('./capitulo.js');

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

    mostrarSeries(){
        var catalogo_completo="";
        var n;
        this.series.forEach(element => {
            catalogo_completo += element.getNombre()+"\n";
            
        });
        return catalogo_completo;
    }

    consultarSerie(indice){
        var serie_mostrar;
        if(this.existeSerie(indice)){
           
            serie_mostrar = "Nombre Serie: "+ this.series[indice].getNombre() + "\nSinopsis: "+ this.series[indice].getSinopsis() +"\nNº Temporadas: "+this.series[indice].getNumTemporadas()+ "\nGénero: "+this.series[indice].getGenero()+"\nFecha proximo estreno: "+this.series[indice].mostrarFechaP()+"\nReparto: "+this.series[indice].mostrarReparto() + "\nMedia puntuacion: " + this.series[indice].getMediaPuntuacion();
            
        }
        else{
            throw new Error("Indice fuera de nuestro catalogo");
            
        }
        return serie_mostrar;
    }

    
    /**
     * Devuelve un array de todos los titulos de series de ese genero
     * @param {*} genero 
     */
    mostrarSeriesGenero(genero){
        var generoValido = false;
        enumG.forEach(element => {
            if(element == genero){
                generoValido = true;
            }
            
        });

        if(generoValido == true){
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
        else
            throw new Error("Genero no valido");
        
    }
    mostrarSeriesPuntuacion(){
        var listaNueva = new Array();
        listaNueva = ordenacionBurbuja(this.series);
        return listaNueva;
    }

    comentarSerie(comentario,indice){
        if(this.existeSerie(indice)){
            this.series[indice].aniadirComentario(comentario);
        }
        else
            throw new Error("Serie no válida");
    }
    
    puntuarSerie(puntuacion,indice){

        if(this.existeSerie(indice)){
            if(puntuacion<11 && puntuacion >= 0){
                this.series[indice].sumarPuntos(puntuacion);
            }
            else
                throw new Error("Puntuación no válida");
            
        }
        else
            throw new Error("Serie no válida");
    }
    
    mostrarComentarios(indice){
        if(this.existeSerie(indice)){
            var comentariosAlmacenados = "";
            var c = this.series[indice].getComentarios();
            c.forEach(element=>{
                comentariosAlmacenados +=  element +  "\n";
            })

            return comentariosAlmacenados;

        }
        else
            throw new Error("Serie no válida");
    }

    mostrarListaCapitulos(indice,num_t){
        var listado = "";
        if(this.existeSerie(indice)){
            var cap =  this.series[indice].obtenerListaCapitulos(num_t);
            if(cap == -1)
                throw new Error("No existen capitulos disponibles para esa temporada")
            else{
                cap.forEach(element=>{
                    listado = listado + element.getNombre() + "\n";
                })
            }
            return listado;
        }else{
            throw new Error("No existe esa serie");
        }
        
    }
}
/*
var cat = new Catalogo();
var serie_nueva = new Serie('Stranger things','La historia arranca durante la década de los 80, en el pueblo ficticio de Hawkins, Indiana, cuando un niño llamado Will Byers desaparece misteriosamente, hecho que destapa los extraños sucesos que tienen lugar en la zona, producto de una serie de experimentos que realiza el gobierno en un laboratorio científico cercano',4, "ACCION");

cat.aniadirSerie(serie_nueva);
//puntuamos
cat.series[0].sumarPuntos(9);
cat.series[0].sumarPuntos(10); //PUNTUACION 9.5

//añadimos capitulos a la temporada
capitulo = new Capitulo("Capitulo uno:La desaparición de Will Byers",48,"Cuando vuelve en bici a su casa, Will ve algo horroroso.Cerca de allí, un siniestro secreto acecha en las profundidades de un laboratorio estatal")
capitulo2 = new Capitulo("Capitulo dos:La chica rara de la calle Maple",55,"Lucas, Mike y Dustin intentan hablar con la niña que encontraron en el bosque.");
cat.series[0].aniadirCapitulo(capitulo,1);
cat.series[0].aniadirCapitulo(capitulo2,2);
console.log(cat.mostrarListaCapitulos(0,1));
console.log(cat.mostrarListaCapitulos(0,2));
*/



module.exports = Catalogo;
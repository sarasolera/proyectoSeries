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
           
            //serie_mostrar = "Nombre Serie: "+ this.series[indice].getNombre() + "\nSinopsis: "+ this.series[indice].getSinopsis() +"\nNº Temporadas: "+this.series[indice].getNumTemporadas()+ "\nGénero: "+this.series[indice].getGenero()+"\nFecha proximo estreno: "+this.series[indice].mostrarFechaP()+"\nReparto: "+this.series[indice].mostrarReparto() + "\nMedia puntuacion: " + this.series[indice].getMediaPuntuacion();
            serie_mostrar = this.series[indice]
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
            throw new Error("Esa serie no está disponible en nuestro catálogo");
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
            
            cap.forEach(element=>{
                listado = listado + element.getNombre() + "\n";
            })
            
            return listado;
        }else{
            throw new Error("No existe esa serie");
        }
        
    }


    mostrarDatosCapitulo(indice , num_t , num_cap){
        var datos = "";
        //Damos por hecho que los capitulos empiezan desde el 1 y no desde el 0, asi que habrá que restar 1
        if( this.existeSerie(indice)){
            var lista = this.series[indice].obtenerListaCapitulos(num_t);
            if(num_cap - 1 <= lista.length){
                var datos_capitulo = lista[num_cap - 1];
                datos = "Nombre: " +  datos_capitulo.getNombre() + " \nDuración:"+datos_capitulo.getDuracion() + "\nSinopsis:"+datos_capitulo.getSinopsis();
                
                return datos;
            }
            else{
                throw new Error("No existe ese capitulo");
            }
            
        }
       

    }

    //Generamos la función para encontrar el indice de una serie en el catalogo, dando su nombre
    buscarSerie(nombre){
        var pos = -1;

        //buscamos una serie cuyo nombre coincida con el argumento
        for( var k= 0; k<this.series.length;k++){
            if(nombre == this.series[k].getNombre()){
                pos = k;
            }
        }


        if(pos == -1){
            throw new Error("No existe esa serie");
        }
        else{
            return pos;
        }
        
        
    }
}



module.exports = Catalogo;
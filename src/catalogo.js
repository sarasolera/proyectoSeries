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
           
            serie_mostrar = "Nombre Serie: "+ this.series[indice].getNombre() + "\nSinopsis: "+ this.series[indice].getSinopsis() +"\nNº Temporadas: "+this.series[indice].getTemporadas()+ "\nGénero: "+this.series[indice].getGenero()+"\nFecha proximo estreno: "+this.series[indice].mostrarFechaP()+"\nReparto: "+this.series[indice].mostrarReparto() + "\nMedia puntuacion: " + this.series[indice].getMediaPuntuacion();
            
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

    

    
}



module.exports = Catalogo;
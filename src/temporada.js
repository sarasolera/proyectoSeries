var Capitulo = require("./capitulo")
class Temporada{
    constructor()
    {
        //Array de capitulos con su nombre sinopsis y duracion 
        this.capitulos = new Array();
    }

    /**
     * Captar los capitulos que tiene la temporada
    */
    getCapitulos(){
       return this.capitulos;
    }
   /**
    * Añadir capitulos de la temporada
    * @param {array} capitulosTemporada
    */
    setCapitulos(capitulosTemporada){
       this.capitulos = capitulosTemporada;
    }

    /**
     * Añadir capitulo a la temporada
     * @param {Capitulo} capitulo 
     */
    aniadirCapitulo(capitulo){
       this.capitulos.push(capitulo);
    }

    eliminarCapitulo(index){
        if(index < this.capitulos.length){
            this.capitulos.pop(index);
        }
        else
            throw new Error("Indice inválido");
    }
}

module.exports = Temporada;
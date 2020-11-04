class Capitulo{
    constructor(nombre,duracion,sinopsis){
        this.nombre = nombre
        this.duracion = duracion
        this.sinopsis = sinopsis
    }
    /**
     * Obtener el nombre del capitulo
     * @return nombre del Capitulo
     */
    getNombre()
    {
        return this.nombre;
    }
    /**
     * Obtener la duración del capitulo
     * @return duracion del Capitulo
     */
    getDuracion(){
        return this.duracion;
    }

    /**
     * Obtener la sinopsis del capitulo
     * @return sinopsis del capitulos
     */

    getSinopsis(){
        return this.sinopsis;
    }

    /** Métodos de modificación de los datos */
    /**
     * Modificación nombre del capitulo
     * @param {string} nombreNuevo 
     */
    setNombre(nombreNuevo){
        this.nombre = nombreNuevo;
    }
    /**
     * Modificación duracion de capitulo en minutos 
     * @param {int} duracionNueva 
     */
    setDuracion(duracionNueva)
    {
        this.duracion = duracion;
    }
    
    /**
     * Modificación de la sinopsis del capitulo
     * @param {string} sinopsisNueva
     */
    setSinopsis(sinopsisNueva){
        this.sinopsis = sinopsisNueva;
    }


}

module.exports = Capitulo;
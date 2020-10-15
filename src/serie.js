
/**
 * @author sara solera
 */

class Serie{

    //constructor
    constructor(n,s, temporadas, genero){
        //atributos que no se vamos a  modificar
         this.nombre = n;
         this.sinopsis = s;
         this.temporadas_act = temporadas;
         this.genero = genero;
         // al inicializar la fecha a null la fecha es 4/0/1970, por lo que cuando mostremos fecha, comprobamos que el año no sea 1970, si lo es, es que la fecha es desconocida.
         this.fecha_prox_temp = new Date(null); 
         this.reparto = new Array();
         this.puntuacion = new Array();
    }
    
    /**
     * Muestra el valor del atributo nombre
     * @returns {string} el nombre
     */
    getNombre(){
        return this.nombre;
    }

    /**
     * Muestra el valor del atributo sinopsis
     * @returns {string} la sinopsis
     */
    getSinopsis(){
        return this.sinopsis;
    }

    /**
     * Muestra el valor del atributo temporadas
     * @returns {number} el nº de temporadas
     */
    getTemporadas(){
        return this.temporadas_act;
    }

    /**
     * Muestra el genero de la serie
     * @returns {string} genero;
     */
    getGenero(){
        return this.genero;
    }

    /**
     * Muestra el valor de fecha_prox_temp
     * @returns {Date} la fecha
     */
    getFecha_prox(){
        return this.fecha_prox_temp;
    }

    /**
     * Muestra el valor del atributo reparto
     * @returns {array} nombres actores
     */
    getReparto(){
        return this.reparto;
    }
    
    /**
     * Muestra la puntuacion de la serie
     * @returns {number} puntos
     */
    getMediaPuntuacion(){
        
        if(this.puntuacion.length > 0){
            var puntos = 0;
             this.puntuacion.forEach(element => {
                 puntos = puntos+element;
             });

            var media = puntos/this.puntuacion.length;
           
            return media;
        }
        else return 0;
    }

    
    /** METODOS SET */

    /**
     * Este metodo es llamado cuando se confirma una fecha de estreno.
     */
    setTemporada(){
        
        this.temporadas_act++; 
    }
    
    /**
     * Modifica el valor del atributo fecha_prox_temp
     * @param {Date} fecha 
     */
    setFechaProxima(fecha){
        var actualidad = new Date(Date.now());
        
            if(fecha.getFullYear() > actualidad.getFullYear() ){
                if(this.fecha_prox_temp.setFullYear()  == 1970){
                    //si se añade una fecha de proximo estreno es que esta confirmada y se suma uno al numero de temporadas.
                    this.setTemporada();
                }
                 this.fecha_prox_temp.setFullYear(fecha.getFullYear());
                 this.fecha_prox_temp.setMonth(fecha.getMonth());
                 this.fecha_prox_temp.setDate(fecha.getDate());
                
               
     
             }
             else {
                throw new Error("Fecha invalida");
             }
               
             
    
    }

    setGenero(gen){
        if(gen != "MIEDO" && gen!="ACCION" && gen!="COMEDIA" && gen!="DRAMA")
            throw new Error("Genero invalido");
        else
            this.genero = gen;
    }

    /**
     * Método para incorporar una actriz o un actor al reparto de la serie.
     * @param {string} nombre_act 
     */

    incorporarAct(nombre_act){
        if(this.reparto.length == 0){
            this.reparto.unshift(nombre_act);
        }
        else{
            //Comprobamos que no esta repetido
            var repetido = false;
            this.reparto.forEach(element => {
                if(element == nombre_act){
                    repetido =true;
                }
            });
            if(repetido == false)
                this.reparto.push(nombre_act);
            else{
                throw new Error("Actor o actriz ya incorporados al reparto");
            }
        }
    }

    

    sumarPuntos(puntos){
        
        this.puntuacion.push(puntos);
        
    }


    
    mostrarFechaP(){
        var fecha;
        if(this.getFecha_prox().getFullYear() != 1970){
            var dia = this.getFecha_prox().getDate();
            var mes = this.getFecha_prox().getMonth();
            var an  = this.getFecha_prox().getFullYear();
            fecha = dia + "/" + mes + "/" + an;
            
        }
        else{
            fecha = "Desconocida ";
        }

        return fecha;
    }
    /**
     * Mostrando el reparto actual si existe.
     */
    
    mostrarReparto(){
        var act="";
        if(this.reparto.length == 0){
            act ="Desconocido";
        }
        else{
            for(var i=0; i < this.reparto.length;i++){
                act = act + this.reparto[i] + " ";
            }
             //para acceder al nombre hacemos elemento.nombre
        }
        
        return act;
    }

    

    
}

module.exports = Serie;


class Serie {

    //constructor
    constructor(nombre,sinopsis, temporadas){
         this.nombre = nombre;
         this.sinopsis = sinopsis;
         this.temporadas_act = temporadas;
         // al inicializar la fecha a null la fecha es 4/0/1970, por lo que cuando mostremos fecha, comprobamos que el año no sea 1970, si lo es, es que la fecha es desconocida.
         this.fecha_prox_temp = new Date(null); 
         
         this.reparto = new Array();
    
    }
    
    //métodos get para las variables más simples
    getNombre(){
        return this.nombre;
    }

    getSinopsis(){
        return this.sinopsis;
    }

    getTemporadas(){
        return this.temporadas_act;
    }


    /**
     * Mostrando fecha. 
     * Si la conocemos el formato es dia/mes/año
     * Si no la conocemos (es decir que sigue con 1970, es la fecha cuando inicializamos a null) mostramos desconocido.
     */
    mostrarFechaP(){
        if(this.fecha_prox_temp.getFullYear() != 1970){
           
            console.log("Fecha proximo estreno: " + this.fecha_prox_temp.getDate() + "/" + this.fecha_prox_temp.getMonth() + "/" + this.fecha_prox_temp.getFullYear());
        }
        else{
            console.log("Fecha estreno proxima temporada: Desconocida ");
        }
    }
    /**
     * Mostrando el reparto actual si existe.
     */
    
    mostrarReparto(){
        if(this.reparto.length == 0){
            console.log("Reparto desconocido");
        }
        else{
             console.log("Reparto: ")
             this.reparto.forEach(elemento => console.log(elemento))
        }
    }

    /** 
     * Método para modificar la fecha, se comprueba que esa fecha sea posterior a la actual, en año.
     */

    setFechaProxima(fecha){
        var actualidad = new Date(Date.now());
        if(fecha.getFullYear() > actualidad.getFullYear() ){
           
            this.fecha_prox_temp.setFullYear(fecha.getFullYear());
            this.fecha_prox_temp.setMonth(fecha.getMonth());
            this.fecha_prox_temp.setDate(fecha.getDate());
        }
        else{
            console.log("Fecha invalida");
        }
        

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
            this.reparto.push(nombre_act);
        }
    }
}

//probando clase y metodos

console.log("Prueba de la clase: ");
var serie1 = new Serie("La casa de papel", "Una banda organizada de ladrones tiene el objetivo de cometer el atraco del siglo en la Fábrica Nacional de Moneda y Timbre. Cinco meses de preparación quedarán reducidos a once días para poder llevar a cabo con éxito el gran golpe.",4)
console.log(serie1.getNombre());
console.log("Sinopsis: " + serie1.getSinopsis());
console.log("Nº temporadas: actualmente tiene " + serie1.getTemporadas() + " temporadas." );
serie1.mostrarFechaP();
serie1.mostrarReparto();

console.log("\nEditando atributos:")
console.log("\nActualizando fecha....");
console.log("Actualizando reparto...\n");

fecha = new Date(2021,2,25);
serie1.setFechaProxima(fecha);

serie1.mostrarFechaP();

//actualizamos reparto

serie1.incorporarAct("Ursula Corberó");
serie1.mostrarReparto();

console.log("\nIncorporando actor...\n");
serie1.incorporarAct("Jaime Lorente");

serie1.mostrarReparto();

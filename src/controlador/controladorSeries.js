const captarDatos = require("./generarCatalogo.js");
const ErrorPropio = require("../error")


class Controlador{
    constructor(){
        this.catalogo = captarDatos.generarCatalogo();
    }
    
    
    obtenerSeries(){
        // captamos todas las series del catalogo
        var catCompleto = [];
        catCompleto = this.catalogo.mostrarSeries();
        var lista = [];
        //Despues de cada \n tenemos el nombre de una serie, por lo que filtramos y el ultimo elemento será vacio
        //asi que lo eliminamos
        lista = catCompleto.split("\n");
        lista.pop();
        var listaDatos = []
        //generamos una lista Nombre: nombre_serie
        lista.forEach(element => {
        listaDatos.push({"Nombre":element});
        });
        return listaDatos;
    }

    obtenerSerie(nombre_serie){
        try{
            var indice = this.catalogo.buscarSerie(nombre_serie);
            var serie = this.catalogo.consultarSerie(indice);
            var listaDatos = []
            listaDatos.push({"Nombre":serie.getNombre(),"Sinopsis":serie.getSinopsis(),"Numero Temporadas":serie.getNumTemporadas(),"Genero":serie.getGenero()});
            
            return listaDatos;
        }
        catch(err){
            throw new ErrorPropio("Esa serie no existe",404);
        }
    }


    obtenerSeriesPuntuación(){
        //obtenemos las series por puntuación, generamos un listado con el nombre, la puntación media
        var seriesOrdenadas = this.catalogo.mostrarSeriesPuntuacion();

        var listaDatos = [];

        seriesOrdenadas.forEach(element =>{
            listaDatos.push({"Nombre":element.getNombre(),"Numero Temporadas":element.getNumTemporadas(),"Puntuación":element.getMediaPuntuacion()})
        });

        return listaDatos;

    }

    //Añadimos funcion para añadir comentario a una serie
    comentarSerie(nombre_serie,comentario){
        try{
            var indice = this.catalogo.buscarSerie(nombre_serie);
            this.catalogo.comentarSerie(comentario,indice);
        }
        catch(err){
            throw new ErrorPropio("Esa serie no existe" ,404);
        }
        
    }
    

    consultarComentarios(nombre_serie){
        try{
            var indice = this.catalogo.buscarSerie(nombre_serie);
            var listaComentarios = this.catalogo.mostrarComentarios(indice);
            var listaResultado = []
            var  k = 0;
            listaComentarios.forEach(element=>{
                listaResultado.push(k + ":"+element);
                k+=1;
            })
 
            return listaResultado;
        }catch(err){
            throw new ErrorPropio(err,404)
        }
    }

    
}


module.exports = Controlador
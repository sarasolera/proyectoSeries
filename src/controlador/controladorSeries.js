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
            listaDatos.push({"Nombre":serie.getNombre(),"Sinopsis":serie.getSinopsis()});
            
            return listaDatos;
        }
        catch(err){
            throw new ErrorPropio("Esa serie no existe",404);
        }
    }

    
}


module.exports = Controlador
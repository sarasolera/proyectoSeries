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

    
}


module.exports = Controlador
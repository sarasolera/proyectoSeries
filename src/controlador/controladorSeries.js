const captarDatos = require("./generarCatalogo.js");
const ErrorPropio = require("../error")


class Controlador{
    constructor(){
        this.catalogo = captarDatos.generarCatalogo();
    }
    
    obtenerSeries(){
        var catCompleto = [];
        catCompleto = this.catalogo.mostrarSeries();
        var lista = [];
        lista = catCompleto.split("\n");
        lista.pop();
        var listaDatos = []
        lista.forEach(element => {
        listaDatos.push({"Nombre":element});
        });
        return listaDatos;
    }

    
}


module.exports = Controlador
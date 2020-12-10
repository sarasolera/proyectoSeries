const data = require('../../api/data')
Catalogo = require('../catalogo')
Serie = require('../serie')
const puntuaciones = require("../../azure/puntuaciones")

function generarCatalogo(){
    var i = 0;
    var catalogo = new Catalogo();
    while( i < data.data.length){
        nombre= data.data[i]['Nombre'];
        sinopsis= data.data[i]["Sinopsis"];
  
        num_temporadas = data.data[i]["Numero Temporadas"];
        gen = data.data[i]["Genero"];
        i+=1
        var serie = new Serie(nombre,sinopsis,num_temporadas,gen)
        catalogo.aniadirSerie(serie)

    }

    //Añadimos puntuaciones a catalogo para poder realizar la HU03
    var puntuaciones_series = [];

    for(i =0 ; i < catalogo.series.length ; i++){
        puntuaciones_series = puntuaciones.puntuaciones[catalogo.series[i].getNombre()];
        for(var k = 0 ; k < puntuaciones_series.length;k++){
            catalogo.series[i].sumarPuntos(puntuaciones_series[k]);
        }
    }
    return catalogo;
}

module.exports.generarCatalogo = generarCatalogo;
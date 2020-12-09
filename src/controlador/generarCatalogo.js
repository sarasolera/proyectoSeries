const data = require('../../api/data')
Catalogo = require('../catalogo')
Serie = require('../serie')
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
    return catalogo;
}

module.exports.generarCatalogo = generarCatalogo;
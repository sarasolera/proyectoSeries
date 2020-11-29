const data = require("./data");
const Serie  = require("../src/serie");
const Catalogo = require("../src/catalogo");

//AÑADIMOS FUNCION PARA CAPTAR SERIES POR GENERO
function devolverSeriesGenero(genCaptado){
    //Primero formamos el catalogo de series con data
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
    var result = ""
    //Tras ello captamos la series por genero
    seriesGenero = catalogo.mostrarSeriesGenero(genCaptado)
    var datosJSON = []
    var objetoJSON = {}
    
    seriesGenero.forEach(element => {
        datosJSON.push(element.getNombre());
            
    });
    // FORMAMOS EL JSON
    objetoJSON.series = datosJSON;
    result = JSON.stringify(objetoJSON)
    
    return result
}

module.exports.devolverSeriesGenero = devolverSeriesGenero;
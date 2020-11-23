const data = require("../../api/data")
const Serie = require("../../src/serie")
const Catalogo = require("../../src/catalogo");
const puntuaciones = require("../puntuaciones")

module.exports = async function (context, req) {
    var i  = 0;
    var catalogo = new Catalogo();
    //Generamos las series captando del fichero data.js para añadirlas al catalogo
    while( i < data.data.length){
        nombre= data.data[i]['Nombre'];
        sinopsis= data.data[i]["Sinopsis"];

        num_temporadas = data.data[i]["Numero Temporadas"];
        gen = data.data[i]["Genero"];
        i+=1
        var serie = new Serie(nombre,sinopsis,num_temporadas,gen)
        catalogo.aniadirSerie(serie)

    }
    var puntuaciones_series = [];
    //Una vez formado  el catalogo sumamos las puntuaciones
    for(i =0 ; i < catalogo.series.length ; i++){
        puntuaciones_series = puntuaciones.puntuaciones[catalogo.series[i].getNombre()];
        for(var k = 0 ; k < puntuaciones_series.length;k++){
            catalogo.series[i].sumarPuntos(puntuaciones_series[k]);
        }
    }
    var datosJSON = []
    var objetoJSON = {}
    var seriesOrdenadas = catalogo.mostrarSeriesPuntuacion();
    i=0;
    while ( i < seriesOrdenadas.length){
        datosJSON.push({
            "Nombre serie ": seriesOrdenadas[i].getNombre(),
            "Puntuacion": seriesOrdenadas[i].getMediaPuntuacion().toFixed(2)
        });
        i+=1;
    }

    objetoJSON.series = datosJSON;
    responseMessage = JSON.stringify(objetoJSON)


    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
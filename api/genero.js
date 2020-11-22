const data = require("./data");
const Serie  = require("../src/serie");
const Catalogo = require("../src/catalogo");

module.exports = (req,res) =>{
    //Captaremos de la URL el genero del que queremos consultar las series
    //Si no obtenemos ningun por defecto valor "Vacio" para generar el resultado correspondiente

    const{genero="Vacio"} = req.query
    var result;
    var catalogo = new Catalogo();
    var i = 0;

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

    var datosJSON = []
    var objetoJSON = {}
    // Una vez generado el catalogo podemos captar las series por género, con la función que tenemos implementada
    // Voy a meter las series en una lista de diccionarios para pasarlos a json
    // Si obtenemos un genero en la petición captamos las series de ese género
    if(genero == "MIEDO" || genero=="COMEDIA" || genero=="ACCION" || genero=="DRAMA"){
        var seriesGenero = catalogo.mostrarSeriesGenero(genero)
        
        seriesGenero.forEach(element => {
            datosJSON.push({
                "Nombre serie ": element.getNombre(),
                "Sinopsis": element.getSinopsis(),
                "Número Temporadas":element.getNumTemporadas()
            });
            
        });
        // FORMAMOS EL JSON
        objetoJSON.series = datosJSON;
        result = JSON.stringify(objetoJSON)
        
    }
    //Si es Vacio significa que no se ha recibido nada
    else if(genero == "Vacio"){
        result="Debe indicar un género";
    }
    else{
        result="Género no disponible. Los géneros disponibles por el momento son: MIEDO ACCION DRAMA COMEDIA";

    }

    // ENVIAMOS el resultado
    res.status(200).send(result)

}

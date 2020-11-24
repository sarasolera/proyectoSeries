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
    for(var j = 0; j < seriesGenero.length ; j++){
        result += j + ":" + seriesGenero[j].getNombre() + "\n"
    }

    return result
}


module.exports = async (req,res) =>{
    //Que contiene req.body
    if(req.body != undefined){
        //Captamos id del mensaje
        var IDchat = req.body.message.chat.id
        //Captamos contenido de mensaje
        var text = req.body.message.text

        // Según el contenido obtenemos una lista de series u otra
        if(text == "/xGeneroMIEDO"){
            result="Buscando series de Miedo....\n";
            result+=devolverSeriesGenero("MIEDO")
            
        }
        else if(text == "/xGeneroCOMEDIA"){
            result = "Buscando series de Comedia...\n"
            result+=devolverSeriesGenero("COMEDIA")
        }
        else if(text == "/xGeneroDRAMA"){
            result="Buscando series de Drama... \n"
            result+=devolverSeriesGenero("DRAMA")
        }
        else if(text == "/xGeneroACCION"){
            result="Buscando series de Acción...\n"
            result+=devolverSeriesGenero("ACCION")
        }
        else if(text == "/muestraBody"){
            result+=JSON.stringify(req.body)
        }
        else{
            result="Para consultar las series por cada genero tiene disponibles:\nxGeneroMIEDO\nxGeneroACCION\nxGeneroCOMEDIA\nxGeneroDRAMA"
        }
        
        // Devolvemos 
        var objetoJSON ={text : result,method : "sendMessage",chat_id : IDchat}
        res.setHeader("Content-Type","application/json");
        res.status(200).json(objetoJSON)
    }
    else{
        //Enviamos un mensaje normal 
        res.status(200).send("Iniciamos el bot de series")
    }
    
}
const funcion = require("./funcion_genero.js")

module.exports = async (req,res) =>{
    //Que contiene req.body
    if(req.body != undefined){
        //Captamos id del mensaje
        var IDchat = req.body.message.chat.id
        //Captamos contenido de mensaje
        var text = req.body.message.text
        var result = ""
        var series_captadas = false
        // Según el contenido obtenemos una lista de series u otra
        if(text == "/xGeneroMIEDO"){
            result="Buscando series de Miedo....\n";
            series_captadas = true;
            captadas=funcion.devolverSeriesGenero("MIEDO")
        }
        else if(text == "/xGeneroCOMEDIA"){
            result = "Buscando series de Comedia...\n"
            series_captadas = true;
            captadas = funcion.devolverSeriesGenero("COMEDIA")
        }
        else if(text == "/xGeneroDRAMA"){
            result="Buscando series de Drama... \n"
            series_captadas = true;
            captadas=funcion.devolverSeriesGenero("DRAMA")
        }
        else if(text == "/xGeneroACCION"){
            result="Buscando series de Acción...\n"
            series_captadas = true;
            captadas=funcion.devolverSeriesGenero("ACCION")
            
        }
        else if(text == "/muestraBody"){
            result+=JSON.stringify(req.body)
        }
        else{
            result="Para consultar las series por cada genero tiene disponibles:\n/xGeneroMIEDO\n/xGeneroACCION\n/xGeneroCOMEDIA\n/xGeneroDRAMA"
        }

        if(series_captadas == true){
            for(var j = 0; j< captadas.series.length ; j++){
                result+= j + ":" + captadas.series[i] + "\n";
            }
        }
        // Devolvemos 
        var objetoJSON ={text : result,method : "sendMessage",chat_id : IDchat}
        res.setHeader("Content-Type","application/json");
        res.status(200).json(objetoJSON)
    }
    else{
        //Esperando mensaje de telegram...
        res.status(200).send("")
    }
    
}
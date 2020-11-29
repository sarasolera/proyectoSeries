const funcion = require("./funcion_genero.js")

module.exports = async (req,res) =>{
    //Que contiene req.body
    if(req.body != undefined){
        //Captamos id del mensaje
        var IDchat = req.body.message.chat.id
        //Captamos contenido de mensaje
        var text = req.body.message.text
        var result = ""
        // Según el contenido obtenemos una lista de series u otra
        if(text == "/xGeneroMIEDO"){
            result="Buscando series de Miedo....\n";
            series_captadas=funcion.devolverSeriesGenero("MIEDO")
            j = 0
            series_captadas.series.forEach(element => {
                result+= j + ":" + element + "\n"; 
                j+=1
            });
            
        }
        else if(text == "/xGeneroCOMEDIA"){
            result = "Buscando series de Comedia...\n"
            series_captadas = funcion.devolverSeriesGenero("COMEDIA")
            j = 0
            series_captadas.series.forEach(element => {
                result+= j + ":" + element + "\n"; 
                j+=1
            });
            
        }
        else if(text == "/xGeneroDRAMA"){
            result="Buscando series de Drama... \n"
            series_captadas=funcion.devolverSeriesGenero("DRAMA")
            j = 0
            series_captadas.series.forEach(element => {
                result+= j + ":" + element + "\n"; 
                j+=1
            });
        }
        else if(text == "/xGeneroACCION"){
            result="Buscando series de Acción...\n"
            series_captadas=funcion.devolverSeriesGenero("ACCION")
            j = 0
            series_captadas.series.forEach(element => {
                result+= j + ":" + element + "\n"; 
                j+=1
            });
        }
        else if(text == "/muestraBody"){
            result+=JSON.stringify(req.body)
        }
        else{
            result="Para consultar las series por cada genero tiene disponibles:\n/xGeneroMIEDO\n/xGeneroACCION\n/xGeneroCOMEDIA\n/xGeneroDRAMA"
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
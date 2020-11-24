module.exports = async (req,res) =>{
    //Que contiene req.body
    if(req.body != undefined){
        var IDchat = req.body.message.chat.id
        var text = req.body.message.text

        if(text == "/muestraBody"){
            var result = JSON.stringify(req.body)
        }

        var objetoJSON ={text : result,method : "sendMessage",chat_id : id_chat}
        res.setHeader("Content-Type","application/json");
        res.status(200).json(objetoJSON)
    }
    
}
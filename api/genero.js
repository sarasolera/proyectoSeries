const funcion = require("./funcion_genero.js")

module.exports = (req,res) =>{
    //Captaremos de la URL el genero del que queremos consultar las series
    //Si no obtenemos ningun por defecto valor "Vacio" para generar el resultado correspondiente
    const{genero="Vacio"} = req.query

    // Si obtenemos un genero en la petición captamos las series de ese género
    if(genero == "MIEDO" || genero=="COMEDIA" || genero=="ACCION" || genero=="DRAMA"){
        result = funcion.devolverSeriesGenero(genero)
        codigo = 200
    }
    //Si es Vacio significa que no se ha recibido nada
    else if(genero == "Vacio"){
        result={"Error 400":"debe indicar un género"} 
        codigo = 400
    
           
    }
    else{
        result={"Error 404" : "género no disponible. Los géneros disponibles por el momento son: MIEDO ACCION DRAMA COMEDIA"};
        codigo = 404

    }

    // ENVIAMOS el resultado n
    res.status(codigo).send(result)

}

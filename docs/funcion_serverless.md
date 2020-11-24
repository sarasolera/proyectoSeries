# Más allá de un simple ejemplo.
Para no quedarme en el ejemplo, he querido avanzar en la HU04 que permite al usuario consultar series de un mismo género, de esta misma función haré el bot de telegram.

Para ello y fijandome en el ejemplo de JJ [netlify-covid](https://github.com/JJ/netlify-covid-and), he realizado un fichero de datos con las diferentes series, incluyendo nombre de la serie, sinópsis, número de temporadas actuales y por supuesto género al que pertenecen.


En mi caso el fichero [data.js](https://github.com/sarasolera/proyectoSeries/blob/master/api/data.js): es una lista de diccionarios, cada diccionario una serie con sus atributos.


Tras ello he hecho el fichero [genero.js](https://github.com/sarasolera/proyectoSeries/blob/master/api/genero.js) en el que tenemos la función, del fichero data.js generamos series y con las series el catálogo, ya que tengo en la clase catálogo la función mostrarSeriesGenero que nos devuelve un array de series según el género especificado.


Para formar el JSON me he fijado en [stackoverflow](https://es.stackoverflow.com/questions/150520/crear-un-json-en-javascript) con un ejemplo, en definita hay que crear una lista con los diccionarios de las series que queremos obtener, cada diccionario contiene el nombre, la sinopsis y el número de temporadas de cada serie de ese género.
Lista de series según género:
 - ACCION: La casa de papel
 - DRAMA: YOU , Riverdale
 - COMEDIA: Barry , La casa de las flores
 - MIEDO: Stranger things, La maldición de Hill Hounting, The Walking Dead.

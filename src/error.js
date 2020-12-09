class ErrorPropio extends Error{
    constructor(mensajeError,codigo){
        super(mensajeError);
        this.mensaje = mensajeError;
        this.codigo = codigo;
    }
}
module.exports = ErrorPropio
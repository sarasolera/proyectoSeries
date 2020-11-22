module.exports = (req,res) => {
    const { a='0' } = req.query
    const {b='0'} = req.query
    suma=parseInt(a) + parseInt(b)
    res.status(200).send("La suma es "+String(suma))
}

module.exports = async (req,res) =>{
    //Que contiene req.body
    result=JSON.stringify(req.body)
    res.status(200).send(result)
}
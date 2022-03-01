
module.exports = class AtendimentoController{

    static atendimento(req,res){
        res.send('Rota atendimentos')
    }

    static async atendimentoPost(req,res){
        const name = req.body.name
        const age = req.body.age
        console.log(name,age)

        //return name
    }
}
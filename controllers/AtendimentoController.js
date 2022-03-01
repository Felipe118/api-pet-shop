const Atendimento = require('../models/Atendimento')
module.exports = class AtendimentoController{

    static atendimento(req,res){
        res.send('Rota atendimentos')
    }

    static async atendimentoPost(req,res){
       
        const cliente = req.body.cliente
        const pet = req.body.pet
        const status = req.body.status
        const servico = req.body.servico
        const obs = req.body.obs


        if(!cliente){
            res.status(422).json({message: "O cliente é obrigatório"})
            return
        }
        if(!status){
            res.status(422).json({message: "O status é obrigatório"})
            return
        }
        if(!servico){
            res.status(422).json({message: "O serviço é obrigatório"})
            return
        }

            
        const atendimento = {
            cliente:cliente,
            pet:pet,
            status:status,
            servico:servico,
            obs:obs
        }

        Atendimento.create(atendimento)
        .then(()=> {
            res.status(200).json({
                message: "Atendimento cadastrado com sucesso!"
            })  
        })
        .catch((erro)=> console.log(erro))
        

        //return name
    }
}
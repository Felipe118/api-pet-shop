const router =require("express").Router()
const AtendimentoController = require("../controllers/AtendimentoController")

router.get('/atendimentos',AtendimentoController.atendimento)
router.post('/atendimentos', AtendimentoController.atendimentoPost)
module.exports = router
const express = require("express")

const app = express()

const conn = require('./db/conn')

//models
const Atendimento = require("./models/Atendimento")

app.use(express.json())

//rotas
const AtendimentoRoute = require("./routes/AtendimentoRoute")
app.use('/',AtendimentoRoute)

conn
  .sync()
  .then(() => {
    app.listen(5000);
  })
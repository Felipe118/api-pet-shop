const { DataTypes } = require("sequelize")

const db = require("../db/conn")
const Atendimento = db.define('Atendimento', {
    cliente:{
        type:DataTypes.STRING,
        allowNull:false
    },
    pet: {
        type:DataTypes.STRING,
        allowNull:true
    },
    servico: {
        type:DataTypes.STRING,
        allowNull:false
    },
    status: {
        type:DataTypes.STRING,
        allowNull:false
    },
    obs: {
        type:DataTypes.TEXT,
        allowNull:false
    },
})

module.exports = Atendimento
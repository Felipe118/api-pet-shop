const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('db_petshop', 'root','root', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('conectamos ao sequelize')

}catch(erro){
console.log('Não foi possível conectar error: ', erro)
}

module.exports = sequelize
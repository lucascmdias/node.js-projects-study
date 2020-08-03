const Sequelize = require('sequelize')
const connection = require('./database')

const Cliente = connection.define( 'clientes',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    idade:{
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Cliente.sync({force:false}).then( ()=>{
    console.log("criado tabela com sucesso")
}).catch((error)=>{
    console.log(error)
})

module.exports = Cliente
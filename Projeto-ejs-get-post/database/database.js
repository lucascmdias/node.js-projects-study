const Sequelize = require('sequelize')

const connection = new Sequelize('projeto-inicial','root', 'Lp@f1944',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection
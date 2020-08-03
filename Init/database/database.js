const Sequelize = require('sequelize')

const connection = new Sequelize('teste1','root','Lp@f1944', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection
const bd = require('../../config/database.js')
const LivroDao = require('../infra/livros-dao.js')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send("<h1> ola mundo </h1>")
    })

    app.get('/livros', (req, res) =>{

        const livroDao = new LivroDao(bd)
        livroDao.lista((erro, resultados) =>{
            res.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: resultados
                }
            )
        })

    
    })
}
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')

connection.authenticate().then( ()=>{
    console.log("conectado ao Banco de dados :D")
}).catch( (error)=>{
    console.log(error)
})


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req,res) =>{
    res.render("index")
})

app.get('/perguntar', (req, res) =>{
    res.render("perguntar")
})

app.post('/colocandopergunta',(req,res) =>{
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then( () =>{
        res.redirect('/')
    })
})
app.listen(8000, ()=>{
    console.log('servidor ativo')
})
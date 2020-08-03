const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Cliente = require('./database/Cliente')


connection.authenticate().then( ()=>{
    console.log("conectado ao banco de dados")
}).catch( (error) =>{
    console.log(error)
})

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', (req,res) =>{
    res.render("pages/index")
})

app.get('/cadastro', (req,res) => {
    res.render('pages/cadastro')
})

app.get('/login', (req, res) =>{
    res.render('pages/login')
})

app.post('/cadastro',(req, res) =>{
    let nome = req.body.nome
    let idade = req.body.idade
    let email = req.body.email
    let password = req.body.password

    Cliente.create({
        nome:nome,
        idade:idade,
        email: email,
        password: password
    }).then(()=>{
        console.log("COLOCADO DADOS COM SUCESSO")
        res.redirect('/login')
    }).catch( (error) =>{
        console.log(error)
    })
    
})

app.listen(3000, ()=>{
    console.log("servidor ativo")
})
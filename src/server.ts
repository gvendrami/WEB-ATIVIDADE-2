import express from 'express'
import dotenv from 'dotenv'
import dataBase from './database/ormconfig'

import routes from './routes'



// import cors from 'cors'                                     // não ativei por nao eu nao ter feito conexão com nenhum site, mas compreendi e achei muito útil
// app.use(cors()) // habilita o CORS

// le o arquivo .env
dotenv.config()
// cria uma aplicação express
const app = express()
// puxa o valor do .env (no caso PORT, mas poderia ser qualquer valor criado dentro do .env)
// process é utilizado para puxar os dados do .env
// const port = process.env.PORT || 3000   ---> define o port como 3000 se nao tiver a variavel no .env
const port = process.env.PORT

// // req (requisição) dados da requisição - res (resposta) para responder alguma coisa
// app.get('/',(req,res) => {
//     res.send('Olá mundo!')
// })

// // retorna o name a partir do id
// app.get('/user',(req,res) => {
//     res.send({id:1,name:"teste"})
// })

app.use(express.json()) // habilita o express para receber dados no formato json
app.use(routes) // habilita as rotas

// utilizar `` para chamar variaveis em uma string
// listen executa uma função uma unica vez quando executado o código. NAO DA PRA CHAMAR NOVAMENTE!!
app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`)
    console.log('Banco de dados', 
    dataBase.isInitialized ? 'iniciado' : 'não iniciado')
})
// ext sqlite viewer



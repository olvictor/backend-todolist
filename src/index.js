const express = require('express');
const rotas = require('./roteador');
const app = express();

app.use(express.json())
app.use(rotas)

app.listen(8000,()=>{
    console.log('Servidor aberto na porta 8000')
})
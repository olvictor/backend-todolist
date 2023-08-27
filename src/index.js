const express = require('express');
const rotas = require('./roteador');
const app = express();
const cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.use(express.json())
app.use(cors(corsOptions))

app.use(rotas)
app.listen(8000,()=>{
    console.log('Servidor aberto na porta 8000')
})
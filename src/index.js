const express = require('express');
const rotas = require('./roteador');
const app = express();

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(rotas)
app.listen(8000,()=>{
    console.log('Servidor aberto na porta 8000')
})
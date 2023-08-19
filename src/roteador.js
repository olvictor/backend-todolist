const express = require('express');
const rotas = express();

const { getTodos,createTodo} = require('../controladores/todos')

rotas.get('/todos', getTodos)
rotas.post('/todos',createTodo)




module.exports = rotas
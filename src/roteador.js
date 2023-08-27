const express = require('express');
const rotas = express();

const { getTodos,createTodo,checkedTodo} = require('../controladores/todos')

rotas.get('/todos', getTodos);
rotas.post('/todos', createTodo);
rotas.put('/todos/:id/checked', checkedTodo);




module.exports = rotas
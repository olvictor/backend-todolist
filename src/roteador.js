const express = require('express');
const rotas = express();

const { getTodos,createTodo,checkedTodo} = require('../controladores/todos')

rotas.get('/todos', getTodos);
rotas.post('/todos', createTodo);
rotas.patch('/todos/:id/checked', checkedTodo);




module.exports = rotas
const express = require('express');
const rotas = express();

const { getTodos,createTodo,checkedTodo, deletTodo} = require('../controladores/todos')

rotas.get('/todos', getTodos);
rotas.post('/todos', createTodo);
rotas.delete('/todos/:id', deletTodo);
rotas.put('/todos/:id/checked', checkedTodo);





module.exports = rotas
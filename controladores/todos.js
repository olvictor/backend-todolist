const fs = require('fs/promises')

const getTodos = async (req,res) =>{
    const databaseTodos = (await fs.readFile('./database/todos.json')).toString()
    const arrayTodos = JSON.parse(databaseTodos)
    res.json(arrayTodos)
}

const createTodo = async (req,res) =>{

    const {todo,done} = req.body
    const databaseTodos = (await fs.readFile('./database/todos.json')).toString()
    let arrayTodos = JSON.parse(databaseTodos)
    
    arrayTodos.push({
        id: Math.random(),
        todo,
        done
    })
    const arrayTodosJSON = JSON.stringify(arrayTodos)
    await fs.writeFile('./database/todos.json', arrayTodosJSON)
    return res.json({
        message:'OK'
    });
}

const checkedTodo = async (req,res) =>{
    const {id} = req.params
    const {done} = req.body
    const databaseTodos = (await fs.readFile('./database/todos.json')).toString()
    const arrayTodos = JSON.parse(databaseTodos);
    
    const todo = arrayTodos.find((todo)=> todo.id === +id);
    todo.done = done;

    const arrayTodosJSON = JSON.stringify(arrayTodos)
    await fs.writeFile('./database/todos.json', arrayTodosJSON)

    return res.status(200)
}

module.exports = {
    getTodos,
    createTodo,
    checkedTodo
}
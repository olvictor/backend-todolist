const { readFileSync } = require('fs');
const fs = require('fs/promises')

const getTodos = async (req,res) =>{
    res.json({
        message:'TEste'
    })
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

    return res.status(200);
}

module.exports = {
    getTodos,
    createTodo
}
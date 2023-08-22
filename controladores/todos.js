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

module.exports = {
    getTodos,
    createTodo
}
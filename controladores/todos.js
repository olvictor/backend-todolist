const {  writeFile } = require('fs')
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
    const { id } = req.params
    const { todo, done } = req.body
    console.log(req.body)
    const newTodo = {
        id: +id,
        todo,
        done
    }

    const databaseTodos = (await fs.readFile('./database/todos.json')).toString()
    const arrayTodos = JSON.parse(databaseTodos);

    const indiceTodoEncontrado = arrayTodos.findIndex((todo)=> todo.id === +id);
    arrayTodos.splice(indiceTodoEncontrado,1,newTodo);
    
    const arrayTodosJSON = JSON.stringify(arrayTodos)
    
    await fs.writeFile('./database/todos.json', arrayTodosJSON)

    return res.status(203).json()

}
module.exports = {
    getTodos,
    createTodo,
    checkedTodo
}
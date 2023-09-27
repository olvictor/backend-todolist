const pool = require('../database/connectionDB')

const getTodos = async (req,res) => {
    try{
        
        const databaseTodos = await pool.query('SELECT * FROM todos')
        return res.status(200).json(databaseTodos.rows)
        
    }
    catch(error){
        return res.status(500).json({mensagem: error.message})
    }
}

const createTodo = async (req,res) =>{
    const {task,done} = req.body

    try{
        const insertTodo = await pool.query('INSERT INTO todos(task,done)VALUES($1,$2)',[task,done])
        
        return res.status(201).json()
    }
    catch(error){
        return res.status(500).json({mensagem: error.message})

    }


}

const checkedTodo = async (req,res) =>{
    const {id} = req.params
    const { done } = req.body



    try{
        const todoExist = await pool.query('SELECT * FROM todos WHERE id = $1',[id])

        if(todoExist.rowCount < 1){
            return res.status(404).json({mensagem: 'Todo não encontrado'})
        }
        
        const checkeTodo =  await pool.query('UPDATE todos set done = $1 WHERE id = $2',[done,id])

        return res.status(200).json()
    }
    catch(error){
        return res.status(500).json({mensagem: error.message})

    }
}

const deletTodo = async (req,res) =>{
    const {id} = req.params

    try{
        const todoExist = await pool.query('SELECT * FROM todos WHERE id = $1',[id])
        
        if(todoExist.rowCount < 1){
            return res.status(404).json({mensagem: 'Todo não encontrado'})
        }

        const deletTodoId = await pool.query('DELETE FROM todos WHERE id = $1',[id])
        
        return res.status(200).json()
    }
    catch(error){
        return res.status(500).json({mensagem: error.message})

    }

}

const editTodo = async (req,res) =>{
    const {id} = req.params
    const { todo } = req.body
    try{
        const todoExist = await pool.query('SELECT * FROM todos WHERE id = $1',[id])
        
        if(todoExist.rowCount < 1){
            return res.status(404).json({mensagem: 'Todo não encontrado'})
        }

        const deletTodoId = await pool.query('UPDATE  todos set task = $2 WHERE id = $1',[id,todo])
        
        return res.status(200).json()
    }
    catch(error){
        return res.status(500).json({mensagem: error.message})

    }

}

module.exports = {
    getTodos,
    createTodo,
    checkedTodo,
    deletTodo,
    editTodo
}
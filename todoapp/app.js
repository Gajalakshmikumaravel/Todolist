const express=require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const{ getALLTodoList }=require('./controller/todo')
const {createTodo,getTodoByID,deleteTodoByID}=require('./controller/todo')
const {connectDb}=require('./config/db')

connectDb();
const app=new express();
app.use(bodyParser.json())
app.use(cors())
app.get('/api/v2/todo',getALLTodoList);
app.post('/api/v2/todo',createTodo)
app.get('/api/v2/todo/:id',getTodoByID)
app.delete('/api/v2/todo/:id',deleteTodoByID)
app.listen(3001, ()=>{
    console.log('server is running....');
})


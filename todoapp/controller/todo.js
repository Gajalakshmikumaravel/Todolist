const Todo=require('../model/todo');

exports.getALLTodoList = async(req,res)=>{
    try{
        const list = await Todo.find();
        return res.status(200).json({
            data:list,
            length: list.length
        })

    }catch(error)
    {
        return res.status(500).json({
            msg: 'internal server error'
        })
    }
}

exports.createTodo= async(req,res)=>{
    try{
        const newTodo = await Todo.create(req.body)
        return res.status(201).json({
            data : newTodo
        })

    }
    catch(error)
    {
        return res.status(500).json({
            msg: 'internal server error'
        })

    }
}

exports.getTodoByID=async(req,res)=>{
    try{
        const todo=await Todo.findById(req.params.id)
        if(todo){
        return res.status(200).json({
            data:todo
        })
     } else{
            return res.status(404).json({
                msg: 'todo not found'
            })
        }
      }
    catch(error){
        return res.status(500).json({
            msg: 'internal server error'
        })
    }
}

exports.deleteTodoByID=async(req,res)=>{
    try{
        const todo=await Todo.findById(req.params.id)
        if(todo){
        
            await Todo.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                 msg:'deleted'
            })
     } else{
            return res.status(404).json({
                msg: 'Not found'
            })
        }
      }
    catch(error){
        return res.status(500).json({
            msg: 'internal server error'
        })
    }
}
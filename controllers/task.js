const Task = require("../models/task");

async function createTask(req, res) {
  const task = new Task();
  const params = req.body;
  task.title = params.title;
  task.description = params.description;

  try {
    const taskStore = task.save();

    if (!taskStore) {
      req.status(400).send({ msg: "No se ha guardado la tarea" });
    } else {
      req.status(200).send({ task: taskStore });
    }
  } catch (error) {
    req.status(500).send(error);
  }
}

async function getTasks(req,res){
    try{
        const tasks=await Task.find().sort({created_at:-1});

        if(!tasks){
            req.status(400).send({msg:"Error al obtener las tareas"});
        }else{
            res.status(200).send(tasks);
        }
    }catch(error){
        res.status(500).send(error);
    }
}

async function getTask(req,res){
    const idTask=req.params.id;
    try{
        const task=await Task.findById(idTask);

        if(!task){
            res.status(400).send({msg: "No se ha encontrado la tarea indicada"});
        
        }else{
            res.status(200).send(task);
        }
    }catch(error){
        res.status(500).send(error);
    }
}   

async function updateTask(req,res){
    const idTask =req.params.id;
    const params=req.body;

    try{
        const task=await Task.findByIdAndUpdate(idTask.params);
        if(!task){
            res.status(400).send({msg: "No se ha podido actualizar la tarea indicada"});
        
        }else{
            res.status(200).send({msg: "Actualización completada"});
        }
    }catch(error){
        res.status(500).send(error);
    }
}

async function deleteTask(req,res){
    const idTask=req.param.id;
    try{
        const task=await Task.findByIdAndDelete(idTask);
        if(!task){
            res.status(400).send({msg: "No se ha podido eliminar la tarea indicada"});
        
        }else{
            res.status(200).send(task);
        }
    }catch(error){
        res.status(500).send(error);
    }

}

module.exports = {
  createTask,getTasks,getTask,updateTask,deleteTask
};
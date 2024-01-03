const Task = require("../model/taskModel.js");


// Get all tasks
const getTasks = async (req,res)=>{
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({msg : error.message})
    }
}

//Create a task

const createTasks = async (req,res)=>{
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({msg : error.message});
    }
}

// Get a task
const getTask = async(req,res)=>{
    try {
       const {id} = req.params;
       
       const getTask = await Task.findById(id);
       if(!getTask){
        return res.status(404).json({msg : `Not task found with given id: ${id}`})
       }
       res.status(200).json(getTask)
    } catch (error) {
        res.status(500).json({msg : error.message})
    }
}

// Delete a task
const deleteTask = async (req,res)=>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(404).json({msg : `Not task found with given id: ${id}`})
        }
        res.status(200).send("Task Deleted");
    } catch (error) {
        res.status(500).json({msg : error.message})
    }
}

// Update a task

const updateTask = async (req,res)=>{
    try {
        const task = await Task.findByIdAndUpdate({_id :req.params.id} , req.body , {new:true , runValidators : true});
        if(!task){
            return res.status(404).json({msg : `Not task found with given id: ${id}`})
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg : error.message})
    }
}
module.exports = {getTasks , createTasks , getTask , deleteTask , updateTask}
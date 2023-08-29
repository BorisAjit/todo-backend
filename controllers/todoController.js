import mongoose from "mongoose";
import { TodoSchema } from "../models/TodosModal";

const Todo = mongoose.model('todos', TodoSchema);

export const addTodo = async (req, res) => {
  let newTodo = new Todo(req.body)
  newTodo.save()
  .then((todo)=>{
    res.json(todo);
  })
  .catch((err)=>{
    res.send(err)
  });
}

export const getTodos = async (req, res) => {
  Todo.find({})
  .then((todo)=>{
    res.json(todo);
  })
  .catch((err)=>{
    res.send(err)
  });
}

export const updateCompetionStatus = async (req, res) => {
  Todo.findOneAndUpdate({_id:req.params.id}, req.body,{'new':true})
  .then((todo)=>{
    res.json(todo);
  })
  .catch((err)=>{
    res.send(err)
  });
}

export const deleteTodo = async (req, res) => {
  Todo.deleteOne({_id:req.params.id})
  .then((todo)=>{
    res.json(todo)
  })
  .catch((err)=>{
    res.send(err)
  });
}
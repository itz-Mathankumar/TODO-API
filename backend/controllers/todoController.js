const asyncHandler = require('express-async-handler')

const Todo = require('../models/todoModel')

const getTodo = asyncHandler(async (req, res) => {

  const todo = await Todo.findById(req.params.id)

  if (!todo) {

    res.status(400)

    throw new Error('Todo not found')

  }

  res.status(200).json(todo)

})

const getAllTodo = asyncHandler(async (req, res) => {

  const todo = await Todo.find()

  res.status(200).json(todo)

})



const setTodo = asyncHandler(async (req, res) => {

  if (!req.body.title) 
  {

    res.status(400)

    throw new Error('Please add a title')

  }

  const todo = await Todo.create(
  {

    title: req.body.title,

    description: req.body.description,

  })

  res.status(200).json(todo)

})


const updateTodo = asyncHandler(async (req, res) => {

const todo = await Todo.findById(req.params.id)

  if (!todo) 
  {

    res.status(400)

    throw new Error('Todo not found')

  }

  if (!req.body.title) 
  {

    res.status(400)

    throw new Error('Please add a title')

  }

  const updatedTodo = await Todo.findByIdAndUpdate(

    req.params.id, 
    req.body, 
    {

    new: true,
  
    })

  res.status(200).json(updatedTodo)

})


const deleteTodo = asyncHandler(async (req, res) => {

  const todo = await Todo.findById(req.params.id)

  if (!todo) {

    res.status(400)

    throw new Error('Todo not found')

  }

  await todo.remove()

  res.status(200).json({ id: req.params.id })

})

module.exports = { getTodo, setTodo, updateTodo, deleteTodo, getAllTodo }

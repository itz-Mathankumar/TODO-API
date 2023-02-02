const express = require('express')

const router = express.Router()

const { getTodo, setTodo, updateTodo, deleteTodo, getAllTodo } = require('../controllers/todoController')

router.route('/').post( setTodo ).get( getAllTodo)

router.route('/:id').put( updateTodo ).delete( deleteTodo ).get( getTodo )

module.exports = router
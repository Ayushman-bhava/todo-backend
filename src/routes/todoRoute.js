import express from "express"
import { createTodo, deleteTodo, getAllTodo, getById, todoUpdate } from "../controllers/todoController.js"

const todoRoute = express.Router()

//crud 
// create : post, read: get, update: put, delete: delete
// server , mongo, schema, controller, route, server

todoRoute.post('/create', createTodo)
todoRoute.get('/getAll', getAllTodo)
todoRoute.delete('/delete/:id', deleteTodo)
todoRoute.get('/getById/:id', getById)
todoRoute.put('/update/:id', todoUpdate)


export default todoRoute
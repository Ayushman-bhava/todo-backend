import express from "express"
import { createTodo, deleteTodo, getAllTodo, getById } from "../controllers/todoController.js"

const todoRoute = express.Router()

//crud 
// create : post, read: get, update: put, delete: delete
// server , mongo, schema, controller, route, server

todoRoute.post('/create', createTodo)
todoRoute.get('/getAll', getAllTodo)
todoRoute.delete('/delete/:id', deleteTodo)
todoRoute.get('/getById/:id', getById)


export default todoRoute
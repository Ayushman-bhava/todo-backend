import todoSchema from "../models/todoSchema.js";

export const createTodo = async (req, res) => {
    try {
        const { title } = req.body

        const existing = await todoSchema.findOne({
            title: title
        })

        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Todo already exist"
            })

        }


        const data = await todoSchema.create({
            title
        })


        return res.status(201).json({
            success: true,
            message: "Todo Created",
            data
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Todo not Created"
        })

    }
}


export const getAllTodo = async (req, res) => {
    try {

        const data = await todoSchema.find({})

        return res.status(200).json({
            success: true,
            message: "Todo Fetched Successfully",
            data
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Todo not Fetched"
        })

    }
}

export const deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        // const todoTitle = req.params.title
        const data = await todoSchema.findByIdAndDelete({
            _id: todoId
            // title: todoTitle
        })

        if (data) {
            return res.status(200).json({
                success: true,
                message: "ToDo deleted successfully",
                data
            })
        }
        else {
            return res.status(404).json({
                success: true,
                message: "ToDo not found",
                data
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "ToDo not deleted"
        })
    }
}

export const getById = async (req, res) => {
    try {
        const todoId = req.params.id
        const data = await todoSchema.findById({
            _id: todoId
        })

        return res.status(200).json({
            success: true,
            message: "Todo Fetched Successfully",
            data
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Todo not Fetched"
        })

    }
}

// export const todoUpdate = async (req, res) => {
//     try {
//         const newTitle = req.body
//         const todoId = req.params.id

//         if (todoId) {
//             const data = await todoSchema.findByIdAndUpdate({
//                 _id: todoId,
//                 title: newTitle
//             })


//             return res.status(200).json({
//                 success: true,
//                 message: "Todo updated Successfully",
//                 data
//             })
//         }



//     } catch (error) {
//         return res.status(400).json({
//             success: false,
//             message: "Todo not updated"
//         })

//     }
// }


export const todoUpdate = async (req, res) => {
    try {
        const { title} = req.body
        const todoId = req.params.id

        const data = await todoSchema.findById({
            _id: todoId
        })

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "todo not found"
            })
        }

        const existing = await todoSchema.findOne({
            title: title
        })

        if (existing) {
            return res.status(400).json({
                success: false,
                message: "todo already exist"
            })
        }

        data.title = title
        await data.save()

        return res.status(200).json({
            success: true,
            message: "Todo updated Successfully",
            data
        })
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: "Todo not updated"
        })

    }
}

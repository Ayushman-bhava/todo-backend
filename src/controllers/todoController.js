import todoSchema from "../models/todoSchema.js";

export const createTodo = async(req, res)=>{
    try {
        const {title} = req.body

        const existing = await todoSchema.findOne({
            title: title
        })

        if(existing){
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


export const getAllTodo = async(req, res)=>{
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
import express from "express"
import { dbConnect } from "./src/config/dbConnect.js";
import todoRoute from "./src/routes/todoRoute.js";

const app =  express();
const port = 8001;

dbConnect()
app.use(express.json())
app.use("/", todoRoute)

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})
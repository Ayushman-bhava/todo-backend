import mongoose from "mongoose";

const url = "mongodb+srv://ayush:ayush@cluster0.o2hwnuh.mongodb.net/"

export async function dbConnect(){
    try {
        await mongoose.connect(url)
        console.log("MongoDB Connected");
        
    } catch (error) {
        console.log("Not Connected", error);       
    }
}
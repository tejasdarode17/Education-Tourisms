import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected Sucessfully");
    } catch (error) {
        console.log(error);
    }
}


export default dbConnect
import mongoose from "mongoose";


async function dbConnect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/Education_Tourism")
        console.log("Database Connected Sucessfully");
    } catch (error) {
        console.log(error);
    }
}


export default dbConnect
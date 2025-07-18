import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
        match: [/^(\+91|0)?[6-9][0-9]{9}$/, 'Invalid Indian phone number'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/.+@.+\..+/, "Please enter a valid email"],
    },

    pickupLocation: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    }
},
    { timestamps: true }

)


const Student = mongoose.model("Student", studentSchema)

export default Student
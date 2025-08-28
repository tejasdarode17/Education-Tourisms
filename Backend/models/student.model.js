import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
        unique: true,
        match: [/^(\+91|0)?[6-9][0-9]{9}$/, 'Invalid Indian phone number'],
    },
    
    email: {
        type: String,
        required: true,
        lowercase: true,
        match: [/.+@.+\..+/, "Please enter a valid email"],
    },

    schoolName: {
        type: String,
        required: true
    },

    pickupLocation: {
        type: String,
        required: true,
    },

    coachings: {
        type: [String],
        default: []
    },

    pickupDate: {
        type: Date,
        required: true
    },

    called: {
        type: Boolean,
        default: false
    },

    notes: {
        type: String,
        default: ""
    }

},
    { timestamps: true }
)


const Student = mongoose.model("Student", studentSchema)

export default Student
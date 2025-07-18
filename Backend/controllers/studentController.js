import Student from "../models/student.model.js"


export async function createStudentEntry(req, res) {

    try {
        const { fullname, phNumber, email, pickupLocation, date } = req.body

        if (!fullname, !phNumber, !email, !pickupLocation, !date) {
            res.status(400).json({
                success: false,
                message: "Something is missing"
            })
        }

        const existingStudent = await Student.findOne({ phone: phNumber })

        if (existingStudent) {
            return res.status(409).json({
                success: false,
                message: 'you are already Registered',
            });
        }

        const newStudent = await Student.create({
            fullname: fullname,
            email: email,
            phone: phNumber,
            pickupLocation: pickupLocation,
            date: date
        })

        res.status(200).json({
            success: true,
            message: "thanks for registring with us"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
} 




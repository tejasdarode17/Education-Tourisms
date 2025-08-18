import Student from "../models/student.model.js"


export async function createStudentEntry(req, res) {

    try {
        const { fullName, phNumber, email, coachings, school, pickupLocation, date } = req.body

        if (!fullName || !phNumber || !school || !coachings || !pickupLocation || !date) {
            return res.status(400).json({
                success: false,
                message: "Something is missing"
            })
        }

        const existingStudent = await Student.findOne({ phone: phNumber })

        if (existingStudent) {
            return res.status(409).json({
                success: false,
                message: 'You are already registered with us. Our team will contact you shortly.',
            });
        }

        const newStudent = await Student.create({
            fullName: fullName,
            email: email,
            phone: phNumber,
            schoolName: school,
            pickupLocation: pickupLocation,
            pickupDates: [
                { date: new Date(date), status: "scheduled" }
            ],
            coachings: coachings
        })

        res.status(200).json({
            success: true,
            message: "Thank you for registering with us. Our team will reach out to you shortly"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}




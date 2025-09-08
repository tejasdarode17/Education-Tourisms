import axios from "axios";
import transporter from "../config/nodemailer.js";
import Student from "../models/student.model.js"
import dotenv from "dotenv"
dotenv.config()

async function sendWhatsAppMessage(to, fullName) {
    try {
        const response = await axios.post(
            `https://graph.facebook.com/v22.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
            {
                messaging_product: "whatsapp",
                to,
                type: "template",
                template: {
                    name: "student_registration",
                    language: { code: "en_US" },
                    components: [
                        {
                            type: "body",
                            parameters: [
                                { type: "text", text: fullName }
                            ]
                        }
                    ]
                }
            },
            {
                headers: {
                    "Authorization": `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

    } catch (err) {
        console.error("WhatsApp message failed:", err.response?.data || err.message);
    }
}

export async function createStudentEntry(req, res) {
    try {
        const { fullName, phNumber, email, coachings, school, pickupLocation, date } = req.body;

        if (!fullName || !school || !coachings || !pickupLocation || !date) {
            return res.status(400).json({
                success: false,
                message: "All required fields must be filled.",
            });
        }

        if (!/^(\+91|0)?[6-9][0-9]{9}$/.test(phNumber)) {
            return res.status(400).json({
                success: false,
                message: "Invalid phone number.",
            });
        }

        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email address.",
            });
        }

        const existingStudent = await Student.findOne({ phone: phNumber });
        if (existingStudent) {
            return res.status(409).json({
                success: false,
                message: "You are already registered. Our team will contact you shortly.",
            });
        }

        const newStudent = await Student.create({
            fullName,
            email,
            phone: phNumber,
            schoolName: school,
            pickupLocation,
            pickupDate: date,
            coachings,
        });



        res.status(201).json({
            success: true,
            message: "Thank you for registering. Our team will contact you shortly.",
        });

        const emailContent = `
            <p>Dear <strong>${fullName}</strong>,</p>
            <p>Thank you for registering with <b>Education Tourisms</b>.<br/>
            Your details have been successfully recorded. Our team will reach out to you shortly to confirm your schedule and other details.</p>
            <p>For any queries, contact us at <b>+91 74149 77323</b>.</p>
            <p>Best regards,<br/>
            <strong>Education Tourisms Team</strong></p>
        `;


        transporter.sendMail({
            from: `"Education Tourisms" <${process.env.EMAIL}>`,
            to: email,
            subject: "Registration Confirmation - Education Tourisms",
            html: emailContent,
        }).catch(mailError => {
            console.error("Email sending failed:", mailError.message);
        });

        await sendWhatsAppMessage(`91${phNumber.replace(/^(\+91|0)/, "")}`, fullName);

    } catch (error) {
        console.error("Server Error:", error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error. Please try again later.",
        });
    }
}




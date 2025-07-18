import Admin from "../models/admin.model.js";
import bcrypt from "bcrypt"
import Student from "../models/student.model.js";
import { generateAccessToken } from "../Utils/genrateToken.js";


export async function createAdmin(req, res) {

    const name = "admin"
    const username = "admin17"
    const password = "admin17"

    const existingAdmin = await Admin.findOne({ username })

    if (existingAdmin) {
        console.log("Admin already exists");
        process.exit()
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await Admin.create({
        username,
        password: hashedPassword,
    });

    console.log("Admin created successfully");
    process.exit();

}

export async function loginAdmin(req, res) {

    try {
        const { username, password } = req.body

        if (!username || !password) {
            res.status(400).json({
                success: false,
                message: "Something is missing"
            })
        }

        const admin = await Admin.findOne({ username })
        if (!admin) return res.status(401).json({ message: "Invalid credentials" });

        const existingPassword = await bcrypt.compare(password, admin.password);
        if (!existingPassword) return res.status(401).json({ message: "Invalid credentials" });


        const token = generateAccessToken({ id: admin._id, role: "admin" })


        const prod = process.env.NODE_ENV === "production";
        res.cookie("adminToken", token, {
            httpOnly: true,
            secure: prod,
            sameSite: prod ? "None" : "Lax",
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.json({
            success: true,
            message: "Admin logged in",
            admin: {
                id: admin._id,
                username: admin.username,
            },
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}

export function logoutAdmin(req, res) {
    res.clearCookie("adminToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    });

    res.status(200).json({
        success: true,
        message: "Admin logged out successfully",
    });
}

export async function getAllStudents(req, res) {
    try {
        
        const adminId = req.admin?.id;
        console.log(`Admin ${adminId} is fetching student data`);

        const students = await Student.find().sort({ createdAt: -1 }); 

        res.status(200).json({
            success: true,
            message: "Students fetched successfully",
            students,
        });
    } catch (error) {
        console.error("Error fetching students:", error.message);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}




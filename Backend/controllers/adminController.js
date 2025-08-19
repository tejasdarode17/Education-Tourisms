import Admin from "../models/admin.model.js";
import bcrypt from "bcrypt"
import Student from "../models/student.model.js";
import { generateAccessToken } from "../Utils/genrateToken.js";


export async function loginAdmin(req, res) {

    try {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Username and password are required"
            });
        }

        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password"
            });
        }

        const validPassword = await bcrypt.compare(password, admin.password);
        if (!validPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password"
            });
        }


        const token = generateAccessToken({ id: admin._id })

        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: true,
            sameSite: "Lax",
            maxAge: 24 * 60 * 60 * 1000, // 1 day expiry
            path: "/"
        })

        return res.json({
            success: true,
            message: "Welcome Back Sir...!",
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




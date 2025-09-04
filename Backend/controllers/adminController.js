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

        if (!adminId) {
            return res.status(401).json({
                success: false,
                message: "User Not Authenticated"
            });
        }

        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 20
        const skip = (page - 1) * limit;

        const total = await Student.countDocuments()

        const students = await Student.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        if (students.length === 0) {
            return res.status(200).json({
                success: true,
                count: 0,
                students: [],
                message: "No students registered today"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Students fetched successfully",
            page,
            students,
            pages: Math.ceil(total / limit),
            total
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}

export async function getTodaysEnrollments(req, res) {
    try {

        const adminId = req.admin?.id;

        if (!adminId) {
            return res.status(401).json({
                success: false,
                message: "User Not Authenticated"
            });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;


        // Start and end of the current day
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);


        // Count total students enrolled today
        const total = await Student.countDocuments({ createdAt: { $gte: startOfDay, $lte: endOfDay } });

        // Fetch today's students with pagination
        const todaysStudents = await Student.find({ createdAt: { $gte: startOfDay, $lte: endOfDay } })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);


        if (todaysStudents.length === 0) {
            return res.status(200).json({
                success: true,
                students: [],
                message: "No students registered today",
                page,
                limit,
                total,
                pages: 0
            });
        }

        return res.status(200).json({
            success: true,
            message: "Today's students fetched successfully",
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
            students: todaysStudents
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}

export async function deleteStudent(req, res) {
    try {
        const adminId = req.admin?.id;
        const { id } = req.params; // ✅ Correct way to get ID

        if (!adminId) {
            return res.status(401).json({
                success: false,
                message: "User Not Authenticated"
            });
        }

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Student ID not provided"
            });
        }

        const deletedStudent = await Student.findByIdAndDelete(id)

        if (!deletedStudent) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });

    } catch (error) {
        console.error("Delete Student Error:", error);
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}

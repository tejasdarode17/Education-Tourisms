import JWT from "jsonwebtoken";
import dotenv from "dotenv";
import Admin from "../models/admin.model.js";
dotenv.config();

export async function verifyAdmin(req, res, next) {
    const token = req.cookies.accessToken

    if (!token) {
        return res.status(400).json({
            success: false,
            message: "User is not authenticated"
        })
    }

    try {
        const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);
        req.admin = decoded;
        next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({
            success: false,
            message: "Invalid token or token expired",
        })
    }
}


export async function checkAuth(req, res) {

    try {
        const user = req.admin.id
        console.log("Called");
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Authentication problem",
            });
        }

        const admin = await Admin.findById(user).select("-password");

        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Authenticated user",
            admin
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
}

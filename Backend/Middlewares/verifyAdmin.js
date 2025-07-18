import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

async function verifyAdmin(req, res, next) {
    const token = req.cookies.adminToken;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Token not provided",
        });
    }

    try {
        const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY || "secret_key");

        if (decoded.role !== "admin") {
            return res.status(403).json({ success: false, message: "Access denied: Not admin" });
        }
        
        req.admin = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
            error: error.message,
        });
    }
}

export default verifyAdmin;

import JWT from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config

export function generateAccessToken(payload) {
    return JWT.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
    });
}



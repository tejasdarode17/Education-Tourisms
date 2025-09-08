import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dbConnect from "./config/dbConnect.js"
import studentRoute from "./routes/studentRoute.js"
import adminRoute from './routes/adminRoute.js'
import dotenv from "dotenv"
import path from 'path'

dotenv.config()

const app = express()
const PORT = process.env.PORT

const allowedOrigins = [
    process.env.FRONTEND_URL,
    process.env.FRONTEND_URL1,
    process.env.FRONTEND_URL2
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use("/api/v1", studentRoute);
app.use("/api/v1", adminRoute);

app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).json({
        success: false,
        message: err.message || "Something went wrong"
    });
});

app.listen(PORT, () => {
    dbConnect();
    console.log(`Server running on port ${PORT}`);
});



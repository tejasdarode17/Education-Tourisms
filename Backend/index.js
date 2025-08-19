import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dbConnect from "./config/dbConnect.js"
import studentRoute from "./routes/studentRoute.js"
import adminRoute from './routes/adminRoute.js'

const app = express()
const PORT = 3000

const allowedOrigins = [
    "http://localhost:5173",
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
};


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));
app.use(cookieParser());



app.use("/api/v1", studentRoute)
app.use("/api/v1", adminRoute)

app.listen(PORT, () => {
    dbConnect()
    console.log("Server is running");
})



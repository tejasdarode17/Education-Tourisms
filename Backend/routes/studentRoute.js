import express from "express"
import { createStudentEntry } from "../controllers/studentController.js"

const route = express.Router()


route.post("/student/form", createStudentEntry)


export default route
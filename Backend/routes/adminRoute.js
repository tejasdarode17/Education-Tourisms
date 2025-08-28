import express from 'express'
import { deleteStudent, getAllStudents, getTodaysEnrollments, loginAdmin, logoutAdmin } from '../controllers/adminController.js'
import { checkAuth, verifyAdmin } from '../Middlewares/auth.js'


const route = express.Router()

route.post("/login-admin", loginAdmin)

route.get("/admin/check-auth", verifyAdmin, checkAuth)

route.get("/admin/all", verifyAdmin, getAllStudents)

route.get("/admin/latest/enrollment", verifyAdmin, getTodaysEnrollments)

route.delete("/admin/delete/:id", verifyAdmin, deleteStudent)

route.post("/admin/logout", logoutAdmin)

export default route

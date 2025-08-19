import express from 'express'
import { loginAdmin } from '../controllers/adminController.js'
import { checkAuth, verifyAdmin } from '../Middlewares/auth.js'


const route = express.Router()

route.post("/login-admin", loginAdmin)

route.get("/admin/check-auth", verifyAdmin, checkAuth)

export default route
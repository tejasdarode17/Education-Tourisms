import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { setUser } from '@/Redux/authSlice'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const AdminLogin = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login-admin`, formData, {
                withCredentials: true
            });

            const data = response.data
            console.log(data);
            toast.success(data?.message)
            dispatch(setUser(data?.admin))
            navigate("/admin")
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message)
        }
    }


    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left Side - Logo */}
            <div className="hidden bg-[#062E2E] lg:flex flex-1 items-center justify-center p-6">
                <div className="text-center">
                    {/* Logo placeholder */}
                    <div className="flex items-center justify-center">
                        <img className='w-100 h-100 logo' src="/logo.jpg" alt="" />
                    </div>
                    {/* <h1 className="text-black text-xl lg:text-xl font-semibold">
                        Education Tourisms
                    </h1> */}
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 bg-[#062E2E] flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-[#062E2E]">
                    <h2 className="text-white text-2xl lg:text-3xl font-bold mb-2 text-center">
                        Welcome
                    </h2>
                    <p className="text-gray-300 text-sm mb-6 text-center">
                        Please login to Admin Dashboard.
                    </p>

                    <form className="space-y-4"
                        onSubmit={handleSubmit}
                    >
                        <Input
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
                            onChange={(e) => { setFormData((prev) => ({ ...prev, username: e.target.value })) }}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
                            onChange={(e) => { setFormData((prev) => ({ ...prev, password: e.target.value })) }}
                        />
                        <Button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-semibold transition"
                        >
                            Login
                        </Button>
                    </form>

                    <p className="text-center text-gray-400 text-sm mt-4 cursor-pointer hover:underline">
                        Forgotten Your Password?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
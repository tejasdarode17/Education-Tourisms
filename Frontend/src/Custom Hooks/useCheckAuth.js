import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@/Redux/authSlice";

export function useCheckAuth() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/v1/admin/check-auth", {
                    withCredentials: true,
                });

                if (res.data.success) {
                    dispatch(setUser(res.data.admin));
                    console.log(res.data);
                } else {
                    navigate("/admin-login");
                }
            } catch (err) {
                console.error("Auth check failed:", err.response?.data || err.message);
                navigate("/admin-login");
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [dispatch, navigate]);

    return { loading };
}

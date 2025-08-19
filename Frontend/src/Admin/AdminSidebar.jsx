import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";
import { clearUser } from "@/Redux/authSlice";
import { useDispatch } from "react-redux";
import { Car, ChartNoAxesCombined, File, Home, LayoutDashboard, LogOut, Menu, MessageSquare, Settings, User } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const AdminSidebar = () => {

  const [openSheet, setOpenSheet] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-64 min-h-screen bg-[#1B1C22] text-white border-r border-gray-200 shadow-none">
        <div
          onClick={() => navigate("/admin")}
          className="flex gap-2 items-center px-6 py-5 text-xl font-semibold border-b border-gray-100 cursor-pointer"
        >
          <ChartNoAxesCombined className="text-blue-600" />
          Admin Panel
        </div>
        <SideBarMenu />
      </div>

      {/* Mobile Sidebar (optional if used here) */}
      <div className="lg:hidden ">
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
          <SheetTrigger asChild>
            <Menu onClick={() => setOpenSheet(true)} />
          </SheetTrigger>
          <SheetContent side="left" className="w-50 bg-[#1B1C22] text-white">
            <SheetHeader>
              <SheetTitle
                onClick={() => navigate("/admin")}
                className="flex gap-2 items-center mt-2 text-white"
              >
                <ChartNoAxesCombined />
                Admin Panel
              </SheetTitle>
            </SheetHeader>
            <SideBarMenu setOpenSheet={setOpenSheet} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

const SideBarMenu = ({ setOpenSheet }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  async function handleLogout() {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/logout`, {}, { withCredentials: true });
      dispatch(clearUser());
      navigate("/seller/auth/login");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  }

  const items = [
    { id: 1, name: "Dashboard", icon: <Home />, path: "/admin" },
    { id: 2, name: "Students", icon: <User />, path: "/admin/products" },
    { id: 3, name: "Pickups", icon: <Car />, path: "/admin/orders" },
    { id: 4, name: "Messages", icon: <MessageSquare />, path: "/admin/settings" },
    { id: 4, name: "Reports", icon: <File />, path: "/admin/settings" },
  ];

  return (
    <div className="flex flex-col gap-1 px-2 py-4">
      {items.map((item) => (
        <Button
          key={item.id}
          onClick={() => {
            navigate(item.path);
            if (setOpenSheet) setOpenSheet(false);
          }}
          variant="ghost"
          className={`flex items-center gap-3 w-full pointer justify-start px-4 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === item.path ? "bg-blue-700 text-white hover:bg-blue-800" : "hover:bg-gray-100"}`}>
          {item.icon}
          {item.name}
        </Button>
      ))}

      <Button
        onClick={handleLogout}
        variant="ghost"
        className="flex items-center gap-3 pointer w-full justify-start px-4 py-2 rounded-md text-sm font-medium text-red-500 hover:bg-red-50"
      >
        <LogOut />
        Logout
      </Button>
    </div>
  );
};


export default AdminSidebar;

import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Navbar from './Main Components/Navbar/Navbar';
import Home from './Main Components/Home/Home';
import Footer from './Main Components/Footer/Footer';
import BookingPage from './Main Components/Booking/BookingPage';
import CoachingCentersPage from './Main Components/Coaching Centers/CoachingCentersPage';
import About from './Main Components/About/About';
import Contact from './Main Components/Contact Us/Contact';
import AdminLogin from './Admin/AdminLogin';
import { useSelector } from 'react-redux';
import Dashboard from './Admin/Dashboard';
import { useCheckAuth } from './Custom Hooks/useCheckAuth';
import AdminSidebar from './Admin/AdminSidebar';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

function AdminAuthLayout() {
  const { isAuthenticated } = useSelector((store) => store.auth);

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return <AdminLogin />;
}


function AdminHomeLayout() {
  const { isAuthenticated } = useSelector((store) => store.auth);

  const { loading } = useCheckAuth();

  if (loading) {
    return <h1>Loading....</h1>
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }

  return (
    <div className="flex min-h-screen w-full">
      
      <AdminSidebar />

      <div className="flex-1 p-4 lg:p-10 overflow-x-hidden bg-[#fff]">
        <Outlet />
      </div>
    </div>
  );
}


const approuter = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/book-ride",
        element: <BookingPage></BookingPage>
      },
      {
        path: "/coaching-centers",
        element: <CoachingCentersPage></CoachingCentersPage>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      }
    ]
  },


  {
    path: "/admin-login",
    element: <AdminAuthLayout></AdminAuthLayout>
  },

  {
    path: "/admin",
    element: <AdminHomeLayout></AdminHomeLayout>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>
      },
    ]
  }

])



function App() {

  return (
    <RouterProvider router={approuter}></RouterProvider>
  );
}



export default App;
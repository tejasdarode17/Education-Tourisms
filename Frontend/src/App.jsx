import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Main Components/Navbar/Navbar';
import Home from './Main Components/Home/Home';
import Footer from './Main Components/Footer/Footer';
import BookingPage from './Main Components/Booking/BookingPage';
import CoachingCentersPage from './Main Components/Coaching Centers/CoachingCentersPage';
import About from './Main Components/About/About';
import Contact from './Main Components/Contact Us/Contact';

function MainLayout() {

  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
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

])





function App() {
  return (
    <RouterProvider router={approuter}></RouterProvider>
  );
}



export default App;
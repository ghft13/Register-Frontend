import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Applayout from "./Components/Applayout";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Services from "./Components/Services";
import Appointment from "./Components/Appointment";
import Logout from "./Components/Logout";
import "./App.css";


function App() {
  const router = createBrowserRouter([
    {
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Header />,
        },
        {
          path: "/Signup",
          element: <Signup />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/Services",
          element: <Services />,
        },

        {
          path: "/Logout",
          element: <Logout />,
        },
        {
          path: "/Appointment",
          element: <Appointment />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

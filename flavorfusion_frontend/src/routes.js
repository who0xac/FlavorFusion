import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/login"; 
import Home from "./pages/home/home"; 
import AboutUs from "./pages/about/about"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us", // Add the new About Us route
    element: <AboutUs />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;

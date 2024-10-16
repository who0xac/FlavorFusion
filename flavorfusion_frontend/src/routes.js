// File: /src/routes/router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import AboutUs from "./pages/about/about";
import ContactUs from "./pages/contact/contact";
import RecipePage from "./pages/recipes/recipe";
import AdminDashboard from "./pages/dashboard/adminDashboard";
import ProtectedRoute from "../src/context/protectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/recipes",
    element: <RecipePage />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminDashboard />
       </ProtectedRoute>
    ),
  },
]);

export default router;

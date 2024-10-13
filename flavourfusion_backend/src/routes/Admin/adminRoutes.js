import express from "express";
import { adminLogin } from "../../controllers/admin/index.js"; 

const adminLoginRoute = express(); 
adminLoginRoute.post("/", (req, res) => adminLogin(req, res));

export default adminLoginRoute; 

import express from "express";
import adminLoginRoute from "../routes/Admin/adminRoutes.js"; 
import recipeRoute from "../routes/Recipe/recipeRoutes.js"; 

const route = express();

route.use("/login", adminLoginRoute);

route.use("/recipes", recipeRoute);

export default route;

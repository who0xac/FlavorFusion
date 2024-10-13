import express from "express";
import {
  createRecipe,
  deleteRecipe,
  getRecipeById,
  getAllRecipes,
  updateRecipe,
  searchRecipes,
} from "../../controllers/recipe/index.js";
import { verifyToken } from "../../middleware/verifyToken.js";

const recipeRoute = express.Router();

// Public routes
recipeRoute.get("/", (req, res) => getAllRecipes(req, res));
recipeRoute.get("/search", (req, res) => searchRecipes(req, res)); // Place search route above the ID route
recipeRoute.get("/:id", (req, res) => getRecipeById(req, res));

// Admin-only routes (protected by JWT middleware)
recipeRoute.post("/", verifyToken, (req, res) => createRecipe(req, res));
recipeRoute.patch("/:id", verifyToken, (req, res) => updateRecipe(req, res));
recipeRoute.delete("/:id", verifyToken, (req, res) => deleteRecipe(req, res));

export default recipeRoute;

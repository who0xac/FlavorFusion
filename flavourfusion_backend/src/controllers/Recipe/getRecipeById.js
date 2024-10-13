import RecipeModel from "../../models/Recipe/recipeModel.js";

const recipeModel = new RecipeModel();

// Get a recipe by ID
export async function getRecipeById(req, res) {
  try {
    const recipe = await recipeModel.getRecipeById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.json(recipe);
  } catch (error) {
    console.error("Error fetching recipe by ID:", error);
    res.status(500).json({ message: "Error fetching recipe", error });
  }
}

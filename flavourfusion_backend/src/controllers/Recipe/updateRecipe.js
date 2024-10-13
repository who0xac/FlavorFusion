import RecipeModel from "../../models/Recipe/recipeModel.js";

const recipeModel = new RecipeModel();

// Update a recipe by ID
export async function updateRecipe(req, res) {
  try {
    const updatedRecipe = await recipeModel.updateRecipe(
      req.params.id,
      req.body
    );
    res.json(updatedRecipe);
  } catch (error) {
    console.error("Error updating recipe:", error);
    res.status(500).json({ message: "Error updating recipe", error });
  }
}

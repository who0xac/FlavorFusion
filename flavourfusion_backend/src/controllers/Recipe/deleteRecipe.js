import RecipeModel from "../../models/Recipe/recipeModel.js";

const recipeModel = new RecipeModel();

// Delete a recipe by ID after checking if it exists
export async function deleteRecipe(req, res) {
  try {
    
    const recipe = await recipeModel.getRecipeById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    const deletedRecipe = await recipeModel.deleteRecipe(req.params.id);
    res.json({ message: "Recipe deleted", deletedRecipe });
  } catch (error) {
    console.error("Error deleting recipe:", error);
    res.status(500).json({ message: "Error deleting recipe", error });
  }
}

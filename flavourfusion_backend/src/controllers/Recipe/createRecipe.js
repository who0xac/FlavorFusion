import RecipeModel from "../../models/Recipe/recipeModel.js"; // Import the class

// Instantiate RecipeModel
const recipeModel = new RecipeModel();

export async function createRecipe(req, res) {
  const {
    name,
    ingredients,
    imageUrl,
    category,
    prepTime,
    instructions,
    cuisine,
    description,
  } = req.body;

  try {
    // Call the createRecipe method on the instance
    const recipe = await recipeModel.createRecipe({
      name,
      ingredients,
      imageUrl,
      category,
      prepTime,
      instructions,
      cuisine,
      description,
    });

    res.status(201).json({
      message: "Recipe created successfully",
      recipe,
    });
  } catch (error) {
    console.error("Error creating recipe:", error);
    res
      .status(500)
      .json({ message: "Error creating recipe", error: error.message });
  }
}

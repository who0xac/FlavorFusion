import RecipeModel from "../../models/Recipe/recipeModel.js"; // Assuming this exists

const recipeModel = new RecipeModel(); // Create an instance of RecipeModel

// Controller function to search for recipes
export async function searchRecipes(req, res) {
  const { category, cuisine } = req.query;

  // Log incoming filter values for debugging
  console.log("Backend Filter - Category:", category);
  console.log("Backend Filter - Cuisine:", cuisine);

  try {
    // Build filter object
    const filter = {
      ...(category && { category }),
      ...(cuisine && { cuisine }),
    };

    console.log("Filter object:", filter); // Log filter object

    // Query the database for matching recipes
    const recipes = await recipeModel.searchRecipes(filter);

    // Handle no matching recipes
    if (!recipes || recipes.length === 0) {
      return res.status(404).json({
        message: "No recipes found matching the given criteria.",
        data: null,
      });
    }

    // Return the found recipes
    res.status(200).json({
      message: "Recipes retrieved successfully.",
      data: recipes,
    });
  } catch (error) {
    console.error("Error searching for recipes:", error);
    res.status(500).json({
      message: "An error occurred while searching for recipes.",
      error: error.message,
    });
  }
}

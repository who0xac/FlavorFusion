import RecipeModel from "../../models/Recipe/recipeModel.js";

const recipeModel = new RecipeModel(); // Create an instance of RecipeModel

export async function searchRecipes(req, res) {
  const { category, cuisine } = req.query;

  // Input validation
  if (category && typeof category !== "string") {
    return res
      .status(400)
      .json({ message: "Invalid category. It must be a string." });
  }

  if (cuisine && typeof cuisine !== "string") {
    return res
      .status(400)
      .json({ message: "Invalid cuisine. It must be a string." });
  }

  try {
    // Build filter object based on the provided query parameters
    const filter = {
      ...(category && { category }),
      ...(cuisine && { cuisine }),
    };

    console.log("Filter object: ", filter); // Debugging log for filter object

    // Call the searchRecipes method on the instance
    const recipes = await recipeModel.searchRecipes(filter);

    if (!recipes || recipes.length === 0) {
      return res.status(404).json({
        message: "No recipes found matching the given criteria.",
        data: null,
      });
    }

    // Respond with the recipes found
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

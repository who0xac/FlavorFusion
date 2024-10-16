import axios from "axios";

const getAllRecipes = async () => {
  try {
    const response = await axios.get("http://localhost:3000/recipes");
    console.log("API response from /recipes (View All):", response.data); // Log the full response
    return response.data.data; // Return the array of recipes
  } catch (error) {
    console.error("Error fetching all recipes:", error);
    throw error;
  }
};

export default getAllRecipes;

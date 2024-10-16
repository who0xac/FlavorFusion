import axios from "axios";

const createRecipe = async (recipeData) => {
  try {
    const token = localStorage.getItem("token"); // Get JWT token from localStorage
    const response = await axios.post(
      "http://localhost:3000/recipes",
      recipeData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating recipe:", error);
    throw error;
  }
};

export default createRecipe;

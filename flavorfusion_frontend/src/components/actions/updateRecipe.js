import axios from "axios";

const updateRecipe = async (id, updatedRecipeData) => {
  try {
    const token = localStorage.getItem("token"); // Get JWT token from localStorage
    const response = await axios.patch(
      `http://localhost:3000/recipes/${id}`,
      updatedRecipeData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating recipe with id ${id}:`, error);
    throw error;
  }
};

export default updateRecipe;

import axios from "axios";

const deleteRecipe = async (id) => {
  try {
    const token = localStorage.getItem("token"); // Get JWT token from localStorage
    await axios.delete(`http://localhost:3000/recipes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(`Error deleting recipe with id ${id}:`, error);
    throw error;
  }
};

export default deleteRecipe;

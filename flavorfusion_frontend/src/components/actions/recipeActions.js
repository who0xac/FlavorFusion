import axios from "axios";

export const fetchRecipes = async () => {
  const response = await axios.get("http://localhost:3000/recipes");
  return response.data.data; // Assuming the API response has data in .data
};

export const deleteRecipeById = async (id) => {
  await axios.delete(`http://localhost:3000/recipes/${id}`);
};

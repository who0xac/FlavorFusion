import axios from "axios";

const getRecipeById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching recipe with id ${id}:`, error);
    throw error;
  }
};

export default getRecipeById;

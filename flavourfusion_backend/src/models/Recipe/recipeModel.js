import {prisma} from "../../utils/prisma.js"

class RecipeModel {
  constructor() {
    this.prisma = prisma;
  }

  // Create a new Recipe
  async createRecipe(data) {
    try {
      const newRecipe = await this.prisma.recipe.create({
        data: {
          name: data.name,
          ingredients: data.ingredients,
          imageUrl: data.imageUrl,
          category: data.category,
          prepTime: data.prepTime,
          instructions: data.instructions,
          cuisine: data.cuisine,
          description: data.description,
        },
      });
      return newRecipe;
    } catch (error) {
      console.error("Error creating recipe:", error);
      throw error;
    }
  }

  // Get all Recipes
  async getAllRecipes() {
    try {
      const recipes = await this.prisma.recipe.findMany();
      return recipes;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      throw error;
    }
  }

  // Get Recipe by ID
  async getRecipeById(id) {
    try {
      const recipe = await this.prisma.recipe.findUnique({
        where: { id: parseInt(id) },
      });
      return recipe;
    } catch (error) {
      console.error("Error fetching recipe by ID:", error);
      throw error;
    }
  }

  // Update Recipe by ID
  async updateRecipe(id, data) {
    try {
      const updatedRecipe = await this.prisma.recipe.update({
        where: { id: parseInt(id) },
        data: {
          name: data.name,
          ingredients: data.ingredients,
          imageUrl: data.imageUrl,
          category: data.category,
          prepTime: data.prepTime,
          instructions: data.instructions,
          cuisine: data.cuisine,
          description: data.description,
        },
      });
      return updatedRecipe;
    } catch (error) {
      console.error("Error updating recipe:", error);
      throw error;
    }
  }

  // Delete Recipe by ID
  async deleteRecipe(id) {
    try {
      const deletedRecipe = await this.prisma.recipe.delete({
        where: { id: parseInt(id) },
      });
      return deletedRecipe;
    } catch (error) {
      console.error("Error deleting recipe:", error);
      throw error;
    }
  }
  // Search for recipes by cuisine or category
  async searchRecipes(filter) {
    try {
      return await this.prisma.recipe.findMany({
        where: {
          AND: [
            filter.cuisine ? { cuisine: filter.cuisine } : {},
            filter.category ? { category: filter.category } : {},
          ],
        },
        orderBy: { createdAt: "desc" }, // Optionally, order by creation date
      });
    } catch (error) {
      console.error("Error searching for recipes:", error);
      throw error;
    }
  }
}

export default RecipeModel;
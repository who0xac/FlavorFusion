import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/form.css"; // Import the CSS

const categories = ["Main Course", "Appetizer", "Dessert", "Salad", "Snack"];
const cuisines = ["Italian", "Mexican", "Indian", "Greek", "Chinese"];

const EditRecipe = ({ recipeId, onClose, refreshRecipes }) => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  // Fetch the recipe data for editing
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/recipes/${recipeId}`
        );
        setRecipe(response.data.data); // Assuming the data structure
      } catch (err) {
        setError("Failed to fetch recipe.");
      }
    };
    fetchRecipe();
  }, [recipeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/recipes/${recipeId}`, {
        name: recipe.name,
        ingredients: recipe.ingredients,
        category: recipe.category,
        cuisine: recipe.cuisine,
        prepTime: recipe.prepTime,
        instructions: recipe.instructions,
      });
      refreshRecipes(); // Refresh the recipes after editing
      onClose(); // Close the modal after editing
    } catch (err) {
      setError("Failed to update recipe.");
      console.error(err);
    }
  };

  if (!recipe) return <p>Loading recipe...</p>; // Show loading state

  return (
    <div className="modal">
      <h2>Edit Recipe</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={recipe.name}
          onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Ingredients (comma separated)"
          value={recipe.ingredients.join(",")}
          onChange={(e) =>
            setRecipe({ ...recipe, ingredients: e.target.value.split(",") })
          }
          required
        />
        <select
          value={recipe.category}
          onChange={(e) => setRecipe({ ...recipe, category: e.target.value })}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          value={recipe.cuisine}
          onChange={(e) => setRecipe({ ...recipe, cuisine: e.target.value })}
        >
          {cuisines.map((cuis, index) => (
            <option key={index} value={cuis}>
              {cuis}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Preparation Time (in minutes)"
          value={recipe.prepTime}
          onChange={(e) => setRecipe({ ...recipe, prepTime: e.target.value })}
          required
        />
        <textarea
          placeholder="Instructions (comma separated)"
          value={recipe.instructions.join(",")}
          onChange={(e) =>
            setRecipe({ ...recipe, instructions: e.target.value.split(",") })
          }
          required
        />
        <button type="submit">Update Recipe</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EditRecipe;

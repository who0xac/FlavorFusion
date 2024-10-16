import React, { useState } from "react";
import axios from "axios";
import "../../assets/css/form.css"; // Import the CSS

const categories = ["Main Course", "Appetizer", "Dessert", "Salad", "Snack"];
const cuisines = ["Italian", "Mexican", "Indian", "Greek", "Chinese"];

const CreateRecipe = ({ onClose, refreshRecipes }) => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [category, setCategory] = useState(categories[0]); // Default category
  const [cuisine, setCuisine] = useState(cuisines[0]); // Default cuisine
  const [prepTime, setPrepTime] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/recipes", {
        name,
        ingredients: ingredients.split(","),
        category,
        cuisine,
        prepTime: parseInt(prepTime),
        instructions: instructions.split(","),
      });
      console.log("Response from server:", response.data); // Log the response
      refreshRecipes(); // Refresh the recipes after adding
      onClose(); // Close the modal after adding
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create recipe.");
      console.error(err);
    }
  };

  return (
    <div className="modal">
      <h2>Create Recipe</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
          {cuisines.map((cuis, index) => (
            <option key={index} value={cuis}>
              {cuis}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Preparation Time (in minutes)"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          required
        />
        <textarea
          placeholder="Instructions (comma separated)"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <button type="submit">Create Recipe</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CreateRecipe;

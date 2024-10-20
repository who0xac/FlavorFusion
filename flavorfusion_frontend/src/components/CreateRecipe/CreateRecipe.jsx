// File: src/components/CreateRecipe/CreateRecipe.jsx
import React, { useState } from "react";
import axios from "axios";
import "../../assets/css/form.css"; // Assuming you have form-specific styles

const categories = ["Main Course", "Appetizer", "Dessert", "Salad", "Snack"];
const cuisines = ["Italian", "Mexican", "Indian", "Greek", "Chinese"];

const CreateRecipe = ({ onClose }) => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [cuisine, setCuisine] = useState(cuisines[0]);
  const [prepTime, setPrepTime] = useState("");
  const [instructions, setInstructions] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/recipes", {
        name,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        imageUrl,
        category,
        cuisine,
        prepTime: parseInt(prepTime, 10),
        instructions: instructions.split(",").map((item) => item.trim()),
        description,
      });
      onClose(); // Close the modal after successful creation
    } catch (err) {
      setError("Failed to create recipe.");
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
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
          {cuisines.map((cuis) => (
            <option key={cuis} value={cuis}>
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
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Create Recipe</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;

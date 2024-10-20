import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/form.css";

const categories = ["Main Course", "Appetizer", "Dessert", "Salad", "Snack"];
const cuisines = [
  "Italian",
  "Mexican",
  "Indian",
  "Greek",
  "Chinese"
];

const EditRecipe = ({ recipe, onClose, refreshRecipes }) => {
  const [editedRecipe, setEditedRecipe] = useState(recipe);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe((prev) => ({
      ...prev,
      [name]: value.split(",").map((item) => item.trim()),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:3000/recipes/${editedRecipe.id}`,
        editedRecipe
      );
      refreshRecipes();
      onClose();
    } catch (err) {
      console.error("Error updating recipe:", err);
      setError("Failed to update recipe. Please try again.");
    }
  };

  return (
    <div className="modal">
      <h2>Edit Recipe</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={editedRecipe.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients (comma separated)"
          value={editedRecipe.ingredients.join(", ")}
          onChange={handleArrayChange}
          required
        />
        <select
          name="category"
          value={editedRecipe.category}
          onChange={handleChange}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          name="cuisine"
          value={editedRecipe.cuisine}
          onChange={handleChange}
        >
          {cuisines.map((cuis) => (
            <option key={cuis} value={cuis}>
              {cuis}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="prepTime"
          placeholder="Preparation Time (in minutes)"
          value={editedRecipe.prepTime}
          onChange={handleChange}
          required
        />
        <textarea
          name="instructions"
          placeholder="Instructions (comma separated)"
          value={editedRecipe.instructions.join(", ")}
          onChange={handleArrayChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={editedRecipe.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={editedRecipe.imageUrl}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Recipe</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditRecipe;

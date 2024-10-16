import React from "react";
import "../../assets/css/adminCard.css"; // Ensure you have a CSS file for styling

const AdminCard = ({ recipe, onEdit, onDelete }) => {
  return (
    <div className="admin-card">
      <h3>{recipe.name}</h3>
      {recipe.imageUrl ? (
        <img src={recipe.imageUrl} alt={recipe.name} className="recipe-image" /> // Display the recipe image
      ) : (
        <p>No image available</p> // Placeholder if no image is provided
      )}
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
      </p>
      <p>
        <strong>Category:</strong> {recipe.category}
      </p>
      <p>
        <strong>Cuisine:</strong> {recipe.cuisine}
      </p>
      <p>
        <strong>Preparation Time:</strong> {recipe.prepTime} minutes
      </p>
      <p>
        <strong>Instructions:</strong> {recipe.instructions.join(", ")}
      </p>
      <div className="admin-card-buttons">
        <button onClick={() => onEdit(recipe.id)}>Edit</button>
        <button onClick={() => onDelete(recipe.id)}>Delete</button>
      </div>
    </div>
  );
};

export default AdminCard;

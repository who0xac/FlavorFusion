import React from "react";
import "../../assets/css/adminCard.css";

const AdminCard = ({ recipe, onEdit, onDelete }) => {
  return (
    <div className="admin-card">
      <img src={recipe.imageUrl} alt={recipe.name} className="recipe-image" />
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <p>Category: {recipe.category}</p>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Prep Time: {recipe.prepTime} minutes</p>
      <p>Ingredients: {recipe.ingredients.join(", ")}</p>
      <div className="card-actions">
        <button onClick={onEdit} className="edit-btn">
          Edit
        </button>
        <button onClick={onDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminCard;

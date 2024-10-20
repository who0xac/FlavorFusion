// File: src/components/adminCard/adminCard.jsx
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
      <button onClick={onEdit}>Edit</button>
      <button
        onClick={onDelete}
        style={{ backgroundColor: "red", marginLeft: "8px" }}
      >
        Delete
      </button>
    </div>
  );
};

export default AdminCard;

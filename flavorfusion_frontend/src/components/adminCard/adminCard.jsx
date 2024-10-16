// src/components/adminCard/AdminCard.jsx
import React from "react";
import "../../assets/css/adminCard.css"; // Custom CSS for admin card

const AdminCard = ({ recipe, onDelete, onEdit }) => {
  return (
    <div className="admin-card">
      <h3>{recipe.name}</h3>
      <p>Category: {recipe.category}</p>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Prep Time: {recipe.prepTime} mins</p>
      <button onClick={() => onEdit(recipe)}>Edit</button>
      <button onClick={() => onDelete(recipe.id)}>Delete</button>
    </div>
  );
};

export default AdminCard;

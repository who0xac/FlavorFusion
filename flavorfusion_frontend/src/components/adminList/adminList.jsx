import React from "react";
import AdminCard from "../adminCard/adminCard";
import axios from "axios";
import "../../assets/css/recipe.css";

const AdminRecipeList = ({ recipes, onEdit, refreshRecipes }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/recipes/${id}`);
      refreshRecipes();
    } catch (err) {
      console.error("Error deleting recipe:", err);
      alert("Failed to delete recipe. Please try again.");
    }
  };

  if (!recipes.length) return <p>No recipes available.</p>;

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <AdminCard
          key={recipe.id}
          recipe={recipe}
          onDelete={() => handleDelete(recipe.id)}
          onEdit={() => onEdit(recipe)}
        />
      ))}
    </div>
  );
};

export default AdminRecipeList;

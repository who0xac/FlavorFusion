// File: src/components/adminList/adminRecipeList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminCard from "../adminCard/adminCard"; // Ensure this path is correct
import "../../assets/css/recipe.css"; // Custom CSS for recipe list

const AdminRecipeList = ({ filter, onEdit, refreshRecipes }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch recipes based on the filter
  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        let response;
        if (filter === "all") {
          response = await axios.get("http://localhost:3000/recipes"); // Fetch all recipes
        } else {
          response = await axios.get(
            `http://localhost:3000/recipes/search?category=${filter}` // Fetch by category
          );
        }

        if (response.data && response.data.data) {
          setRecipes(response.data.data); // Set fetched recipes
        } else {
          setRecipes([]); // No recipes found
        }
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setError("Failed to fetch recipes.");
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchRecipes(); // Call the function to fetch recipes
  }, [filter]); // Dependency array includes filter to refetch on change

  // Function to handle recipe deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/recipes/${id}`);
      setRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe.id !== id)
      );
      if (refreshRecipes) refreshRecipes(); // Optionally refresh the list from the parent component
    } catch (err) {
      console.error("Error deleting recipe:", err);
      setError("Failed to delete recipe.");
    }
  };

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>{error}</p>;
  if (!recipes.length) return <p>No recipes available.</p>;

  return (
    <div
      className="recipe-list"
      style={{ maxHeight: "600px", overflowY: "auto" }}
    >
      {recipes.map((recipe) => (
        <AdminCard
          key={recipe.id}
          recipe={recipe}
          onDelete={() => handleDelete(recipe.id)} // Trigger deletion when delete button is clicked
          onEdit={() => onEdit(recipe.id)} // Trigger edit when edit button is clicked
        />
      ))}
    </div>
  );
};

export default AdminRecipeList;

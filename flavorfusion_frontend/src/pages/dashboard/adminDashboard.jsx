// File: src/pages/dashboard/RecipePage.jsx
import React, { useState, useEffect } from "react";
import Header from "../../components/adminheader/adminheader";
import Footer from "../../components/footer/footer";
import Sidebar from "../../components/adminSidebar/adminSidebar";
import RecipeList from "../../components/adminList/adminList";
import CreateRecipe from "../../components/CreateRecipe/CreateRecipe";
import EditRecipe from "../../components/EditRecipe/EditRecipe"; // Import CreateRecipe component
import axios from "axios";
import "../../assets/css/recipe.css"; // Assuming CSS is in place

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]); // State to store recipes
  const [showCreate, setShowCreate] = useState(false); // State to show or hide the CreateRecipe modal
  const [filter, setFilter] = useState(""); // Empty string by default to show all recipes

  // Function to fetch recipes from the API
  const fetchRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/recipes");
      if (response.data && response.data.data) {
        setRecipes(response.data.data);
      } else {
        setRecipes([]);
      }
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
    }
  };

  // Fetch recipes when the component mounts
  useEffect(() => {
    fetchRecipes();
  }, []);

  // Function to handle showing the Create Recipe modal
  const handleCreate = () => {
    setShowCreate(true);
  };

  // Function to close the Create Recipe modal
  const handleCloseCreate = () => {
    setShowCreate(false);
    fetchRecipes(); // Refresh the list of recipes after creating a new one
  };

  return (
    <>
      <Header /> {/* Header component */}
      <div className="recipe-page-container">
        <Sidebar onCreate={handleCreate} /> {/* Pass handleCreate to Sidebar */}
        <main className="recipe-main-content">
          {/* <RecipeList recipes={recipes} filter={filter} onEdit={EditRecipe}/>{" "} */}
          {/* Display recipes */}
        </main>
      </div>
      <Footer /> {/* Footer component */}
      {showCreate && (
        <CreateRecipe
          onClose={handleCloseCreate} // Close the modal after creating a recipe
        />
      )}
    </>
  );
};

export default RecipePage;

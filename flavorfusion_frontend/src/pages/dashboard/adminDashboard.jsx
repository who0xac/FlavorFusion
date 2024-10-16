import React, { useState, useEffect } from "react";
import AdminSidebar from "../../components/adminSidebar/adminSidebar";
import AdminHeader from "../../components/adminheader/adminheader";
import AdminCard from "../../components/adminCard/adminCard";
import Footer from "../../components/footer/footer";
import CreateRecipe from "../../components/CreateRecipe/CreateRecipe";
import EditRecipe from "../../components/EditRecipe/EditRecipe";
import axios from "axios";
import "../../assets/css/adminDashboard.css";

const AdminDashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [editRecipeId, setEditRecipeId] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  // Function to fetch recipes
  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/recipes");
      if (response.data && response.data.data) {
        setRecipes(response.data.data);
      } else {
        setRecipes([]);
      }
    } catch (err) {
      setError("Failed to fetch recipes.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch recipes on load
  useEffect(() => {
    fetchRecipes(); // Call the fetch function
  }, []);

  // Handle recipe deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/recipes/${id}`);
      setRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe.id !== id)
      );
    } catch (err) {
      console.error("Error deleting recipe:", err);
    }
  };

  // Function to open Create Recipe modal
  const handleCreate = () => {
    setShowCreate(true);
  };

  // Function to open Edit Recipe modal
  const handleEdit = (id) => {
    setEditRecipeId(id);
    setShowEdit(true);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <AdminHeader />
      <div className="admin-dashboard-container">
        <AdminSidebar
          onCreate={handleCreate}
          onEditDelete={() => console.log("Manage Recipes")}
        />
        <div className="admin-recipes-container">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <AdminCard
                key={recipe.id}
                recipe={recipe}
                onDelete={handleDelete}
                onEdit={() => handleEdit(recipe.id)}
              />
            ))
          ) : (
            <p>No recipes available.</p>
          )}
        </div>
      </div>
      <Footer />

      {showCreate && (
        <CreateRecipe
          onClose={() => setShowCreate(false)}
          refreshRecipes={fetchRecipes}
        />
      )}
      {showEdit && (
        <EditRecipe
          recipeId={editRecipeId}
          onClose={() => setShowEdit(false)}
          refreshRecipes={fetchRecipes}
        />
      )}
    </>
  );
};

export default AdminDashboard;

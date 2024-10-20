import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/adminheader/adminheader";
import Footer from "../../components/footer/footer";
import Sidebar from "../../components/adminSidebar/adminSidebar";
import AdminRecipeList from "../../components/adminList/adminList";
import CreateRecipe from "../../components/CreateRecipe/CreateRecipe";
import EditRecipe from "../../components/EditRecipe/EditRecipe";
import "../../assets/css/recipe.css";

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/recipes");
      setRecipes(response.data);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
      setError("Failed to load recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleCreate = () => setShowCreate(true);
  const handleCloseCreate = () => {
    setShowCreate(false);
    fetchRecipes();
  };

  const handleEdit = (recipe) => setEditingRecipe(recipe);
  const handleCloseEdit = () => {
    setEditingRecipe(null);
    fetchRecipes();
  };

  const handleFilterChange = (newFilter) => setFilter(newFilter);

  const filteredRecipes =
    filter === "all"
      ? recipes
      : recipes.filter(
          (recipe) => recipe.category === filter || recipe.cuisine === filter
        );

  return (
    <div className="recipe-page">
      <Header />
      <div className="recipe-page-content">
        <Sidebar
          onCreate={handleCreate}
          onFilterChange={handleFilterChange}
          categories={[...new Set(recipes.map((r) => r.category))]}
          cuisines={[...new Set(recipes.map((r) => r.cuisine))]}
        />
        <main className="recipe-main-content">
          {loading ? (
            <p>Loading recipes...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <AdminRecipeList
              recipes={filteredRecipes}
              onEdit={handleEdit}
              refreshRecipes={fetchRecipes}
            />
          )}
        </main>
      </div>
      <Footer />

      {showCreate && (
        <CreateRecipe
          onClose={handleCloseCreate}
          refreshRecipes={fetchRecipes}
        />
      )}

      {editingRecipe && (
        <EditRecipe
          recipe={editingRecipe}
          onClose={handleCloseEdit}
          refreshRecipes={fetchRecipes}
        />
      )}
    </div>
  );
};

export default RecipePage;

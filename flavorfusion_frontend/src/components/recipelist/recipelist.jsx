import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../cards/recipecard"; // Ensure this path is correct
import "../../assets/css/recipe.css"; // Custom CSS for recipe list

const RecipeList = ({ filter }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch recipes based on the filter (category, cuisine, or all)
  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true); // Set loading state
      console.log("Fetching recipes with filter:", filter); // Debug log
      try {
        let response;

        // Check filter value and make API call accordingly
        if (filter === "all") {
          console.log("Fetching all recipes"); // Debug log
          response = await axios.get("http://localhost:3000/recipes"); // Fetch all recipes
        } else if (
          ["appetizer", "main_course", "dessert", "salad", "snack"].includes(
            filter
          )
        ) {
          console.log("Fetching recipes by category:", filter); // Debug log
          response = await axios.get(
            `http://localhost:3000/recipes/search?category=${filter}` // Fetch by category
          );
        } else {
          console.log("Fetching recipes by cuisine:", filter); // Debug log
          response = await axios.get(
            `http://localhost:3000/recipes/search?cuisine=${filter}` // Fetch by cuisine
          );
        }

        // Check the response data and set recipes
        if (
          response.data &&
          response.data.data &&
          response.data.data.length > 0
        ) {
          setRecipes(response.data.data); // Set fetched recipes
        } else {
          setRecipes([]); // No recipes found, set to empty array
        }
      } catch (err) {
        console.error("Error fetching recipes:", err); // Log any errors
        setError("Failed to fetch recipes."); // Set error message
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchRecipes(); // Call the function to fetch recipes
  }, [filter]); // Dependency array includes filter to refetch on change

  // Loading state display
  if (loading) return <p>Loading recipes...</p>;

  // Error state display
  if (error) return <p>{error}</p>;

  // No recipes found display
  if (!recipes || recipes.length === 0) return <p>No recipes available.</p>;

  // Display recipes in a scrollable list
  return (
    <div
      className="recipe-list"
      style={{ maxHeight: "600px", overflowY: "auto" }}
    >
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;

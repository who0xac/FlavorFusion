import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Sidebar from "../../components/sidebar/sidebar";
import RecipeList from "../../components/recipelist/recipelist";
import "../../assets/css/recipe.css"; // Assuming CSS is in place

const RecipePage = () => {
  const [filter, setFilter] = useState(""); // Empty string by default to show all recipes

  return (
    <>
      <Header /> {/* Header component */}
      <div className="recipe-page-container">
        <Sidebar setFilter={setFilter} /> {/* Sidebar for filtering */}
        <main className="recipe-main-content">
          <RecipeList filter={filter} /> {/* Display recipes based on the filter */}
        </main>
      </div>
      <Footer /> {/* Footer component */}
    </>
  );
};

export default RecipePage;

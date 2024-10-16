import React from "react";
import "../../assets/css/recipeCard.css"; // Assuming the CSS is located here

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      {/* Recipe image */}
      {recipe.imageUrl ? (
        <img src={recipe.imageUrl} alt={recipe.name} className="recipe-image" />
      ) : (
        <div className="no-image">No Image Available</div>
      )}
      <div className="recipe-card-content">
        <h3 className="recipe-name">{recipe.name}</h3>
        <p className="recipe-category">
          <strong>Category:</strong> {recipe.category}
        </p>
        <p className="recipe-cuisine">
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>
        <p className="recipe-prep-time">
          <strong>Prep Time:</strong> {recipe.prepTime} mins
        </p>
        <div className="recipe-ingredients">
          <strong>Ingredients:</strong>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="recipe-instructions">
          <strong>Instructions:</strong>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

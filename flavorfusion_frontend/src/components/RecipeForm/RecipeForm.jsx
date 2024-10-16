import React, { useState, useEffect } from "react";
import "../../assets/css/form.css";

const RecipeForm = ({ initialData = {}, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    category: "",
    cuisine: "",
    instructions: "",
    prepTime: "",
    ...initialData, // Spread initial data to prefill the form
  });

  useEffect(() => {
    setFormData({ ...initialData });
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData); // Call the submit handler passed as a prop
    onClose(); // Close the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Recipe Name"
        required
      />
      <textarea
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
        placeholder="Ingredients"
        required
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="text"
        name="cuisine"
        value={formData.cuisine}
        onChange={handleChange}
        placeholder="Cuisine"
        required
      />
      <textarea
        name="instructions"
        value={formData.instructions}
        onChange={handleChange}
        placeholder="Instructions"
        required
      />
      <input
        type="number"
        name="prepTime"
        value={formData.prepTime}
        onChange={handleChange}
        placeholder="Prep Time (in mins)"
        required
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default RecipeForm;

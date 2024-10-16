import React from "react";
import "../../assets/css/sidebar.css"; // Sidebar CSS

const Sidebar = ({ setFilter }) => {
  return (
    <aside className="recipe-sidebar">
      {/* <button onClick={() => setFilter("all")}>View All Recipes</button> */}
      {/* Set filter to "all" */}
      <h3>Search by Category</h3>
      <button onClick={() => setFilter("main_course")}>Main Course</button>
      <button onClick={() => setFilter("appetizer")}>Appetizer</button>
      <button onClick={() => setFilter("dessert")}>Dessert</button>
      <button onClick={() => setFilter("salad")}>Salad</button>
      <button onClick={() => setFilter("snack")}>Snack</button>
      <h3>Search by Cuisine</h3>
      <button onClick={() => setFilter("italian")}>Italian</button>
      <button onClick={() => setFilter("mexican")}>Mexican</button>
      <button onClick={() => setFilter("indian")}>Indian</button>
      <button onClick={() => setFilter("greek")}>Greek</button>
      <button onClick={() => setFilter("chinese")}>Chinese</button>
    </aside>
  );
};

export default Sidebar;

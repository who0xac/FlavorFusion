import React from "react";
import "../../assets/css/sidebar.css";

const AdminSidebar = ({ onCreate, onEditDelete }) => {
  return (
    <aside className="admin-sidebar">
      <button onClick={onCreate}>Create Recipe</button>
      <button onClick={onEditDelete}>Modify Recipe</button>
      <button onClick={() => console.log("Delete Recipe")}>
        Delete Recipe
      </button>
    </aside>
  );
};

export default AdminSidebar;

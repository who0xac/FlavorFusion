// File: src/components/adminSidebar/AdminSidebar.jsx
import React from "react";
import "../../assets/css/adminSidebar.css";

const AdminSidebar = ({ onCreate, onViewAll }) => {
  return (
    <aside className="admin-sidebar">
      <button onClick={onCreate}>Create Recipe</button>
      {/* <button onClick={onViewAll}>View All Recipes</button> */}
    </aside>
  );
};

export default AdminSidebar;

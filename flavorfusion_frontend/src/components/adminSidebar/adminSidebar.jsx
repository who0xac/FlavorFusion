import React from "react";
import "../../assets/css/sidebar.css";

const AdminSidebar = ({ onCreate}) => {
  return (
    <aside className="admin-sidebar">
      <button onClick={onCreate}>Create Recipe</button>
    </aside>
  );
};

export default AdminSidebar;

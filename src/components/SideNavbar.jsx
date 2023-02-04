import React from 'react';
import { Link } from "react-router-dom";
import "../styles/sideNavBar.css"

function SideNavbar() {
  return (
    <div className="side-navbar">
      <p><Link to="/library">Library</Link></p>
      <p><Link to="categories">Categories</Link></p>
    </div>
   
  );
}

export default SideNavbar;
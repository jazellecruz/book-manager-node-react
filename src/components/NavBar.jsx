import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../styles/navbar.css";


function NavBar() {
  return (
    <>
      <div className="navbar">
        <p>booked</p>
        <div className="nav-links-container">
          <ul>
            <li><Link to="/library" className="nav-link">Dashboard</Link></li>
            <li><Link to="/profile" className="nav-link">Profile</Link></li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default NavBar
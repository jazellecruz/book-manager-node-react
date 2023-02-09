import React from 'react';
import SideNavbar from "./SideNavbar";
import Library from "./Library";
import Categories from "./Categories";
import Wishlist from './Wishlist';
import Profile from './Profile';
import {Routes, Route, Outlet} from "react-router-dom"
import "../styles/dashboard.css"

function Dashboard() {
  return(
    <div className="dashboard-root">
      <div className="sideNavBar-container"> 
        <SideNavbar />
      </div>
      <div className="main-content-container">
        <Routes>
          <Route path="library/*" element={<Library/>} />
          <Route path="categories/:category" element={<Categories />}/>
          <Route path="wishlist" element={<Wishlist />}/>
          <Route path="profile" element={<Profile />}/>
        </Routes>
        <Outlet />
      </div>      
    </div>


  );
}

export default Dashboard;

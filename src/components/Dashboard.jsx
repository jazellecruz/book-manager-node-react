import React from 'react';
import SideNavbar from "./SideNavbar";
import Library from "./Library";
import Categories from "./Categories";
import {Routes, Route, Outlet} from "react-router-dom"

function Dashboard() {
  return(
    <div className="dashboard">
      <SideNavbar />
      <Routes>
        <Route path="/" element={<Library />}/>
        <Route path="/categories" element={<Categories />}/>
      </Routes>
      <Outlet />
    </div>
  );
}

export default Dashboard;

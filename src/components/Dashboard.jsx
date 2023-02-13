import { useState, useEffect } from 'react';
import axios from "axios";
import SideNavbar from "./SideNavbar";
import Library from "./Library";
import Categories from "./Categories";
import Wishlist from './Wishlist';
import Profile from './Profile';
import {Routes, Route, Outlet} from "react-router-dom";
import { kebabCase } from "../helpers/helpers";
import "../styles/dashboard.css";

function Dashboard() {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/library/categories"
    })
    .then(res => setCategoriesList([...res.data]))
    .then(console.log(categoriesList))
    .catch(err => console.error(err))
  }, []);

  return(
    <div className="dashboard-root">
      <div className="sideNavBar-container"> 
        <SideNavbar />
      </div>
      <div className="main-content-container">
        <Routes>
          <Route path="library/*" element={<Library/>} />
          {categoriesList.map(category => {
            let categoryRoute = `categories/${kebabCase(category.category)}`
            return (
              <Route path={categoryRoute} element={<Categories category_id={category.category_id} />}/>
            );
          })}
          <Route path="wishlist" element={<Wishlist />}/>
          <Route path="profile" element={<Profile />}/>
        </Routes>
        <Outlet />
      </div>
      <div>
        {/*components to view goals */}
      </div>      
    </div>


  );
}

export default Dashboard;

import { useState, useEffect } from 'react';
import axios from "axios";
import SideNavbar from "./SideNavbar";
import Library from "./Library";
import Categories from "./Categories";
import Wishlist from './Wishlist';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';
import { CategoriesContext } from '../contexts/context';
import {Routes, Route, Outlet} from "react-router-dom";
import { kebabCase } from "../helpers/helpers";
import "../styles/dashboard.css";

function Dashboard() {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/library/categories",
      headers: {
        "x-access-token": localStorage.getItem("accessToken")
      }
    })
    .then(res => setCategoriesList([...res.data]))
    .catch(err => console.error(err))
  }, []);

  return(
    <CategoriesContext.Provider value={categoriesList}>
    <div className="dashboard-root">
      <div className="sideNavBar-container"> 

          <SideNavbar />

      </div>
      <div className="main-content-container">
        <Routes>
          <Route path="library/*" element={ <ProtectedRoute component={<Library/>} />} />
            {categoriesList.map(category => {
              let categoryRoute = `categories/${kebabCase(category.category)}`
              return (
                <Route path={categoryRoute} 
                  element={<ProtectedRoute component={<Categories category_id={category.category_id} category={category.category}/>} />} />
              );
            })}
          <Route path="wishlist" element={<ProtectedRoute component={<Wishlist /> } />}/>
          <Route path="profile" element={<ProtectedRoute component={<Profile /> } />}/>
        </Routes>       
        <Outlet />
      </div>
      <div>
      {/*components to view goals */}
      </div>      
    </div>
    </CategoriesContext.Provider>
  );
}

export default Dashboard;

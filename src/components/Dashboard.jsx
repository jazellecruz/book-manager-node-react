import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import SideNavbar from "./SideNavbar";
import Library from "./Library";
import Categories from "./Categories";
import Wishlist from './Wishlist';
import ProtectedRoute from './ProtectedRoute';
import { Snackbar, Alert } from "@mui/material";
import { CategoriesContext, SnackbarContext } from '../contexts/context';
import { kebabCase } from "../helpers/helpers";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [categoriesList, setCategoriesList] = useState([])
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState({
    severity: "",
    message: ""
  });
  const navigate = useNavigate();

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  };
  
  const setOpenAndTypeSnackbar = (severity, message) => {
    setSnackbarType({
      severity: severity,
      message: message
    });
    setOpenSnackbar(true);
  }

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/library/categories",
      headers: {
        "x-access-token": localStorage.getItem("accessToken")
      }
    })
    .then(res => setCategoriesList([...res.data]))
    .catch(err => {
      if (err.response.status === 401 || err.response.status === 401) {
        navigate("/login");
      } else if(err.response.status === 500) {
        navigate("/error");
      }
    });
  }, []);

  return(
    <CategoriesContext.Provider value={categoriesList}>
      <SnackbarContext.Provider value={setOpenAndTypeSnackbar}>
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
            </Routes>       
            <Outlet />
          </div>
          {openSnackbar && 
            <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} variant="filled" severity={snackbarType.severity} sx={{ width: '100%' }}>
                {snackbarType.message}
              </Alert>
            </Snackbar>
          }
        </div>
      </SnackbarContext.Provider>
    </CategoriesContext.Provider>
  );
}

export default Dashboard;

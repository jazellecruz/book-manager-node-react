import React from 'react';
import SideNavbar from "./SideNavbar";
import Library from "./Library";
import Categories from "./Categories";
import Wishlist from './Wishlist';
import {Routes, Route, Outlet} from "react-router-dom"
import Grid from '@mui/material/Grid';
import "../styles/global.css"

function Dashboard() {
  return(
    <Grid container spacing={6}>
      <Grid item md={2}>
        <SideNavbar />
      </Grid>
     <Grid item md={10}>
     <Routes>
        <Route path="/" element={<Library />}/>
        <Route path="/categories" element={<Categories />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
      </Routes>
      <Outlet />
     </Grid>
      
    </Grid>
     

  );
}

export default Dashboard;

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/sideNavBar.css"
import { List, 
         ListItemButton, 
         Collapse, 
         ListItemIcon,
         ListItemText,
         Button,
         Modal,
         Box,
         Typography,
         Avatar,
         ThemeProvider} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import { CategoriesContext } from "../contexts/context";
import {listTheme, addBookTheme, modalStyle, signoutBtn} from "../styles/themes/themes";
import { kebabCase } from "../helpers/helpers";
import "../styles/sideNavBar.css"

const SideNavbar = () => {
  const [openCategoryList, setOpenCategoryList] = useState(false);

  const navigate = useNavigate();
  const categoriesList = useContext(CategoriesContext)
  
  const handleCategoryListClick = () => {
    setOpenCategoryList(!openCategoryList);
  };

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  }

  return (
    <>
      <div className="side-navbar">
        <div className="logo-container">
          <p>booked</p>
        </div>
        <ThemeProvider theme={listTheme}>
          <List>
            <Link to="library">
              <ListItemButton>
                <ListItemIcon>
                  <LibraryBooksRoundedIcon />
                </ListItemIcon>
                Library
              </ListItemButton>
            </Link>
            <ListItemButton onClick={handleCategoryListClick}>
              <ListItemIcon>
                <CategoryRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Categories" />
              {openCategoryList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openCategoryList} timeout="auto" unmountOnExit>
              <List component="div" style={{height: "260px", overflow: "auto"}} disablePadding>
                <CategoriesContext.Consumer>
                  {categoriesList => 
                    categoriesList.map(({ category }) => 
                      <Link to={`categories/${kebabCase(category)}`} >
                        <ListItemButton sx={{ pl: 4 }}>
                          {category}
                        </ListItemButton>
                      </Link>
                  )}
                </CategoriesContext.Consumer>
              </List>
            </Collapse>
            <Link to="wishlist">
              <ListItemButton>
                <ListItemIcon>
                  <LocalMallRoundedIcon />
                </ListItemIcon>
                Wishlist
              </ListItemButton>
            </Link>
          </List>
        </ThemeProvider>
        <ThemeProvider theme={signoutBtn}>
          <Button variant="contained" onClick={() => handleSignOut()} disableElevation>Sign Out</Button>
        </ThemeProvider>
      </div>
    </>
  );
}



export default SideNavbar;




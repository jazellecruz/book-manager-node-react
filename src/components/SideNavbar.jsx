import { useState, useEffect } from "react";
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
import {listTheme, addBookTheme, modalStyle} from "../styles/themes/themes";
import { kebabCase } from "../helpers/helpers";
import "../styles/sideNavBar.css"

function SideNavbar() {
  const [categoriesList, setCategoriesList] = useState([])
  const [openCategoryList, setOpenCategoryList] = useState(false);

  const navigate = useNavigate();

  const handleCategoryListClick = () => {
    setOpenCategoryList(!openCategoryList);
  };

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/")
  }

  const {firstName, lastName} = {
    firstName: "Jazelle",
    lastName: "Cruz"
  }

  useEffect(() => {
    axios({
      method: "GET",
      url:"http://localhost:8000/library/categories",
      headers: {
        "x-access-token": localStorage.getItem("accessToken")
      }
    })
    .then(res => setCategoriesList([...res.data]))
  }, [])

  return (
    <>
    <div className="side-navbar">
    <div className="logo-container">
      <AutoStoriesRoundedIcon className="logo"/>
      <p>booked</p>
    </div>
    
    <ThemeProvider theme={listTheme}>
      <List>
        {/* <Link to="profile">
          <ListItemButton>
          <ListItemIcon>
          <Avatar 
           alt="user-pic" 
          src="https://i.pinimg.com/564x/12/00/b3/1200b3d273dd3869fc7ec511f96475be.jpg"
          />
          </ListItemIcon>
          {firstName} {lastName}
          </ListItemButton>
        </Link> */}
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
            {categoriesList.map(({category}) => {
              let categoryRoute = `categories/${kebabCase(category)}`
              return (
                <Link to={categoryRoute} >
                <ListItemButton sx={{ pl: 4 }}>
                {category}
                </ListItemButton>
                </Link>
              )
            })}
        
          </List>
        </Collapse>
        <Link to="wishlist">
          <ListItemButton>
            <ListItemIcon>
              <LocalMallRoundedIcon />
            </ListItemIcon>
            <Link to="wishlist">Wishlist</Link>
          </ListItemButton>
        </Link>
      </List>
    </ThemeProvider>
    <button onClick={() => handleSignOut()}>Sign Out</button>
    </div>
    
    </>
  );

}



export default SideNavbar;




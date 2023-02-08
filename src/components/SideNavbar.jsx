import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sideNavBar.css"
import { List, 
         ListItemButton, 
         Collapse, 
         ListItemIcon,
         ListItemText,
         createTheme,
         ThemeProvider} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import "../styles/sideNavBar.css"

function SideNavbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const theme = createTheme({
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true
        },
        styleOverrides: {
          root: {
            marginBottom: "16px",
          }
        }
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontFamily: "inherit",
          }
        }
      }
    }
  });

  return (
    <div className="side-navbar">
    <div className="logo-container">
      <AutoStoriesRoundedIcon className="logo"/>
      <p>booked</p>
    </div>
    <ThemeProvider theme={theme}>
      <List>
        <Link to="library">
          <ListItemButton>
            <ListItemIcon>
              <LibraryBooksRoundedIcon />
            </ListItemIcon>
            Library
          </ListItemButton>
        </Link>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <CategoryRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
            <Link to="wishlist">
              <ListItemButton sx={{ pl: 4 }}>
                Wishlist
              </ListItemButton>
            </Link>
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
        <Link to="profile">
          <ListItemButton>
            <ListItemIcon>
              <FaceRoundedIcon />
            </ListItemIcon>
            <Link to="profile">Profile</Link>
          </ListItemButton>
        </Link>
      </List>
    </ThemeProvider>
    </div>
  );

}



export default SideNavbar;




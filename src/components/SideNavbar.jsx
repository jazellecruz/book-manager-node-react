import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sideNavBar.css"
import {List, ListItemButton, ListItemText, Collapse, ListItemIcon} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

function SideNavbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItemButton>
        <ListItemIcon>
          <LibraryBooksRoundedIcon />
        </ListItemIcon>
        <Link to="/library">Library</Link>
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CategoryRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="wishlist">Wishlist2</Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="wishlist">Wishlist</Link>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          <LocalMallRoundedIcon />
        </ListItemIcon>
        <Link to="wishlist">Wishlist</Link>
      </ListItemButton>
    </List>
  );

}



export default SideNavbar;




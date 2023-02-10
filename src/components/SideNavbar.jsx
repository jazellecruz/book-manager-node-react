import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
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
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import {listTheme, addBookTheme, modalStyle} from "../styles/themes/themes"
import "../styles/sideNavBar.css"

function SideNavbar() {
  const [openCategoryList, setOpenCategoryList] = useState(false);
  const [openBookForm, setOpenBookForm] = useState(false);

  const handleCategoryListClick = () => {
    setOpenCategoryList(!openCategoryList);
  };

  const handleOpenBookFormClick = () => {
    setOpenBookForm(!openBookForm)
  }

  const handleCloseBookFormClick = () => {
    setOpenBookForm(!openBookForm)
  }

  const {firstName, lastName} = {
    firstName: "Jazelle",
    lastName: null
  }

  return (
    <>
    <div className="side-navbar">
    <div className="logo-container">
      <AutoStoriesRoundedIcon className="logo"/>
      <p>booked</p>
    </div>
    <div className="avatar-container">
      <Avatar 
        alt="user-pic" 
        src="https://i.pinimg.com/564x/12/00/b3/1200b3d273dd3869fc7ec511f96475be.jpg"
        sx={{ width: 150, height: 150, }}
        />
      <p className="user-name">{firstName} {lastName}</p>
    </div>
    <ThemeProvider theme={listTheme}>
      <List>
        <ThemeProvider theme={addBookTheme}>
        {/* <Button onClick={handleOpenBookFormClick} variant="contained" startIcon={<ControlPointRoundedIcon />}>
          Add a book
        </Button> */}
        </ThemeProvider>
        <Modal 
          open={openBookForm}
          onClose={handleCloseBookFormClick}
        >
          <Box sx={modalStyle}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
        </Modal>
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

          <List component="div" style={{height: "260px", overflow: "auto"}}disablePadding>

            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
            <Link to="categories/art-and-photography">
              <ListItemButton sx={{ pl: 4 }}>
                Art & Photography
              </ListItemButton>
            </Link>
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
    
    </>
  );

}



export default SideNavbar;




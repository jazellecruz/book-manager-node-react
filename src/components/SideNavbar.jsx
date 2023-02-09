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
         createTheme,
         ThemeProvider} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
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

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
    
    <div className="side-navbar">
    <div className="logo-container">
      <AutoStoriesRoundedIcon className="logo"/>
      <p>booked</p>
    </div>
    <ThemeProvider theme={theme}>
      <List>
        <Button onClick={handleOpenBookFormClick} variant="outlined" startIcon={<ControlPointRoundedIcon />}>
          Add a book
        </Button>
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




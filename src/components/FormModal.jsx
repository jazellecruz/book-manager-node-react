import {useState} from "react";
import { Modal, Box, ThemeProvider, Typography, Button } from "@mui/material"
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import {addBookTheme, modalStyle} from "../styles/themes/themes"

function FormModal() {
  const [openBookForm, setOpenBookForm] = useState(false);
  const handleOpenBookFormClick = () => {
    setOpenBookForm(!openBookForm)
  }

  const handleCloseBookFormClick = () => {
    setOpenBookForm(!openBookForm)
  }

  return(
    <>
    <ThemeProvider theme={addBookTheme}>
    <Button onClick={handleOpenBookFormClick} variant="contained" startIcon={<ControlPointRoundedIcon />}>
      Add a book
    </Button>
  </ThemeProvider>
  <Modal 
  open={openBookForm}
  onClose={handleCloseBookFormClick} >
    <Box sx={modalStyle}>
      <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
        Add a Book
      </Typography>
      
      </Box>
  </Modal>
  </>
  );
}

export default FormModal;
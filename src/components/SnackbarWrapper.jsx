import {useState} from "react";
import {Snackbar, Alert} from "@mui/material";

const SnackbarWrapper = ({message, severity}) => {
  const [openSnackbar, setOpenSnackbar] = useState(true);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
    };

  return (
    <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={handleCloseSnackbar}>
      <Alert onClose={handleCloseSnackbar} variant="filled" severity={severity} sx={{ width: '100%' }}>
       {message}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarWrapper

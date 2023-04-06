import { createTheme } from "@mui/material";

const listTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          marginBottom: "16px",
          textAlign: "center",
        },
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: "inherit",
          color: "black"
        }
      }
    }
  }
});

const addBookTheme = createTheme({
  palette: {
    primary: {
      main: "#dfd8fd"
    },
  },
});

const signoutBtn = createTheme({
  palette: {
    primary: {
      main: "#000"
    },
  },
});

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "43rem",
  maxHeight: "100%",
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 10,
  p: 4,
};



export {listTheme, addBookTheme, modalStyle, signoutBtn}
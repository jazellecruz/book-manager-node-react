import { useState, useContext, useEffect } from "react";
import axios from "axios";
import SnackbarWrapper from "./SnackbarWrapper";
import { Modal,
         Box, 
         ThemeProvider, 
         Button,
         Alert,
         Snackbar } from "@mui/material"
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import {addBookTheme, modalStyle} from "../styles/themes/themes"
import { CategoriesContext, SnackbarContext } from "../contexts/context";
import { sanitizeInput } from "../helpers/helpers"
import "../styles/form.css"

function FormModal({renderComponent}) {
  const [openBookForm, setOpenBookForm] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [statusList, setStatusList] = useState([])
  const [snackbarType, setSnackbarType] = useState({
    message: "",
    severity: ""
  });
  const [entry, setEntry] = useState({
    title: null,
    author: null,
    description: null,
    img: null,
    category_id: null,
    status_id: null
  });
  const categoriesList = useContext(CategoriesContext);
  const snackbar = useContext(SnackbarContext);

  const emptyEntry = () => {
    setEntry({
      title: null,
      author: null,
      description: null,
      img: null,
      category_id: null,
      status_id: null
    })
  }

  const handleCancel = () => {
    emptyEntry();
    handleCloseBookFormClick();
  }


  const handleChange = (e) => {
    let { name, value } = e.target;

    setEntry({
      ...entry,
      [name] : sanitizeInput(value, name)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:8000/library/books",
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        "x-access-token": localStorage.getItem("accessToken")
      },
      data: {
        title: entry.title,
        author: entry.author,
        description: entry.description,
        img: entry.img,
        category_id: entry.category_id,
        status_id: entry.status_id
      }
    })
    .then(res => {
      if(res.status === 200) {
        console.log(res)
        handleCancel();
        renderComponent();
        snackbar("success", "Successfully Saved!")
        // setSnackbarType({
        //   message:"Successfully saved!",
        //   severity: "success"
        // });
        // setOpenSnackbar(!openSnackbar)
      }
    })
    .catch(err => {
      handleCancel();
      snackbar("error", `Request failed! Try again later. (Error ${err.response.status})`)
      // setSnackbarType({
      //   message: `Request failed! Try again later. (Error ${err.response.status})`,
      //   severity: "error"
      // });
    })
  }

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/library/status",
      headers: {
        "x-access-token": localStorage.getItem("accessToken")
      }
    })
    .then(res => {
      setStatusList([...res.data])
    })
    .catch(err => console.log(err))
  }, []);

  const handleOpenBookFormClick = () => {
    setOpenBookForm(!openBookForm)
  }

  const handleCloseBookFormClick = () => {
    setOpenBookForm(!openBookForm)
  }

  
  return(
    <>
    <ThemeProvider theme={addBookTheme}>
    <Button onClick={handleOpenBookFormClick} variant="contained" startIcon={<ControlPointRoundedIcon />} disableElevation disableFocusRipple disableRipple>
      Add a book
    </Button>
  </ThemeProvider>
  <Modal 
  open={openBookForm}
  onClose={handleCloseBookFormClick} >
    <Box sx={modalStyle}>
    <h3>Add a new book</h3>
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label for="title">Title:</label>
        <input className="input-border" type="text" value={entry.title} onChange={(e) => handleChange(e)} name="title"></input>
      </div>
        
      <div className="input-container">
        <label for="author">Author:</label>
        <input className="input-border" type="text"  value={entry.author} onChange={(e)=> handleChange(e)} name="author"></input>
      </div>
      <div className="input-container">
        <label for="description">Description:</label>
        <textarea className="input-border" value={entry.description}  onChange={(e)=> handleChange(e)} name="description"></textarea>
      </div>
      <div className="input-container">
        <label for="description">Image:</label>
        <input className="input-border" type="text" value={entry.img}  onChange={(e)=> handleChange(e)} name="img"></input>
      </div>
      <div className="input-container">
        <label for="category_id">Category:</label>
          <select className="input-border" name="category_id" value={entry.category_id} onChange={(e)=> handleChange(e)} >
          <option value="" disabled selected>Select a category</option>
          <CategoriesContext.Consumer >
          {categoriesList => 
            categoriesList.map(({ category, category_id}) =>
            <option value={category_id}>{category}</option>
            )
          }
          </CategoriesContext.Consumer>
          </select>
      </div>
      <div className="input-container">
        <label for="status_id">Status:</label>
        <select className="input-border" name="status_id" placeholder="status" onChange={(e)=> handleChange(e)} value={entry.status_id}>
          <option value="" disabled selected>Select a status</option>
          {statusList.map(({ status_id, status}) =>
            <option value={status_id}>{status}</option>
            )
          }
        </select>
      </div>
      <div className="form-btn-container">
        <button type="submit" className="submit-btn">Submit</button>
        <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
      </div>
      </form>
    </Box>
  </Modal>
  </>
  );
}

export default FormModal;
import { useState } from "react";
import axios from "axios";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button  from "@mui/material/Button";
import { trimString } from "../helpers/helpers"
import { useNavigate } from "react-router-dom";
import "../styles/bookItem.css"
import bookAltImg from "../assets/book-alt.png";

const BookItem = ({title, author, description, img, category, status, book_id, updateAndRefreshView, updateSnackbarType, showSnackbar}) => {
  const navigate = useNavigate();
  const [openDialogue, setOpenDialogue] = useState(false);

  const handleOpenDialogue = () => {
    setOpenDialogue(true);
  };

  const handleCloseDialogue = () => {
    setOpenDialogue(false);
  };

  const deleteBook = async (book_id) => {
    try{
      await axios({
        method: "DELETE",
        url: `/books/${book_id}`,
        withCredentials: true
      });
      updateAndRefreshView();
      updateSnackbarType("success", "Successfully deleted book!");
    } catch(err) {
      const status = err.response.status;

      if(status === 401) return navigate("/login"); 
      if(status === 404) return updateSnackbarType("error", "Failed to delete book. Book not found.");
     
      updateSnackbarType("error", "An error occurred. Try again later.");
    } finally {
      showSnackbar();
    }
  }

  return(
    <>
    <div className="book-item">
      <div className="book-img-container">
        <img src={img ? img : bookAltImg} 
        alt="book-cover" 
        onError={(e) => {
        e.target.onerror = null; 
        e.target.src=bookAltImg;
  }}/>
      </div>
      <div className="book-info-container">
        <div className="book-title-and-author-container">
          <p className="book-title">{title}</p>
          <p className="sub-text">By {author}</p>
        </div>
        <p className="">{trimString(description)}</p>
        <div className="book-status-category-container">
          <p>Status: <span className="sub-text"> {status}</span></p>
          <p>Category: <span className="sub-text">{category} </span></p>
        </div>
      </div>
      <button className="deleteBook-btn" onClick={handleOpenDialogue}>
        <DeleteOutlineOutlinedIcon />
      </button>
      <div>
        <Dialog
          open={openDialogue}
          onClose={handleCloseDialogue}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">
            {"Delete this book?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to 
              <span style={{color: "red"}}> delete </span>
              <span style={{fontWeight: "bolder"}}>{`"${title}"`}</span>
              ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialogue}>Cancel</Button>
            <Button onClick={() => {
              deleteBook(book_id)
              handleCloseDialogue();
              }} 
              autoFocus>
              YES
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
    </>
  );
}

export default BookItem;
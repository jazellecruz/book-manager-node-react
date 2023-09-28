import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Rating  from "@mui/material/Rating";
import Button  from "@mui/material/Button";
import { kebabCase, trimString } from "../helpers/helpers"
import { SnackbarContext } from "../contexts/context";
import "../styles/bookItem.css"

const BookItem = ({title, author, description, img, rating, category, status, precision, book_id, renderComponent}) => {
  const [openDialogue, setOpenDialogue] = useState(false);
  const openSnackbar = useContext(SnackbarContext);

  const handleOpenDialogue = () => {
    setOpenDialogue(true);
  };

  const handleCloseDialogue = () => {
    setOpenDialogue(false);
  };

  const handleDelete = (book_id) => {
    axios({
      method: "delete",
      url: `https://booked-api.vercel.app/library/books/${book_id}`,
      headers: {
        "x-access-token": localStorage.getItem("accessToken")
      }
      })
    .then(res => {
      if(res.status === 200) {
        renderComponent()
        openSnackbar("success", "Successfully deleted book!")
      }
    })
    .catch(err => {
      openSnackbar("error", `Request failed! Try again later. (Error ${err.response.status})`)
    });
  }

 
  return(
    <>
    <div className="book-item">
      <div className="book-img-container">
          <img src={img} alt="book-cover"/>
      </div>
      <div className="book-info-container">
        <p className="book-title">{title}</p>
        <div>
          <p className="sub-text">{author}</p>
          <Rating name="simple-controlled" value={rating} size="small" readOnly/>
        </div>
        <p className="secondary-text">{trimString(description)}</p>
        <div>
          <p>
            <span className="sub-text">Status:</span> 
            <span className={kebabCase(status)}> {status}</span>
          </p>
          <p>
            <span className="sub-text">Category:</span> 
            <span> <Link to={`../categories/${kebabCase(category)}`}>{category}</Link></span>
          </p>
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
              handleDelete(book_id)
              handleCloseDialogue();
              }} 
              autoFocus>
              YES
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
    <hr className="divider" />
    </>
  );
}

export default BookItem;
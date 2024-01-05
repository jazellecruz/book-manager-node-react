import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal, Box, TextField } from "@mui/material";
import { modalStyle } from "../styles/themes/themes";
import { sanitizeInput } from "../helpers/helpers";
import "../styles/bookForm.css";

const BookForm = ({categoriesList, statusList, updateAndRefreshView, showSnackbar, updateSnackbarType}) => {
  const navigate = useNavigate();
  const [openBookForm, setOpenBookForm] = useState(false);
  const [rating, setRating] = useState(null);
  const [entry, setEntry] = useState({
    title: null,
    author: null,
    description: null,
    img: null,
    category_id: null,
    status_id: null,
    rating: rating,
    review: null
  });

  const emptyEntry = () => {
    setEntry({
      title: null,
      author: null,
      description: null,
      img: null,
      category_id: null,
      status_id: null
    });
    setRating(null);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setEntry({
      ...entry,
      [name] : sanitizeInput(value, name)
    });
  }

  const submitBook = async(e) => {
    e.preventDefault();

    try{
      let response = await axios({
        method: "POST",
        url: "/books",
        data: {
          title: entry.title,
          author: entry.author,
          description: entry.description,
          img: entry.img,
          category_id: entry.category_id,
          status_id: entry.status_id,
        },
        withCredentials: true
      });

      updateAndRefreshView();
      updateSnackbarType("success", "Successfully added book!");
    } catch (err) {
      if(err.response.status === 401) return navigate("/login");

      updateSnackbarType("error", "An error occurred. Try again later.");
    } finally {
      // ensures that book entry is emptied regardless of response
      emptyEntry();
      closeBookForm();
      showSnackbar();
    }
  } 

  const showBookForm = () => {
    setOpenBookForm(!openBookForm);
  };

  const closeBookForm = () => {
    setOpenBookForm(!openBookForm)
  };

  return (
    <div>
      <button className="add-book-btn" onClick={showBookForm}>Add Book</button>
      <Modal open={openBookForm} onClose={closeBookForm}>
        <Box sx={modalStyle}>
          <h3>Add a new book</h3>
          <form onSubmit={submitBook}>
            <div className="input-group"> 
              <div className="input-container">
                <label for="title">Title:</label>
                <input className="input-border" type="text" value={entry.title} onChange={(e) => handleChange(e)} name="title"></input>
              </div>
              <div className="input-container">
                <label for="author">Author:</label>
                <input className="input-border" type="text"  value={entry.author} onChange={(e)=> handleChange(e)} name="author"></input>
              </div>
            </div>
            <div className="input-container">
              <label for="description">Description:</label>
              <textarea className="input-border" value={entry.description}  onChange={(e)=> handleChange(e)} name="description"></textarea>
            </div>
            <div className="input-container">
              <label for="description">Image:</label>
              <input className="input-border" type="text" value={entry.img}  onChange={(e)=> handleChange(e)} name="img"></input>
            </div>
            <div className="input-group"> 
              <div className="input-container">
                <label for="category_id">Category:</label>
                <select className="input-border" name="category_id" value={entry.category_id} onChange={(e)=> handleChange(e)} >
                  <option value="" disabled selected>Select a category</option>
                    {categoriesList.map(({ category_no, category_name}) =>
                      <option value={category_no}>{category_name}</option>)
                    }
                </select>
              </div>
              <div className="input-container">
                <label for="status_id">Status:</label>
                <select className="input-border" name="status_id" placeholder="status" onChange={(e)=> handleChange(e)} value={entry.status_id}>
                  <option value="" disabled selected>Select a status</option>
                    {statusList.map(({ status_no, status}) =>
                      <option value={status_no}>{status}</option>)
                    }
                </select>
              </div>
            </div>
            <div className="form-btn-container">
              <button type="submit" className="submit-btn">Submit</button>
              <button type="button" className="cancel-btn" 
                onClick={() => {    
                  emptyEntry();
                  closeBookForm();
                }}>Cancel</button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default BookForm;

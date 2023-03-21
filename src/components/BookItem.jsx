import { Link, } from 'react-router-dom';
import axios from "axios";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Rating } from "@mui/material"
import { kebabCase, trimString } from "../helpers/helpers"
import "../styles/bookItem.css"

function BookItem({title, author, description, img, rating, category, status, precision, book_id, renderComponent}) {

  const handleDelete = (book_id) => {
    axios({
      method: "delete",
      url: `http://localhost:8000/library/books/${book_id}`,
      headers: {
        "x-access-token": localStorage.getItem("accessToken")
      }
      })
    .then(res => {
      renderComponent()
    })
    .catch(err => console.log(err))
  }

  return(

      <div className="book-container">
      <div className="book-img-container">
        <img 
        src={img} 
        alt="book-cover"/>
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
          <span>|</span>
          <p>
            <span className="sub-text">Category:</span> 
            <span> <Link to={`../categories/${kebabCase(category)}`}>{category}</Link></span>
          </p>
        </div>
      </div>
      <button className="deleteBook-btn" onClick={() => handleDelete(book_id)}>
          <DeleteOutlineOutlinedIcon />
      </button>
      </div>
  );
}

export default BookItem;
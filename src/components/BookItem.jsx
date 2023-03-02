import { Link, } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Rating } from "@mui/material"
import { kebabCase, trimString } from "../helpers/helpers"
import "../styles/bookItem.css"

function BookItem({title, author, description, img, rating, category, status, precision, book_id, handleDelete}) {

  return(

      <div className="book-container">
      <div className="book-img-container">
        <img 
        src={img ? img : "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" } 
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
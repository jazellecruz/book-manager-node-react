import React from 'react';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import { Rating } from "@mui/material"
import "../styles/bookItem.css"

function BookItem(props) {
  return(

    <div className="book-container">
      <div className="book-img-container">
        <img 
        src={props.img ? props.img : "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" } 
        alt="book-cover"/>
      </div>
      <div className="book-info-container">
        <p className="book-title">{props.title}</p>
        <p>{props.author}</p>
        <p>{props.category}</p>
        <p className="secondary-text">{props.description}</p>
        <p>{props.status}</p>
      </div>
    </div>
  );
}

export default BookItem;
import { useState, useEffect } from "react";
import axios from "axios";
import {ThemeProvider, 
        Button, 
        Modal, 
        Typography, 
        Box,
        InputLabel,
        Select,
        MenuItem,
        FormControl
        } from "@mui/material"
import BookItem from './BookItem';
import FormModal from "../components/FormModal";
import { getPrecision } from "../helpers/helpers";
import "../styles/library.css";

function Library() {
  const [books, setBooks] = useState([]);
  const [totalOfFinishedBooks, settotalOfFinishedBooks] = useState()
  const [sortBy, setSortBy] = useState('Default');

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/library/books"
    })
    .then((result) => {
      setBooks([...result.data.books])
      settotalOfFinishedBooks(result.data.totalOfFinishedBooks)
    })
  }, [])

  return (
      <div>
      <div className="greet-box">
        <p>Hello, Jazelle!</p>
        <p className="secondary-text">You have read <span>{books.length}</span> books 
        in the last {/*insert here the day the user was created then convert to days*/} days.</p>
      </div>
      <div className="add-sort-container">
      <FormModal />
      </div>
      <div >
        {books.map(book => 
          <BookItem 
            title={book.title}
            author={book.author}
            description={book.description}
            rating={book.rating}
            precision={getPrecision(book.rating)}
            img={book.img}
            category={book.category}
            status={book.status}
          />
        )}
      </div>
      </div>
  );
}

export default Library;
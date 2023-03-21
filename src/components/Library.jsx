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
import { CategoriesContext } from "../contexts/context";

function Library() {
  const [books, setBooks] = useState([]);
  const [totalOfFinishedBooks, settotalOfFinishedBooks] = useState()
  const [render, setRender] = useState(0)
  const [sortBy, setSortBy] = useState('Default');

  const renderComponent = () => {
    setRender(render + 1);
  }

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/library/books",
      headers: {
        "x-access-token": localStorage.getItem("accessToken")
      }
    })
    .then((result) => {
      setBooks([...result.data.books])
      settotalOfFinishedBooks(result.data.totalOfFinishedBooks)
    })
    .catch(err => {
      console.log(err)
    })
    
    console.log(render);
  }, [render])

  return (
      <div>
      <div className="greet-box">
        <p>Hello, Jazelle!</p>
        <p className="secondary-text">You have read <span>{totalOfFinishedBooks}</span> books 
        in the last {/*insert here the day the user was created then convert to days*/} days.</p>
      </div>
      <div className="add-sort-container">
      <FormModal renderComponent={renderComponent}/>
      </div>
      <div >
        {books.map(book => 
          <BookItem 
            book_id={book.book_id}
            title={book.title}
            author={book.author}
            description={book.description}
            rating={book.rating}
            precision={getPrecision(book.rating)}
            img={book.img}
            category={book.category}
            status={book.status}
            renderComponent={renderComponent}
          />
        )}
      </div>
      </div>
  );
}

export default Library;
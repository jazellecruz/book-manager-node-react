import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [render, setRender] = useState(0)
  const [sortBy, setSortBy] = useState('Default');

  const renderComponent = () => {
    setRender(render + 1);
  }

  const setNewBooksList = (newEntry) => {
    setBooks([...books, newEntry])
  }

  const navigate = useNavigate();

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
      if (err.response.status === 401) {
        navigate("/login")
      } else if(err.response.status === 500){
        console.log(err)
      }
    })
    
  }, [render]);

  return (
      <div>
      <div className="greet-box">
        <p>Hello, Jazelle!</p>
        <p className="secondary-text">You have read <span>{totalOfFinishedBooks}</span> books 
        in the last {/*insert here the day the user was created then convert to days*/} days.</p>
      </div>
      <div className="add-sort-container">
      <FormModal setNewBooksList={setNewBooksList}/>
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
            setNewBooksList={setNewBooksList}
            renderComponent={renderComponent}
          />
        )}
      </div>
      </div>
  );
}

export default Library;
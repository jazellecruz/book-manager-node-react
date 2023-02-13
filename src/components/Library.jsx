import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import BookItem from './BookItem';
import "../styles/library.css";

function Library() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/library"
    })
    .then((result) => {
      console.log(result.data)
      setBooks([...result.data])
    })
  }, [])

  return (
      <div>
      <div className="greet-box">
        <p>Hello, Jazelle!</p>
        <p className="secondary-text">You have read X books in the last X days.</p>
      </div>
      <div >
        {books.map(book => <BookItem 
          title={book.title}
          author={book.author}
          description={book.description}
          rating={book.rating}
          img={book.img}
          category={book.category}
          status={book.status}
        />) }
      </div>
      </div>
  );
}

export default Library;
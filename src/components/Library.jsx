import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import BookItem from './BookItem';
import "../styles/library.css";

function Library() {
  // const [books, setBooks] = useState([]);
  const data = [
    {
      "book_id": 4,
      "title": "Tender is the Flesh",
      "author": "Agustina Bazterrica",
      "description": null,
      "category": "Horror",
      "status": "Finished",
      "rating": "3.80",
      "comment": "Creepy and disturbing as it should be but I will definitely NOT read again.",
      "dateAdded": "2023-01-29T16:00:00.000Z"
      },
      {
      "book_id": 5,
      "title": "Dark Matter",
      "author": "Blake Crouch",
      "description": null,
      "category": "Science Fiction",
      "status": "Finished",
      "rating": "4.00",
      "comment": "Not that bad. Pretty good and enjoyable.",
      "dateAdded": "2023-01-29T16:00:00.000Z"
      },
      {
      "book_id": 1,
      "title": "Burial Rites",
      "author": "Hannah Kent",
      "description": "The story about Iceland's very last execution.",
      "category": "Suspense and Thrillers",
      "status": "Finished",
      "rating": "5.00",
      "comment": "This is the first book that I genuinely enjoyed reading.",
      "dateAdded": "2023-01-26T16:00:00.000Z"
      },
      {
        "book_id": 4,
        "title": "Tender is the Flesh",
        "author": "Agustina Bazterrica",
        "description": null,
        "category": "Horror",
        "status": "Finished",
        "rating": "3.80",
        "comment": "Creepy and disturbing as it should be but I will definitely NOT read again.",
        "dateAdded": "2023-01-29T16:00:00.000Z"
        },
        {
        "book_id": 5,
        "title": "Dark Matter",
        "author": "Blake Crouch",
        "description": null,
        "category": "Science Fiction",
        "status": "Finished",
        "rating": "4.00",
        "comment": "Not that bad. Pretty good and enjoyable.",
        "dateAdded": "2023-01-29T16:00:00.000Z"
        },
        {
        "book_id": 1,
        "title": "Burial Rites",
        "author": "Hannah Kent",
        "description": "The story about Iceland's very last execution.",
        "category": "Suspense and Thrillers",
        "status": "Finished",
        "rating": "5.00",
        "comment": "This is the first book that I genuinely enjoyed reading.",
        "dateAdded": "2023-01-26T16:00:00.000Z"
        }
  ]
  
  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "http://localhost:8000/library"
  //   })
  //   .then((result) => {
  //     console.log(result.data)
  //     setBooks([...result.data])
  //   })
  // }, [])

  return (
    <>
      <div className="greet-box">
        <p>Hello, user!</p>
        <p className="secondary-text">You have read X books in the last X days.</p>
      </div>
      <div className="books-list-container">
        {data.map(book => <BookItem 
          title={book.title}
          author={book.author}
          description={book.description}
          img={book.img}
          category={book.category}
          status={book.status}
        />) }
      </div>
    </>
      
  );
}

export default Library;
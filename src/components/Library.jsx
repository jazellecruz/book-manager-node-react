import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

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
    <ul>
      {books.map(book => <li>{book.title}</li>) }
    </ul>
 
  );
}

export default Library;
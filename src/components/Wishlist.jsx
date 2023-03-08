import { useState, useEffect } from 'react'
import axios from "axios";

export default function Wishlist() {
  const [books, setBooks] = useState({});

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8000/library/books?status_id=4",
      headers: {
        "x-access-token": localStorage.getItem("accessToken")
      }
    })
    .then(res => setBooks({...res.data}))
    .then(console.log(books))
    .catch(err => console.log(err))
  }, []);

  return (
    <div>
        <div className="category-box">
          <p>Wishlist</p>
          <p className="secondary-text">
          You currently have <span>{books.count} </span> 
          {books.count === 1 ? "book" : "books"} for <span> Wishlist</span>.</p>
      </div>
    </div>
  )
}


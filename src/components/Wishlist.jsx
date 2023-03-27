import { useState, useEffect } from 'react'
import FormModal from "./FormModal.jsx";
import axios from "axios";

export default function Wishlist() {
  const [books, setBooks] = useState({});
  const [render, setRender] = useState(0)

  const renderComponent = () => {
    setRender(render + 1);
  }

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8000/library/books?status_id=4",
      headers: {
        "x-access-token": localStorage.getItem("accessToken")
      }
    })
    .then(res => setBooks({...res.data}))
    .catch(err => console.log(err))
  }, [render]);
  
  

  return (
    <div>
        <div className="category-box">
          <p>Wishlist</p>
          <p className="secondary-text">
          You currently have <span>{books.count} </span> 
          {books.count === 1 ? "book" : "books"} for <span> Wishlist</span>.</p>
      </div>
      <div className="add-sort-container">
      <FormModal renderComponent={renderComponent}/>
      </div>
    </div>
  )
}


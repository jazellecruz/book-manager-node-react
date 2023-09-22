import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import FormModal from "./FormModal.jsx";
import axios from "axios";

const Wishlist = () => {
  const [books, setBooks] = useState([]);
  const [render, setRender] = useState(0)

  const renderComponent = () => {
    setRender(render + 1);
  }
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://booked-api.vercel.app/library/books?status_id=4",
      headers: {
        "x-access-token": localStorage.getItem("accessToken")
      },
      withCredentials: true
    })
    .then(res => setBooks([...res.data]))
    .catch(err => {
      if (err.response.status === 401) {
        navigate("/login");
      } else if (err.response.status === 500) {
        navigate("/error")
      }
    })
  }, [render]);
  

  return (
    <div>
      <div className="category-box">
        <p>Wishlist</p>
        <p className="secondary-text"> You currently have <span>{books.length} </span> 
          {books.length === 1 ? "book" : "books"} for <span> Wishlist</span>.
        </p>
      </div>
      <div className="add-sort-container">
        <FormModal renderComponent={renderComponent}/>
      </div>
    </div>
  );
}

export default Wishlist;

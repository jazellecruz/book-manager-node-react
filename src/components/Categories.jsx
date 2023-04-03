import { useState, useEffect }from "react"; 
import { useNavigate } from "react-router-dom";
import FormModal from "./FormModal";
import axios from "axios"
import BookItem from "../components/BookItem";
import "../styles/category.css";

const Categories = ({category_id, category}) => {
  const [books, setBooks] = useState([]);
  const [render, setRender] = useState(0);
  const categoryId = category_id
  const navigate = useNavigate();

  const renderComponent = () => {
    setRender(render + 1);
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:8000/library/books?category_id=${categoryId}`,
      headers: {
        "x-access-token": localStorage.getItem("accessToken")
      }
    })
    .then((res) => {
      setBooks([...res.data.books]);
    })
    .catch(err => {
      if (err.response.status === 401) {
        navigate("/login");
      } else if(err.response.status === 500) {
        navigate("/error");
      }
    })
  },[categoryId, render]);

  return (
    <div>
      <div className="category-box">
        <p>{category}</p>
        <p className="secondary-text">
          You currently have <span>{books.length} </span> 
          {books.length === 1 ? "book" : "books"} for <span> {category} </span> category.</p>
      </div>
      <div className="add-sort-container">
        <FormModal renderComponent={renderComponent}/>
      </div>
      <div className="books-list-container">
        {books.map(({title, author, description, rating, img, category, status}) => 
          <BookItem 
            title={title}
            author={author}
            description={description}
            img={img}
            category={category}
            rating={rating}
            status={status}
            renderComponent={renderComponent}
          />
        )}
      </div>
    </div>
  );
}

export default Categories;
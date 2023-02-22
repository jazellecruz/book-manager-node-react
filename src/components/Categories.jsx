import { useState, useEffect }from "react"; 
import axios from "axios"
import BookItem from "../components/BookItem";
import "../styles/category.css";

function Categories({category_id, category}) {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:8000/library/books?category_id=${category_id}`
    })
    .then((res) => {
      setBooks([...res.data.books])
    })
  },[category_id])

  return (
    <div>
      <div className="category-box">
        <p>{category}</p>
        <p className="secondary-text">
        You currently have <span>{books.length} </span> 
        {books.length === 1 ? "book" : "books"} for <span> {category} </span> category.</p>
      </div>
      <div className="books-list-container">
        {books.map(({title, author, description, rating, category, status}) => 
        <BookItem 
          title={title}
          author={author}
          description={description}
          category={category}
          rating={rating}
          status={status}
        />)}
      </div>
    </div>
  );
}

export default Categories;
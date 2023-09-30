import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BookItem from './BookItem';
import FormModal from "../components/FormModal";
import ControlTabs from "./ControlTabs";
import HeaderBar from "./HeaderBar";
import { getPrecision } from "../helpers/helpers";
import "../styles/library.css";

function Library() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [bookCategory, setBookCategory] = useState([]);
  const [status, setStatus] = useState([]);
  const [totalOfFinishedBooks, setTotalOfFinishedBooks] = useState();
  const [openFormModal, setOpenFormModal] = useState(false);
  const [render, setRender] = useState(0);


  const renderComponent = () => {
    setRender(render + 1);
  }

  const navigate = useNavigate();

  const openBookForm = () => {
    setOpenFormModal(true);
  }

  const handleSetCategory = (e) => {

  }

  const apiCalls = [
    fetch("/books")
    .then(res => res.json())
    .then(res => {
      setBooks([...res.books]);
      setTotalOfFinishedBooks(books.totalOfFinishedBooks);
    }),
    fetch("/categories")
    .then(res => res.json())
    .then(res => {
      setCategories([...res]);
    }),
    fetch("/status")
    .then(res => res.json())
    .then(res => {
      setStatus([...res]);
    })
  ]


  useEffect( () => {
    Promise.all(apiCalls)
    .catch(err => console.log(err));
  }, [render]);
// {/* <div>
//       <div className="greet-box">
//         <p>Hello, Jazelle!</p>
//         <p className="secondary-text">You have read <span>{totalOfFinishedBooks}</span> books 
//         in the last {/*insert here the day the user was created then convert to days*/} days.</p>
//       </div>
//       <div className="add-sort-container">
//       <FormModal renderComponent={renderComponent}/>
//       </div>
//       <div >
//         {books.map(book => 
          // <BookItem 
          //   book_id={book.book_id}
          //   title={book.title}
          //   author={book.author}
          //   description={book.description}
          //   rating={book.rating}
          //   precision={getPrecision(book.rating)}
          //   img={book.img}
          //   category={book.category}
          //   status={book.status}
          //   renderComponent={renderComponent}
          // />
//         )}
//       </div>
//       </div> */}

  return (
    <div>
      <HeaderBar />
      <ControlTabs 
      handleSetCategory={handleSetCategory}
      status={status}
      categories={categories}
      openBookForm={openBookForm}
      />
      <div className="books-container">
        {books.map(book => {
          return <BookItem 
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
        })}
      </div>
    </div>
  );
}

export default Library;
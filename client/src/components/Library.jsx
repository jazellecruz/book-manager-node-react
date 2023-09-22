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
  const [totalOfFinishedBooks, setTotalOfFinishedBooks] = useState()
  const [render, setRender] = useState(0)

  const setCategory = () => {

  }

  const renderComponent = () => {
    setRender(render + 1);
  }

  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: "/books",
      headers: {
        "x-access-token": localStorage.getItem("accessToken")
      },
      withCredentials: true
    })
    .then((result) => {
      setBooks([...result.data.books])
      setTotalOfFinishedBooks(result.data.totalOfFinishedBooks)
    })
    .catch(err => {
      console.log(err)
      // if (err.response.status === 401) {
      //   navigate("/login");
      // } else if(err.response.status === 500){
      //   navigate("/error");
      // }
    })
    
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
      <ControlTabs setCategory={setCategory}/>
      <div>
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
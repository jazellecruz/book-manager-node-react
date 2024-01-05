import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BookItem from './BookItem';
import ControlTabs from "./ControlTabs";
import HeaderBar from "./HeaderBar";
import Loading from "./Loading";
import { getPrecision } from "../helpers/helpers";
import {categories, status} from "../constants/index";
import { Snackbar, Alert } from "@mui/material";
// import "../styles/library.css";

function Library() {
  const categoriesList = categories;
  const statusList = status;
  const navigate = useNavigate(); 
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [render, setRender] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState({
    severity: "",
    message: "",
    statusCode: ""
  });

  const showSnackbar = () => setOpenSnackbar(true);
  const closeSnackbar = () => setOpenSnackbar(false);

  const updateSnackbarType = (severity, message) => {
    setSnackbarType({
      severity: severity,
      message: message
    })
  }
  
  const updateAndRefreshView = () => {
    setRender(render + 1);
  }

  const fetchBooks = async () => {
    try{
      const response = await axios({url: "/books", withCredentials: true});
      setBooks([...response.data.books]);
    } catch(err) {
      const status = err.response.status;
      
      if(status === 401) return navigate("/login");
      
      return navigate("/error");
    }
  }

  useEffect(() => {
    (async function () {
      await fetchBooks();
      setIsLoading(false);
    })();

  }, [render]);

  return (
    <div>
      <HeaderBar 
        showSnackbar={showSnackbar}
        updateSnackbarType={updateSnackbarType}
      />
      <ControlTabs 
      statusList={statusList}
      categoriesList={categoriesList}
      updateAndRefreshView={updateAndRefreshView}
      showSnackbar={showSnackbar}
      updateSnackbarType={updateSnackbarType}
      />
      <div className="books-container">
      {
        isLoading ? <Loading />
        : 
        !books.length ? 
        (<p>It seems your library is empty. Add a new book to get started.</p>)
        :
        books.map(book => {
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
            updateAndRefreshView={updateAndRefreshView}
            showSnackbar={showSnackbar}
            updateSnackbarType={updateSnackbarType}
          />
        })
      }
      </div>
      <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={closeSnackbar}>
        <Alert onClose={closeSnackbar} variant="filled" severity={snackbarType.severity} sx={{ width: '100%' }}>
          {snackbarType.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Library;
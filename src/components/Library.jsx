import { useState, useEffect } from "react";
import axios from "axios";
import {ThemeProvider, 
        Button, 
        Modal, 
        Typography, 
        Box,
        InputLabel,
        Select,
        MenuItem,
        FormControl
        } from "@mui/material"
import BookItem from './BookItem';
import { getPrecision } from "../helpers/helpers";
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import {addBookTheme, modalStyle} from "../styles/themes/themes"
import "../styles/library.css";

function Library() {
  const [books, setBooks] = useState([]);
  const [sortBy, setSortBy] = useState('Default');
  const [finishedBooksNum, setFinishedBooksNum] = useState();  
  const [openBookForm, setOpenBookForm] = useState(false);

  const handleOpenBookFormClick = () => {
    setOpenBookForm(!openBookForm)
  }
  const handleCloseBookFormClick = () => {
    setOpenBookForm(!openBookForm)
  }

  const handleSortButton = (event) => {
    setSortBy(event.target.value);
  };


  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/library"
    })
    .then((result) => {
      setBooks([...result.data.books])
      setFinishedBooksNum(result.data.count)
    })
  }, [])

  return (
      <div>
      <div className="greet-box">
        <p>Hello, Jazelle!</p>
        <p className="secondary-text">You have read <span>{finishedBooksNum}</span> books 
        in the last {/*insert here the day the user was created then convert to days*/} days.</p>
      </div>
      <div className="add-sort-container">
        <ThemeProvider theme={addBookTheme}>
          <Button onClick={handleOpenBookFormClick} variant="contained" startIcon={<ControlPointRoundedIcon />}>
            Add a book
          </Button>
        </ThemeProvider>
        <Modal 
          open={openBookForm}
          onClose={handleCloseBookFormClick}
        >
          <Box sx={modalStyle}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
        </Modal>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Sort By</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={sortBy}
        label={sortBy}
        onChange={handleSortButton}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
      </div>
      <div >
        {books.map(book => 
          <BookItem 
            title={book.title}
            author={book.author}
            description={book.description}
            rating={book.rating}
            precision={getPrecision(book.rating)}
            img={book.img}
            category={book.category}
            status={book.status}
          />
        )}
      </div>
      </div>
  );
}

export default Library;
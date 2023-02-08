import React from 'react'; 
import BookItem from "../components/BookItem";
import "../styles/category.css";

function Categories(props) {
  const data = [
    {
      "book_id": 4,
      "title": "Tender is the Flesh",
      "author": "Agustina Bazterrica",
      "description": null,
      "category": "Horror",
      "status": "Finished",
      "rating": "3.80",
      "comment": "Creepy and disturbing as it should be but I will definitely NOT read again.",
      "dateAdded": "2023-01-29T16:00:00.000Z"
      },
      {
      "book_id": 5,
      "title": "Dark Matter",
      "author": "Blake Crouch",
      "description": null,
      "category": "Science Fiction",
      "status": "Finished",
      "rating": "4.00",
      "comment": "Not that bad. Pretty good and enjoyable.",
      "dateAdded": "2023-01-29T16:00:00.000Z"
      },
      {
      "book_id": 1,
      "title": "Burial Rites",
      "author": "Hannah Kent",
      "description": "The story about Iceland's very last execution.",
      "category": "Suspense and Thrillers",
      "status": "Finished",
      "rating": "5.00",
      "comment": "This is the first book that I genuinely enjoyed reading.",
      "dateAdded": "2023-01-26T16:00:00.000Z"
      },
      {
        "book_id": 4,
        "title": "Tender is the Flesh",
        "author": "Agustina Bazterrica",
        "description": null,
        "category": "Horror",
        "status": "Finished",
        "rating": "3.80",
        "comment": "Creepy and disturbing as it should be but I will definitely NOT read again.",
        "dateAdded": "2023-01-29T16:00:00.000Z"
        },
        {
        "book_id": 5,
        "title": "Dark Matter",
        "author": "Blake Crouch",
        "description": null,
        "category": "Science Fiction",
        "status": "Finished",
        "rating": "4.00",
        "comment": "Not that bad. Pretty good and enjoyable.",
        "dateAdded": "2023-01-29T16:00:00.000Z"
        },
        {
        "book_id": 1,
        "title": "Burial Rites",
        "author": "Hannah Kent",
        "description": "The story about Iceland's very last execution.",
        "category": "Suspense and Thrillers",
        "status": "Finished",
        "rating": "5.00",
        "comment": "This is the first book that I genuinely enjoyed reading.",
        "dateAdded": "2023-01-26T16:00:00.000Z"
        }
  ]

  return (
    <>
      <div className="category-box">
        <p>Art & Photography</p>
      </div>
      <div className="books-list-container">
        {data.map(book => 
        <BookItem 
          title={book.title}
          author={book.description}
          description={book.description}
          category={book.category}
          status={book.status}
        />)}
      </div>
    </>
  );
}

export default Categories;
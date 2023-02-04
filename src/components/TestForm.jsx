import React from 'react';
import { useState } from "react";

function TestForm() {
  const [book, setBook] = useState({
    title: null,
    author: null,
    description: null,
    category_id: null,
    status_id: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/test", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        title: book.title,
        author: book.author,
        descriptiomn: book.description,
        category_id: book.category_id,
        status_id: book.status_id
      })
    })
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setBook({
      ...book,
      [name]: value
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label for="title">Title:</label>
        <input type="text" value={book.title} onChange={(e) => handleChange(e)} name="title"></input>
        <br></br>
        <label for="author">Author:</label>
        <input type="text"  value={book.author} onChange={(e)=> handleChange(e)} name="author"></input>
        <br></br>
        <label for="description">Description:</label>
        <input type="text" value={book.description}  onChange={(e)=> handleChange(e)} name="description"></input>
        <br></br>
        <label for="category_id">Category</label>
        <select name="category_id" value={book.category_id} onChange={(e)=> handleChange(e)} >
          <option value="" disabled selected>Select a category</option>
          <option value="1">Academic</option>
        </select>
        <br></br>
        <label for="status_id">Status</label>
        <select name="status_id" placeholder="status" onChange={(e)=> handleChange(e)} value={book.status_id}>
          <option value="" disabled selected>Select a status</option>
          <option value="1">Finished</option>
        </select>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TestForm;

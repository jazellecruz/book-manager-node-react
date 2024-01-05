const { connection } = require("../database/db");
const {formatFields} = require("../helpers/index")
const {ClientError, ServerError} = require("../classes/error.js");

const getBooks = async() => {
  try{
    let results = await connection.promise().query(
      `SELECT books.book_id, title, author, description, img, categories.category, status.status, dateAdded FROM books 
      LEFT JOIN categories ON books.category_id = categories.category_id 
      LEFT JOIN status ON books.status_id = status.status_id       
      ORDER BY dateAdded DESC;` );

      let books = {
        books: results[0],
      }
      return books;
  } catch(err) {
    throw new ServerError(err);
  }
}

const filterBooks = async(query) => {
  try{  
    let results = await connection.promise().query(
      `SELECT books.book_id, 
              title, 
              author, 
              description, 
              img,
              categories.category, 
              status.status, 
              dateAdded
      FROM books
      left JOIN categories ON books.category_id = categories.category_id
      left JOIN status ON books.status_id = status.status_id
      WHERE ${formatFields("books", query, " AND ")}
      ORDER BY dateAdded DESC;`
    )

    let books = {
      books: results[0],
    }

    return books;
  } catch(err){
    throw new ServerError(err);
  }
}

const getBookById = async(bookId) => {
  try{
    let results = await connection.promise().query(
      `SELECT books.book_id, title, author, description, img, categories.category, status.status, dateAdded FROM books
       left JOIN categories ON books.category_id = categories.category_id
       left JOIN status ON books.status_id = status.status_id
       WHERE books.book_id = ${bookId};`);

    let book = results[0];
    
    return book;
  } catch(err) {
    throw new ServerError(err);
  }
}

const addBook = async(newBook) => {
  let { title, author, description, category_id, status_id, img, rating, review } = newBook

  try{
    let results = await connection.promise().query(
      `START TRANSACTION;
       INSERT INTO books (title, author, description, category_id, status_id, img, dateAdded)
       VALUES ("${title}", 
              ${author ? `"${author}"` : null }, 
              ${description ? `"${description}"` : null }, 
              ${category_id}, 
              ${status_id}, 
              ${img ? `"${img}"` : null}, 
              curdate());
        SET @last_book_id = LAST_INSERT_ID();
        SELECT books.book_id, title, author, description, img, categories.category, status.status, dateAdded FROM books
        left JOIN categories ON books.category_id = categories.category_id
        left JOIN status ON books.status_id = status.status_id
        WHERE books.book_id = @last_book_id;
        COMMIT;`);
    
    if (!results[0][1].affectedRows) {
      throw new ServerError(null);
    }
    
    return results[0][3][0];
  } catch(err) {
    // rethrow the ServerError caught
    if (err instanceof ServerError) throw err;

    throw new ServerError(err);
  }

}

const deleteBook = async(bookId) => {
  try{
    let results = await connection.promise().query(
      `DELETE FROM books WHERE books.book_id = ${bookId};`);
    
    if (!results[0].affectedRows) {
      throw new ClientError(404)
    } 
      
    return { message: "Item successfully deleted." }
  } catch(err) {
    if (err instanceof ClientError) throw err;

    throw new ServerError(err);
  }
}

const modifyBook = async(bookId, fieldsToModify) => {
  try{
    let results = await connection.promise().query(
    `UPDATE books SET ${formatFields("books", fieldsToModify, " , ")}  WHERE book_id="${bookId}";`)

    if (!results[0].affectedRows) throw new ClientError(404, "No resource matched.");
    
    return { message: "Item successfully modified." }
  } catch(err) {
    if (err instanceof ClientError) throw err;
   
    throw new ServerError(err);
  }
}


module.exports = { getBooks, filterBooks, getBookById, addBook, deleteBook, modifyBook };
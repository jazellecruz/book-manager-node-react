const router = require("express").Router();
const { getBooks,
        filterBooks,
        getBookById,
        addBook,
        deleteBook, 
        modifyBook } = require("../controllers/books");

router.get("/", async(req, res, next) => {
  try{
    if(Object.keys(req.query).length !== 0) { 
      return next(); 
    };

    let response = await getBooks(req.query);
    res.send(response);
  } catch(err) {
    next(err);
  }
});


router.get("/", async(req, res, next) => {
  try{
    let response = await filterBooks(req.query);
    res.send(response);
  } catch(err) {
    next(err);
  }
});

router.get("/:id", async(req, res, next) => {
  try{
    let response = await getBookById(req.params.id);
    res.send(response);
  } catch(err) {
    next(err);
  }
});

router.post("/", async(req, res, next) => {
  try{
    let response = await addBook(req.body);
    res.send(response);
  } catch(err) {
    next(err);
  }
});

router.patch("/:id", async(req, res, next) => {
  try{
    let response = await modifyBook(req.params.id, req.body);
    res.send(response);
  } catch(err) {
    next(err);
  }
});

router.delete("/:id", async(req, res, next) => {
  try{
    let response = await deleteBook(req.params.id);
    res.send(response);
  } catch(err) {
    next(err);
  }
});


module.exports = router

const bookModel = require("./../models/books");
const { getAllBooks, deleteBookById, getBookById, updateBookObject } = require("../services/book.service");

const getBookList = async (req, res) => {
  const books = await getAllBooks();
  res.render("bookList", { books: books });
};

const getBook = (req, res) => {
  res.render("addBooks");
};

const postBook = (req, res) => {
  const data = new bookModel({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/books");
    });
};

const deleteBook = async (req, res) => {
  const { id } = req.query;
  console.log("delete book", id);
  try {
    await deleteBookById(id);
  } catch (error) {
    console.error(error);
  } finally {
		res.redirect("/book-list");
  }
}

const updateBookForward = async (req, res) => {
  const { id } = req.query;
  console.log(id);
  book = null;
  try {
    book = await getBookById(id);
    console.log(book);
  } catch (error) {
    console.error(error);
  } finally {
    res.render("updateBooks", { book })
  }
}

const updateBook = async (req, res) => {
  const { id, name, author, genre } = req.body;
  try {
    await updateBookObject({ id, name, author, genre });
  } catch (error) {
    console.error(error);
  } finally {
		res.redirect("/book-list");
  }
}

module.exports = { getBookList, getBook, postBook, deleteBook, updateBookForward, updateBook };

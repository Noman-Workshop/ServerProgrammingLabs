const bookModel = require("./../models/books");

const getAllBooks = async () => {
    let data = [];
    let books = [];
    try {
        data = await bookModel.find();
        console.log(data);
        data.forEach((book) => {
            books.push({ id: book.id, name: book.name, author: book.author, genre: book.genre });
        });
    } catch (error) {
        console.error(error);
    } finally {
        return data;
    }
}

const getBookById = async (id) => {
    console.log("get book by id", id);
    let data = null;
    let book = null;
    try {
        book = await bookModel.findById(id);
        data = {
            id: book.id,
            name: book.name,
            author: book.author,
            genre: book.genre
        }
        console.log(data);
    } catch (error) {
        console.error(error);
    } finally {
        return data;
    }
}

const updateBookObject = async (book) => {
    try {
        await bookModel.updateOne(book);
    } catch (error) {
        console.error(error);
    }
}

const deleteBookById = async (id) => {
    try {
        await bookModel.deleteOne({
            id
        });
        console.log('Book deleted', id)
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getAllBooks, deleteBookById, getBookById, updateBookObject }
import Book from "../models/books.js";

//Get All Books
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message:"Server error", error});
    }
};

//Get Books By Id

export const getBookById = async (req, res) =>{
    try {
        const book = await Book.findById(req.params.id);
        if (!Book){
            return res.status(404).json({message:"Books Not Found"});
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({message:"Server error", error});
    }
};


//Create Book 

export const createBook = async (req, res) => {
    try {
        const {title, author, publishedYear, genre} = req.body();
        const newBook =new Book({title, author, publishedYear, genre});
        await newBook.save();
    } catch (error) {
        res.status(500).json({message:"Server error", error});
    }
};


//Update Book

export const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate (req.params.id, req.body, {new:true});
        if (!updatedBook) {
            return res.status(404).json({message:"Book Not Found"});
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({message:"Server error", error});
    }
};


//Delete Book

export const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook){
            return res.status(404).json({message:"Book Not Found"});
        }
        res.status(200).json({message:"Book Deleted Successfully"});
    } catch (error) {
        res.status(500).json({message:"Server error", error});
    }
};
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true,
    },

    author :{
        type : String,
        required : true,
    },

    PublishedYear :{
        type : Number,
        required : true,
    },

    gerne :{
        type : String,
        required : true,
    }
}, {timestamp: true}
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
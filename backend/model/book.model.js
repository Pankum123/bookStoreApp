import mongoose from "mongoose";

const bookStore = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String,
});
const Book = mongoose.model("Book", bookStore);

export default Book;

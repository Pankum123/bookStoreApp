import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"


import bookRoute from "./route/book.route.js";
import useRoute from "./route/user.route.js"


const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;

//connect to mongodb
const URI = process.env.MongoDBURI;
try {
  mongoose.connect(URI);
  console.log("connected to mongodb");
} catch (error) {
  console.log("Error: ", error);
}

//define routes
app.use("/book", bookRoute);
app.use("/user",useRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

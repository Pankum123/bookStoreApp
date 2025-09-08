import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"


import bookRoute from "./route/book.route.js";
import useRoute from "./route/user.route.js"


const app = express();
app.use(express.json());

const allowedOrigins = [
  "https://bookstoreapp-frontend-pankaj.onrender.com", // deployed frontend URL
  "http://localhost:5173"   // local frontend for testing
];
// app.use(cors());
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // Postman, curl requests
    if (!allowedOrigins.includes(origin)) {
      return callback(new Error("Not allowed by CORS"), false);
    }
    return callback(null, true);
  },
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));


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

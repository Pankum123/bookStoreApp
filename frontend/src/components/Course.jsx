import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/book`);
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16 min-h-screen dark:bg-slate-900 dark:text-white">
        {/* Header Section */}
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            Our courses feature a rich collection of books designed to inspire and guide readers of all ages. From exciting stories and creative art books to knowledge-packed guides on history, food, and music, every title adds something unique to your journey. Whether you’re looking for fun, learning, or inspiration, our hand-picked collection has something for everyone. Explore both free and premium books, carefully curated to make your reading experience more enjoyable. With us, learning becomes easy, fun, and full of discovery
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        {/* Books Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {book.map((item) => (
            <Cards key={item._id || item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;


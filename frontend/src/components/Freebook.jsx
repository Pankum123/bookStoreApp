import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//backend se data lene ke liye axios ka use karte hai
import axios from "axios";
import Cards from "./Cards";

const Freebook = () => {
  //backend se data lena -> start
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  //backend se data lena -> end

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sit
            molestias odit perferendis minima. Quaerat doloremque quasi
            perspiciatis voluptatum odit!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <div className="p-8">
                <div className="max-w-xm mx-auto">
                  <Cards item={item} key={item.id} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;

// Pankaj kumar

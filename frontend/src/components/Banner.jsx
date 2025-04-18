import React from "react";
import banner from "../../public/Banner.png"

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Welcome you all deep dive in the wonderfull journy of reading all types of Book
              find any book you want to read and begin a new enlightment era of your life 
              Thank you
            </p>
          <label className="input w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              </g>
            </svg>
            <input type="text" className="grow" placeholder="index.php" />
          </label>
          </div>
          <button className="btn mt-6 mr-200 btn-secondary">Secondary</button>
        </div>

        <div className=" order-1 w-full md:w-1/2 mt-32 ">
          <img src={banner} className="w-92 h-92 md:ml-30" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;

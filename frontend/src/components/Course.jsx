import React, { useEffect, useState } from 'react'
import Cards from "./Cards"

import {Link} from "react-router-dom"
//backend se data lene ke liye axios ka use karte hai
import axios from "axios"

function Course() {
  //frontend and backend ko jodna -> start
  const [book,setBook] = useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch(error){
        console.log(error);
      }
    }
    getBook();
  },[])
  //frontend and backend ko jodna -> end


  return (
   <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl pt-28'>
          We're delighted to have you{" "} 
          <span className='text-pink-500'>Here! :)</span>
        </h1>
        <p className='mt-12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eligendi debitis in architecto earum maxime facilis ajhg babxhug bbuxguy bxiudsu bbxhusbd bisbd perspiciatis unde, repudiandae sint eos eveniet aliquam odio dolore quaerat, fuga possimus? Doloremque corporis unde vero est consectetur quidem repudiandae soluta ullam laudantium quos.
        </p>
        <Link to="/">
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
        
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
          book.map((item)=>(
            <Cards key={item.id} item={item} />
          ))
        }
      </div>
    </div>
   </>
  )
}

export default Course

import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
 function Article() {
  const {id} = useParams();
  
  return (
    <div>
      <Navbar />
      <div className='text-5xl text-center mt-44'>{id}</div>
      <div>
        
      </div>
      <Footer />
    </div>
  )
}
export default Article
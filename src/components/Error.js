import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { HiRefresh } from "react-icons/hi";
const Error = () => {
    const reload = useNavigate()
    
  return (
    <div className="flex flex-col items-center justify-center h-96 space-y-5">
      <div className="flex items-center justify-center text-gray-300  space-x-5 lg:text-5xl text-2xl  ">
        <h1 aria-hidden="true">There's an error </h1>
        <HiOutlineEmojiSad />
      </div>
      <button onClick={()=>reload(0)} className="flex items-center space-x-3  bg-red-800 py-4 px-6 text-white rounded-full hover:bg-red-700 hover:transition-all duration-500 outline-none">
        <h1>Reload Page</h1>
        <HiRefresh />
      </button>
    </div>
  );
};

export default Error;

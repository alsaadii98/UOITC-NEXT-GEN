import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
const BackBtn = () => {
  const goBack = useNavigate();
  return (
    <button
      onClick={() => goBack(-1)}
      className="bg-red-800 p-3 rounded-full hover:bg-red-700 hover:transition-all duration-500 outline-none "
    >
      <HiArrowLeft className="h-6 w-6 text-white" />
    </button>
  );
};

export default BackBtn;

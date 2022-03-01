import React from "react";
import "../animtion.css";

export const ArticlePlaceHolder = () => {
  return (
    <article className="mt-20 flex flex-col items-center justify-center ">
      
      <div className="space-y-5 w-80 sm:w-[30rem] md:w-[40rem] lg:w-[60rem]">
        {/* Img */}
        <div className="shimmer flex items-center justify-center overflow-hidden ">
          <h2 className="text-lg w-[38rem] h-60 lg:w-[60rem] lg:max-h-[40rem] bg-gray-300 rounded-2xl "></h2>
        </div>
        <div className="md:ml-4 lg:ml-0">
          {/* The Date */}
          <div className="shimmer mb-5 flex items-center space-x-2">
            <h2 className="text-lg w-10 rounded-lg h-10 bg-gray-300 "></h2>
            <h2 className="text-lg w-36 rounded-lg h-5 bg-gray-300 "></h2>
          </div>
          {/* The Content */}
          <div className=" shimmer lg:w-[60rem] space-y-2">
            <h1 className=" mb-5 w-4/5 h-10 rounded-full bg-gray-300 text-2xl lg:text-3xl font-semibold "></h1>
            <h2 className="text-lg w-full rounded-lg h-4 bg-gray-300 "></h2>
            <h2 className="text-lg w-4/5 rounded-lg h-4 bg-gray-300 "></h2>
            <h2 className="text-lg w-3/5 rounded-lg h-4 bg-gray-300 "></h2>
            <h2 className="text-lg w-4/5 rounded-lg h-4 bg-gray-300 "></h2>
            <h2 className="text-lg w-3/5 rounded-lg h-4 bg-gray-300 "></h2>
            <h2 className="text-lg w-4/5 rounded-lg h-4 bg-gray-300 "></h2>
            <h2 className="text-lg w-3/5 rounded-lg h-4 bg-gray-300 "></h2>
            <h2 className="text-lg w-4/5 rounded-lg h-4 bg-gray-300 "></h2>
            <h2 className="text-lg w-3/5 rounded-lg h-4 bg-gray-300 "></h2>
            <h2 className="text-lg w-4/5 rounded-lg h-4 bg-gray-300 "></h2>
          </div>
        </div>
      </div>
    </article>
  );
};
export default ArticlePlaceHolder;

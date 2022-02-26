import React from "react";
import "../animtion.css";
const ArticlesPagePlaceHolder = () => {
  return (
    <div>
      {/* Card */}
      <div className="bg-white shadow-lg rounded-3xl overflow-hidden  w-80 h-[420px]">
        <div>
          {/* Img */}
          <div className="shimmer bg-gray-300  overflow-hidden">
            <h2 className="h-48 w-80 bg-gray-300"></h2>
          </div>
          {/* Text & Btn */}
          <div className=" mt-4 px-6 py-2 space-y-4">
            <div className="space-y-2 shimmer my-2 text-right">
              <h2 className="bg-gray-300 h-4 w-64 rounded-full"></h2>
              <h2 className="w-56 h-2 rounded-full bg-gray-300"></h2>
              <h2 className="w-52 h-2 rounded-full bg-gray-300"></h2>
              <h2 className="w-48 h-2 rounded-full bg-gray-300"></h2>
              <h2 className="w-40 h-2 rounded-full bg-gray-300"></h2>
            </div>

            {/* Btn */}

            <div className="shimmer rounded-full  flex  items-center justify-end  transform-all duration-500 ease-in-out ">
              <h2 className="h-4 w-28 rounded-full mt-10 bg-gray-300"></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticlesPagePlaceHolder;

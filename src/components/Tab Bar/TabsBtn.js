import React, { useState } from "react";
import "./Tabs.css";
import { Conference } from "./Conference";
import Seminars from "./Seminars";
import WorkShops from "./WorkShops";

const TabsBtn = (props) => {
  const [toggle, setToggle] = useState(1);

  return (
    <div className="flex mt-10 lg:mt-20 flex-col items-center justify-center space-y-10">
      {/* Tabs */}
      <div className="sticky border-2 border-gray-100 top-0 flex items-center justify-between justify-items-center shadow-lg shadow-gray-200  bg-white h-20  lg:w-[24rem] rounded-2xl">
        <button
          onClick={() => setToggle(1)}
          className={`focus:outline-none ${
            toggle === 1
              ? "text-sm sm:text-md border-r-2 border-gray-100 shadow-lg shadow-gray-200 text-red-800 h-full transition-all duration-500 ease-in-out rounded-l-2xl  w-28  sm:w-32 import active:outline-none focus:outline-none "
              : "text-sm sm:text-md w-28 sm:w-32"
          } `}
        >
          Conference
        </button>
        <button
          onClick={() => setToggle(2)}
          className={`focus:outline-none ${
            toggle === 2
              ? "text-sm sm:text-md border-r-2 border-l-2 border-gray-100 shadow-lg shadow-gray-200 text-red-800 h-full transition-all ease-in-out  duration-500  w-28 sm:w-32 import active:outline-none focus:outline-none "
              : "text-sm sm:text-md w-28 sm:w-28"
          } `}
        >
          Seminars
        </button>
        <button
          onClick={() => setToggle(3)}
          className={`focus:outline-none ${
            toggle === 3
              ? "text-sm sm:text-md border-l-2 border-gray-100 shadow-lg shadow-gray-200 text-red-800 h-full transition-all  ease-in-out rounded-r-2xl duration-500  w-28 sm:w-32 import active:outline-none focus:outline-none "
              : "text-sm sm:text-md w-28 sm:w-32"
          } `}
        >
          Workshops
        </button>
      </div>
      {/* content */}
      <div>
        {/* The Conference */}

        <div>
          <div
            className={`lg:w-[600px] mt-5 ${
              toggle === 1 ? "block" : "hidden"
            } transition-all duration-500 ease-in-out `}
          >
            <Conference />
          </div>
        </div>

        {/* The Seminars */}
        <div>
          <div
            className={`lg:w-96 ${
              toggle === 2
                ? "block"
                : "hidden transition-all duration-500 ease-in-out"
            }`}
          >
            <Seminars />
          </div>
        </div>
        {/* The Workshops */}
        <div>
          <div
            className={`lg:w-96 ${
              toggle === 3
                ? "block"
                : "hidden transition-all duration-500 ease-in-out"
            }`}
          >
            <WorkShops />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TabsBtn;

import React, { useState } from "react";
import "./Tabs.css";
import { Conference } from "./Conference";
import Seminars from "./Seminars";
import WorkShops from "./WorkShops";

const TabsBtn = (props) => {
  const [toggle, setToggle] = useState(1);
  const activeClass =
    "animate-pulse  bg-red-100 shadow-lg shadow-gray-200 text-red-800   h-full transition-all duration-500 ease-in-out rounded-2xl duration-500 w-36 import active:outline-none focus:outline-none ";
  return (
    <div className="flex mt-20 flex-col items-center justify-center space-y-10">
      {/* Tabs */}
      <div className="sticky  top-0 flex items-center justify-between justify-items-center shadow-lg shadow-gray-200  bg-white h-16 lg:w-[25rem] rounded-2xl">
        <button
          onClick={() => setToggle(1)}
          className={`w-32 focus:outline-none ${
            toggle === 1 ? activeClass : "w-28"
          } `}
        >
          Conference
        </button>
        <button
          onClick={() => setToggle(2)}
          className={`w-32 focus:outline-none ${
            toggle === 2 ? activeClass : "w-28"
          } `}
        >
          Seminars
        </button>
        <button
          onClick={() => setToggle(3)}
          className={`w-32 focus:outline-none ${
            toggle === 3 ? activeClass : "w-28"
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

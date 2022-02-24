import React from "react";
import { Link } from "react-router-dom";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
const ArticlesCard = (props) => {
  return (
    <div>
      {/* Card */}
      <div className=" bg-white shadow-lg rounded-3xl overflow-hidden  w-80 h-[420px]">
        {/* Img */}
        <div className="h-48 w-80 overflow-hidden">
          <img
            src={require(`../../assets/img/Img${props.index + 1}.jpg`)}
            alt=""
          />
        </div>
        {/* Text & Btn */}
        <div className="mt-4 px-6 py-2">
          <div className="my-2 text-right">
            <h2 className="text-gray-400 text-sm">{props.date}</h2>
          </div>
          <h1 className="text-left text-sm font-semibold">{props.title}</h1>
          <p className=" overflow-hidden text-left text-sm font-extralight">
            {props.text}
          </p>
          {/* Btn */}
          <Link to={`/articles/${props.id}`}>
            <div className="text-md text-right flex relative -bottom-5 right-0 items-center justify-end cursor-pointer text-blue-700 space-x-2 hover:scale-105	 hover:text-blue-500 transform-all duration-500 ease-in-out ">
              <button>Read More</button>
              <ArrowNarrowRightIcon className="w-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ArticlesCard;
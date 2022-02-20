import React from "react";
import { CalendarIcon } from "@heroicons/react/outline";
const ArticleCom = (props) => {
  return (
    <article className="mt-20 flex flex-col items-center justify-center ">
      <div className="space-y-5 w-80 sm:w-[30rem] md:w-[40rem] lg:w-[60rem]">
        {/* Img */}
        <div className="flex items-center justify-center">
          <img
            className="rounded-2xl shadow-lg lg:w-[60rem] max-h-[25rem]"
            src={require(`../../assets/img/Img${props.id}.jpg`)}
            alt=""
          />
        </div>
        <div className="md:ml-4 lg:ml-0">
          {/* The Date */}
          <div className="flex items-center space-x-2">
            <CalendarIcon className="bg-red-300 rounded-lg p-2 text-white w-10 h-10" />
            <h2 className="text-lg">{props.date}</h2>
          </div>
          {/* The Content */}
          <div className="lg:w-[60rem] space-y-2">
            <h1 className="text-red-800 text-2xl lg:text-3xl ">
              {props.title}
            </h1>
            <p className="text-gray-700 text-md lg:text-lg">{props.text}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
export default ArticleCom;

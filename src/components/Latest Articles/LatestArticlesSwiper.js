import React from "react";
import LatestArticles from "./LatestArticles";
import Dots from "../Dots";
export const LatestArticlesSwiper = () => {
  return (
    <div className=" relative">
      <div className="mt-20 sm:ml-24">
        {/* Latest Articles  */}
        <div className="ml-5 sm:ml-0">
          <h1 className="text-4xl md:text-5xl font-semibold text-red-800">
            Latest Articles
          </h1>
          <h5 className="text-xl text-gray-800 ">
            Our latest articles and news
          </h5>
        </div>
        <div>
          <LatestArticles />
        </div>
        
      </div>
      <Dots className="absolute bottom-5 " />
    </div>
  );
};

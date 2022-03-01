import React from "react";
import LatestArticles from "./LatestArticles";
import { Link } from "react-router-dom";

export const LatestArticlesSwiper = () => {
  return (
    <div>
      <div className="mt-20 mb-20 sm:ml-14">
        {/* Latest Articles  */}
        <div className="ml-5 lg:ml-0 flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 justify-between ">
          <div className="">
            {/* ml-5 sm:ml-0 */}
            <h1 className="text-4xl md:text-5xl font-semibold text-red-800">
              Latest Articles
            </h1>
            <h5 className="mt-2 text-xl text-main">
              Our latest articles and news
            </h5>
          </div>

          <Link
            to={"/articles"}
            className="text-main text-lg lg:text-xl underline lg:ml-5  lg:mr-14 hover:text-red-800 duration-500 transform ease-in-out cursor-pointer "
          >
            See More Articles
          </Link>
        </div>
        <div>
          <LatestArticles />
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import ArticlesCard from "./ArticlesCard";
import ArticlesPagePlaceHolder from "../SkeletonPlaceHolder/ArticlesPagePlaceHolder/ArticlesPagePlaceHolder";
import BackBtn from "../BackBtn";
const ArticlesCom = () => {
  const { dataIn, loading, error } = useAxios(
    "https://mohammedhilal.pythonanywhere.com/api/articles?page=1&category=uni"
  );
  const i = 12;
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0  justify-around lg:space-x-48 mt-10 lg:mt-20 mx-auto max-w-xs md:max-w-2xl lg:max-w-7xl xl:max-w-[110rem] ">
        {/* BackBtn */}
        <BackBtn />
        {/* Search bar */}
        <input
          className="w-full lg:w-2/5 h-16 bg-white rounded-full border border-gray-300 focus:border-red-800 focus:ring-2 focus:ring-red-400 text-base outline-none text-main py-1 px-3 leading-8 transition-colors duration-500 ease-in-out "
          type="text"
          placeholder="Search . . ."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {loading && (
        <div className=" mt-8 lg:mt-14 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[...Array(i)].map(() => {
              return (
                <div className="flex item-center">
                  <ArticlesPagePlaceHolder />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {error && <div>{error}</div>}
      {dataIn && (
        <div className=" mt-8 lg:mt-14 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {dataIn
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                  return item;
                }
              })
              .map((item, index) => {
                return (
                  <div  className="flex item-center" key={index}>
                    <ArticlesCard
                      title={
                        item.title.length > 50
                          ? `${item.title.substring(0, 50)} ...`
                          : item.title
                      }
                      text={
                        item.content.length > 80
                          ? `${item.content.substring(0, 80)} ...`
                          : item.text
                      }
                      date={item.published_at}
                      id={item.id}
                      image={item.photos[0]}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};
export default ArticlesCom;

{
  /* <div className=" mt-44 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {dataIn.map((item, index) => {
              return (
                <div className="flex item-center" key={index}>
                  <ArticlesCard
                    title={
                      item.title.length > 50
                        ? `${item.title.substring(0, 50)} ...`
                        : item.title
                    }
                    text={
                      item.content.length > 80
                        ? `${item.content.substring(0, 80)} ...`
                        : item.text
                    }
                    date={item.published_at}
                    id={item.id}
                    image={item.images[0]}
                  />
                </div>
              );
            })}
          </div>
        </div> */
}

// <ArticlesPagePlaceHolder/>

import React from "react";
import useAxios from "../../Hooks/useAxios";
import ArticlesCard from "./ArticlesCard";
import ArticlesPagePlaceHolder from "../SkeletonPlaceHolder/ArticlesPagePlaceHolder/ArticlesPagePlaceHolder";

const ArticlesCom = () => {
  const { dataIn, loading, error } = useAxios(
    "http://mohammedhilal.pythonanywhere.com/api/articles?page=1&category=uni"
  );
  const i = 12;
  return (
    <div>
      {loading && (
        <div className=" mt-44 flex items-center justify-center">
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
      {error && error}
      {dataIn && (
        <div className=" mt-44 flex items-center justify-center">
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

import React from "react";
import useAxios from "../../Hooks/useAxios";
import ArticlesCard from "./ArticlesCard";
const ArticlesCom = () => {
  const { dataIn } = useAxios("http://localhost:8000/articles");
  return (
    <div className=" mt-44 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {dataIn.map((item, index) => {
          return (
            <div className="flex item-center" key={index}>
              <ArticlesCard
                title={
                  item.title.length > 80
                    ? `${item.title.substring(0, 50)} ...`
                    : item.title
                }
                text={
                  item.text.length > 150
                    ? `${item.text.substring(0, 80)} ...`
                    : item.text
                }
                date={item.date}
                index={index}
                id={item.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ArticlesCom;

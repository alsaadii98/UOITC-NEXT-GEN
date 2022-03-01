import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import ArticleCom from "../components/Article page/ArticleCom";
import useAxios from "../Hooks/useAxios";
import ArticlePlaceHolder from "../components/SkeletonPlaceHolder/ArticlePlaceHolder/ArticlePlaceHolder";
import BackBtn from "../components/BackBtn";
function Article() {
  const { id } = useParams();
  const { dataIn, loading, error } = useAxios(
    "http://mohammedhilal.pythonanywhere.com/api/articles/" + id
  );
  return (
    <div className="relative mt-10 space-y-5">
      <div className="flex flex-col items-center justify-center">
        <div className="w-80 sm:w-[30rem] md:w-[40rem] lg:w-[60rem]">
          <BackBtn />
        </div>
      </div>

      {loading && <ArticlePlaceHolder />}
      {error && <div>{error}</div>}
      {dataIn && (
        <ArticleCom
          title={dataIn.title}
          text={dataIn.content}
          date={dataIn.published_at}
          image={dataIn.images && dataIn.images[0]}
        />
      )}
      {/* {dataIn && <ArticlePlaceHolder/>} */}
    </div>
  );
}
export default Article;
